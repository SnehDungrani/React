import Cart from "./Components/UI/Cart";
import Checkout from "./Components/UI/Checkout";
import Header from "./Components/UI/Header";
import Meals from "./Components/UI/Meals";
import { CartContextProvider } from "./Components/store/CartContext";
import { UserProgressContextProvider } from "./Components/store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
