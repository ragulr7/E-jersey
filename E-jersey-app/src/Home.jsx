import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";
import bg from "./assets/rmn.jpg";
import rm from "./assets/realmadrid.jpg"
import bc from "./assets/barcelona.jpg"

function Home() {
  const navigate = useNavigate();
  const images =[bg ,rm , bc];
  const[currentIndex , setcurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);
 
useEffect(() => {
    document.title = "THE JERSEY | Official Store";
  }, []);

  function showCollection() {
    navigate("/collection"); 
  }
  function showAbout(){
    navigate("/about");
  }



  return (
    <div>
      <div
        id="Home"
        className="font-bold text-amber-50 bg-black flex justify-around items-center h-16 px-8"
      >
        <div className="text-xl">THE JERSEY</div>
        <a href="#Home" className="mx-4 hover:text-yellow-400 cursor-pointer">Home</a>
        <a href="#Collection" className="mx-4 hover:text-yellow-400 cursor-pointer">Collection</a>
        <a href="#About" className="mx-4 hover:text-yellow-400 cursor-pointer" onClick={showAbout}>About Us</a>
        <a href="#Questions" className="mx-4 hover:text-yellow-400 cursor-pointer">Cart 🛒</a>
      </div>
<div className="w-full h-full overflow-hidden relative">
  <img
    src={images[currentIndex]}
    alt="background" 
    className="w-full h-full object-cover transition-transform duration-700"
  />
</div>


      <div className="border-t-4 mt-4 py-2 text-center text-white bg-red-600 text-lg font-semibold">
        <p className="bg-black ">Trending Offers</p>
        <div className="relative overflow-hidden w-full">
    <div
      className="flex  animate-slide"
      style={{
        animation: "slide 5s linear infinite",
      }}
    >
    <p className="border-4 w-40 mt-4 ml-50 text-black rounded-2xl">
            Game On! 2 Jerseys, ₹600 Only!
          </p>
          <p className="border-4 w-40 mt-4 ml-50 text-black rounded-2xl">
            Shop 3, Score 1 Free – Limited Time Only!
          </p>
          <p className="border-4 w-40 mt-4 ml-50 text-black rounded-2xl">
            Add More to Your Cart, Get a Gift from Our Heart!
          </p>
          <p className="border-4 w-40  mt-4 ml-50 text-black rounded-2xl">
            Get Flat ₹100 OFF upto ₹ 100 on orders above ₹ 2500
          </p>
        </div>
      </div>

</div>
      <div id="Collection" >
        <p className="flex justify-center bg-black text-red-500 font-bold text-5xl">Shop By Collections  </p>
        <div className="flex justify-around items-center ">
          <span>
      <img
        src="https://wallpapers.com/images/featured/premier-league-86d2ur0b5ryesbe7.jpg"
        alt="premier League"
        className="w-[400px] mt-5 ml-2 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={showCollection}
      />
      <p className="text-center mt-2 font-semibold text-gray-800">Premier League</p>
      </span>
      <span>
       <img
        src="https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo-New.png"
        alt="LaLiga"
        className="w-[400px] mt-5 ml-2 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={showCollection}
      />
      <p className="text-center mt-2 font-semibold text-gray-800">LaLiga</p>
      </span>
      <span>
       <img
        src="https://cdn.bhdw.net/im/fifa-world-cup-with-soccer-ball-on-green-field-in-stadium-wallpaper-95465_w635.webp"
        alt="FiFa"
        className="w-[400px] mt-5 ml-2 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={showCollection}
      />
      <p className="text-center mt-2 font-semibold text-gray-800">FIFA WorldCup </p>
      </span>
      </div>
    <div className="flex justify-around items-center ">
      <span>
      <img
        src="https://topfootball.in/wp-content/uploads/2023/02/AC-Milan-Home-2006-07-Retro-Jersey.jpg.webp"
        alt="Retro"
        className="w-[400px] mt-5 ml-5 h-60 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={showCollection}
      />
      <p className="text-center mt-2 font-semibold text-gray-800">Retro Kit</p>
      </span>
      <span>
      <img
        src="https://footballmonk.in/wp-content/uploads/2023/06/Real-madrid-home-Custom-2.jpg"
        alt="Customization"
        className="w-[400px] mt-5 ml-2 h-60 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={showCollection}
      />
      <p className="text-center mt-2 font-semibold text-gray-800">Customize Your Name</p>
      </span>
      <span>
      <img
        src="https://clubjerseys.in/wp-content/uploads/2025/06/Cristiano-Ronaldo-Commemorative-Edition-S-XXL-0-ccce.webp"
        alt="Mix-jersey"
        className="w-[400px] mt-5 ml-2 h-60
        rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={showCollection}
      />
      <p className="text-center mt-2 font-semibold text-gray-800">Mix-Jersey</p>
      </span>
    </div>
</div>
    </div>
  );
}

export default Home;
