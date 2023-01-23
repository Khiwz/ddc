import { Container } from "@mui/material";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

function NavbarSubmenu({ path, aboutMenuList }) {
  return (
    <div className="bg-gray-100 h-12 w-full">
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <div className="flex space-x-2 lg:space-x-5 text-sm lg:text-base items-center h-full text-gray-600 uppercase font-semibold">
          <Link
            href="/"
            className="text-gray-400 hover:text-web-yellow flex items-center space-x-3"
          >
            {aboutMenuList.menu[0].text}
          </Link>
          <BsChevronRight />
          <div className="h-full flex items-center menu-container group">
            <p className="text-gray-400 mr-2 lg:mr-5 group-hover:text-web-yellow">
              {aboutMenuList.menu[1].text}
            </p>
            <div
              className={`sub-menu-container left-0 flex flex-col space-y-3 bg-gray-100`}
            >
              {aboutMenuList.menu[1].subMenu.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="hover:text-web-yellow text-sm lg:text-base"
                >
                  {item.text}
                </a>
              ))}
            </div>
            <BsChevronRight className="group-hover:rotate-90 group-hover:text-web-yellow transition-all duration-200 ease-in-out" />
          </div>
          <p>
            {
              aboutMenuList.menu[1].subMenu.find((item) => item.link === path)
                ?.text
            }
          </p>
        </div>
      </Container>
    </div>
  );
}

export default NavbarSubmenu;
