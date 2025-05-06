import * as React from "react";

import logo from "../assets/onboardlogo.svg";
import cposlogo from "../assets/cposlogo.svg";
import OnBoarding from "./Onboarding";


interface ISignUpProps {}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between !overflow-y-hidden items-stretch w-[100dvw] h-[100dvh]">
        <div className="flex flex-col lg:py-10 lg:w-1/2 w-screen h-screen">
          <div className="py-6 lg:px-38 px-6">
            <div className="text-3xl font-bold mb-2">Get Started with CPOS</div>
            <div className="text-base font-regular text-gray-500">Fill out the form to create your account.</div>
        <OnBoarding/>
          </div>
        </div>
        <div className="lg:w-1/2 hidden  bg-[#F3F3F3] items-center-safe justify-start-safe lg:flex lg:flex-col pt-10 pb-7">
          <img src={cposlogo} alt="CPOS Logo" className="!w-[148px] !h-[42px]"/>
          <div className="pb-17"></div>
          <div className="text-5xl font-semibold text-gray-800 mb-6">Welcome to CPOS </div>
          <div className="text-xl font-semibold text-gray-600">One place to manage everything for your business.</div>
          <img className="py-10 h-2/3 w-full" src={logo} alt="" />
          <div className="absolute bottom-10  top-auto  text-xs font-regular text-gray-700">Need help? Call us at 1-877-934-8090 or Email us at Customersuccess@cpos.com</div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
