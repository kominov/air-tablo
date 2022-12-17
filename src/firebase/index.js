import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCe9j24n1HAxSe0UlQPmV3Cq1UKmd4Klkg',
  authDomain: 'air-tablo.firebaseapp.com',
  projectId: 'air-tablo',
  storageBucket: 'air-tablo.appspot.com',
  messagingSenderId: '130568651669',
  appId: '1:130568651669:web:707ca60f8e9b44b0786c9c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  // eslint-disable-next-line import/prefer-default-export
  db,
};
