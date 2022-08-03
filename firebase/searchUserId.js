import { db } from "./firebaseConfig";
import { collection, addDoc, getDoc, doc, setDoc } from "firebase/firestore";
//add config to db
const searchUserId = async (...params) => {
  const docRef = doc(db, params[0], params[1]);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    if (!params[2]) params[3](true);
  }
};

export default searchUserId;
