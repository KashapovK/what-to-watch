import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import {FilmCard, Film} from "../../components/types";
import MovieList from "../../components/movie-list/movie-list";

type MainPageProps = {
    filmProps: Film ;
    filmList: FilmCard[];
  }

function MainPage ({filmList, filmProps}: MainPageProps): JSX.Element {
    return (
        <><section className="film-card">
            <div className="film-card__bg">
                <img src={filmProps.backgroundImage} alt={filmProps.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="film-card__wrap">
                <div className="film-card__info">
                    <div className="film-card__poster">
                        <img src={filmProps.posterImage} alt={filmProps.name} width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <h2 className="film-card__title">{filmProps.name}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{filmProps.genre}</span>
                            <span className="film-card__year">{filmProps.releaseDate}</span>
                        </p>

                        <div className="film-card__buttons">
                            <button className="btn btn--play film-card__button" type="button">
                                <svg viewBox="0 0 19 19" width="19" height="19">
                                    <use xlink: href="#play-s"></use>
                                </svg>
                                <span>Play</span>
                            </button>
                            <button className="btn btn--list film-card__button" type="button">
                                <svg viewBox="0 0 19 20" width="19" height="20">
                                    <use xlink: href="#add"></use>
                                </svg>
                                <span>My list</span>
                                <span className="film-card__count">9</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="page-content">
                <section className="catalog">
                    <h2 className="catalog__title visually-hidden">Catalog</h2>

                    <ul className="catalog__genres-list">
                        <li className="catalog__genres-item catalog__genres-item--active">
                            <a href="#" className="catalog__genres-link">All genres</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Comedies</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Crime</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Documentary</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Dramas</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Horror</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Kids & Family</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Romance</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Sci-Fi</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Thrillers</a>
                        </li>
                    </ul>

                    <MovieList filmList={filmList}/>

                    <div className="catalog__more">
                        <button className="catalog__button" type="button">Show more</button>
                    </div>
                </section>

            <Footer/>
            
        </div></>
    )
}

export default MainPage;
