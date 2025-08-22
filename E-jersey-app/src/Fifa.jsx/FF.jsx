import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
function FF(){ 
    const navigate = useNavigate(); 
    const {cart , addToCart} =useContext(CartContext);

    const jersey =[{
        src:"https://img.uefa.com/imgml/TP/players/3/2024/cutoff/63706.webp",
        type:"Portugal Jersey" ,
        price:300,
    },
    {
        src:"https://pbs.twimg.com/media/ExFx0YqXEAICjoK.jpg",
        type: "Argentina Jersey",
        price:300,
    },
    {
        src:"https://i.pinimg.com/736x/34/a4/df/34a4df0276c807c378e0324cc606dafe.jpg",
        type:"Brazil Jersey",
        price:300
    },
     {
         src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuigxMtog5fUHmxuSc91yuvNGwhPVF7Ge2A&s",
         type:"France Jersey",
         price:300
        },
     {
         src:"https://i.pinimg.com/736x/12/94/88/129488da25692c770608ba068782f603.jpg",
         type:"England Jersey",
         price:300
        },
     {
         src:"https://i.pinimg.com/736x/ac/d3/58/acd35859fdf16db716c2a0483829bfa1.jpg",
         type:"Germany Jersey",
         price:300
        },
           {
         src:"https://medias.spotern.com/spots/share/377/377979-1669133645.png",
         type:"Croatia Jersey",
         price:300
        },
           {
         src:"https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250024448.webp",
         type:"Spain Jersey",
         price:300
        },
           {
         src:"https://external-preview.redd.it/optapaolo-3-with-cesare-paolo-and-daniel-maldini-is-the-v0-ZvVp6ZP_IvoV2Onn3qlTn9czCWcHay0it85J8z43v0A.jpg?width=640&crop=smart&auto=webp&s=438f3d81a9667f59273007c828441e9501c44d7e",
         type:"Italy Jersey",
         price:300
        },
        
        
  ];
  
    return( <div className="min-h-screen bg-gray-50">
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-center md:justify-around items-center px-4 py-4">
        <div className="text-xl w-full text-center md:w-auto mb-2 md:mb-0 text-yellow-400">THE JERSEY</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a className="hover:text-yellow-400 cursor-pointer"onClick={() => navigate("/")} >Home</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/")}>Collection</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/About")}>About Us</a>
          <a className="hover:text-yellow-400 cursor-pointer" onClick={()=> navigate("/Cart")} >
 Cart 🛒 ({cart.length})           </a>
        </div>
      </div>
      <h1 className="text-center text-4xl mt-10 font-extrabold text-black">Welcome to FIFA Collection</h1>
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

export default FF;