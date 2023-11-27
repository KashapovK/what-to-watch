import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserData } from '../types/types';
import { signOut, verifyToken, signIn } from './api-actions';
import { AuthorizationStatus } from '../const/const';
import { getToken } from '../services/token';

type UserSliceState = UserData & {
  authorizationStatus: AuthorizationStatus;
  }

const token = getToken();

const initialState: UserSliceState = {
  authorizationStatus: token ? AuthorizationStatus.Unknown :
    AuthorizationStatus.Unauthorized,
  name: '',
  avatarUrl: '',
  email: '',
  token: '',
};

function authorize(state: UserSliceState, action: PayloadAction<UserData>) {
  return {
    ...state,
    ...action.payload,
    authorizationStatus: AuthorizationStatus.Authorized,
  };
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, authorize);
    builder.addCase(verifyToken.fulfilled, authorize);
    builder.addCase(signOut.fulfilled, () => ({
      ...initialState,
      authorizationStatus: AuthorizationStatus.Unauthorized
    }));
  },
});

export default userSlice.reducer;
