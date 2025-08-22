import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext"; 
 
function Customize(){ 
    const navigate = useNavigate(); 
    const {cart , addToCart} =useContext(CartContext);
const [names, setNames] = useState({});

function updateName(index, value) {
  setNames(prev => ({ ...prev, [index]: value }));
}

    const jersey =[{
        src:"https://cyberriedstore.com/wp-content/uploads/2024/03/portugal-euro-2024-critiano-ronaldo-home-jersey-product.png",
        type:"Portugal Jersey" ,
        price:400,
        
    },
    {
        src:"https://m.media-amazon.com/images/I/41whyUo5I-L.jpg",
        type: "Real madrid Jersey",
        price:400,
    },
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDOEqWhVsR1VFaGidU3vuDJUPuUMNctjqOzW5_eF5f8dcjbifNVizutKjVrg46lJcFbs&usqp=CAU",
        type:"Barcelona Jersey",
        price:400
    },
     {
         src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xIH8fsfHxAVfHjJ54iJOkLgMv_8tzn4nXg&s",
         type:"Argentina Jersey",
         price:400
        },
     {
         src:"https://m.media-amazon.com/images/I/61xqF5TTdOL.jpg",
         type:"Barcelona Jersey",
         price:400
        },
     {
         src:"https://m.media-amazon.com/images/I/51ajORe6JGL._UF894,1000_QL80_.jpg",
         type:"Brazil Jersey",
         price:400
        },
           {
         src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgdjbalSZBiI-KRSahnMhoWHABe1hTiX5rw&s",
         type:"Arsenal Jersey",
         price:400
        },
           {
         src:"https://footballmonk.in/wp-content/uploads/2022/07/Manu-home-custom-22-23-2.jpg",
         type:"Manchester United Jersey",
         price:400
        },
           {
         src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvBMMoGA987lVNr4OGVdVmgb4yu9901rhHw&s",
         type:"Liverpool Jersey",
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
      <h1 className="text-center text-4xl mt-10 font-extrabold text-black">Welcome to Customize Collection</h1>
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

      <p className="text-sm text-gray-700 font-semibold mb-1">Customize Name:</p>
      <input
        value={names[index] || ""}
        className="border-2 mb-2 px-2 py-1 rounded w-full"
        placeholder="Enter Your Name"
        onChange={(e) => updateName(index, e.target.value)}
      /> 
     <button
  onClick={() => {
    if (!names[index] || names[index].trim() === "") {
      alert("Please enter a name to customize the jersey.");
      return;
    }
    addToCart({ ...item, name: names[index] });
  }}
  className="bg-black text-white mt-2 px-5 py-1 rounded hover:bg-gray-400"
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

export default Customize;