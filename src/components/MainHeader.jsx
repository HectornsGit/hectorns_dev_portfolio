import { useState } from "react";
const MainHeader = ({ experience, projects, contactMe }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="h-16 bg-cblack border-b-cdarkpurple border-b flex w-full items-center fixed z-50 ">
      <nav className="text-[--cwhite] font-oswald font-light w-full   ">
        <ul className="md:flex gap-4 justify-self-end items-center mr-2 text-lg hidden">
          <li className="border-b-[--clightpurple]  py-4 px-2  ">
            <button
              onClick={() => {
                scrollTo(0, 0);
              }}
            >
              About Me
            </button>
          </li>
          <li className="py-4 px-2">
            <button
              onClick={() => {
                experience.current.scrollIntoView();
              }}
            >
              Experience
            </button>
          </li>
          <li className="py-4 px-2">
            <button
              onClick={() => {
                projects.current.scrollIntoView();
              }}
            >
              Projects
            </button>
          </li>
          <li className="py-4 px-2">
            <button
              onClick={() => {
                contactMe.current.scrollIntoView();
              }}
            >
              Contact Me
            </button>
          </li>
          <li className="py-4 px-2">Other interests</li>
        </ul>

        <div className=" md:hidden flex items-center justify-center bg-[--cblack] w-full">
          <button className="">Menu</button>
          <ul
            className={
              "absolute bg-[--cblack]  z-10 flex flex-col items-center justify-center text-lg w-full " +
              (isMenuOpen
                ? " flex flex-col items-center top-14  absolute bg-[--cblack]"
                : "hidden")
            }
          >
            <li className="border-b-[--clightpurple]  py-4">
              <button>About Me</button>
            </li>
            <li className="py-4 px-2">Contact Me</li>
            <li className="py-4 px-2">Projects</li>
            <li className="py-4 px-2">Other interests</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
