import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';

export default function MyList() {
  return (
    <div className="user-page">

      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList prop={filmCard}/>

      </section>

      <Footer/>

    </div>
  );
}
