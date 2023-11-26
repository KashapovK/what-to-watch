import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadReviews } from './api-actions.ts';
import { FilmReview } from '../types/types.ts';


interface ReviewSliceState {
  reviews: FilmReview[];
}

const initialState: ReviewSliceState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadReviews.fulfilled, (state, action: PayloadAction<FilmReview[]>) => (
      {
        ...state,
        reviews: action.payload,
      }
    ));
  },
});

export default reviewSlice.reducer;
