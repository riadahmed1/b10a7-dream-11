import React from 'react';
import {PiCoinVerticalFill} from "react-icons/pi";
import {RiCopperCoinFill} from "react-icons/ri";

const Navbar = ({coins}) => {
  return (
      <div className="navbar bg-base-100 shadow-sm mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <i class="fa-solid fa-bars-staggered text-xl"></i>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>Home</li>
              <li>Fixture</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src="/src/assets/logo.png" alt="" /></a>
        </div>

        <div className="navbar-end gap-5">
          <ul className='gap-5 hidden lg:flex'>
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <button className="btn border border-lime-300 rounded-xl">{coins} Coin<RiCopperCoinFill className='text-yellow-400'/></button>
        </div>
      </div>
  );
};

export default Navbar;