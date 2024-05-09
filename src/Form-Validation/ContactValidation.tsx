import * as Yup from "yup";

export const ContactFormValidation = Yup.object({
  name: Yup.string().min(3).required("Please Enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please Enter your Email"),
  phone: Yup.number()
    .min(1000000000)
    .max(9999999999)
    .required("Please enter your phone number"),
  issue: Yup.string().min(10).required("Please enter your Issue"),
});
