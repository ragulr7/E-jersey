import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [address , setAddress] = useState();
  const { cart, removeFromCart } = useContext(CartContext); 
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    setSizes(Array(cart.length).fill(""));
  }, [cart]);

  function handleSizeChange(index, newSize) {
    const updatedSizes = [...sizes];
    updatedSizes[index] = newSize;
    setSizes(updatedSizes);
  }
  function updateAddress(event){
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
    <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex justify-around items-center h-16 px-8">
        <div className="text-xl">THE JERSEY</div>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/")}>Home</a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/collection")}>Collection</a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/about")}>About Us</a>
        <a className="hover:text-yellow-400 cursor-pointer">Cart 🛒</a>
      </div>

      <div className="mt-12 px-6 ">
        <h2 className="text-2xl font-bold text-center text-black mb-4">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty</p>
        ) : (
          <ul className="max-w-2xl mx-auto mt-6 space-y-4 border-4 rounded-2xl" >
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between bg-white p-4  rounded shadow">
                <img src={item.src} alt="item" className="w-20 h-20 rounded" />
                <div>
                  <p className="font-semibold">{item.type}</p>
           {item.name && (
  <p className="text-sm text-red-600 font-semibold">
    Customized Name: {item.name}
  </p>
)}

                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              
                <div>
                  <label className="text-sm font-semibold mr-2">
                    Size: {sizes[index] || "Not selected"}
                  </label>
                  <br />
                  <select
                    value={sizes[index] || ""}
                    onChange={(e) => handleSizeChange(index, e.target.value)}
                    className="bg-red-400 text-white hover:bg-yellow-300 px-2 py-1 cursor-pointer rounded"
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
             <div className="text-right font-semibold text-lg text-black pr-6 mt-4">
  Total Price: ₹{totalPrice}
</div>
                <div className="mt-4 p-4 max-w-xl mx-auto bg-white shadow-md rounded-md">
      <label className="block text-lg font-bold mb-1">Address:</label>
      <p className="mb-2 text-gray-700">
        <span className="text-red-600 font-medium">{address || "Not entered yet"}</span>
      </p>

      <textarea
        value={address}
        onChange={updateAddress}
        placeholder="Enter your full delivery address..."
        rows="4"
        className="w-full border-2 border-gray-300 rounded-xl p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
      ></textarea>
<div className="flex justify-center mt-4">
  <button onClick={goToBuy} className="border-2 bg-black text-white px-5 py-2 hover:bg-gray-500 rounded-2xl"> 
    Confirm 
  </button>
</div>
    </div>
          </ul>
          
          
        )}
      
      </div>
    </div>
  );
}

export default Cart;
