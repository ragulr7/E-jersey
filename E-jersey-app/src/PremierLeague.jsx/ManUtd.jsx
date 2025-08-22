import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext"; 

function ManUtd() {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);

  const jerseys = [
    {
      src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb34e2d7ef774076b2384c4aecc3c090_9366/Manchester_United_24-25_Home_Jersey_Red_IU1397_HM1.jpg",
      type: "2024-2025 Home Jersey",
      price:300,
    },
    {
      src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c0054b97aa8a4feb86159d614c1053a9_9366/Manchester_United_24-25_Away_Jersey_Blue_IU1390_HM1.jpg",
      type: "2024-2025 Away Jersey",
      price:300,
    },
    {
      src: "https://mufc-live.cdn.scayle.cloud/images/0dd8a9fe914d7bca2c29eb631fa44e96.jpg?brightness=1&width=922&height=1230&quality=70&bg=ffffff",
      type: "2024-2025 Third Jersey",
      price:300
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-center md:justify-around items-center px-4 py-4">
        <div className="text-xl w-full text-center md:w-auto mb-2 md:mb-0  text-yellow-400">THE JERSEY</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/")}>Home</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/collection")}>Collection</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/about")}>About Us</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/cart")}>
            Cart 🛒 ({cart.length})
          </a>
        </div>
      </div>

      <h1 className="text-center text-4xl mt-10 font-extrabold text-red-600">
        Welcome to Manchester United Collection
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {jerseys.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.src}
              alt="jersey"
              className="w-80 h-80 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 w-72 mx-auto mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Price:</span> {item.price}</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Sizes:</span> S, M, L, XL</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Type:</span> {item.type}</p>
              <button
                onClick={() => addToCart(item)}
                className="bg-black text-white mt-2 px-5 py-1 rounded hover:bg-gray-800"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManUtd;
  