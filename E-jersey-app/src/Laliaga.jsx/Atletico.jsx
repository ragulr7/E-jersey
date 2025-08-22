import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
function Athletico(){
    const navigate = useNavigate(); 
    const {cart , addToCart} =useContext(CartContext);

    const jersey =[{
      src:"https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/2f084456-1e82-4fd6-aa5f-f06315e64a78/ATM+M+NK+DF+JSY+SS+STAD+HM.png",
      type:"2024-25 Home Jersey" ,
      price:300,
    },
    {
      src:"https://static.nike.com/a/images/t_default/5e23964d-ff87-4e12-b37f-be5b169bd47f/ATM+M+NK+DF+JSY+SS+STAD+AW.png",
      type: "2024-25 Away Jersey",
      price:300,
    },
    {
      src:"https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/6069bfee-b9ca-426a-9cfd-2cdce9e458fb/ATM+M+NK+DF+JSY+SS+STAD+3R.png",
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
      <h1 className="text-center text-4xl mt-10 font-extrabold text-blue-600">Welcome to Atlético de Madrid Collection</h1>
      <div className="flex flex-wrap justify-center mt-10 gap-6 px-4">
        {jersey.map((item ,index) =>(
          <div key={index} className="text-center">
            <img src={item.src}                                     
            alt= {item.type} className="w-80 h-80 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"></img>
            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 w-72 mx-auto mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Price:</span>{item.price}</p>
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

export default Athletico;