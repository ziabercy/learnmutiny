import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";

type Props = {
  info: {
    lineOne: string;
    lineTwo?: string;
  };
};

export default function MainBody({ info }: Props) {
  return (
    <div className="border-2 flex flex-col items-center text-center justify-center h-screen">
      <Image className="m-5" src={logo} width={180} alt="cannot get image" />
      <div>
        <h1>{info.lineOne}</h1>
        <h2>{info.lineTwo}</h2>
      </div>
    </div>
  );
}
