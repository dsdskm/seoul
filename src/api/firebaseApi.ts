import { db } from "common/firebaseConfig";
import { PlaceData } from "common/types";
import { doc, getDoc } from "firebase/firestore";

const COLLECTION_CONFIG = "config";
const DOCU_STORAGE = "storage";
export const getPlaceListFromFile = async () => {
  const docRef = doc(db, COLLECTION_CONFIG, DOCU_STORAGE);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  if (!docData) {
    return;
  }
  const placeListUrl = docData.placeList;
  console.log(`placeListUrl ${placeListUrl}`);

  const res = await fetch(placeListUrl);
  const resJson = await res.json();
  const list: PlaceData[] = [];
  resJson.forEach((item: any) => {
    list.push(item as PlaceData);
  });
  return list;
};
