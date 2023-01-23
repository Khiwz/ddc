import fs from "fs";
import path from "path";
import { listNewsImage } from "../constant/language-news";
import sha256 from "crypto-js/sha256";

export const fnFirstImage = (item) => {
  const firstImage = listNewsImage.find((img) => img.id === item);
  return firstImage.images[0];
};

export function fnReadFileSync(fileName) {
  const filePath = path.join(process.cwd(), "data", fileName);
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export function fnCheckPostingFormat(data) {
  // console.log("data", data);
  const laoData = Object.hasOwn(data, "lao");
  const englishData = Object.hasOwn(data, "english");
  const chinessData = Object.hasOwn(data, "chiness");

  if (laoData && englishData && chinessData) {
    return true;
  } else {
    return false;
  }
}

export function fnEncryptedPassword(text) {
  // console.log("text", text);
  const hashDigest = sha256(
    text + process.env.NEXT_PUBLIC_ENCRYPTED_MESSAGE
  ).toString();
  return hashDigest;
}
