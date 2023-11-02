import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../routes';
import { Film } from '../types';

type FilmCardProps = {
  filmCardProps: Film;
}

const Card = ({filmCardProps}: FilmCardProps) => {
  const [isHover, setIsHover] = useState(false);
  const [, setIsPlay] = useState(false);

  useEffect(() => {
    if (isHover) {
      const timer = setTimeout(() => {
        setIsPlay(true);
      },500);
      return () => clearTimeout(timer);
    }
  }, [isHover]);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover (false);
    setIsPlay (false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="small-film-card__image">
        <img src={filmCardProps.posterImage} alt={filmCardProps.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', filmCardProps.id.toString())}>
          {filmCardProps.name}
        </Link>
      </h3>
    </article>
  );
};

export default Card;
