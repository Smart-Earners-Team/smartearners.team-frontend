import React from 'react'
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="bg-[#02024D] text-white mt-5 w-[90%] mx-auto md:h-[40vh] h-[40vh] rounded-xl p-3 overflow-auto ">
      <div className="text-3xl text-center pt-4"> Let The Number Speak</div>
      <div className="  h-2 w-[10%] text-white border-t-2  border-t-white mt-4 mx-auto" />
      <div className="flex items-center justify-center flex-col md:flex-row text-2xl lg:gap-8 gap-4 mt-2  ">
        <div className="border border-white w-[50%] ring-4 lg:w-[40%] ring-slate-500 rounded-lg p-3 hover:bg-[#FF9933] ">
          <div className="text-center  flex  items-center justify-center">
            <CountUp end={500} duration={15} />
            <p>+</p>
          </div>
          <p className="text-sm text-center">Project Completed</p>
        </div>
        <div className="border border-white ring-4  w-[50%] lg:w-[40%] ring-slate-500 rounded-lg p-3 hover:bg-[#FF9933]  ">
          <div className=" flex  items-center justify-center text-center">
            <CountUp end={150} duration={15} />
            <p>+</p>
          </div>
          <p className="text-sm text-center">Dedicted Servers</p>
        </div>
        <div className="border border-white ring-4  w-[50%] lg:w-[40%] ring-slate-500 rounded-lg p-3 hover:bg-[#FF9933]  ">
          <div className="text-center  flex  items-center justify-center">
            <CountUp end={200} duration={15} />
            <p>+</p>
          </div>
          <p className="text-sm text-center">Satisfied Clients</p>
        </div>
        <div className="border border-white ring-4  w-[50%] lg:w-[40%] ring-slate-500 rounded-lg p-3 hover:bg-[#FF9933]  ">
          <div className="text-center  flex  items-center justify-center">
            <CountUp end={2000} duration={15} />
            <p>+</p>
          </div>
          <p className="text-sm mb-4 text-center">Websites Created</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics