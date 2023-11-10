import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { AppRoute } from "../../components/routes";
import { Film } from "../../components/types";
import MovieList from "../../components/movie-list/movie-list";
import Tab from "./tabs/tabs";
import MoreLikeThis from "../../components/more-like-this/more-like-this";

type FilmProps = {
    filmProps: Film,  
} 

function Film({filmProps}: FilmProps): JSX.Element {
    return (
        <><section className="film-card film-card--full">
            <div className="film-card__hero">
                <div className="film-card__bg">
                    <img src={filmProps.posterImage} alt={filmProps.name} />
                </div>

                <h1 className="visually-hidden">WTW</h1>
                <Header/>
                <div className="film-card__wrap">
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
                            <Link to={AppRoute.AddReview} className="btn film-card__button"></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Tab reviews={reviews} {...film}/>
        </section>

        <div className="page-content">
                <section className="catalog catalog--like-this">
                    <h2 className="catalog__title">More like this</h2>
                    <MoreLikeThis filmCard={filmProps} />
                </section>
                <Footer/>
            </div></>
    )
}

export default Film;
