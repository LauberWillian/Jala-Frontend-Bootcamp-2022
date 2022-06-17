import { v4 as uuidv4 } from "uuid";
import { sendEmail } from "../webservices/sendMail";

export const resetPasswordRoute = {
  path: "/api/auth/resetpassword",
  method: "post",
  handler: async (req, res) => {
    const { verificationString, email, newPassword } = req.body;

    // const db = getDbConnection("react-auth-db");
    res.status(200, { message: "Email enviado" });
    const db = getDbConnection(process.env.DB_NAME);

    const item = await db
      .collection("verificationTokens")
      .findOne({ verificationString });
    if (item) {
      db.collection("users").updateOne(
        { email: email },
        { $set: { password: newPassword } }
      );
      item.remove();
    }
    res.send(200, "Update succefull");
  },
};
