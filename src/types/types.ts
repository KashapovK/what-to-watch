export interface FilmCard {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
  }

export interface Film extends Omit<FilmCard, 'previewImage' | 'previewVideoLink'> {
    posterImage: string;
    backgroundImage: string;
    backgroundColor?: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: string[];
    runTime: number;
    released: number;
    isFavorite: boolean;
}

export type AuthData = {
    login: string;
    password: string;
};

export type UserCredentials = {
    email: string;
    password: string;
};

export type UserData = {
    name: string;
    avatarUrl: string;
    email: string;
    token: string;
};

export type RequestError = {
    code?: string;
    message?: string;
    name?: string;
};
