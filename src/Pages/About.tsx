import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/about.css";
import aboutimg from "../Images/about2.jpeg";

const About = () => {
  return (
    <>
      <Navbar />
      <h1 className="about-heading">About Us</h1>
      <div className="about-parent">
        <div>
          <img className="about-img" src={aboutimg} />
        </div>

        <div className="about2">
          <div className="about1">
            Welcome to{" "}
            <span style={{ color: "#ba8604" }}>SecureTech Solutions</span>,
            where we prioritize your privacy and security. With a commitment to
            excellence, we strive to provide innovative solutions tailored to
            meet your needs. As a trusted entity, we handle your information
            with the utmost care and integrity.
          </div>
          At <span style={{ color: "#ba8604" }}>SecureTech Solutions</span>, we
          understand the importance of trust in today's digital world. That's
          why we ensure strict adherence to industry standards and regulations,
          safeguarding your personal and financial data at every step.
        </div>
        <div className="about3">
          Our team of experts works tirelessly to maintain the highest standards
          of data protection, giving you peace of mind in an ever-evolving
          landscape. With a focus on transparency and accountability, we believe
          in fostering long-term relationships built on trust and mutual
          respect. Whether you're an individual user or a corporate entity,
          we're here to serve you with integrity and professionalism.
        </div>
      </div>
    </>
  );
};

export default About;
