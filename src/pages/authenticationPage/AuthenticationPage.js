import React from "react";
import FormContainer from "../../components/form-container/Form-container";
import backgroundImage from "../../assets/images/bg.jpg"


const AuthenticationPage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", width:"100vw", height:"100vh", display: "flex", justifyContent:"center", alignItems:"center"}}>
     <FormContainer/>
    </div>
  );
};

export default AuthenticationPage;
