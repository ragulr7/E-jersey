import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const { cart, removeFromCart } = useContext(CartContext);

  const originalTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = originalTotal >= 2000 ? 200 : 0;
  const finalTotal = originalTotal - discount;

  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    setSizes(Array(cart.length).fill(""));
  }, [cart]);

  function handleSizeChange(index, newSize) {
    const updatedSizes = [...sizes];
    updatedSizes[index] = newSize;
    setSizes(updatedSizes);
  }

  function updateAddress(event) {
    setAddress(event.target.value);
  }

  function goToBuy() {
    if (sizes.includes("") || sizes.length !== cart.length) {
      alert("Please select size for all items before placing the order.");
      return;
    }
    if (address.trim() === "") {
      alert("Please enter the address");
      return;
    }
    alert("Order Placed");
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
     <div className="font-bold text-amber-50 bg-black h-16 px-4 sm:px-8">
  <div className="flex items-center justify-center h-full space-x-6 sm:space-x-12">
    <div className="text-lg sm:text-xl text-yellow-400">THE JERSEY</div>
    <a
      className="hover:text-yellow-400 cursor-pointer"
      onClick={() => navigate("/")}
    >
      Home
    </a>
    <a
      className="hover:text-yellow-400 cursor-pointer"
      onClick={() => navigate("/")}
    >
      Collection
    </a>
    <a
      className="hover:text-yellow-400 cursor-pointer"
      onClick={() => navigate("/about")}
    >
      About Us
    </a>
    <a className="hover:text-yellow-400 cursor-pointer">Cart 🛒</a>
  </div>
</div>


      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center mt-8 px-4 sm:px-6 lg:px-12 flex-grow">
        <h2 className="text-2xl font-bold text-center text-black mb-6">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty</p>
        ) : (
          <div className="w-full max-w-4xl flex flex-col space-y-6">
            {/* CART ITEMS */}
            <ul className="flex flex-col space-y-4 border-2 border-gray-300 rounded-xl p-4 bg-white shadow-md">
              {cart.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 p-4 border-b last:border-none">
                  <img src={item.src} alt="item" className="w-24 h-24 object-cover rounded" />

                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-semibold text-lg">{item.type}</p>
                    {item.name && (
                      <p className="text-sm text-red-600 font-semibold">
                        Customized Name: {item.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-center sm:items-end">
                    <label className="text-sm font-semibold mb-1">
                      Size: {sizes[index] || "Not selected"}
                    </label>
                    <select
                      value={sizes[index] || ""}
                      onChange={(e) => handleSizeChange(index, e.target.value)}
                      className="bg-red-400 text-white px-3 py-1 rounded cursor-pointer hover:bg-yellow-400"
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
                      className="mt-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-800"
                    >
                      Remove ❌
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* TOTAL & ADDRESS */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-4">
              <div className="text-right text-black font-semibold text-lg">
                <p>Original Price: ₹{originalTotal}</p>
                {discount > 0 && (
                  <p className="text-green-600">₹{discount} OFF Applied!</p>
                )}
                <p className="text-xl mt-1">Total Price: ₹{finalTotal}</p>
              </div>

              <div>
                <label className="block text-lg font-bold mb-2">Address:</label>
                <textarea
                  value={address}
                  onChange={updateAddress}
                  placeholder="Enter your full delivery address..."
                  rows="4"
                  className="w-full border-2 border-gray-300 rounded-xl p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={goToBuy}
                  className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;
