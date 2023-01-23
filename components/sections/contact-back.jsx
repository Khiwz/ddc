import React from "react";
import { FiChevronRight, FiLayers } from "react-icons/fi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { TbPhoneOutgoing } from "react-icons/tb";
import { Container, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import Link from "next/link";

const pageInfo = {
  headerTitle: {
    lao: "ຕິດ​ຕໍ່​ພວກ​ເຮົາ",
    english: "CONTACT US",
    chiness: "聯繫我們",
  },
  title: {
    lao: "ຕ້ອງການໃຫ້ພວກເຮົາຕິດຕໍ່ກັບຄືນ",
    english: "REQUEST CALL BACK",
    chiness: "請求回電",
  },
  description: {
    lao: "ທ່ານຕ້ອງການປຶກສາກັບທີ່ປຶກສາຂອງພວກເຮົາທາງໂທລະສັບບໍ່? ພຽງແຕ່ສົ່ງລາຍລະອຽດຂອງທ່ານ ແລ້ວພວກເຮົາຈະຕິດຕໍ່ກັນໃນໄວໆນີ້.",
    english:
      "Would you like to speak to one of our advisers over the phone? Just submit your details and we’ll be in touch shortly.",
    chiness:
      "您想通過電話與我們的一位顧問交談嗎？ 只需提交您的詳細信息，我們會盡快與您聯繫。",
  },
  name: {
    lao: "ຊື່*",
    english: "Name*",
    chiness: "姓名*",
  },
  email: {
    lao: "ອີເມລ*",
    english: "Email*",
    chiness: "電子郵件*",
  },
  phoneNumber: {
    lao: "ເລກໂທລະສັບ*",
    english: "Phone number*",
    chiness: "電話號碼*",
  },
  shortMessage: {
    lao: "ຂໍ້ຄວາມສັ້ນ*",
    english: "Short message*",
    chiness: "短消息*",
  },
  buttonSubmit: {
    lao: "ສົ່ງ",
    english: "Submit",
    chiness: "提交",
  },
};

function ContactBack() {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div className="contact-back-background-image">
      <div className="h-10 lg:h-12 flex bg-neutral-700 relative">
        <div className="w-2/3 h-full bg-web-yellow clip-path-style"></div>
        <div className="w-1/3 h-full bg-neutral-700"></div>
        <div className="absolute h-full w-full top-0 left-0 z-10">
          <Container
            maxWidth="lg"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="flex items-center h-full">
              <Link href="/contact" passHref>
                <a className="text-sm md:text-lg lg:text-xl font-extrabold text-neutral-700">
                  {pageInfo.headerTitle[languageStore]}
                </a>
              </Link>
            </div>
            {/* <div className="button-style shadow-sm rounded-sm bg-gray-200 h-10 w-28 lg:w-56 flex justify-center items-center group">
              <p className="absolute z-20 font-semibold group-hover:text-white transition-colors duration-300 flex lg:space-x-2 items-center justify-center">
                <span className="hidden lg:block">
                  <TbPhoneOutgoing fontSize={26} />{" "}
                </span>
                <span className="text-xs lg:text-lg">(856) 20-2249-8777</span>
              </p>
              <div className="button-style-1 z-10" />
            </div> */}
          </Container>
        </div>
      </div>

      {/* <div className="section-padding-model flex">
        <Container maxWidth="lg" sx={{ display: "flex" }}>
          <div className="flex-1 mr-10">
            <div className="text-3xl font-semibold text-white mb-3">
              {pageInfo.title[languageStore]}
            </div>
            <div className="flex items-center space-x-3 justify-start mb-5">
              <div className="w-16 border-b" />
              <FiLayers fontSize={30} className="text-yellow-400" />
              <div className="w-16 border-b" />
            </div>
            <p className="text-white text-lg">
              {pageInfo.description[languageStore]}
            </p>
          </div>

          <div className="flex-1 flex flex-col items-end space-y-3 ml-10">
            <input
              placeholder={pageInfo.name[languageStore]}
              className="w-96 px-5 py-3 border-none outline-web-yellow rounded-sm uppercase"
            />
            <input
              placeholder={pageInfo.email[languageStore]}
              className="w-96 px-5 py-3 border-none outline-web-yellow rounded-sm uppercase"
            />
            <input
              placeholder={pageInfo.phoneNumber[languageStore]}
              className="w-96 px-5 py-3 border-none outline-web-yellow rounded-sm uppercase"
            />
            <input
              placeholder={pageInfo.shortMessage[languageStore]}
              className="w-96 px-5 py-3 border-none outline-web-yellow rounded-sm uppercase"
            />
            <div className="button-style shadow-sm rounded-sm bg-gray-200 h-12 w-40 flex justify-center items-center group">
              <a
                href="#"
                className="absolute z-20 font-semibold text-lg group-hover:text-white transition-colors duration-300"
              >
                {pageInfo.buttonSubmit[languageStore]}
              </a>
              <div className="button-style-1 z-10" />
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  );
}

export default ContactBack;
