import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebase";
import { fnGetBannerDocs } from "../util/banner-firebase";

const data = {};

function DevAddDataPage() {
  const addBannerData = async () => {
    const docRef = await addDoc(collection(db, "banner"), data);

    if (docRef) {
      alert("Upload Completed");
      console.log("Document written with ID: ", docRef.id);
    }
  };

  const getBannerData = async () => {
    const result = await fnGetBannerDocs();
    console.log("Banner data: ", result);
  };
  return (
    <div>
      <div>
        <Button onClick={addBannerData}>Add Banner</Button>
        <Button onClick={getBannerData}>Get Banner</Button>
      </div>
    </div>
  );
}

export default DevAddDataPage;
