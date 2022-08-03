import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const addFilterList = async (config) => {
  config.tags.forEach(async (tag) => {
    const tagRef = doc(db, "tags", tag);
    const tagSnap = await getDoc(tagRef);

    if (tagSnap.exists()) {
      await updateDoc(tagRef, {
        count: tagSnap.data().count + 1,
      });
    } else {
      await setDoc(tagRef, { count: 1 });
    }
  });

  const moduleRef = doc(db, "modules", config.module);
  const moduleSnap = await getDoc(moduleRef);

  if (moduleSnap.exists()) {
    await updateDoc(moduleRef, {
      count: moduleSnap.data().count + 1,
    });
  } else {
    await setDoc(moduleRef, { count: 1 });
  }

  const groupRef = doc(db, "groups", config.group);
  const groupSnap = await getDoc(groupRef);

  if (groupSnap.exists()) {
    await updateDoc(groupRef, {
      count: groupSnap.data().count + 1,
    });
  } else {
    await setDoc(groupRef, { count: 1 });
  }
};

export default addFilterList;
