import { createSlice } from '@reduxjs/toolkit';
import { addNotification } from '../../helpers/notification.ts';
import { Status } from '../../types/status.ts';
import { Profile } from '../../types/user.ts';
import { loadState } from '../storage.ts';
import {
  deleteAccount,
  login,
  logout,
  register,
  updateUserEmail,
  updateUserPassword,
} from './userThunks.ts';
import {
  STATUS_LOADING,
  STATUS_SUCCESS,
  STATUS_FAILED,
  STATUS_IDLE,
} from '../../helpers/constants.ts';

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
  status: STATUS_IDLE,
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
        state.status = STATUS_LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = STATUS_SUCCESS;

        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(register.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = STATUS_SUCCESS;
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(logout.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = STATUS_SUCCESS;
        state.jwt = null;
      })

      .addCase(updateUserEmail.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(updateUserEmail.fulfilled, (state, action) => {
        state.status = STATUS_SUCCESS;
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;

        addNotification('Email успешно изменен', 'success');
      })
      .addCase(updateUserEmail.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(updateUserPassword.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.status = STATUS_SUCCESS;
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;

        addNotification('Пароль успешно изменен', 'success');
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(deleteAccount.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.status = STATUS_SUCCESS;
        state.jwt = null;

        addNotification('Аккаунт успешно удален', 'success');
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          addNotification(action.error.message, 'danger');
        }
      });
  },
});

export default userSlice.reducer;
