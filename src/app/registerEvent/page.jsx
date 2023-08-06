import EventForm from "./eventForm";
import RegisterIntroInfo from "./registerInfo";

const RegisterEventPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mx-2 lg:mx-16">
      <EventForm></EventForm>
      <RegisterIntroInfo></RegisterIntroInfo>
    </div>
  );
};

export default RegisterEventPage;
