import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { FilmCard } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

const Card = ({id, name, previewImage, previewVideoLink}: FilmCard) => {
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
        <VideoPlayer video={IsPlay ? previewVideoLink : ''} posterImage={previewImage} muted autoPlay/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', id.toString())}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

export default Card;
