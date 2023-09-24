import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../images/logo2.png";

type Props = {
  currentPage: string;
};

export default function Navigation({ currentPage }: Props) {
  return (
    <nav className="flex flex-row space-x-5 items-end justify-around p-14 pb-0">
      <Image src={logo2} width={250} height={30} alt="Logo" />
      <NavigationLink href="/" currentPage={currentPage}>
        Home
      </NavigationLink>

      <NavigationLink href="/attributes" currentPage={currentPage}>
        Attributes
      </NavigationLink>

      <NavigationLink href="/team" currentPage={currentPage}>
        Team
      </NavigationLink>

      <NavigationLink href="/signup" currentPage={currentPage}>
        Sign Up
      </NavigationLink>

      <NavigationLink href="/login" currentPage={currentPage}>
        Login
      </NavigationLink>
    </nav>
  );
}

const NavigationLink = ({
  href,
  currentPage,
  children,
}: {
  href: string;
  currentPage: string;
  children: React.ReactNode;
}) => {
  const isActive = href === currentPage;
  const highlighted = isActive ? "text-blue-500" : "text-gray-500";

  return (
    <Link className={`${highlighted}`} href={href}>
      {children}
    </Link>
  );
};
