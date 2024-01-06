import { FilmReview } from '../../../../types/review';
import ReviewBlock from './review-block.tsx/review-block';

interface ReviewTabProps {
  reviews: FilmReview[];
}

export default function ReviewTab({ reviews }: ReviewTabProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((value) => (
          <ReviewBlock key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
}
