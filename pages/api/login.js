import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

async function handler(req, res) {
  // console.log("request", req.method);

  if (req.method === "GET") {
  } else if (req.method === "POST") {
    const username = req.body.username;
    const password = req.body.password;

    // console.log("username", username);
    // console.log("password", password);

    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        res.status(200).json({
          status: "OK",
          statusCode: null,
          message: "Authorized",
          userProfile: user,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        res.status(400).json({
          status: "FAILED",
          statusCode: errorCode,
          message: errorMessage,
          userProfile: null,
        });
      });
  }
}

export default handler;
