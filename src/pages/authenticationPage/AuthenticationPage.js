import React from "react";
import SignInForm from "../../components/authenticationForm/Sign-in";
import SignUpForm from "../../components/authenticationForm/Sign-up";
const AuthenticationPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthenticationPage;
