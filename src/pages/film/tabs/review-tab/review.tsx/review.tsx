import { FilmReview } from '../../../../../types/types';

type FilmReviewProps = {
  reviews: FilmReview;
}

function Reviews({reviews}:FilmReviewProps):JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviews.reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{reviews.reviewAuthor}</cite>
          <time className="review__date">{reviews.reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviews.reviewRating}</div>
    </div>
  );
}

export default Reviews;
