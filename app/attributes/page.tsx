import React from "react";
import Navigation from "../../public/components/Navigation";
import MainBody from "../../public/components/MainBody";

export default function AttributePage() {
  const info = {
    lineOne: "attributes page",
  };

  return (
    <>
      <Navigation currentPage="/attributes" />
      <MainBody info={info} />
    </>
  );
}
