import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './index.ts';
import { useEffect } from 'react';
import { loadFilmDetails, loadSuggestions, loadReviews } from '../store/api-actions.ts';
import { RequestError } from '../types/types.ts';

type UseSelectedFilmParams = {
  shouldLoadSuggestions?: boolean;
  shouldLoadReviews?: boolean;
}

const NOT_FOUND_URL = '/content-not-found';
const NOT_FOUND_MESSAGE = 'Request failed with status code 404';

export function useSelectedFilm({ shouldLoadSuggestions = false, shouldLoadReviews = false }: UseSelectedFilmParams) {
  const { id = '' } = useParams();
  const { selectedFilm, suggestion } = useAppSelector((state) => state.film);
  const { reviews } = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadFilmDetails(id))
      .unwrap()
      .catch((error: RequestError) => {
        if (error?.message === NOT_FOUND_MESSAGE) {
          navigate(NOT_FOUND_URL);
        }
      });
  }, [dispatch, id, navigate]);

  useEffect(() => {
    if (shouldLoadSuggestions) {
      dispatch(loadSuggestions(id));
    }
  }, [dispatch, id, shouldLoadSuggestions]);

  useEffect(() => {
    if (shouldLoadReviews) {
      dispatch(loadReviews(id));
    }
  }, [dispatch, id, shouldLoadReviews]);

  return { selectedFilm, suggestion, reviews };
}
