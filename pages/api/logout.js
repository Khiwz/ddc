import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

async function handler(req, res) {
  // console.log("request", req.method);

  if (req.method === "GET") {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        res.status(200).json({
          status: "OK",
          statusCode: null,
          message: "You are logged out",
          userProfile: null,
        });
      })
      .catch((error) => {
        // An error happened.
        res.status(400).json({
          status: "FAILED",
          statusCode: null,
          message: "Logout failed",
          userProfile: null,
        });
      });
  }
}

export default handler;
