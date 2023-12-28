import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '.';
import { AuthorizationStatus } from '../const/const';
import { loadFavoriteFilms } from '../store/api-actions';

export function useFavoriteFilms() {
  const { favoriteFilms } = useAppSelector((state) => state.film);
  const { authorizationStatus } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Authorized) {
      dispatch(loadFavoriteFilms());
    }
  }, [dispatch, authorizationStatus]);

  return { favoriteFilms };
}
