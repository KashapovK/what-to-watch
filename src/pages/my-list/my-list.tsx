import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { FilmCard } from '../../types/types';
import MovieList from '../../components/movie-list/movie-list';

type MyListProps = FilmCard & {
  filmCard: FilmCard[];
}

function MyList({filmCard}:MyListProps): JSX.Element {
  return (
    <div className="user-page">

      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList filmCard={filmCard}/>

      </section>

      <Footer/>

    </div>
  );
}

export default MyList;
