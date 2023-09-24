import logo from "../public/images/logo.png";
import Image from "next/image";
import Layout from "./layout";
import Navigation from "../public/components/Navigation";
import MainBody from "../public/components/MainBody";

// import ToggleLightMode from "../public/components/ToggleLightMode";

export default function Home() {
  const info = {
    lineOne: "hey Ramya & Zia here is the landing page",
    lineTwo: "i know my navbar is trash. ramya can we use your's 🫥",
  };

  return (
    <>
      <Layout>
        <Navigation currentPage="/" />
        <MainBody info={info} />
      </Layout>
    </>
  );
}
