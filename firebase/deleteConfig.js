import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const deleteConfig = async (id) => {
  try {
    await deleteDoc(doc(db, "Configurations", id));
    return "success";
  } catch (e) {
    return e.code;
  }
};
