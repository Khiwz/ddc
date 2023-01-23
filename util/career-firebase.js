import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadString,
} from "firebase/storage";
import { db, storage } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setReduxProgress } from "../redux/progressSlice";

export async function fnAddDocumentAutoId(data, file, collectionName) {
  console.log("Document data: ", data);
  console.log("Document file: ", file);
  console.log("collectionName file: ", collectionName);

  if (file) {
    // fnAddFile(data, file, collectionName);
    const result = await fnAddFileBase64(data, file, collectionName);
    if (result) return result;
  } else {
    const result = await fnSaveDataToDB(data, collectionName);
    if (result) return result;
  }
}

async function fnAddFileBase64(data, file, collectionName) {
  const postedDate = new Date().toISOString();
  // Create the file metadata
  const metadata = {
    contentType: null,
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(
    storage,
    collectionName + "/" + postedDate + "/" + file.name
  );
  const uploadTask = await uploadString(
    storageRef,
    file.base64,
    "data_url",
    metadata
  );
  if (uploadTask) {
    console.log("result upload task", uploadTask);
    data["fileInfo"] = {
      fullPath: "gs://" + uploadTask.ref.bucket + "/" + uploadTask.ref.fullPath,
      name: uploadTask.ref.name,
    };
    console.log("Final data", data);
    const result = await fnSaveDataToDB(data, collectionName);
    if (result) return result;
  }
}

// async function fnAddFile(data, file, collectionName) {
//   const postedDate = new Date().toISOString();
//   // Create the file metadata
//   //   const metadata = {
//   //     contentType: "*",
//   //   };

//   const filePath = [];

//   for (let index = 0; index < file.length; index++) {
//     const element = file[index];
//     // Upload file and metadata to the object 'images/mountains.jpg'
//     const storageRef = ref(
//       storage,
//       element.name
//       //   collectionName + "/" + postedDate + "/" + element.name
//     );
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     // Listen for state changes, errors, and completion of the upload.
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//       },
//       (error) => {},
//       () => {
//         // Upload completed successfully, now we can get the download URL
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log("File available at", downloadURL);

//           filePath.push({
//             name: element.name,
//             path: downloadURL,
//           });

//           if (filePath.length === file.length) {
//             const finalValue = { ...data, filePath: filePath };
//             console.log("finalValue", finalValue);
//             fnSaveDataToDB(finalValue, collectionName);
//           }
//         });
//       }
//     );
//   }
// }

async function fnSaveDataToDB(data, collectionName) {
  // Add a new document with a generated id

  const docRef = await addDoc(collection(db, collectionName), data);
  console.log("Document written with ID: ", docRef.id);

  if (docRef) {
    alert("Upload Completed");
    return { status: "OK", message: "Upload Completed" };
  }
}

export async function fnGetAllDocs(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));

  let output = [];
  querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    output.push(doc.data());
  });
  return output;
}

export async function fnGetFileStorage(fullPath) {
  // Create a reference from a Google Cloud Storage URI
  const gsReference = ref(storage, fullPath);

  // Get the download URL
  const url = await getDownloadURL(gsReference);
  return url;
}
