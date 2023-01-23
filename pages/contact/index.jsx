import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import Contact from "../../components/model/contact";
import { useSelector } from "react-redux";
import { fnReadFileSync } from "../../util/function";

const pageInfo = {
  address: {
    lao: [
      "ກມ 19 ຖະໜົນ 450 ປີ, ບ້ານ ໂພນທອງ,",
      "ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ",
    ],
    english: [
      "KM 19 Vientiane Road 450 Years, Phonethong Village,",
      "Xaysettha District, Vientiane Capital, Lao P.D.R",
    ],
    chiness: [
      "公里 19 萬象路 450 年, 電話通村,",
      "賽色塔區, 老撾人民民主共和國萬象首都",
    ],
  },
};

function ContactUsPage({ headerData }) {
  const { languageStore } = useSelector((state) => state.language);
  return (
    <div>
      <HeaderModel
        title={headerData.contactPage.title}
        metaContent={headerData.contactPage.metaContent}
      />
      <Navbar />
      <Contact
        phone={[
          "(+856) 20-2249-8777",
          "(+856) 20-2208-3888",
          "(+856) 20-9991-9456",
        ]}
        fax=""
        address={pageInfo.address[languageStore]}
        email={["info@ddcgroups.la", "khoun.silaxa@gmail.com"]}
      />

      <Footer />
    </div>
  );
}

export default ContactUsPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  return {
    props: { headerData },
  };
}
