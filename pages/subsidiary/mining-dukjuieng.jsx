import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import { listHeaderModel } from "../../constant/list-info";
import Footer from "../../components/sections/footer";
import SubsidiaryDetail from "../../components/subsidiary/subsidiary-detail";
import { fnReadFileSync } from "../../util/function";

const pageInfo = {
  subsiName: {
    lao: "ບໍລິສັດ ດວງຈະເລີນ ພັດທະນາແຮ່ຄຳດາກຈຶງ ຈຳກັດ",
    english: "DUANGCHALERN DEVELOPMENT DUKJUIENG GOLD MINING CO., LTD",
    chiness: "DUANGCHALERN DEVELOPMENT DUKJUIENG GOLD MINING CO., LTD",
  },
  subsiDescription: {
    lao: "ດຳເນີນກິດຈະການຊອກຄົ້ນ ແລະ ສຳຫຼວດແຮ່ຄຳ ໃນເຂດເມືອງດາກຈຶງ ແຂວງເຊກອງ ໃນເນື້ອທີ່ 297,68 ຕາລາງກິໂລແມັດ. ໃຊ້ທຶນໃນການດຳເນີນງານຂຸດຄົ້ນທັງໝົດຫຼາຍກວ່າ 941.462 ໂດລາສະຫາລັດ.",
    english:
      "Conducting exploration and exploration activities for gold ore in Dukjuieng District, Sekong Province in an area of 297.68 square kilometers. Spending more than 941,462 dollars on the total mining operation.",
    chiness:
      "在色公省達昌區開展採礦和金礦開採工作，面積297.68平方公里。在整個採礦業務上花費超過 941,462 美元。",
  },
  subsiContact: {
    lao: "ຂໍ້ມູນ ແລະ ການຕິດຕໍ່ພົວພັນ",
    english: "Information and Contact",
    chiness: "信息和聯繫方式",
  },

  subsiImage: [
    {
      img: "/images/subsi/dukjuieng/organizational-chart.jpg",
      description: {
        lao: "ໂຄງຮ່າງການຈັດຕັ້ງຂອງ ບໍລິສັດ ດວງຈະເລີນ ພັດທະນາແຮ່ຄຳດາກຈຶງ ຈຳກັດ",
        english:
          "ORGANIZATIONAL CHART OF DUANGCHALERN DEVELOPMENT DUKJUIENG GOLD MINING CO., LTD",
        chiness:
          "ORGANIZATIONAL CHART OF DUANGCHALERN DEVELOPMENT DUKJUIENG GOLD MINING CO., LTD",
      },
    },
    {
      img: "/images/subsi/dukjuieng/gold-exploration-1.jpg",
      description: {
        lao: "ພະນັກງານຂອງ ບໍລິສັດ ກຳລັງສຳຫຼວດແຮ່ຄຳ",
        english: "The company's employees are exploring for gold",
        chiness: "公司員工正在探金",
      },
    },
    {
      img: "/images/subsi/dukjuieng/gold-exploration-2.jpg",
      description: {
        lao: "ພະນັກງານຂອງ ບໍລິສັດ ກຳລັງຂຸດເຈາະເພື່ອສຳຫຼວດແຮ່ຄຳ",
        english: "The company's employees are drilling to explore for gold",
        chiness: "公司員工正在鑽探探金",
      },
    },
    {
      img: "/images/subsi/dukjuieng/gold-exploration-3.jpg",
      description: {
        lao: "ພະນັກງານ ແລະ ທີມສຳຫຼວດຂອງ ບໍລິສັດ",
        english: "The company's staff and survey team",
        chiness: "公司員工及調查組",
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

function MiningDukjuiengPage({ headerData }) {
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

export default MiningDukjuiengPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  return {
    props: { headerData },
  };
}
