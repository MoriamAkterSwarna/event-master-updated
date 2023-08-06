
import Banner from './banner';
import CompanyDetail from './companyDetail';
import Feedback from './feedback';
import Offers from './offer';
import ServicesSection from './services';
import Sponsors from './sponsors';
import UpcomingEvents from './upcoming';

const HomePage = () => {
    
    return (
        <div>
           <Banner></Banner>
           <UpcomingEvents></UpcomingEvents>
           <ServicesSection></ServicesSection>
           <CompanyDetail></CompanyDetail>
           <Offers></Offers>
           <Sponsors></Sponsors>
           {/* <Feedback></Feedback> */}
        </div>
    );
};

export default HomePage;