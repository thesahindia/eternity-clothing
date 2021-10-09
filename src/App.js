import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <div style={{ padding: "20px 5px" }}>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
