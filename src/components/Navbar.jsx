import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-[#CA7F68]">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-black font-bold">My-wishlist</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-black font-semibold">Home</a></li>
      <li>
       <a className="text-black font-semibold"> About</a>
      </li>
    </ul>
  </div>
</div>
  );
};