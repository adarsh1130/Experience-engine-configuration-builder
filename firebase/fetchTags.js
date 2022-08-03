import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const fetchTags = async () => {
  const querySnapshot = await getDocs(collection(db, "tags"));
  const tagList = [];
  querySnapshot.forEach((doc) => {
    tagList = [...tagList, doc.id];
  });
  return tagList;
};

export default fetchTags;
