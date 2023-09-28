import React from "react";
import Navigation from "../../public/components/Navigation";
import MainBody from "../../public/components/MainBody";
import Image from "next/image";
import angular from "/public/images/angular.svg";
import docker from "/public/images/docker.svg";
import firebase from "/public/images/firebase.svg";
import java from "/public/images/java.svg";
import python from "/public/images/python.svg";
import pytorch from "/public/images/pytorch.svg";
import tailwind from "/public/images/tailwind.svg";
import vue from "/public/images/vue.svg";
import award from "/public/images/award.svg";
import calculator from "/public/images/calculator.svg";
import facewink from "/public/images/facewink.svg";
import thumbsup from "/public/images/thumbsup.svg";
import memojiBlue from "/public/images/memojiBlue.svg";
import memojiGreen from "/public/images/memojiGreen.svg";
import memojiOrange from "/public/images/memojiOrange.svg";
import memojiPurple from "/public/images/memojiPurple.svg";
import memojiRed from "/public/images/memojiRed.svg";
import memojiYellow from "/public/images/memojiYellow.svg";
import alert from "/public/images/alert.svg";
import bug from "/public/images/bug.svg";
import hand from "/public/images/hand.svg";
import alarm from "/public/images/alarm.svg";
import fingerprint from "/public/images/fingerprint.svg";
import moneys from "/public/images/moneys.svg";
import target from "/public/images/target.svg";

import mainMemoji from "/public/images/mainMemoji.svg";

