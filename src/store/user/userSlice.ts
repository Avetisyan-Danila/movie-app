import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  updateUserName,
  updateUserPassword,
} from './userThunks.ts';
import {
  STATUS_LOADING,
  STATUS_SUCCESS,
  STATUS_FAILED,
  STATUS_IDLE,
  EMAIL_VERIFICATION_MESSAGE,
  EMAIL_UPDATE_SUCCESS_MESSAGE,
  PASSWORD_UPDATE_SUCCESS_MESSAGE,
  DELETE_ACCOUNT_SUCCESS_MESSAGE,
  USER_PERSISTENT_STATE,
  NEED_REAUTHORIZATION_MESSAGE,
  NAME_UPDATE_SUCCESS_MESSAGE,
} from '../../helpers/constants.ts';

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
  reducers: {
    setJwt: (state, action: PayloadAction<UserPersistentState['jwt']>) => {
      state.jwt = action.payload;
    },
  },
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

        addNotification(EMAIL_VERIFICATION_MESSAGE, 'info', 15000);
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

      .addCase(updateUserName.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.status = STATUS_SUCCESS;
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;

        addNotification(NAME_UPDATE_SUCCESS_MESSAGE, 'success');
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          if (action.error.message === NEED_REAUTHORIZATION_MESSAGE) {
            state.jwt = null;
          }

          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(updateUserEmail.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(updateUserEmail.fulfilled, (state, action) => {
        state.status = STATUS_SUCCESS;
        state.profile = action.payload.user;
        state.jwt = action.payload.jwt;

        addNotification(EMAIL_UPDATE_SUCCESS_MESSAGE, 'success');
        addNotification(EMAIL_VERIFICATION_MESSAGE, 'info', 15000);
      })
      .addCase(updateUserEmail.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          if (action.error.message === NEED_REAUTHORIZATION_MESSAGE) {
            state.jwt = null;
          }

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

        addNotification(PASSWORD_UPDATE_SUCCESS_MESSAGE, 'success');
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          if (action.error.message === NEED_REAUTHORIZATION_MESSAGE) {
            state.jwt = null;
          }

          addNotification(action.error.message, 'danger');
        }
      })

      .addCase(deleteAccount.pending, (state) => {
        state.status = STATUS_LOADING;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.status = STATUS_SUCCESS;
        state.jwt = null;

        addNotification(DELETE_ACCOUNT_SUCCESS_MESSAGE, 'success');
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.status = STATUS_FAILED;

        if (action.error.message) {
          if (action.error.message === NEED_REAUTHORIZATION_MESSAGE) {
            state.jwt = null;
          }

          addNotification(action.error.message, 'danger');
        }
      });
  },
});

export const { setJwt } = userSlice.actions;
export default userSlice.reducer;
