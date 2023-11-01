import React, { useContext, useEffect } from "react";
import { contextProvider } from "@/global/global";
import { useLocalStorage } from "usehooks-ts";

function navbar() {
  const themes = ["light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter"];
  const {run,setsearch } = useContext(contextProvider);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  //toggles the theme
  const toggleTheme = (name) => {
    setTheme(name);
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  
  return (
    <div className="navbar bg-neutral shadow-2xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Image Galery</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            onChange={(e)=>setsearch(e)}
            onSubmit={()=>run()}
          />
        </div>
        <button className="btn btn-info" onClick={()=>run()}>
          Search
        </button>
        
      </div>



        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg></label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 h-96 overflow-scroll overflow-x-hidden flex flex-row justify-center">
          {themes.map((name)=>{
            return(
              <li className="btn primary my-2 w-40 " onClick={()=>toggleTheme(name)}><a>{name}</a></li>
            )
          })}
          
        </ul>
      </div>
        
    </div>
  );
}

export default navbar;
