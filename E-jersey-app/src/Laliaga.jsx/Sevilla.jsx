import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
function Sevilla(){
    const navigate = useNavigate(); 
    const {cart , addToCart} =useContext(CartContext);

    const jersey =[{
      src:"https://productimages.footy.com/67228d7891027f58b75d4b68/0/3840.webp?q=75",
      type:"2024-25 Home Jersey" ,
      price:300,
    },
    {
      src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihfOwr1sqqRq1GVjpPItpVxqmig-KK2fKDYSV-3y9iB5U5gh3yxjmPizNMFv4_jCQFU4kfbP83Sb5Xu5Cs1ANtko1-qViBQhWH18LF112lSVoFwEnp8ALcVkZOw3hrgmbqjf62VlOWyiBO9zNU9cGSyPvkm7sxLP7QkmmpQBWVfwOZlxREIxzXSB32q4xl/s1600/sevilla-25-26-away-kit%20%282%29.jpg",
      type: "2024-25 Away Jersey",
      price:300,
    },
    {
      src:"https://www.futbolemotion.com/imagesarticulos/224109/grandes/camiseta-castore-sevilla-fc-tercera-equipacion-2024-2025-caviar-2.webp",
      type:"2024-2025 Third Jersey",
      price:300
    },
  ];
    return( <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-center md:justify-around items-center px-4 py-4">
        <div className="text-xl w-full text-center md:w-auto mb-2 md:mb-0 text-yellow-400">THE JERSEY</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a className="hover:text-yellow-400 cursor-pointer"onClick={() => navigate("/")} >Home</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/LLCollection")}>Collection</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/About")}>About Us</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/Cart")} >
 Cart 🛒 ({cart.length})           </a>
        </div>
      </div>
      <h1 className="text-center text-4xl mt-10 font-extrabold text-red-500">Welcome to Sevilla  Collection</h1>
      <div className="flex flex-wrap justify-center mt-10 gap-6 px-4">
        {jersey.map((item ,index) =>(
          <div key={index} className="text-center">
            <img src={item.src}                                     
            alt= {item.type} className="w-80 h-80 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"></img>
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
        ))
        }
      </div>
      </div>
);
}

export default Sevilla;