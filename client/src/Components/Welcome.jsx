import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import React from "react";
import { SiEthereum } from "react-icons/si";

const commonStyle =
  "min-h-[70px] sm:px-0 py-4 cursor-pointer px-2 sm:min-w-[120px] flex justify-center item-center border-[0.5px] border-gray-400 text-white";
const Welcome = () => {
  const cryptoWallet = () => {
    console.log("click wallet");
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
            <div className={`${commonStyle}`}>Low Fee</div>
            <div className={`rounded-br-2xl ${commonStyle}`}>BlockChain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start w-full md:m-0 m-10">
          <div className="flex  flex-col rounded-xl justify-end items-start h-80 md:w-72 w-full my-4 eth-card white-glassmorphism">
            <div className="flex flex-col w-full h-full justify-between">
              <div className="flex m-3 justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={20} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white text-light mx-2 text-sm ">Address</p>
                <p className="text-white text-semibold mx-2 text-lg  ">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm-w-94 w-full justify-start items-center flex flex-col blue-glassmorphism"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
