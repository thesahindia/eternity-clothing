import React, { useState } from "react";
import CustomButton from "../customButton/CustomButton";
import Field from "../field/Field";
import { signInWithGoogle } from "../../firebase-utils/firebase";
const SignInForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div style={{ width: "30vw" }}>
      <h3>I Already have an account</h3>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          label="Email"
          onChange={handleChange}
          type="email"
          required
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
      <CustomButton onClick={signInWithGoogle} size="medium">
        Log in with google
      </CustomButton>
    </div>
  );
};

export default SignInForm;
