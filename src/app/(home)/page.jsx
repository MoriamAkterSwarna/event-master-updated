
import Banner from './banner';
import CompanyDetail from './companyDetail';
import ServicesSection from './services';
import UpcomingEvents from './upcoming';

const HomePage = () => {
    
    return (
        <div>
           <Banner></Banner>
           <UpcomingEvents></UpcomingEvents>
           <ServicesSection></ServicesSection>
           <CompanyDetail></CompanyDetail>
        </div>
    );
};

export default HomePage;