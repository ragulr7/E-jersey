import { useNavigate } from "react-router-dom";

function LLCollection() {
  const navigate = useNavigate();

  return (
    <div>
     
      <div className="font-bold text-amber-50 bg-black flex justify-around items-center h-16 px-8">
        <div className="text-xl">THE JERSEY</div>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/")}>Home</a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/llcollection")}>Collection</a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/about")}>About Us</a>
        <a className="hover:text-yellow-400 cursor-pointer">Cart 🛒</a>
      </div>

      <div className="flex justify-around items-center mt-8">
        <span>
          <img
            src="https://thefootballheritage.com/wp-content/uploads/2025/01/2425-Real-Madrid-Soccer-Jersey-Home-5.webp"
            onClick={() => navigate("/llcollection/realmadrid")}
            alt="Real Madrid"
            className="w-[400px] h-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center mt-2 font-semibold text-gray-800">Real Madrid</p>
        </span> 
         <span>
          <img
            src="https://futballgear.in/wp-content/uploads/2025/05/0b8145a2.png"
 onClick={() => navigate("/llcollection/barcelona")}
             alt="Barcelona"
            className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center mt-2 font-semibold text-gray-800">Barcelona</p>
        </span>
         <span>
          <img
            src="https://cdn11.bigcommerce.com/s-fwdmrf2enn/images/stencil/1280x1280/products/482/1675/Atletico_madrid_home_kit_1__78952.1724235820.jpg?c=1"
 onClick={() => navigate("/llcollection/atletico")}
             alt="atletico"
            className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center mt-2 font-semibold text-gray-800">Atletico Madrid</p>
        </span>
        </div>
        <div className="flex justify-around items-center">
         <span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8RsnmopzaniKDAWWT_lWKFAbpxP8vNPk5w&s"
 onClick={() => navigate("/llcollection/athletic")}
             alt="athletic"
            className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center mt-2 font-semibold text-gray-800">Athletic Bilbao</p>
        </span>
         <span>
          <img
            src="https://thenewkits.com/wp-content/uploads/2024/08/e603f031-1-scaled.jpeg"
 onClick={() => navigate("/llcollection/sevilla")}
             alt="Sevilla"
            className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center mt-2 font-semibold text-gray-800">Sevilla</p>
        </span>
         <span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ171StZKXqQWVc0hgrZVA0vyKz2UmCQvkcww&s"
 onClick={() => navigate("/llcollection/valencia")}
             alt="valencia"
            className="w-[400px] mt-2 ml-2 h-80 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center mt-2 font-semibold text-gray-800">Valencia</p>
        </span>
        
      </div>
    </div>
  );
}

export default LLCollection;
