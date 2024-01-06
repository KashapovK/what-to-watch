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

export default function FilmTabs({ reviews, ...filmData }: FilmTabProps) {
  const [selectedTab, setSelectedTab] = useState<EFilmPageTabs>(EFilmPageTabs.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(EFilmPageTabs).map((tab) => (
            <li
              key={tab}
              className={classNames('film-nav__item', tab === selectedTab && 'film-nav__item--active')}
              onClick={() => setSelectedTab(tab)}
            >
              <span className="film-nav__link">{tab}</span>
            </li>
          ))}
        </ul>
      </nav>
      {selectedTab === EFilmPageTabs.Overview && <OverviewTab {...filmData} />}
      {selectedTab === EFilmPageTabs.Details && <DetailsTab {...filmData} />}
      {selectedTab === EFilmPageTabs.Reviews && <ReviewTab reviews={reviews} />}
    </div>
  );
}
