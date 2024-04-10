import { UserState } from "../store/user/userSlice.ts";
import { auth } from "../firebase.ts";

export const getUserData = async () => {
  let user: UserState["profile"] = undefined;
  let jwt: UserState["jwt"] = null;

  if (auth.currentUser) {
    user = {
      uid: auth.currentUser.uid,
      email: auth.currentUser.email || "",
      name: auth.currentUser.displayName || "",
    };

    await auth.currentUser.getIdToken().then((access_token) => {
      jwt = access_token;
    });
  }

  return {
    user,
    jwt,
  };
};
