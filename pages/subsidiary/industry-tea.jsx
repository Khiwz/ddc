import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import { listHeaderModel } from "../../constant/list-info";
import Footer from "../../components/sections/footer";
import SubsidiaryDetail from "../../components/subsidiary/subsidiary-detail";
import { fnReadFileSync } from "../../util/function";

const pageInfo = {
  subsiContact: {
    lao: "ຂໍ້ມູນ ແລະ ການຕິດຕໍ່ພົວພັນ",
    english: "Information and Contact",
    chiness: "信息和聯繫方式",
  },
  subsiName: {
    lao: "ບໍລິສັດ ດວງຈະເລີນພັດທະນາອຸດສາຫະກຳໃບຊາ ຂາເຂົ້າ-ຂາອອກ ຈຳກັດ ຜູ້ດຽວ ",
    english:
      "DUANGCHALERN DEVELOPMENT TEA INDUSTRY IMPORT-EXPORT SOLE CO., LTD",
    chiness:
      "DUANGCHALERN DEVELOPMENT TEA INDUSTRY IMPORT-EXPORT SOLE CO., LTD",
  },
  subsiDescription: {
    lao: "ຈັດຕັ້ງກໍ່ສ້າງເປັນສວນຊາຂອງຕົນເອງ ແລະ ນຳໃຊ້ຮູບແບບອຸດສາຫະກຳທັນສະໄໝ. ທາງບໍລິສັດໄດ້ມີແຜນການ ແລະ ວິທີການຊຸກຍູ້, ສົ່ງເສີມປະຊາຊົນປະກອບສ່ວນເຂົ້າໃນການຜະລິດ ສ້າງລາຍຮັບໃຫ້ຄອບຄົວປະຊົາຊົນໃນຮູບແບບ 2+3, 4+1 ແລະ 1+4 (ຮູບແບບ 1+4 ແມ່ນແຮງງານເປັນຂອງປະຊາຊົນ, ສ່ວນດິນ, ທຶນ, ແນວພັນ, ເຕັກນິກການຜະລິດ ແລະ ການຕະຫຼາດເປັນຂອງບໍລິສັດ).",
    english:
      "Organize and build your own tea garden and use modern industrial. The company has plans and methods to promote and encourage people to contribute to production and generate income for families in the 2+3, 4+1 and 1+4 models (the 1+4 model is the labor of the people, the land, capital, seeds, production and marketing techniques belong to the company).",
    chiness:
      "組織建設自己的茶園，運用現代工業風。公司有計劃和辦法，以 2+3、4+1和 1+4模式（1+4模式是人的勞動，土地、資金、種子、產銷技術歸公司所有）。",
  },
  subsiImage: [
    {
      img: "/images/subsi/tea-industry/tea-industry-1.jpg",
      description: {
        lao: "",
        english: "",
        chiness: "",
      },
    },
    {
      img: "/images/subsi/tea-industry/tea-industry-2.jpg",
      description: {
        lao: "",
        english: "",
        chiness: "",
      },
    },
    {
      img: "/images/subsi/tea-industry/tea-industry-3.jpg",
      description: {
        lao: "",
        english: "",
        chiness: "",
      },
    },
    {
      img: "/images/subsi/tea-industry/tea-industry-4.jpg",
      description: {
        lao: "",
        english: "",
        chiness: "",
      },
    },
  ],
  subsiContactDesc: {
    lao: "ທ່ານມີຄວາມສົນໃຈໃນການຄົ້ນຫາວິທີການບໍລິການສາມາດເຮັດໃຫ້ໂຄງການຂອງທ່ານປະສົບຜົນສໍາເລັດບໍ? ສໍາລັບຂໍ້ມູນເພີ່ມເຕີມກ່ຽວກັບການບໍລິການຂອງພວກເຮົາ, ກະລຸນາຕິດຕໍ່ພວກເຮົາ.",
    english:
      "Are you interested in finding out how services can make your project success? For more information on our services please contact us.",
    chiness:
      "您是否有興趣了解服務如何使您的項目取得成功？ 有關我們服務的更多信息，請與我們聯繫。",
  },
  fax: {
    lao: "ແຟັກ",
    english: "Fax",
    chiness: "傳真",
  },
  support: {
    lao: "ສະຫນັບສະຫນູນ 24/7 - ອອນໄລນ໌ 24 ຊົ່ວໂມງ",
    english: "Support 24/7 - Online 24 hours",
    chiness: "支持 24/7 - 24 小時在線",
  },
  address: {
    lao: "ກມ. 19 ຖະໜົນວຽງຈັນ 450 ປີ ບ້ານໂພນທອງ ເມືອງໄຊເຊດຖາ ນະຄອນຫຼວງວຽງຈັນ",
    english:
      "km. 19 Vientiane Road 450 Pi, Phonthong Village, Xaysettha District, Vientiane",
    chiness: "萬象路 450年, 蓬通村, 賽色塔區 萬象",
  },
  workingHour: {
    lao: "ວັນຈັນ-ວັນເສົາ: 8:00 ໂມງເຊົ້າ ຫາ 17:00 ໂມງແລງ",
    english: "Mon- Sat: 8:00 am to 5:00 pm",
    chiness: "週一至週六：上午 8:00 至下午 5:00",
  },
  nonWorkingHour: {
    lao: "ວັນອາທິດ: ປິດ",
    english: "Sunday: Close",
    chiness: "週日：關閉",
  },
  mailUsNow: {
    lao: "ສົ່ງອີເມວຫາພວກເຮົາ",
    english: "Mail us now",
    chiness: "現在給我們發郵件",
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
  yourMessage: {
    lao: "ຂໍ້ຄວາມສັ້ນ*",
    english: "Short message*",
    chiness: "短消息*",
  },
  send: {
    lao: "ສົ່ງ",
    english: "Send",
    chiness: "發送",
  },
};

function IndustryTeaPage({ headerData }) {
  return (
    <div>
      <HeaderModel
        title={headerData.subsidiaryPage.title}
        metaContent={headerData.subsidiaryPage.metaContent}
      />
      <Navbar />
      <SubsidiaryDetail pageInfo={pageInfo} />

      <Footer />
    </div>
  );
}

export default IndustryTeaPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  return {
    props: { headerData },
  };
}
