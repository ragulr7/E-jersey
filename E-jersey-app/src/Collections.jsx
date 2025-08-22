import { useNavigate } from "react-router-dom";  
import Cart from "./Cart";

function Collections() {

const navigate = useNavigate();

function home(){
    navigate("/")
}

function about(){
  navigate("/About")
}
function collection(){
  navigate("/Collection")
}
function cart(){
  navigate("/cart")
}
function ManUtd(){
  navigate("/ManUtd")
}
function Arsenal(){
  
  navigate("/Arsenal")
}
  function ManCity(){
    navigate("/ManCity")
}
function Chelsea(){
  navigate("/Chelsea")
}
function LiverPool(){
  navigate("/LiverPool")
}
function Tottenham(){
  navigate("/Tottenham")
}
  return (
    <div className="min-h-screen">
  <div
    id="Home"
    className="font-bold text-amber-50 bg-black flex flex-wrap justify-around items-center h-16 px-4 sm:px-8"
  >
    <div className="text-xl text-yellow-400">THE JERSEY</div>
    <a href="#Home" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer" onClick={home}>Home</a>
    <a href="#Collection" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer" onClick={collection}>Collection</a>
    <a href="#about" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer" onClick={about}>About Us</a>
    <a href="#Questions" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer" onClick={cart}>Cart 🛒</a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 justify-items-center">
    <div className="flex flex-col items-center">
      <img
        src="https://www.red.org/wp-content/uploads/2025/01/RED-ManU-Reditorial_FINAL-1.webp"
        onClick={ManUtd}
        alt="man-utd"
        className="h-80 w-100 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-center mt-2 font-semibold bg-black bg-opacity-70 px-2 py-1 rounded-md text-white">Manchester United</p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="https://i0.wp.com/www.copycatz.in/wp-content/uploads/2024/05/arsenal-home-football-jersey-2024-25-season-.webp?fit=600%2C600&ssl=1"
        onClick={Arsenal}
        alt="Arsenal"
        className="h-80 w-100 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-center mt-2 font-semibold bg-black bg-opacity-70 px-2 py-1 rounded-md text-white">Arsenal</p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="https://www.jerseybdclub.com/wp-content/uploads/2024/05/Manchester-City-Home-Jersey-24-25.jpg"
        onClick={ManCity}
        alt="man-city"
        className="h-80 w-100 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-center mt-2 font-semibold  bg-black bg-opacity-70 px-2 py-1 rounded-md text-white">Manchester City</p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="https://www.jerseybdclub.com/wp-content/uploads/2024/08/Chelsea-Home-Jersey-24-25-1500x1500.jpg"
        onClick={Chelsea}
        alt="Chelsea"
        className="h-80 w-100 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-center mt-2 font-semibold  bg-black bg-opacity-70 px-2 py-1 rounded-md text-white">Chelsea</p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="https://redravenstore.in/cdn/shop/files/Home1_d69c1f6f-049d-49f4-9bc9-fe0c71a81984.jpg?v=1726935803"
        onClick={LiverPool}
        alt="Liverpool"
        className="h-80 w-100 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-center mt-2 font-semibold  bg-black bg-opacity-70 px-2 py-1 rounded-md text-white">Liverpool</p>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="https://i.pinimg.com/736x/e0/5b/27/e05b2758b1a3ef391ffed33ec8648b4e.jpg"
        onClick={Tottenham}
        alt="Tottenham Hotspur"
        className="h-80 w-100 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <p className="text-center mt-2 font-semibold  bg-black bg-opacity-70 px-2 py-1 rounded-md text-white">Tottenham Hotspur</p>
    </div>
  </div>
</div>
  );
}

export default Collections; 
