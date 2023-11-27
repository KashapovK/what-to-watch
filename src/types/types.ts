export type FilmCard = {
    id: string;
    name: string;
    previewImage?: string;
    previewVideoLink?: string;
    genre: string;
};

export type Film = FilmCard & {
    posterImage: string;
    backgroundImage: string;
    backgroundColor?: string;
    videoLink: string;
    description?: string;
    rating: number;
    scoresCount?: number;
    director?: string;
    starring?: [string];
    runTime?: number;
    released: number;
    isFavorite: boolean;
};

export type FilmReview = FilmReviewFormValues & {
    id: string;
    date: string;
    user: string;
};

export type FilmReviewFormValues = {
    comment: string;
    rating: number;
};


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
