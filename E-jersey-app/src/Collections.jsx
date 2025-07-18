import { useNavigate } from "react-router-dom";  

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
    <div >
      <div
        id="Home"
        className="font-bold text-amber-50 bg-black flex justify-around items-center h-16 px-8"
      >
        <div className="text-xl">THE JERSEY</div>
        <a href="#Home" className="mx-4 hover:text-yellow-400 cursor-pointer" onClick={home}>Home</a>
        <a href="#Collection" className="mx-4 hover:text-yellow-400 cursor-pointer" onClick={collection}>Collection</a>
        <a href="#about" className="mx-4 hover:text-yellow-400 cursor-pointer" onClick={about}>About Us</a>
        <a href="#Questions" className="mx-4 hover:text-yellow-400 cursor-pointer">Cart 🛒</a>
      </div>
      
      <div className="flex justify-around items-center">
        <span>
        <img
        src="https://www.red.org/wp-content/uploads/2025/01/RED-ManU-Reditorial_FINAL-1.webp" onClick={ManUtd}
        alt="man-utd"
        className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Manchester United </p>
        </span>
        <span>
        <img
        src="https://i0.wp.com/www.copycatz.in/wp-content/uploads/2024/05/arsenal-home-football-jersey-2024-25-season-.webp?fit=600%2C600&ssl=1" onClick={Arsenal}
        alt="Arsenal"
        className="w-[400px] mt-5 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Arsenal </p>
        </span>
        <span>
       <img
        src="https://www.jerseybdclub.com/wp-content/uploads/2024/05/Manchester-City-Home-Jersey-24-25.jpg" onClick={ManCity}
        alt="man-city"
        className="w-[400px] mt-2 ml-2 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Manchester City </p>
        </span>
      </div>
       <div className="flex justify-around items-center">
        <span>

        <img
        src="https://www.jerseybdclub.com/wp-content/uploads/2024/08/Chelsea-Home-Jersey-24-25-1500x1500.jpg" onClick={Chelsea}
        alt="Chelsea"
        className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
         <p className="text-center mt-2 font-semibold text-gray-800">Chelsea </p>
            </span>
            <span>

        <img
        src="https://redravenstore.in/cdn/shop/files/Home1_d69c1f6f-049d-49f4-9bc9-fe0c71a81984.jpg?v=1726935803" onClick={LiverPool}
        alt="Liverpool"
        className="w-[400px] mt-5 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Liverpool</p>
        </span>
        <span>

       <img
        src="https://i.pinimg.com/736x/e0/5b/27/e05b2758b1a3ef391ffed33ec8648b4e.jpg" onClick={Tottenham}
        alt="Tottenham Hotspur "
        className="w-[400px] mt-2 ml-2 h-80 w-80  rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Tottenham Hotspur</p>
        </span>
      </div>
    </div>
  );
}

export default Collections; 
