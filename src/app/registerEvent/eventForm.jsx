"use client";
import { Controller, useForm } from "react-hook-form";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    control,
  } = useForm();
  return (
    <form
      
      // onSubmit={handleSubmit(onSubmit)}
      className="card-body grid grid-cols-1 w-full md:w-1/2 lg:w-1/3 border border-orange-400 shadow-xl my-10 rounded-sm mx-2 md:mx-4 lg:mx-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Register an Event Now!</h2>
      </div>
      <div className="form-control">
        <label htmlFor="fname" className="label label-text">
          First Name*
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="input border-orange-400"
          {...register("fname", { required: true })}
        />
        {/* {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )} */}
      </div>
      <div className="form-control">
        <label htmlFor="lname" className="label label-text">
          Last Name*
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          className="input border-orange-400"
          {...register("lname", { required: true })}
        />
        {/* {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )} */}
      </div>
      <div className="form-control">
        <label htmlFor="email" className="label label-text">
          Professional Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input border-orange-400"
          autoComplete="email"
          {...register(
            "email"
            //   , {
            //     required: true,
            //     pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
            //   }
          )}
        />
        {/* {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )} */}
      </div>
      <div className="form-control">
        <label htmlFor="organization" className="label label-text">
          Organization*
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="input border-orange-400"
          autoComplete="new-password"
          {...register(
            "organization"
            //   ,
            //   { required: true, minLength: 6 }
          )}
        />
        {/* {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )} */}
      </div>
      {/* phone number */}
      <div className="form-control">
        <label htmlFor="phone" className="label label-text">
          Phone Number*
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="input border-orange-400"
          {...register(
            "phone"
            //   , {
            //     required: true,
            //     minLength: 6
            //     // ,
            //     // validate: (value) =>
            //     //   value === getValues("password") || "The passwords do not match.",
            //   }
          )}
        />
        {/* {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )} */}
      </div>

      {/* country or region */}
      <div>
        <label>
          Select Country/Region:
          <Controller
            name="selectedCountry"
            control={control}
            defaultValue=""
            rules={{ required: "Please select a country" }}
            render={({ field }) => (
              <select className="input border-orange-400 ml-2" {...field}>
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            )}
          />
        </label>
        <br />
        <p style={{ color: "red" }}>
          {errors.selectedCountry && errors.selectedCountry.message}
        </p>
      </div>

      {/* event type */}
      <div>
        <label>
          What type of event are you planning?* <br />
          <Controller
            name="meetingType"
            control={control}
            defaultValue=""
            rules={{ required: "Please select a meeting type" }}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  type="radio"
                  value="virtual"
                  id="virtual"
                  checked={field.value === "virtual"}
                />
                <label htmlFor="virtual" className="">
                  Virtual
                </label>
                <br />
                <input
                  {...field}
                  type="radio"
                  value="hybrid"
                  id="hybrid"
                  checked={field.value === "hybrid"}
                />
                <label htmlFor="hybrid">Hybrid</label>
                <br />
                <input
                  {...field}
                  type="radio"
                  value="in person"
                  id="in-person"
                  checked={field.value === "in person"}
                />
                <label htmlFor="in-person">In Person</label>
                {fieldState.error && (
                  <p style={{ color: "red" }}>{fieldState.error.message}</p>
                )}
              </>
            )}
          />
        </label>
      </div>

      {/* role in the event */}
      <div className="form-control">
        <label htmlFor="phone" className="label label-text">
          What is your Role in the Event?*
        </label>
        <input
          type="text"
          id="role"
          name="role"
          className="input border-orange-400"
          {...register(
            "role"
            //   , {
            //     required: true,
            //     minLength: 6
            //     // ,
            //     // validate: (value) =>
            //     //   value === getValues("password") || "The passwords do not match.",
            //   }
          )}
        />
        {/* {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )} */}
      </div>
      <div className="form-control mt-6">
        <button
          className="btn bg-orange-400 hover:bg-orange-600 text-white"
          type="submit">
          Request For Event
        </button>
      </div>
    </form>
  );
};

export default EventForm;
