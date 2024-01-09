import { FilmCard } from '../../types/types';
import Card from '../card/card';

interface MovieListProps {
  prop: FilmCard[];
}

export default function MovieList({ prop }: MovieListProps) {
  return (
    <div className="catalog__films-list">
      {prop.map((value) => (
        <Card key={value.id} {...value} />
      ))}
    </div>
  );
}
