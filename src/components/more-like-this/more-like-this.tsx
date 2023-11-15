import Card from '../card/card';
import { FilmCard } from '../../types/types';

type MoreLikeThisProps = {
    filmCard: FilmCard[];
}
export default function MoreLikeThis ({filmCard}:MoreLikeThisProps) {

  return (
    <div className="catalog__films-list">
      {filmCard.map((value) => (
        <Card key={value.genre} {...value}/>
      ))}
    </div>
  );
}
