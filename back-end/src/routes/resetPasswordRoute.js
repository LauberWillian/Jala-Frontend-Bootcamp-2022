import { v4 as uuidv4 } from "uuid";
import { sendEmail } from "../webservices/sendMail";

export const resetPasswordRoute = {
  path: "/api/auth/resetpassword",
  method: "post",
  handler: async (req, res) => {
    const verificationString = uuidv4();
    const { emailAddress } = req.body;

    // const db = getDbConnection("react-auth-db");
    // await db.collection('users').updateOne({_id: ObjectID(id)},{$set:{isVerified: true}});
    res.status(200, { message: "Email enviado" });
<<<<<<< HEAD
    const db = getDbConnection(process.env.DB_NAME);

    await db
      .collection("verificationTokens")
      .insert(
        { email: emailAddress },
        { token: verificationString },
        { $set: { isVerified: false } }
      );
=======
>>>>>>> 689c33781d587c103a5ac3d21181db2a4ddbda78

    await sendEmail({
      to: "willianlauber+test27@gmail.com",
      from: process.env.SENDGRID_SENDER_MAIL,
      subject: "Reset password link",
      text: `To reset your password, click here: ${process.env.FRONT}/reset-password/${verificationString}`,
    });
  },
};
