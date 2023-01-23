import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import { listHeaderModel } from "../../constant/list-info";
import Footer from "../../components/sections/footer";
import SubsidiaryDetail from "../../components/subsidiary/subsidiary-detail";
import { fnReadFileSync } from "../../util/function";

const pageInfo = {
  subsiName: {
    lao: "ບໍລິສັດ ນ້ຳຈາດ ຈະເລີນພາວເວີ້ ຈຳກັດ ຜູ້ດຽວ",
    english: "NAMCHARD CHALERN POWER",
    chiness: "NAMCHARD CHALERN POWER",
  },
  subsiDescription: {
    lao: "ດຳເນີນກິດຈະການກໍ່ສ້າງເຂື່ອນໄຟຟ້າພະລັງງານນ້ຳ ແລະ ຄຸ້ມຄອງເພື່ອຜະລິດກະແສໄຟຟ້າຈຳໜ່າຍໃຫ້ລັດວິສາຫະກິດໄຟຟ້າລາວ.",
    english:
      "Carry out hydropower dam construction activities and Management to produce electricity for distribution to the Electric du Laos.",
    chiness: "開展水電大壩建設活動 和 管理為老撾國家電力公司生產電力。",
  },
  subsiContact: {
    lao: "ຂໍ້ມູນ ແລະ ການຕິດຕໍ່ພົວພັນ",
    english: "Information and Contact",
    chiness: "信息和聯繫方式",
  },
  subsiImage: [
    {
      img: "/images/subsi/nam-chard/organizational-chart.jpg",
      description: {
        lao: "ໂຄງຮ່າງການຈັດຕັ້ງຂອງ ບໍລິສັດ ນ້ຳຈາດຈະເລີນພາວເວີ້ ຈຳກັດ",
        english:
          "Organizational structure of Nam Chard Chalern Power Company Limited",
        chiness: "組織架構南浩正大電力有限公司",
      },
    },
    {
      img: "/images/subsi/nam-hao/1.jpeg",
      description: {
        lao: "ພະນັກງານຂອງ ບໍລິສັດ ນ້ຳຮາວຈະເລີນພາວເວີ້ ຈຳກັດ",
        english: "Staff of Namhao Company",
        chiness: "南浩公司員工",
      },
    },
    {
      img: "/images/subsi/nam-hao/2.jfif",
      description: {
        lao: "ລັດຖະມົນຕີ ກະຊວງພະລັງງານ ແລະ ປະທ່ານ ກຸ່ມບໍລິສັດດວງຈະເລີນ ພ້ອມດ້ວຍຄະນະ ລົງຢ້ຽມຢາມເຂື່ອນໄຟຟ້ານ້ຳຮາວ",
        english:
          "Minister of Energy and Chairman of Duangcharoen Group with delegation visited the Nam Hao power dam",
        chiness: "能源部長、Duangchalern 集團董事長一行參觀南浩水電站",
      },
    },
    {
      img: "/images/subsi/nam-hao/3.jfif",
      description: {
        lao: "ລັດຖະມົນຕີ ກະຊວງພະລັງງານ ແລະ ປະທ່ານ ກຸ່ມບໍລິສັດດວງຈະເລີນ ພ້ອມດ້ວຍຄະນະ ລົງຢ້ຽມຢາມເຂື່ອນໄຟຟ້ານ້ຳຮາວ",
        english:
          "Minister of Energy and Chairman of Duangcharoen Group with delegation visited the Nam Hao power dam",
        chiness: "能源部長、Duangchalern 集團董事長一行參觀南浩水電站",
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
    lao: "ບ້ານນ້ຳປັ່ນ, ເມືອງໄຊຈຳພອນ, ແຂວງບໍລິຄຳໄຊ",
    english: "NamPhunh Village, Xaychamphon District, Borikhamxay Province",
    chiness: "博里坎賽省賽佔蓬區南豐村",
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

function EnergyNamchardPage({ headerData }) {
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

export default EnergyNamchardPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  return {
    props: { headerData },
  };
}
