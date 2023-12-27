import Breadcrumbs from '../../components/header/breadcrumbs/breadcrumbs';
import AddReviewForm from './add-review-form/add-review-form';
import { useSelectedFilm } from '../../hooks/useSelectedFilm';
import RequestSuspense from '../../components/request-suspense/request-suspense';

export default function AddReview() {
  const { selectedFilm } = useSelectedFilm({});

  return (
    <RequestSuspense>
      <section className="film-card film-card--full">
        {selectedFilm && (
          <>
            <div className="film-card__header">
              <div className="film-card__bg">
                <img src={selectedFilm.posterImage} alt={selectedFilm.name} />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <header className="page-header">
                <div className="logo">
                  <a href="main.html" className="logo__link">
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                  </a>
                </div>

                <Breadcrumbs name={selectedFilm.name} id={selectedFilm.id} />

                <ul className="user-block">
                  <li className="user-block__item">
                    <div className="user-block__avatar">
                      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                    </div>
                  </li>
                  <li className="user-block__item">
                    <a className="user-block__link">Sign out</a>
                  </li>
                </ul>
              </header>

              <div className="film-card__poster film-card__poster--small">
                <img src={selectedFilm.posterImage} alt={`${selectedFilm.name} poster`} width="218" height="327" />
              </div>
            </div>

            <div className="add-review">
              <AddReviewForm />
            </div>
          </>
        )}
      </section>
    </RequestSuspense>
  );
}
