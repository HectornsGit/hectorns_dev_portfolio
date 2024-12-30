"use client";
import MainHeader from "../components/MainHeader";
import AboutMe from "../components/AboutMe";
import { useState } from "react";
import ListProjectCards from "@/components/projects/listProjectCards";
export default function Home() {
  const [projectList, setProjectList] = useState([
    {
      projectName: "Freeday Quiz",
      projectId: 1,
      projectImage:
        "https://media.licdn.com/dms/image/v2/D4D22AQHjWOK0_hMGLg/feedshare-shrink_1280/feedshare-shrink_1280/0/1733743357297?e=1738195200&v=beta&t=C2AHZCDOzztMMzhZdd-L6DOM3R80Sq9Wz5s9l520jG0",
    },
    {
      projectName: "Heflú",
      projectId: 2,
      projectImage:
        "https://media.licdn.com/dms/image/v2/D4D22AQHjWOK0_hMGLg/feedshare-shrink_1280/feedshare-shrink_1280/0/1733743357297?e=1738195200&v=beta&t=C2AHZCDOzztMMzhZdd-L6DOM3R80Sq9Wz5s9l520jG0",
    },
    {
      projectName: "Hoorry",
      projectId: 3,
      projectImage:
        "https://media.licdn.com/dms/image/v2/D4D22AQHjWOK0_hMGLg/feedshare-shrink_1280/feedshare-shrink_1280/0/1733743357297?e=1738195200&v=beta&t=C2AHZCDOzztMMzhZdd-L6DOM3R80Sq9Wz5s9l520jG0",
    },
  ]);

  return (
    <>
      <MainHeader></MainHeader>
      <main className="flex flex-col">
        <header className="">
          <div>
            <div className="absolute xl:pl-12 md:pl-8 xl:pt-10 md:pt-8 pl-4 pt-4 flex flex-col items-end sm:ml-48">
              <h1 className="text-[--cwhite]  xl:text-8xl md:text-5xl text-4xl  font-oswald font-normal w-full ">
                Héctor Novoa
              </h1>
              <span className="xl:text-3xl md:text-xl  text-xs text-[--cyellow] text-right font-oswald font-extralight w-full">
                Fullstack Developer
              </span>
            </div>
            <img
              src="hero.jpg"
              className="xl:h-52 md:h-32 h-24 w-full object-right object-cover"
            ></img>
          </div>
        </header>
        <AboutMe></AboutMe>
        <section className=" flex flex-col mt-8 w-full self-center ">
          <header className="w-11/12 self-center">
            <h3 className="my-6 xl:text-3xl lg:text-2xl sm:text-xl font-semibold italic text-[--cyellow]  font-oswald">
              PROJECTS
            </h3>
          </header>
          {projectList.length > 0 && (
            <ListProjectCards projectList={projectList}></ListProjectCards>
          )}
        </section>
      </main>
    </>
  );
}
