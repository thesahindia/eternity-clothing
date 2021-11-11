import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase, {
  auth,
  createUserProfileDoc,
} from "./firebase-utils/firebase";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";
import {
  fetchCollectionsStartAsync,
  fetchProductsStartAsync,
  setCurrentUser,
} from "./redux/actions";
import checkoutPage from "./pages/checkout/CheckoutPage";
import Footer from "./components/footer/Footer";
import CollectionsContainer from "./pages/collectionPage/CollectionPageContainer";
import ProductPageContainer from "./pages/productPage/ProductPageContainer";

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
      dispatch(fetchCollectionsStartAsync());
      dispatch(fetchProductsStartAsync());
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/checkout" exact component={checkoutPage} />
        <Route
          path="/collections/:collection"
          component={CollectionsContainer}
        />
        <Route path="/product/:productId" component={ProductPageContainer} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <AuthenticationPage />
          }
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
