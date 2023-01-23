import {
  Alert,
  CircularProgress,
  Container,
  Snackbar,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaMapMarkedAlt, FaMobileAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useSelector } from "react-redux";
import { sendContactForm } from "../../util/api";
import BannerSubpage from "../sections/banner-subpage";
import OfficeLocation from "./office-location";
import SectionHeader from "./section-header";

const pageInfo = {
  infoContact: {
    lao: "ຂໍ້ມູນ ແລະ ການຕິດຕໍ່ພົວພັນ",
    english: "Information and Contact",
    chiness: "信息和聯繫方式",
  },
  fax: {
    lao: "ແຟັກ",
    english: "fax",
    chiness: "傳真",
  },
  support: {
    lao: "ບໍລິການ 24/7 - ອອນລາຍ 24 ຊົ່ວໂມງ",
    english: "Support 24/7 - Online 24 hours",
    chiness: "支持 24/7 - 24 小時在線",
  },
  workingHour: {
    lao: "ວັນຈັນ-ວັນເສົາ: 8:00 ໂມງ ຫາ 17:00 ໂມງ",
    english: "Mon-Sat: 8:00 am to 5:00 pm",
    chiness: "週一至週六：上午 8:00 至下午 5:00",
  },
  sunday: {
    lao: "ວັນອາທິດ: ປິດ",
    english: "Sunday: Close",
    chiness: "週日：關閉",
  },
  mailUsNow: {
    lao: "ສົ່ງອີເມວຕອນນີ້",
    english: "Mail us now",
    chiness: "立即郵寄",
  },
  name: {
    lao: "ຊື່*",
    english: "Name*",
    chiness: "姓名",
  },
  yourEmail: {
    lao: "ອີເມລ*",
    english: "Your email*",
    chiness: "你的郵件",
  },
  yourMessage: {
    lao: "ຂໍ້ຄວາມ*",
    english: "Your message*",
    chiness: "你的信息",
  },
  send: {
    lao: "ສົ່ງ",
    english: "Send",
    chiness: "發送",
  },
  contactDesc: {
    lao: "ທ່ານມີຄວາມສົນໃຈໃນການຄົ້ນຫາວິທີການບໍລິການສາມາດເຮັດໃຫ້ໂຄງການຂອງທ່ານປະສົບຜົນສໍາເລັດບໍ? ສໍາລັບຂໍ້ມູນເພີ່ມເຕີມກ່ຽວກັບການບໍລິການຂອງພວກເຮົາ, ກະລຸນາຕິດຕໍ່ພວກເຮົາ.",
    english:
      "Are you interested in finding out how services can make your project success? For more information on our services please contact us.",
    chiness:
      "您是否有興趣了解服務如何使您的項目取得成功？ 有關我們服務的更多信息，請與我們聯繫。",
  },
};

const initValue = { name: "", email: "", message: "" };

function Contact({ phone, fax, address, email }) {
  const { languageStore } = useSelector((state) => state.language);
  const [state, setState] = useState(initValue);
  const [isSending, setIsSending] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handlerChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handlerCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  const sendMailHandler = async (event) => {
    event.preventDefault();
    // console.log("state", state);

    setIsSending(true);
    const result = await sendContactForm(state);
    if (result.success) {
      setIsSending(false);
      setState(initValue);
      setSnackBarOpen(true);
    }
  };

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <Container maxWidth="lg">
        <div className="section-padding-model flex-1">
          <div className="flex justify-center">
            <SectionHeader
              title={pageInfo.infoContact[languageStore]}
              description={pageInfo.contactDesc[languageStore]}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md shadow-sm text-neutral-500 hover:shadow-md transition-all duration-150">
              <FaMobileAlt fontSize={50} className="text-web-yellow mb-5" />
              {phone.map((item, index) => (
                <p
                  key={index}
                  className="text-neutral-700 font-semibold text-center"
                >
                  {item}
                </p>
              ))}

              {fax !== "" && (
                <p className="text-neutral-700 font-semibold">
                  {pageInfo.fax[languageStore] + " " + fax}
                </p>
              )}
              <p className="mt-3 text-sm">{pageInfo.support[languageStore]}</p>
            </div>
            <div className="flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md shadow-sm text-neutral-500 hover:shadow-md transition-all duration-150">
              <FaMapMarkedAlt fontSize={50} className="text-web-yellow mb-5" />
              {address.map((item, index) => (
                <p
                  key={index}
                  className="text-neutral-700 font-semibold text-center"
                >
                  {item}
                </p>
              ))}
              <p className="mt-3 text-sm">
                {pageInfo.workingHour[languageStore]}
              </p>
              <p className="text-sm">{pageInfo.sunday[languageStore]}</p>
            </div>
            <div className="flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md shadow-sm text-neutral-500 hover:shadow-md transition-all duration-150">
              <HiMail fontSize={50} className="text-web-yellow mb-5" />
              {email.map((item, index) => (
                <p key={index} className="text-neutral-700 font-semibold">
                  {item}
                </p>
              ))}
              <a
                href={`mailto:info@ddcgroups.la;khoun.silaxa@gmail.com`}
                className="text-sm border mt-2 px-5 py-2 hover:bg-web-yellow transition-colors duration-200 rounded-sm hover:border-web-yellow"
              >
                {pageInfo.mailUsNow[languageStore]}
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-16">
            <div className="flex flex-col space-y-5 w-full lg:w-1/3 lg:pr-3 mb-10 lg:mb-0">
              <input
                placeholder={pageInfo.name[languageStore]}
                className="border outline-none py-3 px-5 bg-gray-100"
                name="name"
                value={state.name}
                onChange={handlerChange}
                readOnly={isSending}
                required
              />
              <input
                placeholder={pageInfo.yourEmail[languageStore]}
                className="border outline-none py-3 px-5 bg-gray-100"
                type="email"
                name="email"
                value={state.email}
                onChange={handlerChange}
                readOnly={isSending}
                required
              />
              <textarea
                placeholder={pageInfo.yourMessage[languageStore]}
                className="border outline-none py-3 px-5 bg-gray-100 resize-none"
                rows={8}
                name="message"
                value={state.message}
                onChange={handlerChange}
                readOnly={isSending}
                required
              />
              <button
                className="relative flex items-center justify-center py-3 border bg-web-yellow text-white group cursor-pointer"
                onClick={sendMailHandler}
                disabled={
                  isSending || !state.name || !state.email || !state.message
                }
              >
                <p className="text-xl uppercase mr-3 z-10">
                  {pageInfo.send[languageStore]}
                </p>
                {isSending ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : (
                  <AiOutlineSend fontSize={25} className="z-10" />
                )}
                <div className="absolute z-0 h-1 w-full bg-neutral-700 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-150" />
              </button>
            </div>
            <div className="flex-1 border ml-2">
              <OfficeLocation />
            </div>
          </div>
        </div>
      </Container>

      {snackBarOpen && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={snackBarOpen}
            autoHideDuration={6000}
            onClose={handlerCloseSnackBar}
          >
            <Alert
              onClose={handlerCloseSnackBar}
              severity="success"
              sx={{ width: "100%" }}
            >
              Your message has been sent!
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </div>
  );
}

export default Contact;
