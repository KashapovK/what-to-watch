import { useState } from 'react';
import classNames from 'classnames';
import { Film} from '../../../types/types';
import OverviewTab from './overview-tab/overview-tab';
import ReviewTab from './review-tab/review-tab';
import DetailsTab from './details-tab/details-tab';
import { EFilmPageTabs } from '../../../const/const';
import { FilmReview } from '../../../types/review';

type FilmTabProps = Film & {
    reviews: FilmReview [];
}

export default function Tab ({reviews, ...film}:FilmTabProps) {
  const [activeTab, setActiveTab] = useState<EFilmPageTabs>(EFilmPageTabs.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(EFilmPageTabs).map((tab) => (
            <li
              key={tab}
              className={classNames ('film-nav__item', tab === activeTab && 'film-nav__item film-nav__item--active')}
              onClick={() => setActiveTab(tab)}
            >
              <span className="film-nav__link">{tab}</span>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === EFilmPageTabs.Overview && <OverviewTab {...film} />}
      {activeTab === EFilmPageTabs.Details && <DetailsTab {...film} />}
      {activeTab === EFilmPageTabs.Reviews && <ReviewTab reviews={reviews} />}
    </div>
  );
}
