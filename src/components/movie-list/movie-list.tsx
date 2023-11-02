import { useState } from 'react';
import { Film, FilmCard } from '../types';
import Card from '../card/card';

type MovieListProps = {
    filmProps: FilmCard[];
    filmCardProps: Film;
}

function MovieList({filmProps, filmCardProps}:MovieListProps): JSX.Element {
  const [, setActiveCard] = useState<string>();

  const handleMouseOver = (id:string) => {
    setActiveCard(id);
  };

  return (
    <div className="catalog__films-list">
      {filmProps.map((el) => (
        <Card key={el.id} onMouseOver={handleMouseOver} filmCardProps={filmCardProps} />
      ))}
    </div>
  );
}

export default MovieList;

