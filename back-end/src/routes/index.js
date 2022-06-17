import { emailRoute } from "./emailRoute";
import { logInRoute } from "./logInRoute";
import { signUpRoute } from "./signUpRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { VerifyEmailCode } from "./verifyEmailRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";

export const routes = [
  logInRoute,
  signUpRoute,
  testRoute,
  updateUserInfoRoute,
  emailRoute,
  VerifyEmailCode,
  resetPasswordRoute,
];
