import React, { useEffect, useState } from "react";
import { Container, Divider, IconButton } from "@mui/material";
import { IoHome } from "react-icons/io5";
import { FaPhoneSquareAlt, FaClock } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { listContact, listLanguage } from "../../constant/list-info";
import { useRouter } from "next/dist/client/router";
import { setReduxLanguage } from "../../redux/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { listNavbarData } from "../../constant/language-navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

function Navbar() {
  const [topContact, setTopContact] = useState(true);
  const [languageFlag, setLanguageFlag] = useState({});
  const route = useRouter();
  const [page, setPage] = useState("");
  const dispatch = useDispatch();
  const { languageStore } = useSelector((state) => state.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    !localStorage.getItem("language") ? fnSetLanguage() : fnGetLanguage();
    setLanguageFlag(
      listLanguage.find(
        (item) => item.text.toLowerCase() === localStorage.getItem("language")
      )
    );
  }, [languageStore]);

  const fnSetLanguage = () => {
    localStorage.setItem("language", languageStore);
  };
  const fnGetLanguage = () => {
    dispatch(setReduxLanguage(localStorage.getItem("language")));
  };

  useEffect(() => {
    setPage(route.pathname.split("/")[1]);
  }, []);

  const changeBackgroundNavbar = () => {
    if (window.scrollY >= 20) {
      setTopContact(false);
    } else {
      setTopContact(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundNavbar);
  });

  const changeLanguageHandler = (item) => {
    dispatch(setReduxLanguage(item.text.toLowerCase()));
    localStorage.setItem("language", item.text.toLowerCase());
  };

  return (
    <div
      className={`${
        !topContact && "bg-blue-900 lg:-translate-y-10"
      }  fixed z-40 w-full top-0 left-0 transform transition-all ease-in duration-300`}
    >
      {/* Contact section */}
      <Container maxWidth="lg">
        <div className="hidden xl:flex items-center justify-between text-gray-300 m-2">
          <div className="flex items-center space-x-2 text-sm">
            <IoHome />
            <p>{listNavbarData[languageStore]?.address}</p>
            <Divider orientation="vertical" flexItem variant="middle" />
            <FaPhoneSquareAlt />
            <p>{listNavbarData[languageStore]?.tel}</p>
            <Divider orientation="vertical" flexItem variant="middle" />
            <FaClock />
            <p>{listNavbarData[languageStore]?.workingHours}</p>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <p>{listNavbarData[languageStore]?.socialChannels}</p>
            {listContact.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="hover:text-web-yellow"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <Divider className={`${topContact ? "bg-gray-300" : "invisible"}`} />
      </Container>

      {/* Menu section */}
      <Container maxWidth="lg">
        <nav
          className={`${
            topContact ? "h-16" : "h-14"
          } flex items-center justify-between text-white transition-all duration-300`}
        >
          <Link href={"/"}>
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src="/images/logo/ddc-logo-small.png"
                // src="/images/logo/New-Logo7.png"
                alt="ddc logo"
                className={`${
                  topContact ? "h-14" : "h-12"
                } object-contain transition-all duration-300`}
              />
              <p className="text-lg lg:text-2xl font-bold hidden lg:block">
                {listNavbarData[languageStore]?.companyName}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 h-full">
            <ul className="flex space-x-5 h-full">
              {listNavbarData[languageStore]?.menu?.map((item, index) => (
                <li
                  key={index}
                  className="h-full flex items-center menu-container group text-xs xl:text-base"
                >
                  <a
                    className={`group-hover:text-web-yellow lg:font-semibold uppercase flex space-x-1 items-center ${
                      page.toLowerCase() === item.text.toLowerCase()
                        ? "text-web-yellow"
                        : page.length === 0 &&
                          item.text.toLowerCase() === "home" &&
                          "text-web-yellow"
                    }`}
                    href={item.link}
                  >
                    {item.text}
                    <span>{item.subMenu.length > 0 && <BsChevronDown />}</span>
                  </a>
                  {item.subMenu.length > 0 && (
                    <div
                      className={`sub-menu-container flex flex-col space-y-3 ${
                        topContact
                          ? "bg-gray-900/10"
                          : "bg-blue-900 -translate-y-10"
                      } ${
                        item.link.toLowerCase() === "/contact"
                          ? "right-0 items-end"
                          : "left-0"
                      }`}
                    >
                      {item.subMenu.map((itemSubMenu, i) => (
                        <a
                          key={i}
                          href={itemSubMenu.link}
                          className="hover:text-web-yellow"
                        >
                          {itemSubMenu.text}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* <BiSearchAlt2 fontSize={18} /> */}
            <div className="h-full flex items-center menu-container">
              <img
                src={languageFlag?.flag}
                alt=""
                className="w-8 h-5 object-cover rounded-sm"
              />
              <div
                className={`sub-menu-container right-0 flex flex-col space-y-2 ${
                  topContact ? "bg-gray-900/10" : "bg-blue-900 -translate-y-10"
                }`}
              >
                {listLanguage.map((item, i) => (
                  <div
                    key={i}
                    className="hover:text-web-yellow uppercase flex justify-end space-x-3 py-2 pl-5 pr-3 cursor-pointer"
                    onClick={() => changeLanguageHandler(item)}
                  >
                    <p>{item.label}</p>
                    <img
                      src={item.flag}
                      alt={item.text}
                      className="object-contain w-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </nav>
      </Container>

      <div
        className={`${
          isMenuOpen ? "right-0" : "-right-full"
        } absolute top-full p-5 bg-web-blue/90 h-screen w-72 flex flex-col space-y-10 transform transition-all ease-in duration-300`}
      >
        <ul className="flex flex-col text-white space-y-3">
          {listNavbarData[languageStore]?.menu?.map((item, index) => (
            <li key={index} className="h-full group">
              <a
                className={`group-hover:text-web-yellow lg:font-semibold uppercase flex space-x-1 items-center ${
                  page.toLowerCase() === item.text.toLowerCase()
                    ? "text-web-yellow"
                    : page.length === 0 &&
                      item.text.toLowerCase() === "home" &&
                      "text-web-yellow"
                }`}
                href={item.link}
              >
                {item.text}
                <span>{item.subMenu.length > 0 && <BsChevronDown />}</span>
              </a>
              {item.subMenu.length > 0 && (
                <div className={`flex flex-col space-y-1 ml-5`}>
                  {item.subMenu.map((itemSubMenu, i) => (
                    <a
                      key={i}
                      href={itemSubMenu.link}
                      className={`capitalize text-sm font-light ${
                        route.pathname === itemSubMenu.link && "text-web-yellow"
                      }`}
                    >
                      {itemSubMenu.text}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* <BiSearchAlt2 fontSize={18} /> */}
        <div className="text-white mb-10">
          {listLanguage.map((item, i) => (
            <div
              key={i}
              className="hover:text-web-yellow uppercase flex justify-end space-x-3 py-2 pl-5 pr-3 cursor-pointer"
              onClick={() => changeLanguageHandler(item)}
            >
              <p>{item.label}</p>
              <img
                src={item.flag}
                alt={item.text}
                className="object-contain w-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
