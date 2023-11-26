import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import MovieList from "../../components/movie-list/movie-list";
import GenreList from "../../components/genre-list/genre-list";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import ShowMoreFilms from "../../components/show-more-films/show-more-films";
import { loadPromoFilm } from "../../store/api-actions";
import RequestSuspense from "../../components/request-suspense/request-suspense";

export default function MainPage () {
        const {filmListSize, promoFilm} = useAppSelector((state) => state.film);
        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch (loadPromoFilm());
        }, [dispatch]);

    return (
        <RequestSuspense>
        <>
        {promoFilm && (
        <section className="film-card">
            <div className="film-card__bg">
                <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="film-card__wrap">
                <div className="film-card__info">
                    <div className="film-card__poster">
                        <img src={promoFilm.posterImage} alt={`$promoFilm.name} poster`} width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <h2 className="film-card__title">{promoFilm.name}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{promoFilm.genre}</span>
                            <span className="film-card__year">{promoFilm.released}</span>
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
        )}
        
        <div className="page-content">
                <section className="catalog">
                    <h2 className="catalog__title visually-hidden">Catalog</h2>
                    <GenreList/>
                    <MovieList prop={filmListSize}/>
                    <ShowMoreFilms />
                </section>
            <Footer/>
        </div></>
        </RequestSuspense>
    )
}
