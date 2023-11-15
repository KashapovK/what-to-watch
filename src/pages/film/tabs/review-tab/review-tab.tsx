import { FilmReview } from '../../../../types/types';
import Reviews from './review.tsx/review';

type ReviewTabProps = {
    reviews: FilmReview [];
}

export default function ReviewTab({ reviews }: ReviewTabProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((value) => (
          <Reviews key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
}
