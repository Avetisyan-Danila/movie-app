import { createSlice } from '@reduxjs/toolkit';
import { addNotification } from '../../helpers/notification.ts';
import { Status } from '../../types/status.ts';
import { Profile } from '../../types/user.ts';
import { loadState } from '../storage.ts';
import { login, logout, register } from './userThunks.ts';

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
  jwt: string | null;
}

export interface UserState {
  status: Status;
  jwt: string | null;
  profile?: Profile;
}

const initialState: UserState = {
  status: 'idle',
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'received';

      state.profile = action.payload.user;
      state.jwt = action.payload.jwt;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'rejected';

      if (action.error.message) {
        addNotification(action.error.message, 'danger');
      }
    });

    builder.addCase(register.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = 'received';
      state.profile = action.payload.user;
      state.jwt = action.payload.jwt;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = 'rejected';

      if (action.error.message) {
        addNotification(action.error.message, 'danger');
      }
    });

    builder.addCase(logout.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.status = 'received';
      state.jwt = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.status = 'rejected';

      if (action.error.message) {
        addNotification(action.error.message, 'danger');
      }
    });
  },
});

export default userSlice.reducer;
