import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
function RetroJersey(){ 
    const navigate = useNavigate(); 
    const {cart , addToCart} =useContext(CartContext);

    const jersey =[{
        src:"https://www.copycatz.in/wp-content/uploads/2024/09/portugal-Home-1992-94-retro-jersey.jpeg",
        type:"Portugal Jersey" ,
        price:400,
    },
    {
        src:"https://footballmonk.in/wp-content/uploads/2023/06/ARGENTINA-HOME-1986-RETRO-FOOTBALL-JERSEY_1.jpg",
        type: "Argentina Jersey",
        price:400,
    },
    {
        src:"https://redravenstore.in/cdn/shop/files/1998_Home_1.jpg?v=1744035648",
        type:"Brazil Jersey",
        price:400
    },
     {
         src:"https://www.copycatz.in/wp-content/uploads/2024/07/France-home-football-shirt-199800.jpeg",
         type:"France Jersey",
         price:400
        },
     {
         src:"https://fulltimestore.in/cdn/shop/files/England1998homefullsleevesretro.jpg?v=1728417764&width=720",
         type:"England Jersey",
         price:400
        },
     {
         src:"https://image.made-in-china.com/2f0j00zhIbfDrlOckW/Germany-for-The-1992-Season-Home-Retro-Player-Version-Club-Football-Soccer-Jersey.webp",
         type:"Germany Jersey",
         price:400
        },
           {
         src:"https://i.ebayimg.com/images/g/wi0AAOSwsj5jhqOj/s-l1200.jpg",
         type:"Croatia Jersey",
         price:400
        },
           {
         src:"https://fanaacs.com/wp-content/uploads/2024/10/Spain1994WorldCupHomeRetroJersey1.jpg",
         type:"Spain Jersey",
         price:400
        },
           {
         src:"https://retrosoccerkit.com/cdn/shop/products/a76bf372.jpg?v=1701815952",
         type:"Italy Jersey",
         price:400
        },
        
        
  ];
  
    return( <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-center md:justify-around items-center px-4 py-4">
        <div className="text-xl w-full text-center md:w-auto mb-2 md:mb-0">THE JERSEY</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a className="hover:text-yellow-400 cursor-pointer"onClick={() => navigate("/")} >Home</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/")}>Collection</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/About")}>About Us</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/Cart")} >
 Cart 🛒 ({cart.length})           </a>
        </div>
      </div>
      <h1 className="text-center text-4xl mt-10 font-extrabold text-black">Welcome to Retro Collection</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-10 px-4">

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

export default RetroJersey;