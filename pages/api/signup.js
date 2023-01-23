import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

async function handler(req, res) {
  // console.log("request", req.method);
  // console.log("body", req.body);
  const username = req.body.username;
  const password = req.body.password;
  const confirmPwd = req.body.confirmPwd;

  if (req.method === "POST") {
    if (password === confirmPwd) {
      // console.log("username", username);
      // console.log("password", password);
      // console.log("user api", user);

      createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          res.status(201).json({
            status: "OK",
            statusCode: null,
            message: "Posting completed",
            userProfile: user,
          });
        })
        .catch((error) => {
          console.log("error", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          res.status(400).json({
            status: "FAILED",
            statusCode: errorCode,
            message: errorMessage,
            userProfile: null,
          });
        });
    } else {
      res.status(400).json({ status: "FAILED", message: "password mismatch" });
    }
  }
}

export default handler;
