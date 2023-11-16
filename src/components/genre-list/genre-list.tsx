import { useAppDispatch, useAppSelector } from '../../hooks';
import classNames from 'classnames';
import { setSelectedGenre } from '../../store/action';
import { useEffect } from 'react';
import { ALL_GENRES } from '../../const/const';

export default function GenreList() {
  const {genres, selectedGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedGenre(ALL_GENRES));
  }, [dispatch]);

  return(
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={classNames('catalog__genres-item', genre === selectedGenre && 'catalog__genres-item catalog__genres-item--active')}
          onClick={() => dispatch (setSelectedGenre(genre))}
        >
          <span className="catalog__genres-link">{genre}</span>
        </li>
      ))}
    </ul>
  );
}
