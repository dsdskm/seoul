import { SEOUL_GU_ARR } from "common/constant";
import { db } from "common/firebaseConfig";
import { PlaceData } from "common/types";
import { collection, doc, getDocs, query, writeBatch } from "firebase/firestore";

const COLLECTION_PLACE = "place";
const COLLECTION_CONFIG = "config";
const DOCU_STORAGE = "storage";

export const addPlace = async (list: PlaceData[]) => {
  const time = new Date().getTime();
  console.log(`1~500`);
  let batch = writeBatch(db);
  for (let i = 0; i < 500; i++) {
    const place = list[i];
    console.log(`i${i}`, place);
    const id = (time + i).toString();
    place.id = id;
    const ref = doc(db, COLLECTION_PLACE, place.id);
    batch.set(ref, place);
  }
  await batch.commit();

  console.log(`500~1000`);
  batch = writeBatch(db);
  for (let i = 500; i < 1000; i++) {
    const place = list[i];
    console.log(`i${i}`, place);
    const id = (time + i).toString();
    place.id = id;
    const ref = doc(db, COLLECTION_PLACE, place.id);
    batch.set(ref, place);
  }
  await batch.commit();

  console.log(`1500~2000`);
  batch = writeBatch(db);
  for (let i = 1000; i < 1500; i++) {
    const place = list[i];
    console.log(`i${i}`, place);
    const id = (time + i).toString();
    place.id = id;
    const ref = doc(db, COLLECTION_PLACE, place.id);
    batch.set(ref, place);
  }
  await batch.commit();

  console.log(`1500~2000`);
  batch = writeBatch(db);
  for (let i = 1500; i < 2000; i++) {
    const place = list[i];
    console.log(`i${i}`, place);
    const id = (time + i).toString();
    place.id = id;
    const ref = doc(db, COLLECTION_PLACE, place.id);
    batch.set(ref, place);
  }
  await batch.commit();

  console.log(`2000~2500`);
  batch = writeBatch(db);
  for (let i = 2000; i < 2500; i++) {
    const place = list[i];
    console.log(`i${i}`, place);
    const id = (time + i).toString();
    place.id = id;
    const ref = doc(db, COLLECTION_PLACE, place.id);
    batch.set(ref, place);
  }
  await batch.commit();

  console.log(`2500~3000`);
  batch = writeBatch(db);
  for (let i = 2500; i < 3000; i++) {
    const place = list[i];
    console.log(`i${i}`, place);
    const id = (time + i).toString();
    place.id = id;
    const ref = doc(db, COLLECTION_PLACE, place.id);
    batch.set(ref, place);
  }
  await batch.commit();

  console.log(`3000~${list.length}`);
  batch = writeBatch(db);
  for (let i = 3000; i < list.length; i++) {
    const place = list[i];
    console.log(`i${i}`, place);
    const id = (time + i).toString();
    place.id = id;
    const ref = doc(db, COLLECTION_PLACE, place.id);
    batch.set(ref, place);
  }
  await batch.commit();
};

export const getPlaceList = async () => {
  const q = query(collection(db, COLLECTION_PLACE));
  const querySnapshot = await getDocs(q);
  const list: PlaceData[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    list.push(data as PlaceData);
  });
  return list;
};

export const update = async (list: PlaceData[]) => {
  let batch = writeBatch(db);
  for (let i = 0; i < list.length; i++) {
    if (3000 <= i) {
      const item = list[i];
      const ref = doc(db, COLLECTION_PLACE, item.id);

      if (!item.addr.includes("서울")) {
        let contained = false;
        for (let i = 0; i < SEOUL_GU_ARR.length; i++) {
          const gu = SEOUL_GU_ARR[i];
          if (item.addr.includes(gu)) {
            contained = true;
            break;
          }
        }
        if (!contained) {
          console.log(`item id ${item.id} addr ${item.addr}`);
          batch.update(ref, {
            show: false,
          });
        } else {
          batch.update(ref, {
            show: true,
          });
        }
      } else {
        batch.update(ref, {
          show: true,
        });
      }
    }
  }
  await batch.commit();
};

export const getPlaceListFile = async () => {
  doc(db, COLLECTION_CONFIG);
};
