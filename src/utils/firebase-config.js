import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCX3qy_SK8cxzmxZWMdHqJUZxfWtszJneY",
  authDomain: "netflix-clone-react-cf051.firebaseapp.com",
  projectId: "netflix-clone-react-cf051",
  storageBucket: "netflix-clone-react-cf051.appspot.com",
  messagingSenderId: "700769118933",
  appId: "1:700769118933:web:d047a55b0bd2ad17acd05c"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);