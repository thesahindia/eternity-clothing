import React, { useState } from "react";
import { auth, createUserProfileDoc } from "../../firebase-utils/firebase";
import CustomButton from "../customButton/CustomButton";
import Field from "../field/Field";
import "./sign-up.scss";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password } = formData;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      setFormData({
        displayName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signUp">
      <h1 className="signUp-header">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="displayName"
          label="Full Name"
          onChange={handleChange}
          value={formData.displayName}
          placeholder="John Doe"
        />
        <Field
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="john@gmail.com"
        />
        <Field
          name="password"
          label="Password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Enter Your Password"

        />
        <div className="btn-container">
        <CustomButton btn="secondary" width="100%"  height="49px" shadow>Submit</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
