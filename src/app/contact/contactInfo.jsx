import ContactForm from "@/components/contactForm";
import OthersContactInfo from "@/components/othersContactInfo";
import Map from "./map";

const ContactInfo = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-[10%] mb-14">
        <>
          <Map></Map>
        </>
        <div className="bg-orange-100 p-6">
          <h1 className="mt-4 ms-6 text-4xl font-bold">Contact </h1>
          <ContactForm></ContactForm>
        </div>
      </div>
      <>
        <OthersContactInfo></OthersContactInfo>
      </>
    </>
  );
};

export default ContactInfo;
