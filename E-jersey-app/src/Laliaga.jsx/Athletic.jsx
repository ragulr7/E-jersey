import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
function Athletic(){
    const navigate = useNavigate(); 
    const {cart , addToCart} =useContext(CartContext);

    const jersey =[{
      src:"https://shop.athletic-club.eus/cdn/shop/files/ACB-000-Kit-Launches_24-25_Home-Kit_Club-Shop_No-Text_Content-Block-1080x1080_3_4183e085-432e-48b5-b78e-678571b28127_1080x.jpg?v=1720596392",
      type:"2024-25 Home Jersey" ,
    },
    {
      src:"https://www.futbolemotion.com/imagesarticulos/224152/medianas/camiseta-castore-ac-bilbao-segunda-equipacion-2024-2025-surf-the-web-0.webp",
      type: "2024-25 Away Jersey",
    },
    {
      src:"https://www.futbolemotion.com/imagesarticulos/224154/grandes/camiseta-castore-ac-bilbao-tercera-equipacion-2024-2025-lavender-2.webp",
      type:"2024-2025 Third Jersey"
    },
  ];
    return( <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-center md:justify-around items-center px-4 py-4">
        <div className="text-xl w-full text-center md:w-auto mb-2 md:mb-0">THE JERSEY</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a className="hover:text-yellow-400 cursor-pointer"onClick={() => navigate("/")} >Home</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/Collection")}>Collection</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/About")}>About Us</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/Cart")} >
 Cart 🛒 ({cart.length})           </a>
        </div>
      </div>
      <h1 className="text-center text-4xl mt-10 font-extrabold text-red-800">Welcome to Athletic Bilbao Collection</h1>
      <div className="flex flex wrap justify-center mt-10 gap-6 px-4">
        {jersey.map((item ,index) =>(
          <div key={index} className="text-center">
            <img src={item.src}                                     
            alt= {item.type} className="w-80 h-80 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"></img>
            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 w-72 mx-auto mt-2">
              <p className="text-sm text-gray-700"><span className="font-semibold">Price:</span> ₹300</p>
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

export default Athletic;