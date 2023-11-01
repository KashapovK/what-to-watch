import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { FilmCard, FilmReview } from "../../components/types"
import MovieList from "../../components/movie-list/movie-list"
import Review from "../../components/review.tsx/review"

type MoviePageReviewProps = {
    filmReview: FilmReview[],
    filmInfo: FilmCard,
    filmList: FilmCard[],
    filmProps: FilmCard[],
}

function MoviePageReview({filmReview,filmInfo,filmList, filmProps}:MoviePageReviewProps):JSX.Element {
    return (
    <><section className="film-card film-card--full">
            <div className="film-card__hero">
                <div className="film-card__bg">
                    <img src={filmInfo.posterImage} alt={filmInfo.name} />
                </div>

                <h1 className="visually-hidden">WTW</h1>

                <Header/>

                <div className="film-card__wrap">
                    <div className="film-card__desc">
                        <h2 className="film-card__title">{filmInfo.name}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{filmInfo.genre}</span>
                            <span className="film-card__year">{filmInfo.releaseDate}</span>
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
                            <a href="add-review.html" className="btn film-card__button">Add review</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="film-card__wrap film-card__translate-top">
                <div className="film-card__info">
                    <div className="film-card__poster film-card__poster--big">
                        <img src={filmInfo.posterImage} alt={filmInfo.name} width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <nav className="film-nav film-card__nav">
                            <ul className="film-nav__list">
                                <li className="film-nav__item">
                                    <a href="#" className="film-nav__link">Overview</a>
                                </li>
                                <li className="film-nav__item">
                                    <a href="#" className="film-nav__link">Details</a>
                                </li>
                                <li className="film-nav__item film-nav__item--active">
                                    <a href="#" className="film-nav__link">Reviews</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="film-card__reviews film-card__row">
                        {filmReview.map(({...filmReview}) => (
                                <Review
                                key={id}
                                reviewText={reviewText}
                                reviewRating={reviewRating}
                                reviewAuthor={reviewAuthor}
                                reviewDate={reviewDate}/>
                            ))}
                            <div className="film-card__reviews-col">
                                {filmReview.map(({id,reviewText,reviewRating,reviewAuthor,reviewDate}) => (
                                    <Review
                                    key={id}
                                    reviewText={reviewText}
                                    reviewRating={reviewRating}
                                    reviewAuthor={reviewAuthor}
                                    reviewDate={reviewDate}/>
                                ))}
                            </div>
                            <div className="film-card__reviews-col">
                            {filmReview.map(({id,reviewText,reviewRating,reviewAuthor,reviewDate}) => (
                                    <Review
                                    key={id}
                                    reviewText={reviewText}
                                    reviewRating={reviewRating}
                                    reviewAuthor={reviewAuthor}
                                    reviewDate={reviewDate}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><div className="page-content">
                    <section className="catalog catalog--like-this">
                    <h2 className="catalog__title">More like this</h2>

                    <MovieList filmCardProps={filmList} filmProps={filmProps}/>
                    
                    <div/>
                </section>

                <Footer />
            </div></>
    )
};

export default MoviePageReview;
