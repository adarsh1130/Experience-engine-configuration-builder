import { db } from "./firebaseConfig";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
//add config to db
const addUserId = async (...props) => {
  try {
    // const docRef = await addDoc(collection(db, "userId")).doc("adar");
    // const docRef = doc (db,"userId","bond");
    const docRef = await setDoc(doc(db, props[0], props[1]), {});
    // const docRef = await db.collection("userId").doc("LA").setDoc(props);
    // const docRef = await addDoc(collection(db, "userId"), props);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addUserId;
