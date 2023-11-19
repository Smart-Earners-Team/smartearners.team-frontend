import React, { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import img1 from "../Assests/img1.png";
import smart from "../Assests/smart.png";
import ourclass from "../Assests/ourclass.png";
import vision from "../Assests/vision.png";
import SendMessageModal from "../components/SendMessageModal";
import Testimonials from "./Testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { team } from "./Team";
import Statistics from "./Statistics";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className=" overflow-x-hidden">
      <div className=" max-w-[100%] bg-cover w-full lg:h-[70vh] bg-bg-img bg ">
        <div className="md:text-4xl text-3xl ml-6 text-white  lg:p-[150px]  pt-12 pb-5 space-y-3 lg:space-y-10">
          <p className="font-bold">$mart Earners Team</p>
          <p className="text-xl pb-3  ">The smart solutions provider</p>

          <div className="flex items-center gap-3 pb-2  ">
            <button className="flex items-center gap-3 border border-white rounded-xl p-2 hover:bg-[#FF9933] hover:scale-90">
              <p
                className=" text-white text-lg pl-3"
                onClick={() => setShowMyModal(true)}
              >
                Sign up
              </p>
              <BsArrowRightCircle className="w-[20%]" />
            </button>

            <button className="flex items-center gap-3 border border-white rounded-xl p-2 hover:bg-[#FF9933] hover:scale-90">
              <p className=" text-white text-lg pl-3 ">Discord</p>
              <BsArrowRightCircle className="w-[20%]" />
            </button>
          </div>
        </div>
      </div>
      <p className=" font-bold text-2xl lg:hidden mt-6 text-center  ">
        Why $mart Earners Team?
      </p>
      <div className="flex flex-col lg:flex-row items-center mt-10 justify-center  ">
        <img src={img1} alt="" className="w-[300px] mr-5  " />
        <div className=" flex flex-col text-center gap-4">
          <p className="hidden lg:inline font-bold lg:text-4xl ">
            Why $mart Earners Team?
          </p>
          <p className=" max-w-3xl lg:text-xl p-7">
            We've created $mart Earners Team as we saw a huge gap in the
            availability of tech services for startups.
            <br /> Give us a chance to prove to you that quality, accuracy and
            speed of delivery are as important to us as they are to you and your
            project. We've been there and done it. when you choose us, you'll
            get the benefit of 20+ years experience in providing smart soluions.
          </p>
        </div>
      </div>

      <p className=" font-bold text-3xl lg:hidden mt-6 text-center mb-3  ">
        Our Training Classes
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-[200px]   ">
        <img src={ourclass} alt="" className=" lg:hidden w-[300px]   " />
        <div className=" flex flex-col text-center gap-4">
          <p className="hidden lg:inline font-bold lg:text-4xl ">
            Our Traning Classes
          </p>

          <p className=" max-w-3xl lg:text-xl p-7">
            $mart Earners Team™ is hosting a series of digital online courses.
            These training classes are especially designed for you - if you're
            interested in building your knowledge of on-demand tech and digital
            skills.
          </p>
        </div>
        <img
          src={ourclass}
          alt=""
          className=" hidden  lg:inline w-[300px]   "
        />
      </div>

      <p className=" font-bold text-3xl lg:hidden mt-10 text-center mb-5 ">
        Get to know us
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-[200px]   ">
        <img src={smart} alt="" className="w-[300px] mr-5  " />
        <div className=" flex flex-col text-center gap-4">
          <p className="hidden lg:inline font-bold lg:text-4xl ">
            Get to know us
          </p>
          <p className=" max-w-3xl lg:text-xl p-7 ">
            Founded in 2018 by Mr. Isaac U. E, an experienced Web2/Web3
            developer, business consultant and decentralised finance expert who
            is committed to educating individuals and corporate bodies via
            social media, conferences, bootcamps, radio and TV stations.
          </p>
        </div>
      </div>

      <p className=" font-bold text-3xl lg:hidden mt-10 text-center mb-5  ">
        Our Vision
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-[200px]   ">
        <img src={vision} alt="" className=" lg:hidden w-[300px]   " />
        <div className=" flex flex-col text-center gap-4">
          <p className="hidden lg:inline font-bold lg:text-4xl ">Our Vision</p>

          <p className=" max-w-3xl lg:text-xl p-7">
            The core vision and goal of the $mart Earners Team™ is to empower
            individuals with financial education and empower them to be
            financially free, self sufficient to live the life they desire. Our
            detailed courses will take you through from newbie to pro. We also
            link up our students with job opportunities. For us, it’s a vision,
            not just to teach, but to empower you with skills for financial
            freedom and stability.
          </p>
        </div>
        <img src={vision} alt="" className=" hidden  lg:inline w-[300px]   " />
      </div>

      <div className=" text-center font-medium lg:text-4xl text-2xl lg:mt-[100px] lg:mb-6 italic ">
        We rise by lifting others
      </div>

      {/* Members */}
      <div className=" mx-auto font-medium lg:text-4xl text-md lg:mt-[200px]  lg:max-w-2xl p-5 text-center text-gray-600 ">
        Meet the team dedicated to helping
        <br /> you become financially stable
      </div>
      <div>
        <div>
          <Slider {...settings}>
            {team.map((team) => (
              <div
                key={team.id}
                className="flex flex-wrap justify-center space-x-4"
              >
                <div className=" px-3 lg:px-1 ">
                  <div className="shadow rounded lg:w-48  align-middle border-none max-h-fix">
                    {team.pic}
                  </div>
                  <div className="bg-[#02024D] text-white rounded-b-md text-sm lg:w-48 h-44 text-center font-bold p-3 lg:text-2xl">
                    <div className="">
                      <p className=" text-xl mt-6 mb-21">{team.name} </p>
                      <p className=" text-xl ">{team.position}</p>
                      <p className=" text-xl pt-2 ">{team.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* End */}

      {/* statistics */}
      <Statistics />
      {/* end */}

      {/* SIDEBAR */}
      <Testimonials />

      {/* End */}

      <div className="flex flex-col items-center justify-center">
        <div
          className=" text-center font-medium lg:text-4xl text-3xl 
           lg:mt-[200px] mt-20"
        >
          Ready to take that bold step
          <br />
          towards financial freedom?
        </div>
        <button
          onClick={() => setShowMyModal(true)}
          className="flex items-center gap-3 lg:w-[12%] w-[40%] border
       border-white rounded-xl p-2 bg-[#FF9933] hover:scale-90 mt-6"
        >
          <p className=" text-white text-lg mx-auto  ">Sign up </p>
          <BsArrowRightCircle className="w-[20%]" />
        </button>
      </div>
      <SendMessageModal onClose={handleOnClose} visible={showMyModal} />
    </div>
  );
};

export default Home;
