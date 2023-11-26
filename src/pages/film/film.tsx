import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { AppRoute } from "../../const/const";
import Tab from "./tabs/tabs";
import MoreLikeThis from "../../components/more-like-this/more-like-this";
import RequestSuspense from "../../components/request-suspense/request-suspense";
import { useSelectedFilm } from "../../hooks/useSelectedFilm";

export default function Film() {
    const { selectedFilm, suggestion, reviews } = useSelectedFilm({
        shouldLoadReviews: true,
        shouldLoadSuggestions: true
      });

    return (
        <RequestSuspense>
        <>
        {selectedFilm && (
        <section className="film-card film-card--full" 
        style={{backgroundColor: selectedFilm.backgroundColor}}>
            <div className="film-card__hero">
                <div className="film-card__bg">
                    <img src={selectedFilm.backgroundImage} alt={selectedFilm.name} />
                </div>

                <h1 className="visually-hidden">WTW</h1>
                <Header/>
                <div className="film-card__wrap">
                    <div className="film-card__desc">
                        <h2 className="film-card__title">{selectedFilm.name}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{selectedFilm.genre}</span>
                            <span className="film-card__year">{selectedFilm.released}</span>
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
                    <div className="film-card__wrap film-card__translate-top">
                        <div className="film-card__info">
                            <div className="film-card__poster film-card__poster--big">
                  <img
                    src={selectedFilm.posterImage}
                    alt={`${selectedFilm.name} poster`}
                    width="218"
                    height="327"
                  />
                </div>
                    <Tab reviews={reviews} {...selectedFilm}/>
                </div>
            </div>
        </section>
        )}

        <div className="page-content">
                <section className="catalog catalog--like-this">
                    <h2 className="catalog__title">More like this</h2>
                    <MoreLikeThis prop={suggestion} />
                </section>
                <Footer/>
            </div></>
        </RequestSuspense>
    )
}
