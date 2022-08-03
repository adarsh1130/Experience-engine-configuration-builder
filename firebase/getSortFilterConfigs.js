import { db } from "./firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
  startAfter,
  endBefore,
  limitToLast,
} from "firebase/firestore";

const getSortFilterConfigs = async (
  filterByTag,
  filterByModule,
  filterByGroup,
  lastVisible,
  setLastVisible,
  firstVisible,
  setFirstVisible,
  type
) => {
  const filters = [];
  if (filterByTag !== null && filterByTag.length !== 0) {
    filters = [...filters, where("tags", "array-contains", filterByTag[0].id)];
  }
  if (filterByModule !== null && filterByModule.length !== 0) {
    filters = [...filters, where("module", "==", filterByModule[0].id)];
  }
  if (filterByGroup !== null && filterByGroup.length !== 0) {
    filters = [...filters, where("group", "==", filterByGroup[0].id)];
  }
  filters = [...filters, orderBy("name_lowercase")];

  if (type === "next") {
    if (lastVisible === undefined) {
      return [];
    }
    filters = [...filters, startAfter(lastVisible)];
    filters = [...filters, limit(25)];
  } else if (type === "prev") {
    filters = [...filters, endBefore(firstVisible)];
    filters = [...filters, limitToLast(25)];
  } else {
    filters = [...filters];
  }

  const configRef = collection(db, "Configurations");
  const q = query(configRef, ...filters);
  const querySnapshot = await getDocs(q);
  const newData = [];
  if (lastVisible !== undefined)
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
  if (querySnapshot.docs[0]) setFirstVisible(querySnapshot.docs[0]);
  querySnapshot.forEach((doc) => {
    const newConfig = { id: doc.id, ...doc.data() };
    newConfig["createdDate"] = doc.data().createdDate.toDate();
    newConfig["modifiedDate"] = doc.data().modifiedDate.toDate();
    newData = [...newData, newConfig];
  });
  return newData;
};

export default getSortFilterConfigs;
