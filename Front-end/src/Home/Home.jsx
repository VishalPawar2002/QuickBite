import React from "react";
import Banar from "../componants/Banar";
import DiscountItem from "../componants/DiscountItem";
import Baner2 from "../componants/Baner2";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {" "}
        <div className="flex-1">
          {" "}
          <Banar />{" "}
        </div>{" "}
        <div className="flex-1">
          {" "}
          <DiscountItem />{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Home;
