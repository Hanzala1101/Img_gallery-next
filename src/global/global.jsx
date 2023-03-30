import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const contextProvider = createContext();

const global = (props) => {
  const [photo, setphoto] = useState([]);
  const [photo1, setphoto1] = useState([]);
  const [photo2, setphoto2] = useState([]);
  const [sea, setsea] = useState("beauty");

  const url = `https://api.unsplash.com/search/photos?page=1&query=${sea}&client_id=WWsod9MiUmyfN--d2Zrx3_zrofyyTWaUaW3naEZhsco`;
  const url1 = `https://api.unsplash.com/search/photos?page=2&query=${sea}&client_id=WWsod9MiUmyfN--d2Zrx3_zrofyyTWaUaW3naEZhsco`;
  const url2 = `https://api.unsplash.com/search/photos?page=3&query=${sea}&client_id=WWsod9MiUmyfN--d2Zrx3_zrofyyTWaUaW3naEZhsco`;

  const fetchfun = () => {
    axios.get(url).then((res) => setphoto(res.data.results));
  };
  const fetchfun1 = () => {
    axios.get(url1).then((res) => setphoto1(res.data.results));
  };
  const fetchfun2 = () => {
    axios.get(url2).then((res) => setphoto2(res.data.results));
  };
  const run = () => {
    fetchfun();
    fetchfun1();
    fetchfun2();
  };
  const setsearch = (e) => {
    setsea(e.target.value);
  };
  
  useEffect(() => {
    run();
  }, []);

  return (
    <>
      <contextProvider.Provider
        value={{ run, sea, setsearch, photo, photo1, photo2 }}
      >
        {props.children}
      </contextProvider.Provider>
    </>
  );
};

export default global;