export default function AttributePage() {
  const info = {
    lineOne: "attributes page",
  };

  return (
    <>
      <Navigation currentPage="/attributes" />

      <div className="flex flex-wrap justify-center items-start content-start min-h-screen p-0 m-[108px] mt-[67px]">

        <div className="flex justify-center flex-wrap p-0 m-0 h-[416px] w-[634px]">
          <div className="font-custom text-[62px] font-[700] text-center mt-[53px] leading-[75px]">build up your mu with attributes</div>
          <div className="font-custom text-[42px] font-[600] text-center mb-[75px] leading-[51px]">attributes give you higher chances of getting hired</div>
        </div>

        <div className="flex justify-center flex-wrap p-0 m-0 h-[416px] w-[588px]">
          <div className="border-[4.5px] border-[#FFA800] border-solid rounded-[40px] w-[510px] h-[380px]">
            <Image alt="main memoji" src={mainMemoji} style={{width: "180px", height: "180px",}} className="absolute mt-[5px] ml-[5px]"/>
            <h1 className="foat-custom2 text-[136px] font-[900] absolute text-[#FFA800] ml-[254px] mb-[15px]">4.8</h1>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[108px] h-[36px] mt-[184px] ml-[26px]">
              <Image alt="angular logo" src={angular} style={{width: "20px", height: "20px",}} className="absolute mr-[68px] mt-[5px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[21px]">Angular</div>
            </div>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[108px] h-[36px] mt-[184px] ml-[141px]">
              <Image alt="docker logo" src={docker} style={{width: "25px", height: "24px",}} className="absolute mr-[62px] mt-[4px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[21px]">Docker</div>
            </div>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[108px] h-[36px] mt-[184px] ml-[255px]">
              <Image alt="pytorch logo" src={pytorch} style={{width: "21px", height: "21px",}} className="absolute mr-[64px] mt-[5px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[21px]">Pytorch</div>
            </div>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[108px] h-[36px] mt-[184px] ml-[368px]">
              <Image alt="tailwind logo" src={tailwind} style={{width: "25px", height: "25px",}} className="absolute mr-[69px] mt-[4px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[21px]">Tailwind</div>
            </div>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[103px] h-[36px] mt-[230px] ml-[43px]">
              <Image alt="python logo" src={python} style={{width: "20px", height: "20px",}} className="absolute mr-[63px] mt-[5px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[21px]">Python</div>
            </div>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[90px] h-[36px] mt-[230px] ml-[153px]">
              <Image alt="java logo" src={java} style={{width: "26px", height: "26px",}} className="absolute mr-[50px] mt-[3px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[19px]">Java</div>
            </div>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[80px] h-[36px] mt-[230px] ml-[250px]">
              <Image alt="vue logo" src={vue} style={{width: "21px", height: "21px",}} className="absolute mr-[39px] mt-[5px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[21px]">Vue</div>
            </div>
            <div className="absolute flex justify-center items-start border-[2.7px] border-[#4F95FF] border-solid rounded-[40px] w-[115px] h-[36px] mt-[230px] ml-[337px]">
              <Image alt="firebase logo" src={firebase} style={{width: "23px", height: "23px",}} className="absolute mr-[70px] mt-[5px]"/>
              <div className="font-custom text-[14px] font-[600] text-center text-[#E0E0E0] mt-[5px] ml-[21px]">Firebase</div>
            </div>
            <div className="w-[60px] h-[60px] border-[2px] border-[#FFA800] rounded-full absolute justify-center items-center mt-[285px] ml-[118px] shadow-orange2">
              <Image alt="award" src={award} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
            <div className="w-[60px] h-[60px] border-[2px] border-[#70FF00] rounded-full absolute justify-center items-center mt-[285px] ml-[190px] shadow-green2">
              <Image alt="thumbsup" src={thumbsup} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
            <div className="w-[60px] h-[60px] border-[2.3px] border-[#00D1FF] rounded-full absolute justify-center items-center mt-[285px] ml-[261px] shadow-blue2">
              <Image alt="face wink" src={facewink} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
            <div className="w-[60px] h-[60px] border-[2px] border-[#CCC4C8] rounded-full absolute justify-center items-center mt-[285px] ml-[332px] shadow-grey">
              <Image alt="calculator" src={calculator} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap p-0 m-0 h-[489px] w-[1220px]">
          <div className="font-custom italic text-[42px] font-[500] text-center mt-[10px]">all attributes are gifted to you by founders</div>
          <div className="font-custom italic text-[42px] font-[500] text-center mt-[-220px]">each one being unique and describing your people skills</div>
        
          <div className="absolute flex items-start justify-center border-[4.5px] border-[#FFA800] border-solid rounded-[40px] w-[338px] h-[273px] mr-[754px] mt-[165px] shadow-orange">
            <div className="font-custom text-[33px] font-[700] text-center text-[#FFE9A9] mt-[20px]">determined</div>
            <Image alt="memoji" src={memojiOrange} style={{width: "133px", height: "133px",}} className="absolute mr-[10px] mt-[89px]"/>
            <div className="w-[60px] h-[60px] border-[2px] border-[#FFA800] rounded-full absolute justify-center items-center mt-[171px] ml-[88px] shadow-orange2 bg-black">
              <Image alt="award" src={award} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
          </div>
          <div className="absolute flex items-start justify-center border-[4.5px] border-[#70FF00] border-solid rounded-[40px] w-[338px] h-[273px] mt-[165px] shadow-green">
            <div className="font-custom text-[33px] font-[700] text-center text-[#C2F1CC] mt-[20px]">accurate</div>
            <Image alt="memoji" src={memojiGreen} style={{width: "133px", height: "133px",}} className="absolute mr-[10px] mt-[89px]"/>
            <div className="w-[60px] h-[60px] border-[2px] border-[#70FF00] rounded-full absolute justify-center items-center mt-[171px] ml-[88px] shadow-green2 bg-black">
              <Image alt="thumbsup" src={thumbsup} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
          </div>
          <div className="absolute flex items-start justify-center border-[4.5px] border-[#00D1FF] border-solid rounded-[40px] w-[338px] h-[273px] ml-[754px] mt-[165px] shadow-blue">
            <div className="font-custom text-[33px] font-[700] text-center text-[#C0E9FB] mt-[20px]">charisma</div>
            <Image alt="memoji" src={memojiBlue} style={{width: "133px", height: "133px",}} className="absolute mr-[10px] mt-[89px]"/>
            <div className="w-[60px] h-[60px] border-[2.3px] border-[#00D1FF] rounded-full absolute justify-center items-center mt-[171px] ml-[88px] shadow-blue2 bg-black">
              <Image alt="face wink" src={facewink} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center flex-wrap p-0 m-0 h-[585px] w-[1220px]">
          <div className="absolute font-custom italic text-[21px] font-[500] text-center mt-[25px]">but be warned...</div>
          <div className="absolute font-custom italic text-[42px] font-[500] text-center mt-[65px]">not all attributes are positive</div>
          <div className="absolute flex items-start justify-center border-[4.5px] border-[#E40000] border-solid rounded-[40px] w-[338px] h-[273px] mr-[754px] mt-[188px] shadow-red">
            <div className="font-custom text-[33px] font-[700] text-center text-[#F3ABA7] mt-[20px]">balky</div>
            <Image alt="memoji" src={memojiRed} style={{width: "133px", height: "133px",}} className="absolute mr-[10px] mt-[89px]"/>
            <div className="w-[60px] h-[60px] border-[2px] border-[#E40000] rounded-full absolute justify-center items-center mt-[171px] ml-[88px] shadow-red2 bg-black">
              <Image alt="hand" src={hand} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
          </div>
          <div className="absolute flex items-start justify-center border-[4.5px] border-[#8803B7] border-solid rounded-[40px] w-[338px] h-[273px] mt-[188px] shadow-purple">
            <div className="font-custom text-[33px] font-[700] text-center text-[#CCC1F0] mt-[20px]">inept</div>
            <Image alt="memoji" src={memojiPurple} style={{width: "133px", height: "133px",}} className="absolute mr-[10px] mt-[89px]"/>
            <div className="w-[60px] h-[60px] border-[2px] border-[#8803B7] rounded-full absolute justify-center items-center mt-[171px] ml-[88px] shadow-purple2 bg-black">
              <Image alt="bug" src={bug} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
          </div>
          <div className="absolute flex items-start justify-center border-[4.5px] border-[#FFF500] border-solid rounded-[40px] w-[338px] h-[273px] ml-[754px] mt-[188px] shadow-yellow">
            <div className="font-custom text-[33px] font-[700] text-center text-[#F4CE9B] mt-[20px]">quitter</div>
            <Image alt="memoji" src={memojiYellow} style={{width: "133px", height: "133px",}} className="absolute mr-[10px] mt-[89px]"/>
            <div className="w-[60px] h-[60px] border-[2px] border-[#FFF500] rounded-full absolute justify-center items-center mt-[171px] ml-[88px] shadow-yellow2 bg-black">
              <Image alt="alert" src={alert} style={{width: "44px", height: "44px",}} className="absolute ml-[6px] mt-[10px]"/>
            </div>
          </div>
          <div className="absolute font-custom italic text-[42px] font-[500] text-center mt-[495px]">reputation matters, maintain it</div>
        </div>

        <div className="relative flex justify-center flex-wrap p-0 m-0 h-[699px] w-[629px]">
            <div className="w-[125px] h-[125px] border-[2.5px] border-[#70FF00] rounded-full absolute justify-center items-center mt-[470px] ml-[-380px] shadow-green3 bg-black z-0">
              <Image alt="thumbsup" src={thumbsup} style={{width: "95px", height: "95px",}} className="absolute ml-[14px] mt-[16px]"/>
            </div>
            <div className="w-[150px] h-[150px] border-[2.5px] border-[#00D1FF] rounded-full absolute justify-center items-center mt-[200px] ml-[-370px] shadow-blue3 bg-black blur-[1.5px] z-0">
              <Image alt="face wink" src={facewink} style={{width: "113px", height: "113px",}} className="absolute ml-[16px] mt-[28px]"/>
            </div>
            <div className="w-[125px] h-[125px] border-[2.5px] border-[#FF007A] rounded-full absolute justify-center items-center mt-[310px] ml-[420px] shadow-pink bg-black blur-[1.5px] z-0">
              <Image alt="alarm" src={alarm} style={{width: "85px", height: "85px",}} className="absolute ml-[18px] mt-[23px]"/>
            </div>
            <div className="w-[100px] h-[100px] border-[2.6px] border-[#4600DB] rounded-full absolute justify-center items-center mt-[520px] ml-[280px] shadow-purple3 bg-black blur-[3px]">
              <Image alt="fingerprint" src={fingerprint} style={{width: "67px", height: "67px",}} className="absolute ml-[15px] mt-[20px]"/>
            </div>
            <div className="relative flex border-[4.5px] border-[#FFA800] border-solid rounded-[40px] w-[360px] h-[150px] mt-[355px] z-10 bg-black">
            <Image alt="main memoji" src={mainMemoji} style={{width: "133px", height: "133px",}} className="absolute mt-[3px] ml-[5px]"/>
            <h1 className="foat-custom2 text-[95px] font-[900] absolute text-[#FFA800] ml-[170px] mt-[0px]">4.8</h1>
            <div className="w-[80px] h-[80px] border-[2.3px] border-[#E40000] rounded-full absolute justify-center items-center mt-[-50px] ml-[115px] shadow-red3 bg-black">
              <Image alt="target" src={target} style={{width: "60px", height: "60px",}} className="absolute ml-[8px] mt-[13px]"/>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-end flex-wrap p-0 m-0 h-[699px] w-[590px]">
          <div className="font-custom text-[62px] font-[700] text-center mt-[212px] mr-[85px] absolute">mu earnings</div>
          <div className="font-custom italic text-[42px] font-[600] text-center mt-[313px] leading-[51px]">build a strong profile to heighten your chance of racking up profile looks</div>
        </div>
      </div>
    </>
    
  );
}
