import React, { useEffect, useState } from "react";

function BannerSubpage() {
  const [isMobileHorizontal, setIsMobileHorizontal] = useState();

  useEffect(() => {
    const onResize = () => {
      setIsMobileHorizontal(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
  }, [isMobileHorizontal]);

  return (
    <div
      className={`relative w-full ${
        isMobileHorizontal > 400 ? "h-450" : "h-64"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden bg-opacity-20" />
      <img
        src="/images/contact/ddc-new-office.png"
        alt=""
        className="h-full w-full"
      />
    </div>
  );
}

export default BannerSubpage;
