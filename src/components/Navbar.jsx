import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-[#e0afa0] border-2 border-[#FEC89A]">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-black font-bold custom-font">Manifest</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-black font-semibold custom-font">Home</a></li>
      <li>
       <a className="text-black font-semibold custom-font"> About</a>
      </li>
    </ul>
  </div>
</div>
  );
};