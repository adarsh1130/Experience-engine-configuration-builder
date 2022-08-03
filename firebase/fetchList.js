import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const fetchList = async (value) => {
  const querySnapshot = await getDocs(collection(db, `${value}s`));
  const newData = [];
  querySnapshot.forEach((doc) => {
    newData = [...newData, doc.id];
  });
  return newData;
};

export default fetchList;
