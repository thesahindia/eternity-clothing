import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase, {
  auth,
  createUserProfileDoc,
} from "./firebase-utils/firebase";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";
import { setCurrentUser } from "./redux/actions";

const App = () => {
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  console.log("g");


  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const userRef = await createUserProfileDoc(user);
      if (userRef) {
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
        return;
      }
      dispatch(setCurrentUser(user))
    });
  }, []);
  return (
    <div style={{ padding: "20px 5px" }}>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth" exact component={AuthenticationPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
