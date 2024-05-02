import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAtRRMnONxhwS6M7hPfkBJHN987sugwg8',
  authDomain: 'movie-app-baeab.firebaseapp.com',
  projectId: 'movie-app-baeab',
  storageBucket: 'movie-app-baeab.appspot.com',
  messagingSenderId: '116786266461',
  appId: '1:116786266461:web:3d4e1155a784961d0e28b4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.languageCode = 'ru';

export const db = getFirestore(app);
export const storage = getStorage(app);
connectFirestoreEmulator(db, 'localhost', 8080);
