import React from "react";
import Navigation from "../../public/components/Navigation";
import MainBody from "../../public/components/MainBody";

export default function LoginPage() {
  const info = {
    lineOne: "login page",
  };

  return (
    <>
      <Navigation currentPage="/login" />
      <MainBody info={info} />
    </>
  );
}
