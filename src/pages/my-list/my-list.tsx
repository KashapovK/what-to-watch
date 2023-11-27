import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import { FilmCard } from '../../types/types';

type MovieListProps = {
  prop: FilmCard [];
}
export default function MyList({prop}:MovieListProps) {
  return (
    <div className="user-page">

      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList prop={prop}/>

      </section>

      <Footer/>

    </div>
  );
}
