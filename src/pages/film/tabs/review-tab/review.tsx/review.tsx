import { FilmReview } from '../../../../../components/types';

type FilmReviewProps = {
  filmReview: FilmReview;
}

function Reviews({filmReview}:FilmReviewProps):JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{filmReview.reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{filmReview.reviewAuthor}</cite>
          <time className="review__date">{filmReview.reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{filmReview.reviewRating}</div>
    </div>
  );
}

export default Reviews;
