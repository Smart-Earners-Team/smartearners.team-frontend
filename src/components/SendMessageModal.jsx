import React from "react";
import { AiFillMail } from "react-icons/ai";
import { BsArrowDownCircle, BsWhatsapp } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

export default function MyModal({ visible, onClose }) {
  if (!visible) return;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white  rounded-md lg:w-[30%] lg:h-[40vh]  h-[30vh] mx-4 shadow-2xl shadow-black opacity-80">
        <div className=" sticky top-0 bg-white">
          <div className="flex item-center justify-between mx-3 mt-2  ">
            <div className=" flex flex-col items-center justify-center ">
              <span className="font-extrabold text-left lg:text-2xl text-sm  text-gray-700 mb-2 m-2  ">
                Sign Up by Contacting us via
              </span>
              <span className="mb-3 mt-4 ml-6 animate-bounce">
                <BsArrowDownCircle className=" " />
              </span>
            </div>
            <ImCancelCircle
              className="  text-red-700 text-2xl scale-100 hover:scale-150 m-2 pointer"
              onClick={onClose}
            />
          </div>
        </div>
        <div className=" flex items-center justify-center mt-4 gap-8 lg:gap-10 w-[90%] text-4xl text-center">
          <a
            href="https://wa.me/+2349026763095"
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex flex-col items-center justify-around gap-2 cursor-pointer">
              <p className="text-2xl">Whatsapp</p>
              <BsWhatsapp className="text-green-400" />
            </div>
          </a>
          <a
            href="mailto:smartearnersteam@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex flex-col gap-2 cursor-pointer">
              <p className="text-2xl">Email</p>
              <AiFillMail className="text-blue-400" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
