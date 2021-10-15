import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import firebase, {
  auth,
  createUserProfileDoc,
} from "./firebase-utils/firebase";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const userRef = await createUserProfileDoc(user);
      if (userRef) {
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
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
