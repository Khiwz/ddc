import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadString,
} from "firebase/storage";
import { db, storage } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";

export async function fnAddImageBase64(files, collectionName) {
  // console.log("images info", files);
  const postedDate = new Date().toISOString();
  // Create the file metadata
  const metadata = {
    contentType: null,
  };

  for (let index = 0; index < files.length; index++) {
    const element = files[index];
    // console.log("images info", element.name);
    const storageRef = ref(
      storage,
      collectionName + "/" + postedDate + "/" + element.name
    );
    await uploadString(storageRef, element.base64, "data_url", metadata);
  }

  return postedDate;
}

export async function fnSaveNewsDataToDB(data, collectionName) {
  // Add a new document with a generated id
  const docRef = await addDoc(collection(db, collectionName), data);
  console.log("Document written with ID: ", docRef.id);

  if (docRef) {
    alert("Upload Completed");
    return { status: "OK", message: "Upload Completed" };
  }
}

export async function fnGetAllNewsDocs(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));

  let output = [];
  querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    output.push({ id: doc.id, data: doc.data() });
  });
  return output;
}

export async function fnGetNewsImageStorage(fullPath) {
  // Create a reference from a Google Cloud Storage URI
  const gsReference = ref(storage, fullPath);

  // Get the download URL
  const url = await getDownloadURL(gsReference);
  return url;
}

export async function fnGetSingleNewsDoc(collectionName, newsId) {
  const docRef = doc(db, collectionName, newsId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    alert("No such document!");
  }
}
