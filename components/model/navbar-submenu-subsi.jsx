import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const pageInfo = {
  homePage: { lao: "ໜ້າຫຼັກ", english: "Home", chiness: "家" },
  subsidiary: {
    lao: "ບໍລິສັດໃນເຄືອ",
    english: "SUBSIDIARIES",
    chiness: "子公司",
  },
};

function NavbarSubmenuSubsi() {
  const { languageStore } = useSelector((state) => state.language);
  return (
    <div className="bg-gray-100 h-12 w-full">
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <div className="flex items-center h-full space-x-2 text-neutral-600">
          <Link href="/">
            <p className="hover:text-web-yellow uppercase cursor-pointer">
              {pageInfo.homePage[languageStore]}
            </p>
          </Link>
          <BsChevronRight />
          <Link href="/subsidiary">
            <p className="hover:text-web-yellow uppercase cursor-pointer">
              {pageInfo.subsidiary[languageStore]}
            </p>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NavbarSubmenuSubsi;
