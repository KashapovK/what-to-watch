import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import GenreList from './genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import ShowMoreFilms from './show-more-button/show-more-button';
import { loadPromoFilm } from '../../store/api-actions';
import RequestSuspense from '../../components/request-suspense/request-suspense';
import FilmControls from '../../components/film-controls/film-controls';
import { useFavouriteFilms } from '../../hooks/useFavoriteFilms';

export default function MainPage () {
  const { favoriteFilms } = useFavouriteFilms();
  const { filmListSize, selectedFilm } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch (loadPromoFilm());
  }, [dispatch]);

  return (
    <RequestSuspense>
      <>
        {selectedFilm && (
          <section className="film-card">
            <div className="film-card__bg">
              <img src={selectedFilm.backgroundImage} alt={selectedFilm.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="film-card__wrap">
              <div className="film-card__info">
                <div className="film-card__poster">
                  <img src={selectedFilm.posterImage} alt={`${selectedFilm.name} poster`} width="218" height="327" />
                </div>

                <div className="film-card__desc">
                  <h2 className="film-card__title">{selectedFilm.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{selectedFilm.genre}</span>
                    <span className="film-card__year">{selectedFilm.released}</span>
                  </p>

                  <FilmControls>
                    <FilmControls.PlayLink id={selectedFilm.id} />
                    <FilmControls.MyListButton listLength={favoriteFilms?.length} />
                  </FilmControls>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenreList/>
            <MovieList prop={filmListSize}/>
            <ShowMoreFilms />
          </section>
          <Footer/>
        </div>
      </>
    </RequestSuspense>
  );
}
