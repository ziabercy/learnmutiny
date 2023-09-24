import React from "react";
import Navigation from "../../public/components/Navigation";
import MainBody from "../../public/components/MainBody";

export default function SignupPage() {
  const info = {
    lineOne: "signup page",
  };
  return (
    <>
      <Navigation currentPage="/signup" />
      <MainBody info={info} />
    </>
  );
}
