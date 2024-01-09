import { useNavigate } from 'react-router-dom';
import VideoPlayer from '../video-player';
import { useEffect, useRef, useState } from 'react';
import { AppRoute } from '../../const/const.ts';
import { FilmCard } from '../../types/types.ts';
import { FILM_PREVIEW_DELAY } from '../../const/film.ts';

export default function Card({ id, name, previewImage, previewVideoLink }: FilmCard) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  function clearPlayerTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function handleMouseOver() {
    clearPlayerTimeout();
    timeoutRef.current = setTimeout(() => setIsHovering(true), FILM_PREVIEW_DELAY);
  }

  function handleMouseLeave() {
    clearPlayerTimeout();
    setIsHovering(false);
  }

  useEffect(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);


  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(AppRoute.Film.replace(':id', id))}
    >
      {isHovering ? (
        <VideoPlayer video={previewVideoLink} posterImage={previewImage} muted autoPlay />
      ) : (
        <>
          <div className="small-film-card__image">
            <img src={previewImage} alt={name} width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <span className="small-film-card__link">
              {name}
            </span>
          </h3>
        </>
      )}
    </article>
  );
}
