import * as Yup from "yup";

export const LogFormValidation = Yup.object({
  username: Yup.string().min(3).required("Please enter your name"),
  password: Yup.string().min(4).required("Please enter your password"),
});
