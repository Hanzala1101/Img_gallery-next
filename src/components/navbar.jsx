import React, { useContext } from "react";
import {contextProvider} from "../global/global";

function navbar() {
  const {run,setsearch } = useContext(contextProvider);

  return (
    <div className="navbar bg-neutral shadow-2xl flex flex-wrap">
      <div > 
        <a className="btn btn-ghost normal-case text-xl">Image Galery</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            onChange={setsearch}
          />
        </div>
        <button className="btn btn-info" onClick={run}>
          Search
        </button>
        {/* <div className="dropdown dropdown-end" >
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
      </div>
    </div>
  );
}

export default navbar;
