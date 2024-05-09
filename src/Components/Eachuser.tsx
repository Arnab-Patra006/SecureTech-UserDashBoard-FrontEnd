import React from "react";
import { useNavigate } from "react-router";
import { MyUser } from "../Apis/userInterface";
import useStore from "../STORE/MyStore";
import "../Styles/eachuser.css";

const Eachuser = (props: MyUser) => {
  const navigate = useNavigate();
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const handleViewMore = (user: MyUser) => {
    if (props) {
      setCurrentUser(props);
    }
    const id = props.id;
    //It's a whole different page
    navigate(`/admin_detailed`);
  };
  return (
    <>
      <div className="eachuser-parent-div">
        <span className="eachuser-id">{props.id}</span>
        <br />
        <h3 className="eachuser-name">
          {props.firstName} {props.lastName}
        </h3>
        <br />
        <div className="eachuser-thumb-img">
          <div className="eachuser-det">
            <span className="eachuser-age">Age : {props.age} </span>
            <br />
            <span className="eachuser-gender">Gender : {props.gender}</span>
            <br />
            <span className="eachuser-blood">
              Blood Group : {props.bloodGroup}
            </span>
            <br />
            <span className="eachuser-crypto">
              Crypto Purchase : {props.crypto.coin}
            </span>
            <br />
            <span className="eachuser-company">
              Company : {props.company.name}
            </span>
            <br />
            <span className="eachuser-title">
              Title : {props.company.title}
            </span>
            <br />
            <span className="eachuser-dept">
              Department : {props.company.department}
            </span>
          </div>
          <img className="eachuser-img" src={props.image} />
        </div>
        <br />

        <button className="eachuser-btn" onClick={() => handleViewMore(props)}>
          View More
        </button>
      </div>
    </>
  );
};

export default Eachuser;
