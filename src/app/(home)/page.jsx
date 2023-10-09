import Banner from "./banner";
import CompanyDetail from "./companyDetail";
import Feedback from "./feedback";
import Offers from "./offer";
import ServicesSection from "./services";
import Sponsors from "./sponsors";
import SvgAnim from "./svgAnim";
import UpcomingEvents from "./upcoming";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <UpcomingEvents></UpcomingEvents>
      <ServicesSection></ServicesSection>
      <CompanyDetail></CompanyDetail>
      <Offers></Offers>
      <Sponsors></Sponsors>
      <SvgAnim></SvgAnim>
      {/* <Feedback></Feedback> */}
    </>
  );
};

export default HomePage;
