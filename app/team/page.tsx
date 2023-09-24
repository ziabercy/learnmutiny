import React from "react";
import Navigation from "../../public/components/Navigation";
import MainBody from "../../public/components/MainBody";

export default function TeamPage() {
  const info = {
    lineOne: "team page",
  };

  return (
    <>
      <Navigation currentPage="/team" />
      <MainBody info={info} />
    </>
  );
}
