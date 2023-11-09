import { useState } from 'react';
import { FilmCard } from '../types';
import Card from '../card/card';

type MovieListProps = {
    filmCard: FilmCard [];
}

export default function MovieList({filmCard}:MovieListProps): JSX.Element {
  const [, setActiveCard] = useState<string>();

  const handleMouseOver = (id:string) => {
    setActiveCard(id);
  };

  return (
    <div className="catalog__films-list">
      {filmCard.map((value) => (
        <Card key={value.id} onMouseOver={handleMouseOver} {...value} />
      ))}
    </div>
  );
}
