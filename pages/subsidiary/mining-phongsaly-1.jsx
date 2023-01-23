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
    lao: "ບໍລິສັດ ກຸ່ມດວງຈະເລີນພັດທະນາບໍ່ແຮ່ຖ່ານຫີນ ຜົ້ງສາລີ I ຈຳກັດ",
    english: "DUANGCHALERN DEVELOPMENT COAL MINING PHONGSALY I CO.,LTD",
    chiness: "DUANGCHALERN DEVELOPMENT COAL MINING PHONGSALY I CO.,LTD",
  },
  subsiDescription: {
    lao: "ດຳເນີນກິດຈະການຊອກຄົ້ນ ແລະ ສຳຫຼວດແຮ່ຖ່ານຫີນ ໃນເຂດບ້ານຫຼັກ5 ເມືອງຜົ້ງສາລີ ແຂວງຜົ້ງສາລີ ໃນເນື້ອທີ່ 255 ຕາລາງກິໂລແມັດ. ໃຊ້ທຶນໃນການຂຸດຄົ້ນທັງໝົດຫຼາຍກວ່າ 585.020 ໂດລາສະຫາລັດ.",
    english:
      "Conduct exploration and exploration activities for coal ore In the main village Luk5, Phongsaly district, Phongsaly province in an area of 255 square kilometers. Spending more than 585.020 dollars on the total mining operation.",
    chiness:
      "進行煤炭的勘探和勘探活動 豐沙麗省豐沙麗區主村5區 面積255平方公里。在整個採礦業務上花費超過 585.020 美元。",
  },
  subsiImage: [
    {
      img: "/images/subsi/coal-phongsaly-1/organizational-chart.jpg",
      description: {
        lao: "ໂຄງຮ່າງການຈັດຕັ້ງຂອງ ບໍລິສັດ ກຸ່ມດວງຈະເລີນພັດທະນາບໍ່ແຮ່ຖ່ານຫີນ ຜົ້ງສາລີ I ຈຳກັດ",
        english:
          "ORGANIZATIONAL CHART OF DUANGCHALERN DEVELOPMENT COAL MINING PHONGSALY I CO.,LTD",
        chiness:
          "ORGANIZATIONAL CHART OF DUANGCHALERN DEVELOPMENT COAL MINING PHONGSALY I CO.,LTD",
      },
    },
    {
      img: "/images/subsi/coal-phongsaly-1/coal-excavation-1.jpg",
      description: {
        lao: "ພະນັກງານ ແລະ ທີມສຳຫຼວດຂອງ ບໍລິສັດ",
        english: "The company's staff and survey team",
        chiness: "公司員工及調查組",
      },
    },
    {
      img: "/images/subsi/coal-phongsaly-1/coal-excavation-2.jpg",
      description: {
        lao: "ພະນັກງານຂອງ ບໍລິສັດ ກຳລັງຂຸດເຈາະເພື່ອສຳຫຼວດແຮ່ຖານຫີນ",
        english: "The company's employees are drilling to explore for coal",
        chiness: "公司員工正在鑽探基岩",
      },
    },
    {
      img: "/images/subsi/coal-phongsaly-1/coal-excavation-3.jpg",
      description: {
        lao: "ພະນັກງານຂອງ ບໍລິສັດ ກຳລັງສຳຫຼວດແຮ່ຖານຫີນ",
        english: "The company's employees are exploring for coal",
        chiness: "公司員工正在鑽探基岩",
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

function MiningPhongsaly1Page({ headerData }) {
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

export default MiningPhongsaly1Page;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  return {
    props: { headerData },
  };
}
