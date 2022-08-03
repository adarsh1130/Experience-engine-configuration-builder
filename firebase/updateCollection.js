import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  doc,
} from "firebase/firestore";
const updateCollection = async (...props) => {
  const querySnapshot = await getDocs(collection(db, props[0]));
  querySnapshot.forEach((element) => {
    deleteDoc(element.ref);
  });
  props[1].forEach((tag) => {
    setDoc(doc(db, props[0], tag), {});
  });
};
export default updateCollection;
