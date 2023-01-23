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
    lao: "ບໍລິສັດ ສິຣິຈະເລີນໄຊ ຈຳກັດ ຜູ້ດຽວ.",
    english: "Sirichalernxay Sole Co., Ltd",
    chiness: "Sirichalernxay Sole Co., Ltd",
  },
  organizeChartImg: "",
  subsiDescription: {
    lao: "ບໍລິສັດທີ່ປຶກສາການຄ້າ ແລະ ການລົງທຶນ ທີ່ໄດ້ຮັບອະນຸຍາດຈາກກະຊວງແຜນການ ແລະ ການລົງທຶນ ເພື່ອດຳເນີນທຸລະກິດປະເພດຕ່າງໆ ບໍລິການໃຫ້ຄໍາປຶກສາໃນລາວ; Siri ມີປະສົບການຢ່າງເລິກເຊິ່ງໃນໂຄງການລົງທຶນໃນລາວ ໂດຍສະເພາະໃນຂະແໜງໄອທີ ແລະ ມີຄວາມເຂັ້ມແຂງໃນທ້ອງຖິ່ນ ການພົວພັນລະຫວ່າງພາກເອກະຊົນ ແລະ ພາກລັດໃນລາວ.",
    english:
      "A trading and investment consulting company licensed by the Ministry of Planning and Investment to conduct various type of business consulting services in Laos; Siri has deep experience in investment projects in Laos, especially in IT sectors, and has strong local relationships with private and public sectors in Laos.",
    chiness:
      "經計劃投資部許可經營各類業務的貿易投資諮詢公司老撾的諮詢服務； Siri 在老撾投資項目經驗豐富，尤其是IT領域，具有很強的本地與老撾私營和公共部門的關係。",
  },
  subsiImage: [
    {
      img: "/images/subsi/sirichalernxay/Sirichalernxay-1.png",
      description: {
        lao: "",
        english: "",
        chiness: "",
      },
    },
    {
      img: "/images/subsi/sirichalernxay/Sirichalernxay-2.png",
      description: {
        lao: "",
        english: "",
        chiness: "",
      },
    },
    {
      img: "/images/subsi/sirichalernxay/Sirichalernxay-3.png",
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

function ConstructionPAPage({ headerData }) {
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

export default ConstructionPAPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  return {
    props: { headerData },
  };
}
