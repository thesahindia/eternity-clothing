import React from "react";
import CustomButton from "../customButton/CustomButton";
import { ReactComponent as FailedIcon } from "../../assets/images/failed.svg";
import "./failed.scss";
export default function FailedMsg({ openModal }) {
  return (
    <div className="msg-container">
      <FailedIcon />
      <div className="msg-text">
        Payment Failed!! Please try again with the provided test card.
      </div>
      <CustomButton
        onClick={() => openModal("")}
        btn="red"
        width="110px"
        height="40px"
      >
        Try Again
      </CustomButton>
    </div>
  );
}
