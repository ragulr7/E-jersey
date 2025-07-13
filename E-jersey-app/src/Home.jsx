import bg from "./assets/rmn.jpg";
function Home() {

  return (
    <div> 
        <div id="Home" className="font-bold text-amber-50 bg-black flex justify-around items-center h-16 px-8">
      <div className="text-xl">THE JERSEY</div>
      <a href="#Home" className="mx-4 hover:text-yellow-400 cursor-pointer">Home</a>
      <a href="#Collection" className="mx-4 hover:text-yellow-400 cursor-pointer">Collection</a>
      <a href="#About" className="mx-4 hover:text-yellow-400 cursor-pointer">About Us</a>
      <a href="#Questions" className="mx-4 hover:text-yellow-400 cursor-pointer">Questions</a>
    </div>
    <img className="w-full" src={bg} alt="background"></img>
<div className="border-t-4 mt-4 py-2 text-center text-white bg-red-600 text-lg font-semibold">
  Trending Offers
  <div className="flex justify-items-center">
  <p className="border-4 w-40 mt-4 ml-50 text-black rounded-2xl ">Game On! 2 Jerseys, ₹600 Only!</p>
  <p className="border-4 w-40 mt-4 ml-50 text-black rounded-2xl ">Shop 3, Score 1 Free – Limited Time Only!</p>
    <p className="border-4 w-40 mt-4 ml-50 text-black rounded-2xl ">Add More to Your Cart, Get a Gift from Our Heart!</p>
      <p className="border-4 w-40  mt-4 ml-50 text-black rounded-2xl ">Get Flat ₹100 OFF upto ₹ 100 on orders above ₹ 2500</p>
</div>
</div>
<div id="Collection" >

</div>
<img
  src="https://www.red.org/wp-content/uploads/2025/01/RED-ManU-Reditorial_FINAL-1.webp" 
  alt="man-utd"
  className="w-[400px] mt-2 ml-2 h-auto rounded-lg shadow-md"
/>


   </div>
  );
}

export default Home;
    