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

  function goToManUtd() {
    navigate("/ManUtd");
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
        <a href="#Questions" className="mx-4 hover:text-yellow-400 cursor-pointer">Questions</a>
      </div>
      
      <div className="flex justify-around items-center">
        <span>
            <img
        src="https://www.red.org/wp-content/uploads/2025/01/RED-ManU-Reditorial_FINAL-1.webp"
        onClick={goToManUtd}
        alt="man-utd"
        className="w-80 h-80 mt-2 ml-2 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
        <p className="text-center mt-2 font-semibold text-gray-800">Manchester United </p>
        </span>
        <span>
        <img
        src="https://classicretrokit.com/wp-content/uploads/2025/03/big-202-445x445.jpg"
        alt="Arsenal"
        className="w-[400px] mt-5 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Arsenal </p>
        </span>
        <span>
       <img
        src="https://www.jerseybdclub.com/wp-content/uploads/2024/05/Manchester-City-Home-Jersey-24-25.jpg"
        alt="man-city"
        className="w-[400px] mt-2 ml-2 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Manchester City </p>
        </span>
      </div>
       <div className="flex justify-around items-center">
        <span>

        <img
        src="https://www.jerseybdclub.com/wp-content/uploads/2024/08/Chelsea-Home-Jersey-24-25-1500x1500.jpg"
        alt="Chelsea"
        className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
         <p className="text-center mt-2 font-semibold text-gray-800">Chelsea </p>
            </span>
            <span>

        <img
        src="https://redravenstore.in/cdn/shop/files/Home1_d69c1f6f-049d-49f4-9bc9-fe0c71a81984.jpg?v=1726935803"
        alt="Liverpool"
        className="w-[400px] mt-5 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Liverpool</p>
        </span>
        <span>

       <img
        src="https://i.dailymail.co.uk/1s/2025/05/23/19/98699949-14744287-image-a-60_1748024627470.jpg"
        alt="Newcastle United "
        className="w-[400px] mt-2 ml-2 h-80 w-80  rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
        </img>
        <p className="text-center mt-2 font-semibold text-gray-800">Newcastle United</p>
        </span>
      </div>
    </div>
  );
}

export default Collections; 
