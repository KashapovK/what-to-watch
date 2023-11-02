import { Link } from 'react-router-dom';
import { AppRoute } from '../routes';
import { FilmCard } from '../types';

type BreadcrumbsProps = {
  filmProps: FilmCard;
}

function Breadcrumbs({filmProps}:BreadcrumbsProps):JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={AppRoute.Film}
            className="breadcrumbs__link"
          >{filmProps.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
