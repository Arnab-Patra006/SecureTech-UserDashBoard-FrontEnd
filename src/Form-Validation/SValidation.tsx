import * as Yup from 'yup';

export const SignFormValidation=Yup.object({
    username:Yup.string().min(3).required("Please enter your name"),
    email:Yup.string().email("Please enter a valid email").required("Please enter your Email"),
    role:Yup.string().required("Enter Your Role"),
    password:Yup.string().min(4).required("Please enter Password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"Password not matched").required("Please confirm password"),
});