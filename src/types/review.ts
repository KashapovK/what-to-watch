export interface ReviewValues {
    comment: string;
    rating: number;
  }

export interface ReviewFormValues extends Omit<ReviewValues, 'comment'> {
    'review-text': string;
  }

export interface FilmReview extends ReviewValues {
    id: string;
    date: string;
    user: string;
  }

export enum ReviewFormLimitations {
    CommentMinLength = 50,
    CommentMaxLength = 400,
    MinRating = 1,
    MaxRating = 10,
  }

export const RATING_OPTIONS_COUNT = 10;
