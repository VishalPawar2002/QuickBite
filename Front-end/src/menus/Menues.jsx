import React from "react";
import Menu from "../componants/Menu";
import Axios from 'axios';
import { useState,useEffect } from "react";




function Menues() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get('http://localhost:8080/QuickBite/menu');
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      
      <div className='flex flex-row flex-wrap justify-center mt-20'> 
      {data.map((item) => (
        <>
        <Menu item={item} key={item.id} />
        
        </>
        
      ))}
      </div>
      
    </>
  );
}

export default Menues;
