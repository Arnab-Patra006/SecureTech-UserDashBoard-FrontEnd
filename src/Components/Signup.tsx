import { useFormik } from "formik";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { signUp } from "../Apis/apimethods";
import { SignFormValidation } from "../Form-Validation/SValidation";
import "../Styles/login.css";

const initSignup = {
  username: "",
  email: "",
  password: "",
  cpassword: "",
  role: "",
};

const Signup = () => {
  const { mutate } = useMutation(signUp);
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initSignup,
    validationSchema: SignFormValidation,
    onSubmit: (values, action) => {
      console.log(values);
      mutate(values);
      action.resetForm();
      navigate("/login");
    },
  });
  const switchLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="signup-parent-div">
        <h1 className="signup-heading">Sign Up</h1>
        <form className="signup-parent" onSubmit={handleSubmit}>
          <div>
            <label className="login-label">Username : </label>
            <input
              type="text"
              name="username"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
              className="login-inp"
            />
          </div>
          {errors.username && (
            <small className="error-msg">{errors.username}</small>
          )}
          <br />
          <div>
            <label className="login-label">Email : </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="login-inp"
            />
          </div>
          {errors.email && <small className="error-msg">{errors.email}</small>}
          <br />
          <div>
            <label className="login-label">Role : </label>
            <input
              type="string"
              name="role"
              value={values.role}
              onBlur={handleBlur}
              onChange={handleChange}
              className="login-inp"
            />
          </div>
          {errors.password && (
            <small className="error-msg">{errors.password}</small>
          )}
          <br />
          <div>
            <label className="login-label">Password : </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="login-inp"
            />
          </div>
          {errors.password && (
            <small className="error-msg">{errors.password}</small>
          )}
          <br />
          <div>
            <label className="login-label">Confirm Password : </label>
            <input
              type="password"
              name="cpassword"
              value={values.cpassword}
              onBlur={handleBlur}
              onChange={handleChange}
              className="login-inp"
            />
          </div>
          {errors.cpassword && (
            <small className="error-msg">{errors.cpassword}</small>
          )}
          <br />
          <div className="both-btn">
            <div>
              <button className="signup-btn-S" type="submit">
                Sign Up
              </button>
            </div>
            <span>OR</span>
            <div>
              <button
                className="signup-btn-S"
                type="submit"
                onClick={switchLogin}
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
