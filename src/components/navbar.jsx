import React, { useContext } from "react";
import {contextProvider} from "../global/global";

function navbar() {
  const {run,setsearch } = useContext(contextProvider);

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
    </div>
  );
}

export default navbar;
