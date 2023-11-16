import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import {FilmCard, Film} from "../../types/types";
import MovieList from "../../components/movie-list/movie-list";
import GenreList from "../../components/genre-list/genre-list";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setFilms } from "../../store/action";
import { useEffect } from "react";

type MainPageProps = {
    selectedFilm: Film;
    films: FilmCard[];
  }

export default function MainPage ({selectedFilm, films}: MainPageProps) {
        const filteredFilms: FilmCard [] = useAppSelector((state) =>
    state.filteredFilms);
        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch (setFilms(films));
        }, [dispatch, films]);

    return (
        <><section className="film-card">
            <div className="film-card__bg">
                <img src={selectedFilm.backgroundImage} alt={selectedFilm.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="film-card__wrap">
                <div className="film-card__info">
                    <div className="film-card__poster">
                        <img src={selectedFilm.posterImage} alt={selectedFilm.name} width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <h2 className="film-card__title">{selectedFilm.name}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{selectedFilm.genre}</span>
                            <span className="film-card__year">{selectedFilm.releaseDate}</span>
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

                    <GenreList/>

                    <MovieList filmCard={filteredFilms}/>

                    <div className="catalog__more">
                        <button className="catalog__button" type="button">Show more</button>
                    </div>
                </section>

            <Footer/>
            
        </div></>
    )
}
