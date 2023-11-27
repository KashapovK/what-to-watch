import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '.';
import { AuthorizationStatus } from '../const/const';
import { loadFavouriteFilms } from '../store/api-actions';

export function useFavouriteFilms() {
  const { favouriteFilms } = useAppSelector((state) => state.film);
  const { authorizationStatus } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Authorized) {
      dispatch(loadFavouriteFilms());
    }
  }, [dispatch, authorizationStatus]);

  return { favouriteFilms };
}
