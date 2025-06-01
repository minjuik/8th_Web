import "./App.css";
import { Navbar } from "./components/Navbar";
import { CartList } from "./components/CartList";
import { PriceBox } from "./components/PriceBox";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartList />
      <PriceBox />
    </Provider>
  );
}

export default App;
