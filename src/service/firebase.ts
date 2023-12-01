import { initializeApp } from "firebase/app";
import { getFirestore, query } from "firebase/firestore";
import { collection, addDoc,getDocs,where, onSnapshot } from "firebase/firestore";
import { UserData } from "../types/post";

const firebaseConfig = {
  apiKey: "AIzaSyAPJBKfnpcxHtkPkS18CH4mb9AeFCq_9nY",
  authDomain: "programacion-ec39e.firebaseapp.com",
  projectId: "programacion-ec39e",
  storageBucket: "programacion-ec39e.appspot.com",
  messagingSenderId: "136757147578",
  appId: "1:136757147578:web:57d88a0060a8c982564f83"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userCollection = collection(db, "user")

// Recupera los datos de Firebase

async function getUserData(): Promise<UserData[]> {
  const querySnapshot = await getDocs(userCollection);
  const userData: UserData[] = [];
  querySnapshot.forEach((doc) => {
    const user = doc.data() as UserData;
    userData.push(user);
  });
  return userData;
}

export {
  getUserData
}
