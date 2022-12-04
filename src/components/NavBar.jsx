import logo from "../Assests/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SendMessageModal from "../components/SendMessageModal";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false);

  const location = useLocation();

  const path = location.pathname;

  return (
    <div className=" overflow-hidden">
      <nav className=" flex md:flex-[0.5] flex-initial  items-center justify-between bg-white w-[full] h-[15vh] text-xl font-medium border-2 border-b-blue-900 bor ">
        <img src={logo} alt="" className=" lg:ml-10 w-[20%] md:w-[10%]" />
        <div className=" flex items-center gap-20 lg:ml-52 justify-between ">
          <ul className={` hidden md:flex  items-center lg:gap-12 gap-5 text-xl  `}>
            <Link to={"/"}>
              <li className={` hover:scale-100 ${path === "/" ? "bg-[#FF9933] rounded-lg p-2 " : ""}`}>Home </li>
            </Link>
           
            <Link to={"/service"}>
              <li className={` hover:scale-100 ${path === "/service" ? "bg-[#FF9933] rounded-lg p-2 " : ""}`}>Services</li>
            </Link>
            <Link to={"/contactUs"}>
              <li className={` hover:scale-100 ${path === "/contactUs" ? "bg-[#FF9933] rounded-lg p-2 " : ""}`}>Contact Us</li>
            </Link>
          </ul>

          <button   onClick={() => setShowMyModal(true)} className="
           bg-blue-50 text-xl p-2 rounded-2xl lg:ml-[150px] ml-7 sm:mr-5 ">Sign Up</button>
        </div>
        <div className=" flex relative"> 
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-blue-400 md:hidden cursor-pointer "
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-blue-400 md:hidden cursor-pointer "
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <ul
              onClick={() => setToggleMenu(false)}
              className="z-10 fixed top-0 -right-2 p-3 w-[70%] h-[50vh] shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism  text-white animate-slide-in 
          "
            >
              <li className="text-2xl mt-4   mx-5 hover:scale-150  ">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <ul className=" mx-auto my-auto text-3xl animate-pulse">
                <Link to={"/"}>
                  <li className="pb-4 hover:scale-125 ">Home</li>
                </Link>
                
                <Link to={"/service"}>
                  <li className="pb-4 hover:scale-125">Services</li>
                </Link>
                <Link to={"/contactUs"}>
                  <li className="hover:scale-125">Contact Us</li>
                </Link>
              </ul>
            </ul>
          )}
        </div>
        <SendMessageModal onClose={handleOnClose} visible={showMyModal} />
      </nav>
    </div>
  );
};

export default NavBar;
