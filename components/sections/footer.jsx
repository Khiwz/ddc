import { Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import { BiMapPin } from "react-icons/bi";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import OfficeLocation from "../model/office-location";
import RPSpeedDial from "../model/rp-speed-dial";
import { useSelector } from "react-redux";
import { listNavbarData } from "../../constant/language-navbar";

const pageInfo = {
  description: {
    lao: "ພວກ​ເຮົາ​ມີ​ຫຼາຍ​ກວ່າ 25 ປີ​ຂອງ​ປະ​ສົບ​ການ​ທີ່​ສາ​ມາດ​ຊ່ວຍ​ໃຫ້​ໂຄງ​ການ​ຂອງ​ທ່ານ​ດໍາ​ເນີນ​ການ​ຢ່າງ​ສະ​ດວກ​.",
    english:
      "We have over 25 years of experien able to help your project running smoothly.",
    chiness: "我們擁有超過 25 年的經驗，能夠幫助您的項目順利進行。",
  },
  location: {
    lao: "ກມ. 19 ຖະໜົນ ວຽງຈັນ 450 ປີ",
    english: "Km 19 Vientiane Road 450 years",
    chiness: "萬象路 19 公里 450年",
  },
  address: {
    lao: "ບ້ານ ໂພນທອງ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ",
    english:
      "Phonethong Village, Xaysetha District, Vientiane Capital, Lao P.D.R",
    chiness: "電話通村, 賽塞塔區, 老撾人民民主共和國萬象首都",
  },
  menu: {
    lao: "ເມນູ",
    english: "Menu",
    chiness: "菜單",
  },
  officeLocation: {
    lao: "ທີ່ຕັ້ງຫ້ອງການ",
    english: "Location",
    chiness: "辦公地點",
  },
  developBy: {
    lao: "ພັດທະນາໂດຍ:",
    english: "Developed By:",
    chiness: "由開發",
  },
  copyright: {
    lao: "ສະຫງວນລິຂະສິດ © ",
    english: "Copyright © ",
    chiness: "版權",
  },
};

function Footer() {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <footer>
      <div className="bg-blue-900 section-padding-model">
        <Container>
          <div className="w-full text-gray-100 grid grid-cols-1 sm:grid-cols-3 sm:gap-10">
            {/* left */}
            <div className="text-sm md:text-lg">
              {/* <div className="flex items-center mb-3">
                <img
                  src="/images/logo/ddc-logo-small.png"
                  alt="DDC Group Logo"
                  className="object-contain h-16 mr-5"
                />
                <p className="text-3xl font-bold text-white">DDC GROUP</p>
              </div> */}

              <p className="mb-5">{pageInfo.description[languageStore]}</p>

              <div className="flex items-start mb-3 text-sm md:text-lg">
                <div className="w-10">
                  <BiMapPin fontSize={25} className="mr-3 text-web-yellow" />
                </div>
                <div>
                  <p className="text-sm capitalize">
                    {pageInfo.location[languageStore]}
                  </p>
                  <p className="text-sm capitalize">
                    {pageInfo.address[languageStore]}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                <div className="w-10">
                  <MdCall fontSize={25} className="mr-3 text-web-yellow" />
                </div>
                <div>
                  <p className="uppercase text-sm">(+856) 20-2208-3888</p>
                  <p className="uppercase text-sm">(+856) 20-9991-9456</p>
                  <p className="uppercase text-sm">(+856) 20-2249-8777</p>
                </div>
              </div>

              <div className="flex items-start mb-10">
                <div className="w-10">
                  <MdEmail fontSize={20} className="mr-3 text-web-yellow" />
                </div>
                <div>
                  <p className="text-sm">info@ddcgroups.la</p>
                  <p className="text-sm">khoun.silaxa@gmail.com</p>
                </div>
              </div>

              <div className="mb-10 flex space-x-5">
                <a
                  href="https://www.facebook.com/profile.php?id=100049209576020"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare
                    className="hover:text-web-yellow hover:scale-110 transition-all duration-300 cursor-pointer"
                    fontSize={35}
                  />
                </a>
                <a
                  href="https://m.me/100258901595977"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookMessenger
                    className="hover:text-web-yellow hover:scale-110 transition-all duration-300 cursor-pointer"
                    fontSize={35}
                  />
                </a>
                <a
                  href="https://wa.me/+8562022083888?text=ສະບາຍດີ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsappSquare
                    className="hover:text-web-yellow hover:scale-110 transition-all duration-300 cursor-pointer"
                    fontSize={35}
                  />
                </a>
                <a
                  href="mailto:Info@ddcgroups.la"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail
                    className="hover:text-web-yellow hover:scale-110 transition-all duration-300 cursor-pointer"
                    fontSize={35}
                  />
                </a>
              </div>
            </div>

            {/* center */}
            <div className="text-sm md:text-lg">
              <div className="h-16 mb-3 flex flex-col justify-center">
                <p className="text-lg font-semibold">
                  {pageInfo.menu[languageStore]}
                </p>
                <div className="border-b-2 border-web-yellow w-12" />
              </div>
              <ul>
                {listNavbarData[languageStore]?.menu?.map((item, index) => (
                  <li key={index} className="mb-2 text-sm">
                    <a
                      href={item.link}
                      className="uppercase hover:text-web-yellow hover:font-semibold"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* right */}
            <div className="flex flex-col">
              <div className="h-16 mb-3 flex flex-col justify-center">
                <p className="text-lg font-semibold">
                  {pageInfo.officeLocation[languageStore]}
                </p>
                <div className="border-b-2 border-web-yellow w-12" />
              </div>
              <div className="flex-1">
                <OfficeLocation />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="h-10 w-full bg-black/95 flex">
        <div className="flex-1">
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-gray-400 text-xs md:text-sm">
              {pageInfo.copyright[languageStore]}{" "}
              <Link color="inherit" href="https://www.ddcgroups.la/">
                www.ddcgroups.la
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </p>
          </div>
        </div>
        <div className="text-white hidden md:flex items-center">
          <p className="mr-16 uppercase text-xs text-gray-400">
            {pageInfo.developBy[languageStore]}
          </p>
        </div>
      </div>
      <RPSpeedDial />
    </footer>
  );
}

export default Footer;
