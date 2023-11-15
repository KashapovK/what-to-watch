import { ERatingDescription } from '../../types/types';

export function getRatingDescription(rating:number): ERatingDescription {
  if (rating >= 0 && rating < 2) {
    return ERatingDescription.Bad;
  } else if (rating >= 2 && rating < 4.5) {
    return ERatingDescription.NotBad;
  } else if (rating >= 4.5 && rating < 6) {
    return ERatingDescription.Normal;
  } else if (rating >= 6 && rating < 9) {
    return ERatingDescription.Good;
  } else if (rating >= 9 && rating <= 10) {
    return ERatingDescription.VeryGood;
  }
}
