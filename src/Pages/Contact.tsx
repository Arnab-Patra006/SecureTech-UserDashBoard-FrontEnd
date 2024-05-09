import { useMutation } from "react-query";
import { useFormik } from "formik";
import React from "react";
import { postContact } from "../Apis/apimethods";
import { MyContact } from "../Apis/contactInterface";
import Navbar from "../Components/Navbar";
import { ContactFormValidation } from "../Form-Validation/ContactValidation";
import "../Styles/contact.css";

const initialContactVal:MyContact = {
  name: "",
  email: "",
  phone: "",
  issue: "",
};
const Contact = () => {
  const {mutate}=useMutation(postContact);
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialContactVal,
    validationSchema: ContactFormValidation,
    onSubmit: (values,action) => {
      console.log(values);
      mutate(values);
      action.resetForm();
    },
  });
  return (
    <>
      <Navbar />
      <div className="contact-parent">
        <div className="contact1">
          <h3 style={{ color: "#35184d", textShadow: "2px 2px 10px #a89fc9" }}>
            Our Contact Details
          </h3>
          We value your feedback and inquiries. If you have any questions,
          suggestions, or concerns, please don't hesitate to reach out to us.
          Our dedicated team is here to assist you and address any issues
          promptly.
          <div className="contact1-1">
            <span>Contact Information</span>
            <br />
            <span>Email : example@example.com</span>
            <br />
            <span>Phone : +1(555) 123-4567</span>
            <br />
            <span>Address : 123 Main Street,Anytown,USA</span>
            <br />
            <span style={{ color: "#ba8604" }}>
              Feel free to contact us via email or phone during our business
              hours.
            </span>
          </div>
          Alternatively, you can visit our office during operating hours for
          in-person assistance. We look forward to hearing from you and serving
          your needs. [Organization Name] - Your Trusted Partner in Data
          Security and Privacy.
        </div>
        <div className="contact2">
          <h2 className="contact-heading">Let's Connect</h2>
          <form className="form-parent" onSubmit={handleSubmit}>
            <div className="form-name">
              <label>User Name : </label>
              <input
                className="inp"
                type="text"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              ></input>
            </div>
            {errors.name && (
              <small style={{ color: "#9465a3" }}>{errors.name}</small>
            )}
            <br />

            <div>
              <label className="form-email">Email Id : </label>
              <input
                type="email"
                className="inp"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              ></input>
            </div>
            {errors.email && (
              <small style={{ color: "#9465a3" }}>{errors.email}</small>
            )}
            <br />
            <div className="form-ph">
              <label>Phone Number : </label>
              <input
                type="number"
                className="inp"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
              ></input>
            </div>
            {errors.phone && (
              <small style={{ color: "#9465a3" }}>{errors.phone}</small>
            )}
            <br />
            <div className="form-issue">
              <label>What is the Issue?</label>
              <br />
              <textarea
                rows={5}
                cols={60}
                className="inp"
                name="issue"
                value={values.issue}
                onBlur={handleBlur}
                onChange={handleChange}
              ></textarea>
            </div>
            {errors.issue && (
              <small style={{ color: "#9465a3" }}>{errors.issue}</small>
            )}
            <br />
            <div className="contact-btn-div">
              <button className="contact-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;


