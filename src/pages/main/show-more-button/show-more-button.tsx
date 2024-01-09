import { useAppDispatch, useAppSelector } from '../../../hooks';
import { showMoreFilms } from '../../../store/film';

export default function ShowMoreFilms() {
  const { filteredFilms, filmListMaxLength: currentLength } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  if (currentLength >= filteredFilms.length) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(showMoreFilms())}>
        Show more
      </button>
    </div>
  );
}
