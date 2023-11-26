import Card from '../card/card';
import { FilmCard } from '../../types/types';

type MoreLikeThisProps = {
    prop: FilmCard[];
}
export default function MoreLikeThis ({prop}:MoreLikeThisProps) {

  return (
    <div className="catalog__films-list">
      {prop.map((value) => (
        <Card key={value.id} {...value}/>
      ))}
    </div>
  );
}
