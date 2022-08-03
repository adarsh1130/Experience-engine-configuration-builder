import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import addFilterList from "./addFilterList";
import deleteFilterList from "./deleteFilterList";

const updateConfig = async (id, newConfig) => {
  const configRef = doc(db, "Configurations", id);
  try {
    const oldConfigSnap = await getDoc(doc(db, "Configurations", id));
    const oldConfig = oldConfigSnap.data();
    newConfig.name_lowercase = newConfig.name.toLowerCase();
    addFilterList(newConfig);
    await updateDoc(configRef, newConfig);

    return "success";
  } catch (e) {
    return e.code;
  }
};

export default updateConfig;
