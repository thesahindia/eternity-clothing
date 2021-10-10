import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import firebase, { auth } from "./firebase-utils/firebase";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div style={{ padding: "20px 5px" }}>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Route path="/" exact component={HomePage} />
        <Route path="/auth" exact component={AuthenticationPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
