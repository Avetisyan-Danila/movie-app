import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [uid, setUid] = useState<string>();
  const auth = getAuth();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUid(user?.uid);
    });
  }, [auth, auth.currentUser?.uid]);

  return uid;
};
