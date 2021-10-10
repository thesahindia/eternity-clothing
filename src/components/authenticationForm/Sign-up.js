import React, { useState } from "react";
import CustomButton from "../customButton/CustomButton";
import Field from "../field/Field";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div style={{ marginLeft: "20px", width: "40vw" }}>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="fullName"
          label="Full Name"
          onChange={handleChange}
          value={formData.fullName}
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
        <CustomButton size="medium">Submit</CustomButton>
      </form>
    </div>
  );
};

export default SignUpForm;
