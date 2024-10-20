import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Menues from "./menus/Menues";
import Navbar from "./componants/Navbar"; // Ensure you import your Navbar if needed
import Footer from "./componants/Footer"; // Ensure you import your Footer if needed
import Show from "./menus/Show";


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

