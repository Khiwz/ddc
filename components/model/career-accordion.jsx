import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  BsCalendar2Day,
  BsDownload,
  BsExclamationTriangle,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { fnGetFileStorage } from "../../util/career-firebase";

const pageInfo = {
  requirementTitle: {
    lao: "ຄຸນສົມບັດຂອງຜູ້ສະໝັກ",
    english: "Requirement",
    chiness: "要求",
  },
  offerringTitle: {
    lao: "ພວກເຮົາຍັງສະເຫນີຜົນປະໂຫຍດດັ່ງຕໍ່ໄປນີ້",
    english: "We also offer the follow benefits",
    chiness: "我們還提供以下好處",
  },
  closedDate: {
    lao: "ປິດຮັບສະໝັກ",
    english: "Application closed",
    chiness: "申請已關閉",
  },
  remark: {
    lao: "ໝາຍເຫດ",
    english: "remark",
    chiness: "評論",
  },
  applicationDetail: {
    lao: "ດາວໂຫຼດລາຍລະອຽດສະໝັກງານ",
    english: "download application details",
    chiness: "下載申請詳情",
  },
};
export default function CareerAccordions({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const { languageStore } = useSelector((state) => state.language);

  // console.log("data career", data);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={
              expanded === index
                ? {
                    backgroundColor: "#FFC30C",
                    color: "#303030",
                  }
                : { backgroundColor: "#FAFAFA" }
            }
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontFamily: "boonhome-400",
                fontWeight: "bold",
              }}
            >
              {item[languageStore].positionTitle}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                fontFamily: "boonhome-400",
              }}
            >
              {item[languageStore].positionAmount}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 mb-10">
              <div className="flex-1">
                <p className="font-bold mb-3 uppercase">
                  {pageInfo.requirementTitle[languageStore]}
                </p>
                <pre className="TextDescription">
                  {item[languageStore].requirementDesc}
                </pre>
              </div>

              {item[languageStore].offerringDesc && (
                <div className="flex-1">
                  <p className="font-bold mb-3 uppercase">
                    {pageInfo.offerringTitle[languageStore]}
                  </p>
                  <pre className="TextDescription">
                    {item[languageStore].offerringDesc}
                  </pre>
                </div>
              )}
            </div>

            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg: space-x-10 mb-10">
              <div className="flex-1">
                <div className="flex items-center space-x-3 text-red-500">
                  <BsCalendar2Day />{" "}
                  <p className="uppercase font-bold">
                    {pageInfo.closedDate[languageStore]}
                  </p>
                </div>
                <p className="text-red-500">
                  {item[languageStore].condition?.closedDate}
                </p>
                <br />

                {item[languageStore].condition.remark && (
                  <div>
                    <div className="flex items-center space-x-3">
                      <BsExclamationTriangle />{" "}
                      <p className="uppercase font-bold">
                        {pageInfo.remark[languageStore]}
                      </p>
                    </div>
                    <p>{item[languageStore].condition.remark}</p>
                  </div>
                )}
              </div>

              {item.fileInfo.url !== null && (
                <div className="flex-1">
                  <div className="space-y-5 flex flex-col items-end">
                    <div className="flex items-center space-x-3 bg-web-yellow max-w-max px-5 py-3 text-neutral-700 hover:bg-blue-900 hover:text-white transition-colors duration-200 cursor-pointer rounded-sm">
                      <BsDownload />
                      <a
                        href={item.fileInfo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="uppercase text-xs lg:text-sm"
                      >
                        {pageInfo.applicationDetail[languageStore]}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
