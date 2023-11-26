import { ERatingDescription } from '../const/const';

export function getRatingDescription(rating:number): ERatingDescription {
  if (rating >= 0 && rating < 3) {
    return ERatingDescription.Bad;
  } else if (rating >= 3 && rating < 5) {
    return ERatingDescription.Normal;
  } else if (rating >= 5 && rating < 8) {
    return ERatingDescription.Good;
  } else if (rating >= 8 && rating < 10) {
    return ERatingDescription.VeryGood;
  } else {
    return ERatingDescription.Awesome;
  }
}
