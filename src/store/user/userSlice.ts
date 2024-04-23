import { createSlice } from '@reduxjs/toolkit';
import { addNotification } from '../../helpers/notification.ts';
import { Status } from '../../types/status.ts';
import { Profile } from '../../types/user.ts';
import { loadState } from '../storage.ts';
import {
  login,
  logout,
  register,
  updateUserEmail,
  updateUserPassword,
} from './userThunks.ts';

export const USER_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
  jwt: string | null;
  profile: Profile | null;
}

export interface UserState {
  status: Status;
  jwt: string | null;
  profile: Profile | null;
}

const initialState: UserState = {
  status: 'idle',
  jwt: loadState<UserPersistentState>(USER_PERSISTENT_STATE)?.jwt ?? null,
  profile:
    loadState<UserPersistentState>(USER_PERSISTENT_STATE)?.profile ?? null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'received';

        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'rejected';

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'received';
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'rejected';

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'received';
        state.jwt = null;
      })

      .addCase(updateUserEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserEmail.fulfilled, (state, action) => {
        state.status = 'received';
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(updateUserEmail.rejected, (state, action) => {
        state.status = 'rejected';

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(updateUserPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.status = 'received';
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.status = 'rejected';

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      });
  },
});

export default userSlice.reducer;
