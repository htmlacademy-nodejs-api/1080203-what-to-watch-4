import { Film } from '../../types/film.type';

export function createFilm(filmData: string): Film {

  const [
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
  ] = filmData.replace('\n', '').split('\t');


  return {
    name,
    description,
    postDate,
    genre,
    release,
    rating: +rating,
    previewVideo,
    video,
    actors: JSON.parse(actors),
    director,
    duration: +duration,
    commentsCount: +commentsCount,
    user: JSON.parse(user),
    poster,
    background,
    backgroundColor
  } as Film;
}
