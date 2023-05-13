import { FilmGeneratorInterface } from './film-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { getRandomItem } from '../../core/helpers/index.js';

// todo Удалить dayjs, если не нужен
export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = getRandomItem<string>(this.mockData.postDates);
    const genre = getRandomItem<string>(this.mockData.genres);
    const release = getRandomItem<string>(this.mockData.releases);
    const rating = getRandomItem<number>(this.mockData.ratings);
    const previewVideo = getRandomItem<string>(this.mockData.previewVideos);
    const video = getRandomItem<string>(this.mockData.videos);
    const actors = JSON.stringify(getRandomItem<string[]>(this.mockData.actors));
    const director = getRandomItem<string>(this.mockData.directors);
    const duration = getRandomItem<number>(this.mockData.durations);
    const commentsCount = getRandomItem<number>(this.mockData.commentsCounts);
    const user = JSON.stringify({
      name: getRandomItem<string>(this.mockData.userNames),
      email: getRandomItem<string>(this.mockData.userEmails),
      avatar: getRandomItem<string>(this.mockData.userAvatars),
      password: getRandomItem<string>(this.mockData.userPasswords)
    });
    const poster = getRandomItem<string>(this.mockData.posters);
    const background = getRandomItem<string>(this.mockData.backgrounds);
    const backgroundColor = getRandomItem<string>(this.mockData.backgroundColors);

    return [
      name, description, postDate, genre, release, rating, previewVideo, video,
      actors, director, duration, commentsCount, user, poster, background, backgroundColor
    ].join('\t');
  }
}
