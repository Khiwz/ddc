import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Container } from "@mui/material";
import { listProjectCard, menuProjectSection } from "../../constant/list-info";
import { useSelector } from "react-redux";
import Link from "next/link";

const pageInfo = {
  ddcProject: {
    lao: "ໂຄງການຂອງກຸ່ມບໍລິສັດດວງຈະເລີນ",
    english: "DDC'S PROJECTS",
    chiness: "DDC 的項目",
  },
  buttonAllProject: {
    lao: "ໂຄງການ ທັງໝົດ",
    english: "ALL PROJECTS",
    chiness: "所有項目",
  },
};

function Projects() {
  const [menuSelected, setMenuSelected] = useState("all");
  const [projects, setProjects] = useState([]);
  const { languageStore } = useSelector((state) => state.language);

  useEffect(() => {
    if (menuSelected.toLocaleLowerCase() === "all") {
      setProjects(listProjectCard);
    } else {
      const filteredProjects = listProjectCard.filter((project) =>
        project.trigger.toLowerCase().includes(menuSelected)
      );
      setProjects(filteredProjects);
    }
  }, [menuSelected]);

  return (
    <div className="section-padding-model">
      <Container maxWidth="lg">
        <div className="w-full flex mb-16">
          <p className="flex-1 text-2xl font-bold text-gray-700">
            {pageInfo.ddcProject[languageStore]}
          </p>
          <div className="flex justify-end text-gray-600">
            {menuProjectSection.map((item, index) => (
              <div key={index} className="flex items-center">
                <p
                  className={`${
                    item.trigger.toLowerCase() === menuSelected &&
                    "text-web-yellow"
                  } hover:text-web-yellow w-max uppercase cursor-pointer transition-colors ease-in-out duration-200`}
                  onClick={() => setMenuSelected(item.trigger.toLowerCase())}
                >
                  {item.menu[languageStore]}
                </p>
                {index !== menuProjectSection.length - 1 && (
                  <div className="border-l-2 h-4 mx-2 border-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="grid grid-cols-3 gap-5 w-fit">
          {projects.map((item, i) => (
            <div key={i} className={`group shadow-md`}>
              <div className="service-image-container">
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover z-0 rounded-sm"
                />
                <div className="image-overlay-hover z-10" />

                <div className="image-overlay-hover-text z-20 flex justify-center items-center">
                  <a
                    href={item.link}
                    className="px-3 py-2 w-fit rounded-sm capitalize cursor-pointer text-white border hover:bg-web-yellow hover:text-white hover:border-web-yellow mb-5"
                  >
                    <BsSearch fontSize={18} />
                  </a>
                </div>
              </div>
              <div className="h-20 px-3 w-full bg-gray-100">
                <div className="flex flex-col justify-center h-full">
                  <a
                    href={item.link}
                    className="font-semibold uppercase text-gray-600 hover:text-web-yellow cursor-pointer"
                  >
                    {item.title[languageStore]}
                  </a>
                  <div className="flex items-center justify-start space-x-3 text-gray-500 text-sm">
                    <p>{item.business[languageStore]}</p>
                    <div className="border-l-2 h-3" />
                    <p>{item.type[languageStore]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className="text-center mt-10">
        <Link href="/business">
          <a className="button-style-classic">
            {pageInfo.buttonAllProject[languageStore]}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
