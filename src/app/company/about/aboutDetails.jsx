"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import infinity from "../../../assets/about/icons8-infinity-94.png";
import aboutpic from "../../../assets/about/jason-goodman-Oalh2MojUuk-unsplash.jpg";
import mission from "../../../assets/about/md-duran-rE9vgD_TXgM-unsplash.jpg";
const AboutDetailsPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="about-bg text-orange-600 text-center pt-32">
        <h2 className="text-7xl font-bold">We Are Event Master</h2>
        <Image className="mx-auto" src={infinity} alt="Infinity Icon"></Image>
        <h4 className="text-2xl">
          Your Vision, Our Expertise. Event Master - Where Every Detail Matters.
        </h4>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="mt-10 md:-mt-20 bg-white grid grid-cols-1 lg:grid-cols-2 mx-4 md:mx-20">
        <div>
          <Image className="h-full" src={aboutpic} alt="about pic"></Image>
        </div>
        <div className="bg-orange-500 text-white text-xl p-8 md:p-20 text-justify">
          <p>
            Welcome to Event Master, your ultimate partner in creating
            unforgettable moments! At Event Master, we believe that every
            occasion deserves to be exceptional, and that's why we're dedicated
            to turning your visions into reality. With a passion for meticulous
            planning and a flair for creativity, we have curated a platform that
            simplifies the event planning process, making it accessible to
            everyone. Whether you're organizing a grand wedding, a corporate
            conference, a milestone birthday, or a cozy get-together, Event
            Master is here to guide you through every step of the way.
          </p>
        </div>
      </div>

      {/* mission */}
      <div className="bg-slate-200 grid grid-cols-1 lg:grid-cols-2 px-6 md:px-20 h-full my-20">
        <div data-aos="zoom-in" data-aos-duration="3000" className="p-10">
          <h3 className="text-5xl font-bold">Our Mission</h3>
          <p className=" mt-5 text-justify">
            At Event Master, our mission goes beyond being just another event
            planning application. We're on a passionate journey to redefine how
            events are conceived, planned, and executed. Our unwavering
            commitment is to empower individuals, businesses, and organizations
            to host events that transcend expectations, leaving indelible
            impressions on all who attend.
            <br />
            We understand that each event is a canvas, a unique opportunity to
            weave stories, evoke emotions, and create memories that stand the
            test of time. Our mission is to be the guiding light that
            illuminates this path, providing you with the tools, resources, and
            inspiration you need to transform your vision into reality.
          </p>

          <div className="mt-4">
            <h3 className="mb-3 text-xl font-bold">
              Empowerment Through Simplicity:
            </h3>
            <p className="text-justify">
              We believe that event planning should be a joyful experience, not
              an ordeal. Our mission is to simplify the complex, break down
              barriers, and make event planning accessible to all, regardless of
              their background or expertise. Event Master's user-friendly
              interface, intuitive planning tools, and comprehensive features
              are designed to empower you, enabling you to orchestrate events
              with confidence and ease.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="mb-3 text-xl font-bold">Caring for Every Detail:</h3>
            <p className="text-justify">
              We understand that the success of an event lies in the details,
              both big and small. Our mission is to stand by your side,
              meticulously tending to every facet of your event planning
              journey. From budget management and vendor coordination to seating
              arrangements and post-event follow-ups, we are dedicated to
              ensuring that no detail goes unnoticed, allowing you to bask in
              the joy of your event while we handle the rest.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="3000" className="lg:my-32">
          <Image className=" mt-10" src={mission} alt="mission pic"></Image>
        </div>
      </div>

      {/* values or apart section */}
      <div className="apart-bg">
        <div>
          <h3 className="text-5xl font-bold text-center text-white mt-10 py-10">
            What Sets Us Apart:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-20 gap-10 my-10 pb-14">
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-white px-6 py-12 rounded-lg border-x-8 border-orange-600 hover:border-8 hover:border-orange-600 hover:transition-all hover:delay-200">
            <h4 className="text-2xl font-bold mb-3">
              {" "}
              Intuitive Planning Tools
            </h4>
            <p className="text-justify">
              Our application boasts a suite of intuitive planning tools that
              help you manage every aspect of your event. From budgeting and
              guest lists to seating arrangements and vendor coordination, we've
              got you covered.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-white px-6 py-12 rounded-lg border-x-8 border-orange-600 hover:border-8 hover:border-orange-600 hover:transition-all hover:delay-200">
            <h4 className="text-2xl font-bold mb-3"> Inspiration Galore</h4>
            <p className="text-justify">
              Stuck on ideas? Event Master is not just a tool; it's a wellspring
              of inspiration. Browse through a plethora of themes, decoration
              ideas, and trends to kickstart your creative journey.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-white px-6 py-12 rounded-lg border-x-8 border-orange-600 hover:border-8 hover:border-orange-600 hover:transition-all hover:delay-200">
            <h4 className="text-2xl font-bold mb-3"> Vendor Network</h4>
            <p className="text-justify">
              We've built strong partnerships with a network of trusted vendors,
              ensuring that you have access to top-notch services and products
              that suit your preferences and budget.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-white px-6 py-12 rounded-lg border-x-8 border-orange-600 hover:border-8 hover:border-orange-600 hover:transition-all hover:delay-200">
            <h4 className="text-2xl font-bold mb-3"> Collaborative Planning</h4>
            <p className="text-justify">
              Planning an event is rarely a one-person show. With Event Master,
              you can invite collaborators, share updates, and make decisions
              together in real time.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-white px-6 py-12 rounded-lg border-x-8 border-orange-600 hover:border-8 hover:border-orange-600 hover:transition-all hover:delay-200">
            <h4 className="text-2xl font-bold mb-3"> Seamless Communication</h4>
            <p className="text-justify">
              Clear communication is the key to successful events. Our built-in
              communication tools keep you connected with vendors, attendees,
              and your planning team, all in one place.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-white px-6 py-12 rounded-lg border-x-8 border-orange-600 hover:border-8 hover:border-orange-600 hover:transition-all hover:delay-200">
            <h4 className="text-2xl font-bold mb-3"> Personalization</h4>
            <p className="text-justify">
              We understand that every event is unique. Customize your planning
              journey with our flexible features, allowing you to tailor the
              application to match your event's individuality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetailsPage;
