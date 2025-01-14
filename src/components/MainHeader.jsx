import { useEffect, useState } from "react";
const MainHeader = ({
  experience,
  projects,
  contactMe,
  setNeonState,
  neonState,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (ref, sectionName) => {
    if (sectionName !== "aboutMe") {
      ref?.current.scrollIntoView({ behaviour: "smooth" });
    } else scrollTo(0, 0);
  };

  const handleScrollMobile = (ref, sectionName) => {
    if (sectionName !== "aboutMe") {
      ref?.current.scrollIntoView({ behaviour: "smooth" });
    } else scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setNeonState({
      aboutMe: true,
      contactMeMe: false,
      projects: false,
      experience: false,
    });
    scrollTo(0, 0);
  }, []);

  return (
    <header
      className={
        "bg-cblack border-b-cdarkpurple border-b flex w-full items-center fixed z-50" +
        (isMenuOpen ? " h-screen " : " h-16 ")
      }
    >
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
        <div
          className={
            " md:hidden flex items-center justify-center  bg-[--cblack] w-full" +
            (isMenuOpen ? " h-screen " : " h-full ")
          }
        >
          <button
            className="self-start p-4"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Menu
          </button>
          <menu
            className={
              "absolute bg-[--cblack] z-10 flex flex-col items-center justify-center text-lg w-full transition-all  " +
              (isMenuOpen
                ? "  items-center top-14  absolute bg-[--cblack] transition-all open-menu "
                : " transition-all close-menu opacity-0  ")
            }
          >
            <li className="grow py-4 px-2  ">
              <button onClick={() => handleScrollMobile(null, "aboutMe")}>
                About Me
              </button>
            </li>
            <li className=" grow py-4 px-2">
              <button
                onClick={() => handleScrollMobile(experience, "experience")}
              >
                Experience
              </button>
            </li>
            <li className=" grow py-4 px-2">
              <button onClick={() => handleScrollMobile(projects, "projects")}>
                Projects
              </button>
            </li>
            <li className="grow py-4 px-2">
              <button
                onClick={() => {
                  handleScrollMobile(contactMe, "contactMe");
                }}
              >
                Contact Me
              </button>
            </li>
            <li className=" grow py-4 px-2">Other interests</li>
          </menu>
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
