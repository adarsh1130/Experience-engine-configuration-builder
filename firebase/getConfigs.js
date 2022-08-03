import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const getConfigs = async () => {
  const querySnapshot = await getDocs(collection(db, "Configurations"));
  const newData = [];
  querySnapshot.forEach((doc) => {
    const newConfig = { id: doc.id, ...doc.data() };
    newConfig["createdDate"] = doc.data().createdDate.toDate();
    newConfig["modifiedDate"] = doc.data().modifiedDate.toDate();
    newData = [...newData, newConfig];
  });
  return newData;
};
export default getConfigs;
