import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchUserDataById } from "../Apis/apimethods";
import { MyUser } from "../Apis/userInterface";
import Navbar from "../Components/Navbar";
import useStore from "../STORE/MyStore";
import "../Styles/detailed.css";

const Detailed = () => {
  const data = useStore();
  const userExists = useStore.getState().currentUser;
  return (
    <>
      <Navbar />
      <div className="detailed-parent-div">
        <div className="intro-info">
          <h1 className="intro-info-name">
            {userExists?.firstName} {userExists?.lastName}
          </h1>
          <img src={userExists?.image} />
        </div>
        <div className="personal-info">
          <h2 style={{ color: "#d11131" }}>Personal Information</h2>
          <div>
            <span className="personal-info-metadata">ID :{userExists?.id}</span>
            <br />
            <span className="personal-info-metadata">
              Username :{userExists?.username}
            </span>
            <br />
            <span className="personal-info-metadata">
              Maiden Name :{userExists?.maidenName}
            </span>
            <br />
            <span className="personal-info-metadata">
              Age : {userExists?.age}
            </span>
            <br />
            <span className="personal-info-metadata">
              Gender : {userExists?.gender}
            </span>
            <br />
            <span className="personal-info-metadata">
              Email : {userExists?.email}
            </span>
            <br />
            <span className="personal-info-metadata">
              Phone : {userExists?.phone}
            </span>
            <br />
            <span className="personal-info-metadata">
              Birth Date : {userExists?.birthDate}
            </span>
            <br />
            <span className="personal-info-metadata">
              Blood Group : {userExists?.bloodGroup}
            </span>
            <br />
            <span className="personal-info-metadata">
              Height : {userExists?.height}
            </span>
            <br />
            <span className="personal-info-metadata">
              Weight : {userExists?.weight}
            </span>
            <br />
            <span className="personal-info-metadata">
              Eye Color : {userExists?.eyeColor}
            </span>
            <br />
            <span className="personal-info-metadata">
              Hair Color : {userExists?.hair.color}
            </span>
            <br />
            <span className="personal-info-metadata">
              Hair Type : {userExists?.hair.type}
            </span>
            <br />
          </div>
        </div>
        <div className="location-info">
          <h2 style={{ color: "#d11131" }}>Location Information</h2>
          <div>
            <span className="location-info-metadata">
              Address : {userExists?.address.address}
            </span>
            <br />
            <span className="location-info-metadata">
              City : {userExists?.address.city}
            </span>
            <br />
            <span className="location-info-metadata">
              Postal Code : {userExists?.address.postalCode}
            </span>
            <br />
            <span className="location-info-metadata">
              State : {userExists?.address.state}
            </span>
            <br />
            <span className="location-info-metadata">
              IP Address : {userExists?.ip}
            </span>
            <br />
            <span className="location-info-metadata">
              MAC Address : {userExists?.macAddress}
            </span>
            <br />
            <span className="location-info-metadata">
              Domain : {userExists?.domain}
            </span>
            <br />
            <span className="location-info-metadata">
              User Agent : {userExists?.userAgent}
            </span>
            <br />
          </div>
        </div>
        <div className="profession-info">
          <h2 style={{ color: "#079133" }}>Professional Information</h2>
          <div>
            <span className="professional-info-metadata">
              University : {userExists?.university}
            </span>
            <br />
            <span className="professional-info-metadata">
              Company Name : {userExists?.company.name}
            </span>
            <br />
            <span className="professional-info-metadata">
              Department : {userExists?.company.department}
            </span>
            <br />
            <span className="professional-info-metadata">
              Title : {userExists?.company.title}
            </span>
            <br />
            <span className="professional-info-metadata">
              {/* Address : {userExists?.company.address.address} */}
            </span>
            <br />
            <span className="professional-info-metadata">
              {/* City : {userExists?.company.address.city} */}
            </span>
            <br />
            <span className="professional-info-metadata">
              {/* Postal Code :{userExists?.company.address.postalCode} */}
            </span>
            <br />
            <span className="professional-info-metadata">
              {/* State : {userExists?.company.address.state} */}
            </span>
            <br />
          </div>
        </div>
        <div className="finance-info">
          <h2 style={{ color: "#079133" }}>Financial Info</h2>
          <div>
            <span className="finance-info-metadata">
              Card Number : {userExists?.bank.cardNumber}
            </span>
            <br />
            <span className="finance-info-metadata">
              Card Type : {userExists?.bank.cardType}
            </span>
            <br />
            <span className="finance-info-metadata">
              IBAN no : {userExists?.bank.iban}
            </span>
            <br />
            <span className="finance-info-metadata">
              Card Expiry : {userExists?.bank.cardExpire}
            </span>
            <br />
            <span className="finance-info-metadata">
              Currency : {userExists?.bank.currency}
            </span>
            <br />
            <span className="finance-info-metadata">
              EIN : {userExists?.ein}
            </span>
            <br />
            <span className="finance-info-metadata">
              SSN : {userExists?.ssn}
            </span>
          </div>
        </div>
        <div className="crypto-info">
          <h2 style={{ color: "#079133" }}>Crypto Purchase</h2>
          <div>
            <span className="crypto-info-metadata">
              Coin Purchased : {userExists?.crypto.coin}
            </span>
            <br />
            <span className="crypto-info-metadata">
              Wallet : {userExists?.crypto.wallet}
            </span>
            <br />
            <span className="crypto-info-metadata">
              Network : {userExists?.crypto.network}
            </span>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailed;
