import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import React from "react";
import { SiEthereum } from "react-icons/si";

const commonStyle =
  "min-h-[70px] sm:px-0 py-4 cursor-pointer px-2 sm:min-w-[120px] flex justify-center item-center border-[0.5px] border-gray-400 text-white";
const Welcome = () => {
  const cryptoWallet = () => {
    console.log("click");
  };
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex md:flex-row flex-col justify-between md:p-20 px-6 py-20">
        <div className="flex justify-start items-center flex-col md:mr-8">
          <h1 className="flex text-3xl sm:text-5xl text-white text-gradient">
            Send Money <br />
            across the world
          </h1>
          <p className="text-white text-left text-light mt-5 md:w-9/12 w-11/12 text-base">
            Buy and Sell crypto across the world <br /> Explore the crypto world
          </p>
          <button
            type="button"
            className="flex cursor-pointer p-4 flex-auto w-64 my-5 flex-row justify-center bg-blue-700 rounded-full hover:bg-blue-900"
            onClick={cryptoWallet}
          >
            <p className="text-white text-base text-semibold">
              Connect to wallet
            </p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 mt-4 ">
            <div className={`rounded-tl-2xl ${commonStyle}`}>Reliability</div>
            <div className={`${commonStyle}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyle}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyle}`}>Web 3.0</div>
            <div className={`${commonStyle}`}>Bitcoin</div>
            <div className={`rounded-br-2xl ${commonStyle}`}>Currency</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
