import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import rm from "./assets/rm.jpg";
import ba from "./assets/bc.jpg";
import ars from "./assets/ar.jpg";

function Home() {
  const navigate = useNavigate();
  const images = [rm, ba, ars];
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.title = "THE JERSEY | Official Store";
  }, []);

  const routes = {
    collection: () => navigate("/collection"),
    about: () => navigate("/about"),
    cart: () => navigate("/cart"),
    laliga: () => navigate("/LLCollection"),
    customize: () => navigate("/customize"),
    mix: () => navigate("/mix"),
    fifa: () => navigate("/FF"),
    retro: () => navigate("/retroJersey"),
  };

  return (
    <div className="bg-black">
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-around items-center h-16 px-4 sm:px-8">
        <div className="text-lg sm:text-xl text-yellow-400">THE JERSEY</div>
        <a href="#Home" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer">Home</a>
        <a href="#Collection" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer" >Collection</a>
        <a href="#About" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer" onClick={routes.about}>About Us</a>
        <a href="#Cart" className="mx-2 sm:mx-4 hover:text-yellow-400 cursor-pointer" onClick={routes.cart}>Cart 🛒</a>
      </div>

   <div className="w-full overflow-hidden relative"> 
  <img
    src={images[currentIndex]}
    alt="background"
    className="w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[900px] object-cover transition-transform duration-300"
  />
</div>



      <div className="border-t-4 mt-4 py-2 text-center text-white bg-red-600 text-lg font-semibold">
        <p className="bg-black">Trending Offers</p>
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-slide" style={{ animation: "slide 10s linear infinite" }}>
            <p className="border-4 w-40 mt-4 ml-4 text-black rounded-2xl px-2">Game On! 2 Jerseys, ₹600 Only!</p>
            <p className="border-4 w-40 mt-4 ml-4 text-black rounded-2xl px-2">Add More to Your Cart, Get a Gift!</p>
            <p className="border-4 w-40 mt-4 ml-4 text-black rounded-2xl px-2">Flat ₹100 OFF on orders above ₹2000</p>
          </div>
        </div>
      </div>

      <div id="Collection" className="px-4 py-6">
        <p className="flex justify-center   text-red-500 font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
          Shop By Collections
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Premier League */}
          <div>
            <img
              src="https://wallpapers.com/images/featured/premier-league-86d2ur0b5ryesbe7.jpg"
              alt="Premier League"
              className="w-full sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={routes.collection}
            />
          </div>
    
          <div>
            <img
              src="https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo-New.png"
              alt="LaLiga"
              className="w-full sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={routes.laliga}
            />
          </div>

          <div>
            <img
              src="https://cdn.bhdw.net/im/fifa-world-cup-with-soccer-ball-on-green-field-in-stadium-wallpaper-95465_w635.webp"
              alt="FIFA"
              className="w-full sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={routes.fifa}
            />
          </div>

          <div>
            <img
              src="https://topfootball.in/wp-content/uploads/2023/02/AC-Milan-Home-2006-07-Retro-Jersey.jpg.webp"
              alt="Retro"
              className="w-full sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={routes.retro}
            />
          </div>

          <div>
            <img
              src="https://footballmonk.in/wp-content/uploads/2023/06/Real-madrid-home-Custom-2.jpg"
              alt="Customization"
              className="w-full sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={routes.customize}
            />
          </div>

          <div>
            <img
              src="https://clubjerseys.in/wp-content/uploads/2025/06/Cristiano-Ronaldo-Commemorative-Edition-S-XXL-0-ccce.webp"
              alt="Mix-jersey"
              className="w-full sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={routes.mix}
            />
            <p className="text-center mt-2 font-semibold text-gray-800">Mix-Jersey</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
