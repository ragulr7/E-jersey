import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="font-bold text-amber-50 bg-black flex flex-wrap justify-around items-center h-16 px-4 md:px-8">
        <div className="text-xl">THE JERSEY</div>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/collection")}>
          Collection
        </a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/about")}>
          About Us
        </a>
        <a className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate("/cart")}>
          Cart 🛒
        </a>
      </div>

      <div className="bg-gradient-to-b from-amber-100 to-white min-h-screen py-10 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-red-600 mb-6">
          About Us
        </h1>

        <p className="text-center text-gray-700 text-base md:text-lg mb-10">
          🇮🇳 India’s most trusted seller – Over{" "}
          <span className="font-bold text-red-500">50,000+ happy customers</span> 😍
          <br />
          Proudly serving the football community for{" "}
          <span className="font-bold text-blue-600">7+ years</span>.
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 border-gray-200 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-center md:text-left text-black mb-4">
              THE JERSEY ⚽
            </h2>

            <p className="text-gray-800 leading-relaxed text-justify">
              Welcome to <span className="font-semibold text-red-600">THE JERSEY</span> – your
              one-stop destination for premium football jerseys and fan gear. We are passionate
              about the beautiful game and committed to offering{" "}
              <span className="font-semibold">authentic, high-quality jerseys</span> at unbeatable
              prices.
            </p>

            <ul className="mt-5 space-y-3 text-gray-700 list-disc list-inside">
              <li>
                <strong>⚽</strong> Make every supporter feel closer to their team.
              </li>
              <li>
                <strong>🎽</strong> Wide range of club & country jerseys, including special
                editions.
              </li>
              <li>
                <strong>🚚</strong> Fast delivery, secure checkout & reliable customer service.
              </li>
            </ul>

            <p className="mt-5 text-gray-800 text-center font-medium">
              Gear up for match day or rep your colors every day —
              <br />
              <span className="text-red-500 font-bold">THE JERSEY</span> is here to help you wear
              your pride!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-bold text-center mb-4">Follow Us Here</p>
            <div className="flex gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
                alt="WhatsApp"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s"
                className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
                alt="Instagram"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between mt-10 gap-4 text-center text-gray-700 text-sm md:text-base">
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Return & Refund Policy</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Shipping & Payment Policy</p>
        </div>
      </div>
    </div>
  );
}

export default About;
