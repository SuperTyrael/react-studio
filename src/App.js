import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <div className="App container-fluid">
        <div className="row">
          <div className="content col-8">
            <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
            <div className="bakery row mx-auto">
              {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                <BakeryItem item={item} addToCart={() => { setCart(cart.concat(item)) }} />
              ))}
            </div>
          </div>

          <aside className="side col-4">
            <h2>Cart</h2>
            {/* TODO: render a list of items in the cart */}
            {
              cart.length > 0 && <Cart cart={cart} />
            }
            <h3>Total: ${total.toFixed(2)}</h3>
          </aside>
        </div>
      </div>
    </>
  );
}

export default App;
