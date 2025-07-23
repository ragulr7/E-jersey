import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext"; 
 
function Mix(){ 
    const navigate = useNavigate(); 
    const {cart , addToCart} =useContext(CartContext);



    const jersey =[
           {
         src:"https://m.media-amazon.com/images/I/41gPHBdCHjL._UY1100_.jpg",
         type:"Ronaldo Mix-Jersey",
         price:300
        },
           {
         src:"https://cdn11.bigcommerce.com/s-3yufq/images/stencil/1280x1280/products/3559/10620/messimix__51366.1743593650.jpg?c=2",
         type:"Messi Mix-Jersey",
         price:300
        },
           {
         src:"https://images-eu.ssl-images-amazon.com/images/I/61HCuZXTCYL._AC_UL600_SR600,600_.jpg",
         type:"Neymar Mix-Jersey",
         price:300 
        },
        
        
  ];
  
    return( <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-center md:justify-around items-center px-4 py-4">
        <div className="text-xl w-full text-center md:w-auto mb-2 md:mb-0">THE JERSEY</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a className="hover:text-yellow-400 cursor-pointer"onClick={() => navigate("/")} >Home</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/LLCollection")}>Collection</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/About")}>About Us</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/Cart")} >
 Cart 🛒 ({cart.length})           </a>
        </div>
      </div>
      <h1 className="text-center text-4xl mt-10 font-extrabold text-black">Welcome to Mix-Jersey Collection</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-10 px-4">

     {jersey.map((item, index) => (
  <div key={index} className="text-center">
    <img
      src={item.src}
      alt={item.type}
      className="w-80 h-80 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 w-72 mx-auto mt-2">
      <p className="text-sm text-gray-700"><span className="font-semibold">Price:</span> {item.price}</p>
      <p className="text-sm text-gray-700"><span className="font-semibold">Sizes:</span> S, M, L, XL</p>
      <p className="text-sm text-gray-700"><span className="font-semibold">Type:</span> {item.type}</p>
 <button onClick={() =>addToCart(item)}
                className="bg-black text-white mt-2 px-5 py-1 rounded  hover:bg-gray-400">
                Add To Cart
              </button>
    </div>
  </div>
))}

      </div>
      </div>
);
}

export default Mix;