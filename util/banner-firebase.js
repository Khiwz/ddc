import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

export async function fnGetBannerDocs() {
  const querySnapshot = await getDocs(collection(db, "banner"));
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function fnUpdateBannerDesc1(
  selectedBusiness,
  dataLao,
  dataEnglish,
  dataChiness
) {
  const docId = await fnQueryDoc(selectedBusiness);
  // console.log("docId", docId);
  // console.log("data update", { dataLao, dataEnglish, dataChiness });

  if (docId) {
    const docRef = doc(db, "banner", docId);
    await updateDoc(docRef, {
      "desc1.lao": dataLao,
      "desc1.english": dataEnglish,
      "desc1.chiness": dataChiness,
    });
    return { message: "Update Description-1 Succeed" };
  }
}

export async function fnQueryDoc(condition) {
  const q = query(
    collection(db, "banner"),
    where("text.english", "==", condition)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.id)[0];
}
