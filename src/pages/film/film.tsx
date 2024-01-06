import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Tab from './tabs/tabs';
import RequestSuspense from '../../components/request-suspense/request-suspense';
import { useSelectedFilm } from '../../hooks/use-selected-film';
import FilmControls from '../../components/film-controls/film-controls';
import MovieList from '../../components/movie-list/movie-list';
import { useFavoriteFilms } from '../../hooks/use-favorite-films';

export default function Film() {
  const { selectedFilm, suggestion, reviews } = useSelectedFilm({
    shouldLoadReviews: true,
    shouldLoadSuggestions: true
  });
  const { favoriteFilms } = useFavoriteFilms();

  return (
    <RequestSuspense>
      <>
        {selectedFilm && (
          <section className="film-card film-card--full" style={{ backgroundColor: selectedFilm.backgroundColor }}>
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img src={selectedFilm.backgroundImage} alt={selectedFilm.name} />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <Header className="film-card__head">
                <Header.Logo />
                <Header.UserBlock />
              </Header>

              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{selectedFilm.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{selectedFilm.genre}</span>
                    <span className="film-card__year">{selectedFilm.released}</span>
                  </p>

                  <FilmControls>
                    <FilmControls.PlayLink id={selectedFilm.id} />
                    <FilmControls.MyListButton listLength={favoriteFilms?.length} />
                    <FilmControls.AddReviewLink id={selectedFilm.id} />
                  </FilmControls>
                </div>
              </div>
            </div>

            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img
                    src={selectedFilm.posterImage}
                    alt={`${selectedFilm.name} poster`}
                    width="218"
                    height="327"
                  />
                </div>
                <Tab reviews={reviews} {...selectedFilm}/>
              </div>
            </div>
          </section>
        )}

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList prop={suggestion} />
          </section>
          <Footer />
        </div>
      </>
    </RequestSuspense>
  );
}
