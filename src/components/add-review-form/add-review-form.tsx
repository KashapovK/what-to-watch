import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { REVIEW_FIELDS } from '../../const/review';
import { useAppDispatch } from '../../hooks';
import { addReview } from '../../store/api-actions';
import { FilmReviewFormValues } from '../../types/types';
import {FormEvent, useState} from 'react';
import React from 'react';

const RATING_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1).reverse();
const INITIAL_FORM_STATE: FilmReviewFormValues = {
  rating: 0,
  comment: '',
};

export default function AddReviewForm() {
  const [formValues, setFormValues] = useState<FilmReviewFormValues>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id = '' } = useParams();

  function handleFormChange(updatedValues: Partial<FilmReviewFormValues>) {
    setFormValues((values) => ({ ...values, ...updatedValues }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    dispatch(addReview({ ...formValues, filmId: id })).unwrap()
      .then(() => navigate(AppRoute.Film.replace(':id', id)))
      .finally(() => setIsSubmitting(false));
  }

  const isValid =
    formValues.comment.length >= REVIEW_FIELDS.COMMENT_MIN_LENGTH &&
    formValues.comment.length <= REVIEW_FIELDS.COMMENT_MAX_LENGTH &&
    formValues.rating;

  return (
    <form onSubmit={handleSubmit} className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RATING_OPTIONS.map((value) => (
            <React.Fragment key={value}>
              <input
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                onClick={() => handleFormChange({ rating: value })}
                disabled={isSubmitting}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isSubmitting}
          onChange={(event) => handleFormChange({ comment: event.target.value })}
        />
        <div className="add-review__submit"></div>
        <button className="add-review__btn" type="submit" disabled={isSubmitting || !isValid}>Post</button>
      </div>
    </form>
  );
}
