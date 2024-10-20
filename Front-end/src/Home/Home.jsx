import React from "react";
import Navbar from "../componants/Navbar";
import Banar from "../componants/Banar";
import DiscountItem from "../componants/DiscountItem";
import Footer from "../componants/Footer";

function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
  <div className="flex-1 h-1/2">
    <Banar />
  </div>
  <div className="flex-1 h-1/2">
    {/* <DiscountItem /> */}
  </div>
</div>

    </>
  );
}

export default Home;
