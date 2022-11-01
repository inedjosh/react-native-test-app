import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACrqk4Y2ULCspd4r747VyL8bYxOzt4KBo",
  authDomain: "fleet-rn.firebaseapp.com",
  projectId: "fleet-rn",
  storageBucket: "fleet-rn.appspot.com",
  messagingSenderId: "168258657485",
  appId: "1:168258657485:web:82400cbcd72c536547dd84",
};

initializeApp(firebaseConfig);

export const firebase = {
  db: getFirestore(),
  setCol: collection,
  getOnSnapShot: onSnapshot,
};
