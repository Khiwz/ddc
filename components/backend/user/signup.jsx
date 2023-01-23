import React from "react";
import HeaderModel from "../../model/header";
import { LinearProgress, Tooltip } from "@mui/material";
import { useState } from "react";
import { fnEncryptedPassword } from "../../../util/function";
import Link from "next/link";

const initialUser = {
  username: "",
  password: "",
  confirmPwd: "",
};
function SignUpPage() {
  const [invalidLength, setInvalidLength] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [isProcess, setIsProcess] = useState(false);
  const [user, setUser] = useState(initialUser);

  const signupHandler = (event) => {
    event.preventDefault();

    if (
      user.username.length < 4 ||
      user.password.length < 8 ||
      user.confirmPwd.length < 8
    ) {
      setInvalidPassword(false);
      setInvalidLength(true);
    } else if (user.password !== user.confirmPwd) {
      setInvalidLength(false);
      setInvalidPassword(true);
    } else {
      setInvalidLength(false);
      setInvalidPassword(false);
      setIsProcess(true);

      //   console.log("password", fnEncryptedPassword(password));
      //   console.log("confirmPwd", fnEncryptedPassword(confirmPwd));

      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          password: fnEncryptedPassword(user.password),
          confirmPwd: fnEncryptedPassword(user.confirmPwd),
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("userProfile", data);
          alert(data.message);
          setIsProcess(false);
          setUser(initialUser);
        });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-md bg-gray-100 shadow-md w-96">
        {isProcess && (
          <div className="w-full">
            <LinearProgress />
          </div>
        )}
        <div className="p-10">
          <p className="text-xl text-center uppercase mb-10">Signup New User</p>
          <form onSubmit={signupHandler} className="flex flex-col">
            <Tooltip title="Username should be 5 char upward" placement="right">
              <input
                placeholder="Email* ex: abc@mail.com"
                type="email"
                className="text-black py-2 px-5 outline-none rounded-md mb-5"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </Tooltip>
            <Tooltip title="password should be 8 char upward" placement="right">
              <input
                placeholder="Password*"
                type="password"
                className="text-black py-2 px-5 outline-none rounded-md mb-5"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Tooltip>
            <Tooltip
              title="confirm password should match with password field"
              placement="right"
            >
              <input
                placeholder="Confirm Password*"
                type="password"
                className="text-black py-2 px-5 outline-none rounded-md mb-5"
                value={user.confirmPwd}
                onChange={(e) =>
                  setUser({ ...user, confirmPwd: e.target.value })
                }
              />
            </Tooltip>

            {invalidLength && <p className="text-red-500">Invalid length</p>}
            {invalidPassword && (
              <p className="text-red-500">Password is not match</p>
            )}

            <button
              type="submit"
              className="py-2 bg-web-blue text-white rounded-md hover:bg-web-yellow hover:text-black transition-colors duration-150 "
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
