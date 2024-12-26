"use client";
import MainHeader from "../components/MainHeader";
import AboutMe from "../components/AboutMe";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
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
        <section className=" flex flex-col border mt-8 w-full self-center ">
          <header className="w-11/12 self-center">
            <h3 className="my-6 xl:text-3xl lg:text-2xl sm:text-xl font-semibold italic text-[--cyellow]  font-oswald">
              PROJECTS
            </h3>
          </header>
          <ul className="w-full flex sm:flex-row flex-wrap flex-col">
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2">
              <ProjectCard></ProjectCard>
            </li>{" "}
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2">
              <ProjectCard></ProjectCard>
            </li>{" "}
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2">
              <ProjectCard></ProjectCard>
            </li>{" "}
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2">
              <ProjectCard></ProjectCard>
            </li>{" "}
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2">
              <ProjectCard></ProjectCard>
            </li>{" "}
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2">
              <ProjectCard></ProjectCard>
            </li>{" "}
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2">
              <ProjectCard></ProjectCard>
            </li>
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2"></li>
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2"></li>
            <li className="grow xl:w-1/4 md:w-1/3 sm:w-1/2"></li>
          </ul>
        </section>
      </main>
    </>
  );
}
