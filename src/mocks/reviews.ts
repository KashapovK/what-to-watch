import { FilmReview } from '../components/types';
import {v4 as uuidv4} from 'uuid';

const mockDataReviews: FilmReview [] = [
  {
    id: uuidv4(),
    reviewAuthor: 'Kate Muir',
    reviewDate:'December 24, 2016',
    reviewText: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    reviewRating: 8.9,
  }
];

export default mockDataReviews;
