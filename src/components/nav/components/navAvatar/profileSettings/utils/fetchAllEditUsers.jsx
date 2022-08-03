// import fetchUserIds from "../../../../../../../firebase/fetchUserId";
import fetchUserIds from "../../../../../../../firebase/fetchUserId";

export const fetchAllEditUsers = async (...props) => {
  const tagList = await fetchUserIds(props[0]);
  let userData = [];
  for (let i = 0; i < tagList.length; i++) {
    userData.push(tagList[i].id);
  }
  props[1](userData);
};
