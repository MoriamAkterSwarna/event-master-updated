import ContactBanner from "./banner";
import ContactInfo from "./contactInfo";

export const metadata = {
  title: "Contact US - Event Master",
  description: "Event Master is an event planning application",
};
const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default ContactPage;
