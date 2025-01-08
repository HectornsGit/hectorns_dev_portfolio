import { useEffect, useState } from "react";
const MainHeader = ({ experience, projects, contactMe }) => {
  let initNeons = {
    aboutMe: false,
    contactMeMe: false,
    projects: false,
    experience: false,
  };

  const handleScroll = (ref, sectionName) => {
    let neons = initNeons;
    if (sectionName !== "aboutMe") {
      ref?.current.scrollIntoView();
    } else scrollTo(0, 0);

    neons[sectionName] = true;
    setNeonState({ ...neons });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [neonState, setNeonState] = useState();

  useEffect(
    () =>
      setNeonState({
        aboutMe: true,
        contactMeMe: false,
        projects: false,
        experience: false,
      }),
    []
  );

  if (
    experience.current !== null &&
    projects.current !== null &&
    contactMe.current !== null
  )
    console.log(experience.current);
  return (
    <header className="h-16 bg-cblack border-b-cdarkpurple border-b flex w-full items-center fixed z-50 ">
      <nav className="text-[--cwhite] font-oswald font-light w-full   ">
        <ul className="md:flex gap-4 justify-self-end items-center mr-2 text-lg hidden">
          <li className="border-b-[--clightpurple]py-4 px-2  ">
            <button onClick={() => handleScroll(null, "aboutMe")}>
              About Me
            </button>
            {neonState && (
              <div className={neonState.aboutMe ? "neon" : ""}></div>
            )}
          </li>
          <li className="py-4 px-2">
            <button onClick={() => handleScroll(experience, "experience")}>
              Experience
            </button>
            {neonState && (
              <div className={neonState.experience ? "neon" : ""}></div>
            )}
          </li>
          <li className="py-4 px-2">
            <button onClick={() => handleScroll(projects, "projects")}>
              Projects
            </button>
            {neonState && (
              <div className={neonState.projects ? "neon" : ""}></div>
            )}
          </li>
          <li className="py-4 px-2">
            <button
              onClick={() => {
                handleScroll(contactMe, "contactMe");
              }}
            >
              Contact Me
            </button>
            {neonState && (
              <div className={neonState.contactMe ? "neon" : ""}></div>
            )}
          </li>
          <li className="py-4 px-2">Other interests</li>
          <div className="neon"></div>
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
