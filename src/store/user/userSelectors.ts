import { RootState } from '../store';

export const selectStatus = (state: RootState) => state.user.status;
export const selectJwt = (state: RootState) => state.user.jwt;
export const selectProfile = (state: RootState) => state.user.profile;
