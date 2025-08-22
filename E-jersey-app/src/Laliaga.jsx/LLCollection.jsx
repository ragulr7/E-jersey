import { useNavigate } from "react-router-dom";

function LLCollection() {
  const navigate = useNavigate();

  const teams = [
    {
      name: "Real Madrid",
      img: "https://thefootballheritage.com/wp-content/uploads/2025/01/2425-Real-Madrid-Soccer-Jersey-Home-5.webp",
      route: "/llcollection/realmadrid",
    },
    {
      name: "Barcelona",
      img: "https://futballgear.in/wp-content/uploads/2025/05/0b8145a2.png",
      route: "/llcollection/barcelona",
    },
    {
      name: "Atletico Madrid",
      img: "https://cdn11.bigcommerce.com/s-fwdmrf2enn/images/stencil/1280x1280/products/482/1675/Atletico_madrid_home_kit_1__78952.1724235820.jpg?c=1",
      route: "/llcollection/atletico",
    },
    {
      name: "Athletic Bilbao",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8RsnmopzaniKDAWWT_lWKFAbpxP8vNPk5w&s",
      route: "/llcollection/athletic",
    },
    {
      name: "Sevilla",
      img: "https://thenewkits.com/wp-content/uploads/2024/08/e603f031-1-scaled.jpeg",
      route: "/llcollection/sevilla",
    },
    {
      name: "Valencia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ171StZKXqQWVc0hgrZVA0vyKz2UmCQvkcww&s",
      route: "/llcollection/valencia",
    },
  ];

  return (
    <div>
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-around items-center h-16 px-4 sm:px-8 shadow-md">
        <div className="text-xl sm:text-2xl tracking-wide text-yellow-400">THE JERSEY</div>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/llcollection")}>
          Collection
        </a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/about")}>
          About Us
        </a>
        <a className="hover:text-yellow-400 cursor-pointer">Cart 🛒</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 mt-8">
        {teams.map((team, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={team.img}
              alt={team.name}
              onClick={() => navigate(team.route)}
              className="w-full max-w-[400px] h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-2 font-semibold text-gray-800 bg-black bg-opacity-70 px-2 py-1 rounded-md text-white">
              {team.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LLCollection;
