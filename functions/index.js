/*
emulator test
firebase emulators:start --only functions:<FUNCTION_NAME>

deploy
firebase debug deploy --only functions:<FUNCTION_NAME>
firebase functions:log --only <FUNCTION_NAME>
*/

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fs = require("fs");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(`./seoul-firebase-adminsdk.json`),
    storageBucket: "gs://seoul-1a489.appspot.com",
  });
}

const db = admin.firestore();
const storage = admin.storage();

const COLLECTION_CONFIG = "config";
const COLLECTION_PLACE = "place";
const DOCU_STORAGE = "storage";
exports.refreshPlaceList = functions.https.onCall(async (request, response) => {
  console.log(`refreshPlaceList`);
  const init = async () => {
    const snapshot = await db.collection("place").where("show", "==", true).get();
    const list = [];
    snapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      list.push(data);
    });
    return list;
  };

  const writeFile = async (list) => {
    fs.writeFile("./list.json", JSON.stringify(list), (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  const uploadPlaceListFile = async (list) => {
    console.log("uploadPlaceListFile");
    const filePath = `placeList/list.json`;
    try {
      // upload file
      const bucket = storage.bucket();
      const file = bucket.file(filePath);
      const contents = JSON.stringify(list);
      console.log(`file upload success`);
      await file.save(contents);

      // update url
      const url = await file.getSignedUrl({
        action: "read",
        expires: "12-31-2345",
      });
      console.log(`url ${url}`);
      await db.collection(COLLECTION_CONFIG).doc(DOCU_STORAGE).update({
        placeList: url[0],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const list = await init();
  await uploadPlaceListFile(list);
  // await uploadPlaceListFile()
});
