import {
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { fnCheckPostingFormat } from "../../util/function";
import FileBase64 from "react-file-base64";
import { fnAddDocumentAutoId } from "../../util/career-firebase";

function CareerBackend() {
  const positionTitleRef = useRef();
  const positionAmountRef = useRef();
  const requirementRef = useRef();
  const offerringRef = useRef();
  const [condition, setCondition] = useState({ closedDate: "", remark: "" });
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [careerData, setCareerData] = useState({});
  const [file, setFile] = useState();
  const [inProgress, setInProgress] = useState(false);

  const postLanguageHandler = () => {
    if (selectedLanguage === "all") {
      let objectCareer = {};
      ["lao", "english", "chiness"].map(
        (item) =>
          (objectCareer[item] = {
            positionTitle: positionTitleRef.current.value,
            positionAmount: positionAmountRef.current.value,
            requirementDesc: requirementRef.current.value,
            offerringDesc: offerringRef.current.value,
            condition: condition,
          })
      );

      setCareerData(objectCareer);
      alert("All languages has been setted");
    } else {
      setCareerData({
        ...careerData,
        [selectedLanguage]: {
          positionTitle: positionTitleRef.current.value,
          positionAmount: positionAmountRef.current.value,
          requirementDesc: requirementRef.current.value,
          offerringDesc: offerringRef.current.value,
          condition: condition,
        },
      });

      alert("you have completed setting for " + selectedLanguage);
    }
  };

  const uploadCareerHandler = async (event) => {
    event.preventDefault();
    setInProgress(true);
    const collectionName = process.env.NEXT_PUBLIC_CAREER_COLLECTION;
    const attachFile = file;
    careerData["postedDate"] = new Date().toISOString();

    const resultCheck = fnCheckPostingFormat(careerData, attachFile);
    console.log("resultCheck", resultCheck);
    if (!resultCheck) {
      alert("You haven't add data for all language");
    } else {
      // console.log("post info", careerData);
      const result = await fnAddDocumentAutoId(
        careerData,
        attachFile,
        collectionName
      );
      if (result) setInProgress(false);
    }
  };

  // const uploadCareerHandler = (event) => {
  //   event.preventDefault();
  //   careerData["applicationDetail"] = file;

  //   const resultCheck = fnCheckPostingFormat(careerData);
  //   // console.log("resultCheck", resultCheck);
  //   if (!resultCheck) {
  //     alert("You haven't add data for all language");
  //   } else {
  //     // console.log("post info", careerData);

  //     fetch("/api/career", {
  //       method: "POST",
  //       body: JSON.stringify(careerData),
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log("data insert", data));
  //   }
  // };

  // console.log("post info", file);

  return (
    <div>
      <p className="text-2xl font-semibold text-blue-900">Booking Career</p>
      <div className="h-1 w-20 bg-web-yellow mb-10" />
      <div className="border shadow-sm rounded-sm bg-gray-50 ">
        {inProgress && <LinearProgress />}
        <div className="p-10">
          <form onSubmit={uploadCareerHandler}>
            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
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
            <div className="flex mt-5 space-x-10">
              <div className="flex-1 space-x-5">
                <label htmlFor="positionTitle">ຊື່ຕຳແໜ່ງ</label>
                <input
                  id="positionTitle"
                  className="outline-none border w-72"
                  ref={positionTitleRef}
                />
              </div>
              <div className="flex-1 space-x-5">
                <label htmlFor="positionAmount">ຈຳນວນຕຳແໜ່ງ</label>
                <input
                  id="positionAmount"
                  className="outline-none border w-72"
                  ref={positionAmountRef}
                />
              </div>
            </div>

            <div className="flex mt-5 space-x-10">
              <div className="flex-1">
                <label htmlFor="requirementDesc">ຄຸນສົມບັດທີ່ຕ້ອງການ</label>
                <div className="flex flex-col">
                  <textarea
                    rows={10}
                    className="outline-none border"
                    ref={requirementRef}
                  />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="offerringDesc">ຜົນປະໂຫຍດທີ່ຈະໄດ້ຮັບ</label>
                <div className="flex flex-col">
                  <textarea
                    rows={10}
                    className="outline-none border"
                    ref={offerringRef}
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-10">
              <div className="flex-1 mt-5 space-x-5">
                <label htmlFor="closedDate">ປິດຮັບສະໝັກ</label>
                <input
                  id="closedDate"
                  className="outline-none border"
                  type="date"
                  onChange={(e) =>
                    setCondition({ ...condition, closedDate: e.target.value })
                  }
                />
              </div>

              <div className="flex-1 mt-5 space-x-5 flex">
                <label htmlFor="remark">ໝາຍເຫດ</label>
                <input
                  id="remark"
                  className="outline-none border w-full"
                  onChange={(e) =>
                    setCondition({ ...condition, remark: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-5">
              <FileBase64 multiple={false} onDone={(e) => setFile(e)} />
            </div>

            <div className="w-full flex flex-col items-end space-y-5 mt-5">
              <Button
                variant="outlined"
                color="warning"
                sx={{ width: "120px" }}
                onClick={postLanguageHandler}
              >
                Confirm
              </Button>

              <Button variant="outlined" sx={{ width: "120px" }} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CareerBackend;
