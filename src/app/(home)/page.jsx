
import Banner from './banner';
import CompanyDetail from './companyDetail';
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
           <Sponsors></Sponsors>
        </div>
    );
};

export default HomePage;