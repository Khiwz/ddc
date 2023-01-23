import React from "react";
import MiniDrawer from "../../components/backend/drawer";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { fnGetAllDocs } from "../../util/career-firebase";
import { fnGetAllNewsDocs } from "../../util/news-firebase";
import { fnReadFileSync } from "../../util/function";

function DashboardPage({ career, news }) {
  //   console.log("news", news);
  return (
    <MiniDrawer>
      <div className="flex justify-around flex-wrap space-y-10 sm:space-y-0">
        <div className="border p-5 rounded-md shadow-md bg-slate-50 flex flex-col items-center w-60 hover:shadow-lg">
          <GroupAddIcon
            sx={{
              width: "50px",
              height: "50px",
              color: "rgb(30 58 138)",
            }}
          />
          <p className="mb-5 uppercase font-semibold">career</p>
          <div className="flex justify-between w-full text-lg">
            <p>Total Posted</p>
            <p>{career.length}</p>
          </div>
          <div className="flex justify-between w-full text-lg">
            <p>Opening Posted</p>
            <p>{career.filter((item) => item === "open").length}</p>
          </div>
          <div className="flex justify-between w-full text-lg">
            <p>Opening Posted</p>
            <p>{career.filter((item) => item === "closed").length}</p>
          </div>
        </div>

        <div className="border p-5 rounded-md shadow-md bg-slate-50 flex flex-col items-center w-60 hover:shadow-lg">
          <NewspaperIcon
            sx={{
              width: "50px",
              height: "50px",
              color: "rgb(30 58 138)",
            }}
          />
          <p className="mb-5 uppercase font-semibold">News</p>
          <div className="flex justify-between w-full text-lg">
            <p>Total News Posted</p>
            <p>{news}</p>
          </div>
        </div>
      </div>
    </MiniDrawer>
  );
}

export default DashboardPage;

export async function getServerSideProps(context) {
  const careerCollection = process.env.NEXT_PUBLIC_CAREER_COLLECTION;
  const careerData = await fnGetAllDocs(careerCollection);
  const today = new Date().toISOString();
  const numToday = fnFormatDateNumber(today);

  var arrCareer = [];
  for (let index = 0; index < careerData.length; index++) {
    const element = careerData[index];
    const closeDate = fnFormatDateNumber(element.lao.condition.closedDate);
    const isClosed = closeDate > numToday ? "open" : "closed";
    arrCareer.push(isClosed);
  }

  const newsCollection = process.env.NEXT_PUBLIC_NEWS_COLLECTION;
  const newsData = await fnGetAllNewsDocs(newsCollection);

  return { props: { career: arrCareer, news: newsData.length } };
}

function fnFormatDateNumber(date) {
  return Number(date.substring(0, 10).split("-").join(""));
}
