import {
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import FileBase64 from "react-file-base64";
import { fnCheckPostingFormat } from "../../util/function";
import { fnAddImageBase64, fnSaveNewsDataToDB } from "../../util/news-firebase";

function NewsBackend() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [files, setFiles] = useState([]);
  const [filesSize, setFilesSize] = useState(0);
  const [newsData, setNewsData] = useState({});
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    const fileSize = files.map((item) => Number(item.size.split(" ")[0]));
    // console.log("file Size", fileSize);

    const initialValue = 0;
    const sumWithInitial = fileSize.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    setFilesSize(sumWithInitial);
  }, [files]);

  const postLanguageHandler = () => {
    if (selectedLanguage === "all") {
      let objectNews = {};
      ["lao", "english", "chiness"].map(
        (item) => (objectNews[item] = { title, description })
      );

      setNewsData(objectNews);
      alert("All languages has been setted");
    } else {
      setNewsData({
        ...newsData,
        [selectedLanguage]: { title, description },
      });

      alert("you have completed setting for " + selectedLanguage);
    }
  };

  const uploadNewsHandler = async (event) => {
    event.preventDefault();
    setInProgress(true);
    const newsCollection = process.env.NEXT_PUBLIC_NEWS_COLLECTION;
    const bucketName = "gs://" + process.env.NEXT_PUBLIC_STORAGE_BUCKET;

    const resultCheck = fnCheckPostingFormat(newsData);
    // console.log("resultCheck", resultCheck);
    if (!resultCheck) {
      alert("You haven't add data for all language");
    } else {
      const images = files.map((item) => ({
        name: item.name,
        base64: item.base64,
      }));
      // console.log("images info", images);
      const postedDate = await fnAddImageBase64(images, newsCollection);
      if (postedDate) {
        console.log("imagesInfo", postedDate);
        const imagesInfo = files.map((item) => ({
          name: item.name,
          fullPath:
            bucketName +
            "/" +
            newsCollection +
            "/" +
            postedDate +
            "/" +
            item.name,
        }));

        const finalNewsData = {
          ...newsData,
          imagesInfo,
          postedDate,
        };
        const result = await fnSaveNewsDataToDB(finalNewsData, newsCollection);
        if (result) setInProgress(false);
      }
    }
  };
  // const uploadNewsHandler = (event) => {
  //   event.preventDefault();

  //   const resultCheck = fnCheckPostingFormat(newsData);
  //   // console.log("resultCheck", resultCheck);
  //   if (!resultCheck) {
  //     alert("You haven't add data for all language");
  //   } else {
  //     newsData["images"] = files.map((item) => item.base64);
  //     // newsData["images"] = files.target.files;
  //     console.log("news info", newsData);

  //     fetch("/api/news", {
  //       method: "POST",
  //       body: JSON.stringify(newsData),
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log("News inserted", data))
  //       .catch((error) => console.log(error));
  //   }
  // };

  // console.log("file", files);

  return (
    <div>
      <p className="text-2xl font-semibold text-blue-900">Booking News</p>
      <div className="h-1 w-20 bg-web-yellow mb-10" />
      <div className="border shadow-sm rounded-sm bg-gray-50">
        {inProgress && <LinearProgress />}

        <div className="p-10">
          <form onSubmit={uploadNewsHandler}>
            <FormControl
              sx={{ m: 1, minWidth: 150, backgroundColor: "white" }}
              size="small"
            >
              <InputLabel id="demo-select-small">Select Language</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={selectedLanguage}
                label="Select Language"
                onChange={(event) => setSelectedLanguage(event.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="lao">Lao</MenuItem>
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="chiness">Chinese</MenuItem>
              </Select>
            </FormControl>
            <div className="mt-5 space-x-5">
              <label htmlFor="title">ຫົວຂໍ້ຂ່າວ</label>
              <input
                id="title"
                className="outline-none border w-72"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="description">ເນື້ອໃນຂ່າວ</label>
              <div className="flex flex-col">
                <textarea
                  id="description"
                  rows={10}
                  className="outline-none border"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-5">
              <FileBase64 multiple={true} onDone={(e) => setFiles(e)} />
            </div>

            {filesSize > process.env.NEXT_PUBLIC_UPLOAD_FILE_SIZE && (
              <p className="font-semibold italic">
                NOTE: Size of all pictures should not over{" "}
                {`${process.env.NEXT_PUBLIC_UPLOAD_FILE_SIZE / 1024}`}mb. But
                your files size is {(filesSize / 1024).toFixed(2)}mb.
              </p>
            )}

            <div className="w-full flex flex-col items-end space-y-5 mt-5">
              <Button
                variant="outlined"
                color="warning"
                sx={{ width: "120px" }}
                onClick={postLanguageHandler}
              >
                Confirm {selectedLanguage}
              </Button>

              <Button
                variant="outlined"
                sx={{ width: "120px" }}
                type="submit"
                disabled={
                  filesSize > process.env.NEXT_PUBLIC_UPLOAD_FILE_SIZE ||
                  title === "" ||
                  description === ""
                }
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsBackend;
