import { db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  orderBy,
  startAt,
  endAt,
  query,
} from "firebase/firestore";

const getSearchResult = async (searchTerm) => {
  const searchItem = searchTerm.toLowerCase();
  const configRef = collection(db, "Configurations");
  const q = query(
    configRef,
    orderBy("name_lowercase"),
    startAt(searchItem),
    endAt(searchItem + "\uf8ff")
  );
  const querySnapshot = await getDocs(q);
  const searchResult = [];
  querySnapshot.forEach((doc) => {
    const newConfig = { id: doc.id, ...doc.data() };
    newConfig["createdDate"] = doc.data().createdDate.toDate();
    newConfig["modifiedDate"] = doc.data().modifiedDate.toDate();
    searchResult = [...searchResult, newConfig];
  });
  return searchResult;
};
export default getSearchResult;
