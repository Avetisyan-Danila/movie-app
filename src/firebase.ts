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

export const db = getFirestore(app);
export const storage = getStorage(app);
connectFirestoreEmulator(db, 'localhost', 8080);

// const specialOfTheDay = doc(db, 'dailySpecial/2021-09-14');
//
// async function writeDailySpecial() {
//   const docData = {
//     description: 'A delicious vanilla latte',
//     price: 3.99,
//     milk: 'Whole',
//     vegan: false,
//   };
//
//   setDoc(specialOfTheDay, docData, { merge: true })
//     .then(() => {
//       console.log('success');
//     })
//     .catch((err) => {
//       console.log('error', err);
//     });
// }
//
// const ordersCollection = collection(db, 'orders');
//
// async function addNewDocument() {
//   const newDoc = await addDoc(ordersCollection, {
//     customer: 'Arthur',
//     drink: 'Latte',
//     total_cost: (100 + Math.floor(Math.random() * 400)) / 100,
//   });
//
//   console.log(newDoc.path);
// }
//
// async function readASingleDocument() {
//   const mySnapshot = await getDoc(specialOfTheDay);
//
//   if (mySnapshot.exists()) {
//     const docData = mySnapshot.data();
//     console.log('My data', JSON.stringify(docData));
//   }
// }
//
// async function queryForDocuments() {
//   const customerOrdersQuery = query(
//     collection(db, 'orders'),
//     where('drink', '==', 'Latte'),
//     limit(10),
//   );
//
//   const querySnapshot = await getDocs(customerOrdersQuery);
//   querySnapshot.forEach((snap) => {
//     console.log('data', snap.data());
//   });
//
//   onSnapshot(customerOrdersQuery, (querySnapshot) => {
//     console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())));
//   });
// }

// await writeDailySpecial();
// await addNewDocument();
// await readASingleDocument();
// await queryForDocuments();
