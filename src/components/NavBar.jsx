import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex justify-around">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-400 text-4xl font-bold cursive tracking-widest"
          >
            Eugene
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.facebook.com/eugenetin020603"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/eujin_tin/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/EuJin03"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
