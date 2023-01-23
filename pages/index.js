import HeaderModel from "../components/model/header";
import Footer from "../components/sections/footer";
import Navbar from "../components/sections/navbar";
import Banner from "../components/sections/banner";
import Introduction from "../components/sections/introduction";
import Welcome from "../components/sections/welcome";
import OurServices from "../components/sections/our-services";
import Subsidiary from "../components/sections/subsidiary";
import Partner from "../components/sections/partner";
import News from "../components/sections/news";
import ContactBack from "../components/sections/contact-back";
import HighlightProject from "../components/sections/highlight-project";
import { fnReadFileSync } from "../util/function";
import { fnGetBannerDocs } from "../util/banner-firebase";

export default function Home({
  headerData,
  bannerData,
  introduceData,
  welcomeData,
  businessData,
}) {
  return (
    <div>
      <HeaderModel
        title={headerData.homePage.title}
        metaContent={headerData.homePage.metaContent}
      />

      <main>
        <Navbar />
        <Banner bannerData={bannerData} />
        <Introduction introduceData={introduceData} />
        {/* <Welcome welcomeData={welcomeData} /> */}
        <OurServices businessData={businessData} />
        <News />
        {/* <FeaturedProject /> */}
        <HighlightProject />
        {/* <Projects /> */}
        <Subsidiary />
        <Partner />
        <ContactBack />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  // const bannerData = fnReadFileSync("banner-info.json");
  const bannerData = await fnGetBannerDocs();
  const introduceData = fnReadFileSync("section-introduce-info.json");
  const welcomeData = fnReadFileSync("section-welcom-info.json");
  const businessData = fnReadFileSync("section-business-info.json");
  return {
    props: { headerData, bannerData, introduceData, welcomeData, businessData },
  };
}
