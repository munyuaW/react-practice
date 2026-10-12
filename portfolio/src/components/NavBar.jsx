import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed top-0 left-0 z-50">
      <div>
        <h1 className="text-5xl ml-2 font-greatvibes">Munyua</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize px-4 cursor-pointer font-medium text-gray-500 hover:scale-102 hover:text-white duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 hover:text-white duration-200 md:hidden">
        {nav ?
          <FaTimes size={30} />
        : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-linear-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize px-4 py-6 cursor-pointer text-4xl hover:text-white duration-200">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
