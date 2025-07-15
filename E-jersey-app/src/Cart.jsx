import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext); 

  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    setSizes(Array(cart.length).fill(""));
  }, [cart]);

  function handleSizeChange(index, newSize) {
    const updatedSizes = [...sizes];
    updatedSizes[index] = newSize;
    setSizes(updatedSizes);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex justify-around items-center h-16 px-8">
        <div className="text-xl">THE JERSEY</div>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/")}>Home</a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/collection")}>Collection</a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/about")}>About Us</a>
        <a className="hover:text-yellow-400 cursor-pointer">Cart 🛒</a>
      </div>

      <div className="mt-12 px-6">
        <h2 className="text-2xl font-bold text-center text-black mb-4">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty</p>
        ) : (
          <ul className="max-w-2xl mx-auto mt-6 space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <img src={item.src} alt="item" className="w-20 h-20 rounded" />
                <div>
                  <p className="font-semibold">{item.type}</p>
                  <p className="text-sm text-gray-600">₹300</p>
                </div>
                <div>
                  <label className="text-sm font-semibold mr-2">
                    Size: {sizes[index] || "Not selected"}
                  </label>
                  <br />
                  <select
                    value={sizes[index] || ""}
                    onChange={(e) => handleSizeChange(index, e.target.value)}
                    className="bg-red-400 text-white hover:bg-yellow-300 px-2 py-1 rounded"
                  >
                    <option value="">Select Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="ml-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-800"
                  >
                    Remove ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
