
import Banner from './banner';
import ServicesSection from './services';
import UpcomingEvents from './upcoming';

const HomePage = () => {
    
    return (
        <div>
           <Banner></Banner>
           <UpcomingEvents></UpcomingEvents>
           <ServicesSection></ServicesSection>
        </div>
    );
};

export default HomePage;