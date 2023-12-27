import { ERatingDescription } from '../const/const.ts';
import { getRatingDescription } from './film.ts';

describe('Function: getRatingDescription', () => {
  it('should return Bad in range [0; 3)', () => {
    expect(getRatingDescription(0)).toEqual(ERatingDescription.Bad);
    expect(getRatingDescription(2.99)).toEqual(ERatingDescription.Bad);
  });

  it('should return Normal in range [3; 5)', () => {
    expect(getRatingDescription(3)).toEqual(ERatingDescription.Normal);
    expect(getRatingDescription(4.99)).toEqual(ERatingDescription.Normal);
  });

  it('should return Good in range [5; 8)', () => {
    expect(getRatingDescription(5)).toEqual(ERatingDescription.Good);
    expect(getRatingDescription(7.99)).toEqual(ERatingDescription.Good);
  });

  it('should return Very Good in range [8; 10)', () => {
    expect(getRatingDescription(8)).toEqual(ERatingDescription.VeryGood);
    expect(getRatingDescription(9.99)).toEqual(ERatingDescription.VeryGood);
  });

  it('should return Awesome in case of 10', () => {
    expect(getRatingDescription(10)).toEqual(ERatingDescription.Awesome);
  });
});
