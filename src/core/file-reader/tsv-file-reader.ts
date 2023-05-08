import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Film } from '../../types/film.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Film[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([
        name,
        description,
        postDate,
        genre,
        release,
        rating,
        previewVideo,
        video,
        actors,
        director,
        duration,
        commentsCount,
        user,
        poster,
        background,
        backgroundColor
      ]) => ({
        name,
        description,
        postDate,
        genre,
        release,
        rating: +rating,
        previewVideo,
        video,
        actors: actors.split(';'),
        director,
        duration: +duration,
        commentsCount: +commentsCount,
        user,
        poster,
        background,
        backgroundColor
      }));
  }
}
