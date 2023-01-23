import { LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import HeaderModel from "../../components/model/header";
import { fnEncryptedPassword } from "../../util/function";
import Cookies from "js-cookie";
import Link from "next/link";

const initialUser = { username: "", password: "" };
function LoginPage() {
  const [invalidLength, setInvalidLength] = useState(false);
  const [isProcess, setIsProcess] = useState(false);
  const [user, setUser] = useState(initialUser);
  const route = useRouter();

  const loginHandler = (event) => {
    event.preventDefault();

    if (user.username.length < 4 || user.password.length < 8) {
      setInvalidLength(true);
    } else {
      setInvalidLength(false);
      setIsProcess(true);

      const userLogin = {
        username: user.username,
        password: fnEncryptedPassword(user.password),
      };

      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(userLogin),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("user profile", data);

          if (data.userProfile !== null) {
            localStorage.setItem("apiKey", data.userProfile.apiKey);
            localStorage.setItem("email", data.userProfile.email);
            localStorage.setItem(
              "accessToken",
              data.userProfile.stsTokenManager.accessToken
            );
            setIsProcess(false);
            Cookies.set("loggedIn", true);
            route.push("/backend/dashboard");
          } else {
            alert(data.message);
            setIsProcess(false);
          }
        });
    }
  };

  return (
    <div>
      <HeaderModel title="Login DDC" metaContent="" />
      <div className="relative">
        {isProcess && (
          <div className="absolute top-0 left-0 z-20 w-full">
            <LinearProgress />
          </div>
        )}
        <div className="about-ddc-background-image h-screen" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-center text-white">
          <Link href="/">
            <img
              src="/images/logo/ddc-logo-small.png"
              alt="ddg logo"
              className="mt-20 mb-5"
            />
          </Link>
          <p className="text-xl uppercase mb-20">Welcome to Backend</p>
          <form onSubmit={loginHandler} className="flex flex-col">
            <input
              placeholder="Email* ex: abc@mail.com"
              type="email"
              className="text-black py-2 px-5 outline-none rounded-md mb-5"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
              placeholder="Password*"
              type="password"
              className="text-black py-2 px-5 outline-none rounded-md mb-5"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            {invalidLength && <p className="text-red-500">Invalid length</p>}

            <button
              type="submit"
              className="py-2 bg-black rounded-md hover:bg-web-yellow hover:text-black transition-colors duration-150 "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
