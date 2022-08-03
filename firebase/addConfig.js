import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import addFilterList from "./addFilterList";

const addConfig = async (config) => {
  try {
    await addFilterList(config);
    config.name_lowercase = config.name.toLowerCase();
    const docRef = await addDoc(collection(db, "Configurations"), config);
    return "success";
  } catch (e) {
    return e.code;
  }
};

export default addConfig;
