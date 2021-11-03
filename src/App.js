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
import checkoutPage from "./pages/checkout/CheckoutPage";
import CollectionPage from "./pages/collectionPage/CollectionPage";
import ProductPage from "./pages/productPage/ProductPage";

const App = () => {
  const currentUser = useSelector((state) => state.currentUser);

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
      dispatch(setCurrentUser(user));
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/auth" exact component={AuthenticationPage} />
        <Route path="/checkout" exact component={checkoutPage} />
        <Route path="/collections/:collection" component={CollectionPage} />
        <Route path="/product/:productId" component={ProductPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
