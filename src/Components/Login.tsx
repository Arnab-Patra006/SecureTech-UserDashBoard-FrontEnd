import { useFormik } from "formik";
import { LogFormValidation } from "../Form-Validation/LValidation";
import "../Styles/login.css";
import { useMutation } from "react-query";
import { LogIn } from "../Apis/apimethods";
import { useNavigate } from "react-router";
import useStore from "../STORE/MyStore";
const initLogin = {
  username: "",
  password: "",
};

const Login = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("myCurrentId");
  localStorage.removeItem("currId");
  localStorage.removeItem("zustand-example");

  const { mutate } = useMutation(LogIn);
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initLogin,
    validationSchema: LogFormValidation,
    onSubmit: (values, action) => {
      mutate(values, {
        onSuccess: () => {
          const myCurrRole = localStorage.getItem("role");
          const currUID = localStorage.getItem("currId");
          for (const user of useStore.getState().allUser) {
            if (user.id === Number(currUID)) {
              useStore.setState((state) => ({
                ...state,
                currentUser: user,
              }));
            }
          }

          if (myCurrRole === "ADMIN") {
            navigate("/home");
          } else if (myCurrRole === "USER") {
            navigate(`/detailed/${currUID}`);
          } else {
            navigate("/");
          }
        },
      });
      action.resetForm();
    },
  });
  return (
    <>
      <div className="login-parent-div">
        <h1 className="login-heading">Log In</h1>
        <form className="login-parent" onSubmit={handleSubmit}>
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
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
