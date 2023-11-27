import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserData } from '../types/types';
import { signOut, verifyToken, signIn } from './api-actions';

type UserSliceState = UserData & {
    isAuthorized: boolean;
  }

const initialState: UserSliceState = {
  isAuthorized: false,
  name: '',
  avatarUrl: '',
  email: '',
  token: '',
};

function authorize(state: UserSliceState, action: PayloadAction<UserData>) {
  return {
    ...state,
    ...action.payload,
    isAuthorized: true,
  };
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, authorize);
    builder.addCase(verifyToken.fulfilled, authorize);
    builder.addCase(signOut.fulfilled, () => initialState);
  },
});

export default userSlice.reducer;
