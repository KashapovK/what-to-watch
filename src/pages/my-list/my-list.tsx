import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import RequestSuspense from '../../components/request-suspense/request-suspense';
import { useFavoriteFilms } from '../../hooks/use-favorite-films';

export default function MyList() {
  const { favoriteFilms } = useFavoriteFilms();

  return (
    <RequestSuspense>
      <div className="user-page">
        <Header className="user-page__head">
          <Header.Logo />
          <h1 className="page-title user-page__title">
            My list
            <span className="user-page__film-count">
              {favoriteFilms?.length}
            </span>
          </h1>
          <Header.UserBlock />
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieList prop={favoriteFilms} />
        </section>
        <Footer />
      </div>
    </RequestSuspense>
  );
}
