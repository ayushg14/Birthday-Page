import React from "react";
import hbd from "../assets/birthday.png";

const Home = () => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col-reverse md:flex-col-reverse lg:flex-row max-md:flex-col-reverse">
      <div className="overflow-auto p-[1rem] bg-gray-800 h-[29rem] w-[45rem] max-md:w-[30rem] max-sm:w-[19rem] rounded-2xl m-[3rem] max-md:m-[3rem] md:w-[35rem] lg:relative left-[2rem] lg:mr-[5rem]">
        <p>
          Get ready for an exhilarating experience at Hack Genesis '24, the
          inaugural hackathon hosted by the Technical Club of Sciences in
          collaboration with the Corporate Club from Christ (Deemed to be
          University), Delhi NCR. Over the course of 48+ hours, participants
          will dive into 5+ themed challenges, pushing the boundaries of
          innovation and creativity. 🚀 <br />
          <br />
          What makes Hack Genesis '24 truly special is its focus on
          collaboration and learning. With themes ranging from artificial
          intelligence to sustainable development, participants have the
          opportunity to explore diverse fields and work together to address
          real-world problems. Through workshops, talks, and networking
          sessions, participants will expand their skill sets and connect with
          industry professionals, fostering a culture of continuous learning and
          growth. 🌟 <br />
          <br />
          What truly sets Hack Genesis '24 apart is its innovative approach to
          the hackathon format. In addition to the main hacking sessions, we're
          introducing new elements and surprises to keep participants engaged
          and inspired. From spontaneous challenges to team-building activities,
          every moment is an opportunity for creativity to flourish and new
          connections to be made. 💡
          <br />
          <br /> Whether you're a seasoned hacker or a curious newcomer, Hack
          Genesis '24 welcomes you to join us on this incredible journey.
          Together, let's harness the power of innovation, collaboration, and
          creativity to make a difference in the world. The future is ours to
          shape—let's seize this opportunity and hack our way to a brighter
          tomorrow. 🌍
        </p>
      </div>

      <div className="relative z-10 max-lg:w-auto">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="max-md:w-[25rem] max-md:relative max-md:left-2 md:h-[30rem] lg:h-[37rem]"
        >
          <path
            fill="#FF0066"
            d="M41,-55.1C54.1,-46.8,66.5,-36.2,70.9,-23C75.3,-9.7,71.7,6.2,65.8,20.5C59.9,34.7,51.7,47.3,40.4,59.6C29,71.9,14.5,84,1.9,81.4C-10.7,78.7,-21.4,61.5,-34.8,49.8C-48.2,38.2,-64.4,32.2,-73.6,20C-82.9,7.9,-85.4,-10.3,-78,-22.9C-70.6,-35.5,-53.2,-42.5,-38.6,-50.3C-23.9,-58.1,-12,-66.8,1,-68.2C13.9,-69.5,27.8,-63.4,41,-55.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <img
          src={hbd}
          className="w-[40rem] max-lg:w-auto absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt="Happy Birthday"
        />
      </div>
    </div>
  );
};

export default Home;
