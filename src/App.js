import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
const App = () => {
  return (
    <div style={{ padding: "20px 5px" }}>
      <BrowserRouter>
         <Header />
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
