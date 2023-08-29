import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const contextProvider = createContext();

const global = (props) => {
  const [photo, setphoto] = useState([]);
  const [photo1, setphoto1] = useState([]);
  const [photo2, setphoto2] = useState([]);
  const [photo3, setphoto3] = useState([]);

  const [sea, setsea] = useState("flower");
  const [pagen, setpagen] =useState(1);

  const url = `https://api.unsplash.com/search/photos?page=${pagen}&query=${sea}&client_id=WWsod9MiUmyfN--d2Zrx3_zrofyyTWaUaW3naEZhsco`;
  const url1 = `https://api.unsplash.com/search/photos?page=${pagen+1}&query=${sea}&client_id=WWsod9MiUmyfN--d2Zrx3_zrofyyTWaUaW3naEZhsco`;
  const url2 = `https://api.unsplash.com/search/photos?page=${pagen+2}&query=${sea}&client_id=WWsod9MiUmyfN--d2Zrx3_zrofyyTWaUaW3naEZhsco`;
  const url3 = `https://api.unsplash.com/search/photos?page=${pagen+3}&query=${sea}&client_id=WWsod9MiUmyfN--d2Zrx3_zrofyyTWaUaW3naEZhsco`;
  
  const fetchfun = () => {
    axios.get(url).then((res) => setphoto(res.data.results));
  };
  const fetchfun1 = () => {
    axios.get(url1).then((res) => setphoto1(res.data.results));
  };
  const fetchfun2 = () => {
    axios.get(url2).then((res) => setphoto2(res.data.results));
  };
  const fetchfun3 = () => {
    axios.get(url3).then((res) => setphoto3(res.data.results));
  };
  const run = () => {
    fetchfun();
    fetchfun1();
    fetchfun2();
    fetchfun3();
  };
  const setsearch = (e) => {
    setsea(e.target.value);
  };

  const setpagemore=()=>{
    setpagen(pagen+4);
    fetchfun();
    fetchfun1();
    fetchfun2();
    fetchfun3();
    console.log("set page more "+pagen);
  }
  
  useEffect(() => {
    run();
  }, []);


  return (
    <>
      <contextProvider.Provider
        value={{pagen, run, sea, setsearch, photo, photo1, photo2, photo3, setpagemore}}
      >
        {props.children}
      </contextProvider.Provider>
    </>
  );
};

export default global;
