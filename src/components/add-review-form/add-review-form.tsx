import RatingForm from '../rating-form/rating-form';
import {ChangeEventHandler, useState} from 'react';

function AddReviewForm():JSX.Element {
  const [reviewText, setReviewText] = useState<string>();
  const [,setRating] = useState(10);

  const handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (rating:number) => {
    setRating(rating);
  };

  return (

    <form action="#" className="add-review__form">
      <RatingForm onChange={handleRatingChange}/>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleTextareaChange}
        >
          {reviewText}
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
