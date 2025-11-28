import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQvNTipF-nQslU3fycMEYvrF_uOjMG7FY",
  authDomain: "labauthifes-fbe49.firebaseapp.com",
  projectId: "labauthifes-fbe49",
  storageBucket: "labauthifes-fbe49.firebasestorage.app",
  messagingSenderId: "23638695344",
  appId: "1:23638695344:web:da0866bed722b6dc5b8a75"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);