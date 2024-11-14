import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Menues from "./menus/Menues";
import Navbar from "./componantss/Navbar"; // Ensure you import your Navbar if needed
import Footer from "./componantss/Footer"; // Ensure you import your Footer if needed
import Show from "./Show/Show";
import HomePage from "./componantss/HomePage";



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menues />} />
        <Route path="/QuickBite/menu/:id" element={<Show/>}/>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;

