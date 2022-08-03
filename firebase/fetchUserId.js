import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const fetchUserIds = async (props) => {
  const querySnapshot = await getDocs(collection(db, props));
  const newData = [];
  querySnapshot.forEach((doc) => {
    const newConfig = { id: doc.id };
    newData = [...newData, newConfig];
  });
  return newData;
};
export default fetchUserIds;
