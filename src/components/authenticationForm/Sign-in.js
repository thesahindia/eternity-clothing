import React, { useState } from "react";
import CustomButton from "../customButton/CustomButton";
import Field from "../field/Field";
import { auth, signInWithGoogle } from "../../firebase-utils/firebase";
import {ReactComponent as GoogleLogo} from "../../assets/images/google.svg"
import "./sign-in.scss"
const SignInForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signIn">
      <div className="signIn-header">
        <h1 className="heading">Sign In</h1>
      <h3 className="sub-heading">I Already have an account</h3>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <Field
          name="email"
          label="Email"
          onChange={handleChange}
          type="email"
          required
          value={formData.email}
          placeholder="joe@gmail.com"
        />
        <Field
          name="password"
          label="Password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Enter Your Password"
        />
        <div className="btn-container">
        <CustomButton btn="secondary" width="100%" height="49px" shadow>Submit</CustomButton>
        </div>
      </form>
      <div className="or">
        <hr />
        or
        <hr/>
      </div>
      <CustomButton btn="red" onClick={signInWithGoogle} width="86%" height="49px" shadow>
       <GoogleLogo /> Log in with google
      </CustomButton>
    </div>
  );
};

export default SignInForm;
