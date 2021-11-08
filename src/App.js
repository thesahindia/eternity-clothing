import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase, {
  auth,
  convertCollectionsToObj,
  convertProductsToObj,
  createUserProfileDoc,
  firestore,
} from "./firebase-utils/firebase";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage";
import { setCurrentUser, upadateCollections, upadateProudcts } from "./redux/actions";
import checkoutPage from "./pages/checkout/CheckoutPage";
import CollectionPage from "./pages/collectionPage/CollectionPage";
import ProductPage from "./pages/productPage/ProductPage";
import Footer from "./components/footer/Footer";

const App = () => {
  const currentUser = useSelector((state) => state.currentUser);
console.log("f")
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
      
      const collectionRef = firestore.collection('collections');
      collectionRef.onSnapshot((snapshot)=> {
       dispatch(upadateCollections(convertCollectionsToObj(snapshot)))
      })

      const ProductsRef = firestore.collection('products');
      ProductsRef.onSnapshot((snapshot)=> {
       dispatch(upadateProudcts(convertProductsToObj(snapshot)))
      })
      
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/checkout" exact component={checkoutPage} />
        <Route path="/collections/:collection" component={CollectionPage} />
        <Route path="/product/:productId" component={ProductPage} />
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
