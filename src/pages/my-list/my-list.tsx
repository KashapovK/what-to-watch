import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { FilmCard } from '../../components/types';
import MovieList from '../../components/movie-list/movie-list';

type MyListProps = FilmCard & {
  filmProps: FilmCard[];
}

function MyList({filmProps}:MyListProps): JSX.Element {
  return (
    <div className="user-page">

      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList filmProps={filmProps}/>

      </section>

      <Footer/>

    </div>
  );
}

export default MyList;
