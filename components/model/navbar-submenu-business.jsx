import { Container } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function NavbarSubmenuBusiness({ menuData }) {
  const route = useRouter();
  return (
    <div className="bg-gray-100 h-12 w-full">
      <Container maxWidth="lg" sx={{ height: "100%", width: "100%" }}>
        {/* sub menu */}
        <div className="flex items-center sm:justify-between h-full w-full text-neutral-700">
          <a
            href={menuData?.link}
            className="font-bold uppercase text-sm sm:text-xxs md:text-xs lg:text-base"
          >
            {menuData?.text}
          </a>
          <div className="hidden sm:flex sm:items-center sm:justify-end space-x-3 h-full w-fit text-xxs lg:text-sm">
            {menuData?.subMenu?.map((item, index) => (
              <div
                key={index}
                className={`h-full flex items-center border-b-4 border-web-yellow border-opacity-0 ${
                  route.pathname === item.link && "border-opacity-100 font-bold"
                }`}
              >
                <a
                  key={index}
                  href={item.link}
                  className={`uppercase hover:text-web-yellow hover:font-semibold transition-colors duration-100 ease-linear `}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>

          <div className="sm:hidden mx-3">
            {route.pathname !== "/business" && (
              <ArrowForwardIosIcon sx={{ width: "15px", height: "15px" }} />
            )}
          </div>

          <div className="flex items-center space-x-5 h-full sm:hidden">
            {menuData?.subMenu?.map((item, index) => {
              if (item.link === route.pathname) {
                return (
                  <div
                    key={index}
                    className={`h-full flex items-center border-b-4 border-web-yellow border-opacity-0 ${
                      route.pathname === item.link &&
                      "border-opacity-100 font-bold"
                    }`}
                  >
                    <a
                      key={index}
                      href={item.link}
                      className={`text-xs uppercase hover:text-web-yellow hover:font-semibold transition-colors duration-100 ease-linear `}
                    >
                      {item.text}
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavbarSubmenuBusiness;
