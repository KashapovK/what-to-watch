import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import RequestSuspense from '../../components/request-suspense/request-suspense';
import { useFavouriteFilms } from '../../hooks/useFavoriteFilms';

export default function MyList() {
  const { favoriteFilms } = useFavouriteFilms();

  return (
    <RequestSuspense>
      <div className="user-page">
        <h1 className="page-title user-page__title">
            My list
          <span className="user-page__film-count">
            {favoriteFilms?.length}
          </span>
        </h1>
        <Header/>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieList prop={favoriteFilms}/>
        </section>
        <Footer/>
      </div>
    </RequestSuspense>
  );
}
