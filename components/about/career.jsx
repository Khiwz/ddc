import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import CareerAccordions from "../model/career-accordion";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import SocialShare from "../model/social-share";
import { useRouter } from "next/router";
import BannerSubpage from "../sections/banner-subpage";

const pageInfo = {
  intro1: {
    lao: "ພວກເຮົາຕ້ອງການທ່ານ",
    english: "we need you",
    chiness: "我們需要你",
  },
  intro2: {
    lao: "ມາເຮັດວຽກກັບພວກເຮົາ",
    english: "to join our team",
    chiness: "加入我們的團隊",
  },
  applyButton: {
    lao: "ສະໝັກຕອນນີ້",
    english: "apply now",
    chiness: "現在申請",
  },
  hiringTitle: {
    lao: "ພວກເຮົາກຳລັງຈ້າງງານ",
    english: "we are hiring",
    chiness: "我們正在招聘",
  },
  hiringDescription: {
    lao: "ຊອກຫາວຽກທີ່ເໝາະສົມກັບທັກສະຂອງເຈົ້າ ແລະສະໝັກເປັນໜຶ່ງໃນທີມຂອງພວກເຮົາໃນກຸ່ມ DDC.",
    english:
      "There are several position posted below and waiting you. find the job appropriate your skill and apply to become one of our team in DDC group.",
    chiness:
      "下面有幾個職位，等著你。 找到適合您技能的工作併申請成為我們 DDC 團隊的一員。",
  },
  whoWeAre: {
    lao: "ພວກເຮົາແມ່ນໃຜ ?",
    english: "Who we are ?",
    chiness: "我們是誰 ？",
  },
  howWeOperate: {
    lao: "ພວກເຮົາດຳເນີນວຽກແບບໃດ ?",
    english: "How we Operate ?",
    chiness: "我們如何工作 ？",
  },
  whatWeDo: {
    lao: "ພວກເຮົາເຮັດຫຍັງແນ່ ?",
    english: "What we do ?",
    chiness: "我們所做的 ？",
  },
  howToApplicant: {
    lao: "ວິທີການສະຫມັກ",
    english: "how to apply",
    chiness: "如何申請",
  },
  howToApplicantDesc: {
    lao: "ຜູ້ສົນໃຈສາມາດປະກອບຟອມສະໝັກໃຫ້ຮຽບຮ້ອຍ ແລ້ວສົ່ງແບບຟອມສະໝັກ, CV, Cover letter ຂອງຕົນມາທີ່ອີເມລ: career@ddcgroups.la ຫຼື ທາງວອດແອບ: 020 5661 8515 ຫຼື ຢື່ນເອກະສານດ້ວຍຕົນເອງບໍລິສັດ ພະແນກບຸກຄະລາກອນໃນໂມງລັດຖະການ. ສາມາດສອບຖາມລາຍລະອຽດໄດ້ທີ່: (+856)-21 229007, (+856)-20 2221 2502, (+856)-20 56618515, (+856)-20 2208 3888",
    english:
      "Interested applicant can download and submit your application form, CV and cover letter to e-mail: career@ddcgroups.la or WhatsApp: 020 5661 8515 or hand over the documents to the personnel department of the company during office hours. You can ask for details at: (+856)-21 229007, (+856)-20 2221 2502, (+856)-20 56618515, (+856)-20 2208 3888",
    chiness:
      "有意者可填寫申請表，並將申請表、簡歷和求職信發送至郵箱：career@ddcgroups.la 或WhatsApp：020 5661 8515 或在辦公時間將文件交給公司人事部。 詳情請諮詢：(+856)-21 229007, (+856)-20 2221 2502, (+856)-20 56618515, (+856)-20 2208 3888",
  },
  applicationForm: {
    lao: "ດາວໂຫຼດໃບສະໝັກງານ",
    english: "download application form",
    chiness: "下載申請表",
  },
};

function Career({ dataset }) {
  const { languageStore } = useSelector((state) => state.language);
  const route = useRouter();
  const [fullURL, setFullURL] = useState("");

  useEffect(() => {
    setFullURL(window.location.href);
  }, [route]);

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />

      <div className="section-padding-model">
        <Container maxWidth="lg">
          <div className="flex space-x-10">
            {/* ======== left site */}
            <div className="flex-1">
              <div className="relative w-full h-96 mb-16">
                <img
                  src="/images/career/career-1.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-20 lg:left-16 h-1/2 w-full lg:w-1/2 bg-blue-900 bg-opacity-50 text-white px-10 py-5 rounded-sm shadow-md">
                  <p className="text-2xl uppercase mb-3">
                    {pageInfo.intro1[languageStore]}
                  </p>
                  <p className="text-3xl uppercase font-bold mb-3">
                    {pageInfo.intro2[languageStore]}
                  </p>
                  <a
                    href="mailto:info@ddcgroups.la"
                    className="px-5 py-1 lg:px-10 lg:py-3 bg-web-yellow text-white max-w-max uppercase rounded-sm hover:bg-blue-900 transition-colors duration-200"
                  >
                    {pageInfo.applyButton[languageStore]}
                  </a>
                </div>
              </div>

              <div className="mb-20">
                <p className="text-3xl uppercase mb-3">
                  {pageInfo.hiringTitle[languageStore]}
                </p>
                <div className="h-1 w-20 bg-web-yellow mb-10" />
                <p className="text-justify mb-10">
                  {pageInfo.hiringDescription[languageStore]}
                </p>

                <CareerAccordions data={dataset} />
              </div>

              <div className="flex flex-col items-center text-neutral-500 border-4 border-web-yellow p-5 bg-neutral-100">
                <p className="uppercase text-xl font-bold mb-3">
                  {pageInfo.howToApplicant[languageStore]}
                </p>
                {/* <div className="h-1 w-20 bg-web-yellow mb-5" /> */}
                <p className="text-center mb-5">
                  {pageInfo.howToApplicantDesc[languageStore]}
                </p>
                <div className="flex items-center space-x-3 bg-web-yellow max-w-max px-5 py-2 text-white hover:bg-blue-900 transition-colors duration-200 cursor-pointer rounded-sm">
                  <BsDownload />
                  <a
                    href="/files/about/application-form.pdf"
                    target="_blank"
                    className="uppercase"
                  >
                    {pageInfo.applicationForm[languageStore]}
                  </a>
                </div>
              </div>

              <div className="flex justify-end">
                <SocialShare url={fullURL} />
              </div>
            </div>

            {/* ======== right site */}
            <div className="hidden lg:block relative w-64">
              <div className="sticky top-20 left-0 bg-blue-900 px-8 border">
                <Link href="/about/history" passHref>
                  <p className="py-5 text-white uppercase hover:text-web-yellow transition-colors duration-150 border-b border-gray-500 cursor-pointer">
                    {pageInfo.whoWeAre[languageStore]}
                  </p>
                </Link>
                <Link href="/about/operation-award" passHref>
                  <p className="py-5 text-white uppercase hover:text-web-yellow transition-colors duration-150 border-b border-gray-500 cursor-pointer">
                    {pageInfo.howWeOperate[languageStore]}
                  </p>
                </Link>
                <Link href="/business" passHref>
                  <p className="py-5 text-white uppercase hover:text-web-yellow transition-colors duration-150 cursor-pointer">
                    {pageInfo.whatWeDo[languageStore]}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Career;
