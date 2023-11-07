import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../routes';
import { FilmCard } from '../types';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  filmInfo: FilmCard;
}

const Card = ({filmInfo}: FilmCardProps) => {
  const [isHover, setIsHover] = useState(false);
  const [IsPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (isHover) {
      const timer = setTimeout(() => {
        setIsPlay(true);
      },1000);
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
        <VideoPlayer video={IsPlay ? 'https://youtu.be/h8NrKjJPAuw' : ''} posterImage={filmInfo.posterImage} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', filmInfo.id.toString())}>
          {filmInfo.name}
        </Link>
      </h3>
    </article>
  );
};

export default Card;
