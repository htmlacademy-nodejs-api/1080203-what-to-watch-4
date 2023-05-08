import { User } from './user.type';

export type Film = {
  name: string;
  description: string;
  postDate: string;
  genre: string;
  release: string;
  rating: number;
  previewVideo: string;
  video: string;
  actors: string[];
  director: string;
  duration: number;
  commentsCount: number;
  user: User;
  poster: string;
  background: string;
  backgroundColor: string;
};
