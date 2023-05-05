import Banner from "../marketplace/components/Banner";
import Navbar from "../../navbar/index";
import NFt2 from "../../../assets/img/nfts/Nft2.png";
import NFt4 from "../../../assets/img/nfts/Nft4.png";
import NFt3 from "../../../assets/img/nfts/Nft3.png";
import NFt5 from "../../../assets/img/nfts/Nft5.png";
import NFt6 from "../../../assets/img/nfts/Nft6.png";
import avatar1 from "../../../assets/img/avatars/avatar1.png";
import avatar2 from "../../../assets/img/avatars/avatar2.png";
import avatar3 from "../../../assets/img/avatars/avatar3.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import HistoryCard from "../marketplace/components/HistoryCard";

import NftCard from "../../card/NftCard";


const Marketplace = () => {
  const navigate = useNavigate();
  const [hr, setHr] = useState({});


  const MyUserId = localStorage.getItem("hr");


  const fetchUser = async () => {
    await axios
      .post(`${URL}hr/getUser`, {
        userId: MyUserId,
      })
      .then((res) => {
        console.log({ res: res });
        setHr(res.data);
      });
  };

  const profileclick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const jobpostclick = (event) => {
    event.preventDefault();
    navigate("/jobpost");
  };


//signout
const signoutclick = (event) => {
  localStorage.removeItem("user");
  localStorage.removeItem("user-auth-key");

  event.preventDefault();
  navigate("/");
  window.location.reload();
};


  
  return (
    
    <div className="mt-3 ml-9 mr-9 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2x5:grid-cols-3">
      
   
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
      <div className="h-full">
            <Navbar/>
      </div>
      
      <div
            className="flex items-center justify-center flex-col gap-3 rounded-tl-lg rounded-bl-lg"
            style={{
              position: "absolute",
              left: 0,
              width: "20%",
              height: "97vh",
              backgroundColor: "white",
          
            }}
          >
            <h2 className="font-bold text-navy-700 dark:text-white text-2xl fixed left-10 top-40">
              👋 Hey, {}
            </h2>
            <div
              className="w-4/5 h-20  flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105"
              style={{
                backgroundColor: "#f4f7fe",
              }}
              onclick={jobpostclick}
              
            >
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/slduhdil.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                JobApply
              </h1>
            </div>

            <div
              className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
              onClick={signoutclick}
              
            >
              <lord-icon
                src="https://cdn.lordicon.com/dycatgju.json"
                trigger="hover"
                style={{ width: "22px", height: "22px" }}
              ></lord-icon>
              <h1 className="font-bold text-navy-700 dark:text-white  cursor-pointer">
                Settings
              </h1>
            </div>
          </div>
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending NFTs
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                see all
              </a>
            </li>

          </ul>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt3}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt4}
          />
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt5}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt6}
          />
        </div>
      </div>

      {/* right side section */}
</div>


  );
};

export default Marketplace;
