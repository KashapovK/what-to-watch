export type FilmCard = {
    id: string;
    name: string;
    posterImage: string;
    releaseDate?: number;
    genre?: string;
};

export type Film = FilmCard & {
    releaseDate: number;
    genre: string;
    director: string;
    starring: string;
    runTime: string;
    video: string;
    isFavourite: boolean;
    description: string;
    rating: number;
    scoresCount: number;
    backgroundImage: string;
};

export type FilmReview = {
    id: string;
    reviewText:string;
    reviewRating:number;
    reviewAuthor:string;
    reviewDate:string;
};
