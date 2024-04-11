import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSlice, { USER_PERSISTENT_STATE } from './user/userSlice.ts';
import { saveState } from './storage.ts';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

store.subscribe(() => {
  saveState(
    { jwt: store.getState().user.jwt, profile: store.getState().user.profile },
    USER_PERSISTENT_STATE,
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
