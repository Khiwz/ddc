import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { fnUpdateBannerDesc1 } from "../../util/banner-firebase";

function BackendBanner({ data }) {
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [modifiedDataDesc1, setModifiedDataDesc1] = useState({
    lao: "",
    english: "",
    chiness: "",
  });
  const [modifiedDataDesc2, setModifiedDataDesc2] = useState({
    lao: "",
    english: "",
    chiness: "",
  });
  const [modifiedDataDesc3, setModifiedDataDesc3] = useState({
    lao: "",
    english: "",
    chiness: "",
  });
  const [selectedData, setSelectedData] = useState();

  useEffect(() => {
    const findResult = data.find(
      (item) => item.text.english === selectedBusiness
    );
    setSelectedData(findResult);
  }, [selectedBusiness]);

  const confirmUpdateHandler = async () => {
    const desc1Lao =
      modifiedDataDesc1.lao !== ""
        ? modifiedDataDesc1.lao
        : selectedData.desc1.lao;
    const desc1English =
      modifiedDataDesc1.english !== ""
        ? modifiedDataDesc1.english
        : selectedData.desc1.english;
    const desc1Chiness =
      modifiedDataDesc1.chiness !== ""
        ? modifiedDataDesc1.chiness
        : selectedData.desc1.chiness;

    const result = await fnUpdateBannerDesc1(
      selectedBusiness,
      desc1Lao,
      desc1English,
      desc1Chiness
    );
    alert(result.message);
  };

  // console.log("selectedData", selectedData);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
        <InputLabel>Select Business</InputLabel>
        <Select
          value={selectedBusiness}
          label="Select Business"
          onChange={(event) => setSelectedBusiness(event.target.value)}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item.text.english}>
              {item.text.english}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedData && (
        <div>
          <div>
            <p>Description 1</p>
            <div>
              <label htmlFor="desc1">Lao</label>
              <input
                id="desc1"
                defaultValue={selectedData.desc1.lao}
                onChange={(e) =>
                  setModifiedDataDesc1({
                    ...modifiedDataDesc1,
                    lao: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="desc1">English</label>
              <input
                id="desc1"
                defaultValue={selectedData.desc1.english}
                onChange={(e) =>
                  setModifiedDataDesc1({
                    ...modifiedDataDesc1,
                    english: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="desc1">Chinese</label>
              <input
                id="desc1"
                defaultValue={selectedData.desc1.chiness}
                onChange={(e) =>
                  setModifiedDataDesc1({
                    ...modifiedDataDesc1,
                    chiness: e.target.value,
                  })
                }
              />
            </div>
            <button onClick={confirmUpdateHandler}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BackendBanner;
