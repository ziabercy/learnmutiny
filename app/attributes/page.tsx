import React from "react";
import Navigation from "../../public/components/Navigation";
import MainBody from "../../public/components/MainBody";
import Image from "next/image";

export default function AttributePage() {
  const info = {
    lineOne: "attributes page",
  };

  return (
    <>
      <Navigation currentPage="/attributes" />
      <div className="flex justify-center flex-wrap items-start content-start min-h-screen border border-red-500 p-0 m-[108px] mt-[67px]">
        <div className="relative flex justify-center flex-wrap p-0 m-0 h-[416px] w-[634px]">
          <div className="font-custom text-[62px] font-[700] text-center mt-[53px] leading-[75px]">
            build up your mu with attributes
          </div>
          <div className="font-custom text-[42px] font-[600] text-center absolute mt-[222px] leading-[51px]">
            attributes give you higher chances of getting hired
          </div>
        </div>
        <div className="relative flex justify-center flex-wrap p-0 m-0 h-[416px] w-[588px]">
          <div className="relative flex border-[4.5px] border-[#FFA800] border-solid rounded-[40px] w-[510px] h-[380px]">
            <h1 className="foat-custom2 text-[136px] font-[900] absolute text-[#FFA800] ml-[254px] mb-[15px]">
              4.8
            </h1>
          </div>
        </div>
        <div className="relative flex justify-center flex-wrap p-0 m-0 h-[489px] w-[1220px]">
          <div className="font-custom italic text-[42px] font-[500] text-center mt-[10px]">
            all attributes are gifted to you by founders
          </div>
          <div className="font-custom italic text-[42px] font-[500] text-center mt-[-220px]">
            each one being unique and describing your people skills
          </div>
          <div className="absolute flex border-[4.5px] border-[#FFA800] border-solid rounded-[40px] w-[338px] h-[273px] mr-[754px] mt-[165px] shadow-orange"></div>
          <div className="absolute flex border-[4.5px] border-[#70FF00] border-solid rounded-[40px] w-[338px] h-[273px] mt-[165px] shadow-green"></div>
          <div className="absolute flex border-[4.5px] border-[#00D1FF] border-solid rounded-[40px] w-[338px] h-[273px] ml-[754px] mt-[165px] shadow-blue"></div>
        </div>
        <div className="relative flex justify-center flex-wrap p-0 m-0 h-[585px] w-[1220px]">
          <div className="absolute font-custom italic text-[21px] font-[400] text-center mt-[25px]">
            but be warned...
          </div>
          <div className="absolute font-custom italic text-[42px] font-[400] text-center mt-[65px]">
            not all attributes are positive
          </div>
          <div className="absolute flex border-[4.5px] border-[#E40000] border-solid rounded-[40px] w-[338px] h-[273px] mr-[754px] mt-[188px] shadow-red"></div>
          <div className="absolute flex border-[4.5px] border-[#8803B7] border-solid rounded-[40px] w-[338px] h-[273px] mt-[188px] shadow-purple"></div>
          <div className="absolute flex border-[4.5px] border-[#FFF500] border-solid rounded-[40px] w-[338px] h-[273px] ml-[754px] mt-[188px] shadow-yellow"></div>
          <div className="absolute font-custom italic text-[42px] font-[400] text-center mt-[495px]">
            reputation matters, maintain it
          </div>
        </div>
        <div className="relative flex justify-center flex-wrap p-0 m-0 border h-[699px] w-[629px]"></div>
        <div className="relative flex justify-end flex-wrap p-0 m-0 h-[699px] w-[590px]">
          <div className="font-custom text-[62px] font-[700] text-center mt-[212px] mr-[85px] absolute">
            mu earnings
          </div>
          <div className="font-custom italic text-[42px] font-[600] text-center mt-[313px] leading-[51px]">
            build a strong profile to heighten your chance of racking up profile
            looks
          </div>
        </div>
      </div>
    </>
  );
}
