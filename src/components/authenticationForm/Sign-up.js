import React, { useState } from "react";
import { auth, createUserProfileDoc } from "../../firebase-utils/firebase";
import CustomButton from "../customButton/CustomButton";
import Field from "../field/Field";

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
    <div style={{ marginLeft: "20px", width: "40vw" }}>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="displayName"
          label="Full Name"
          onChange={handleChange}
          value={formData.displayName}
        />
        <Field
          name="email"
          label="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <Field
          name="password"
          label="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <CustomButton btn="secondary">Submit</CustomButton>
      </form>
    </div>
  );
};

export default SignUpForm;
