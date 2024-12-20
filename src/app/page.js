"use client";
import MainHeader from "../components/MainHeader";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <main>
        <header className="">
          <div>
            <div className="absolute xl:pl-12 md:pl-8 xl:pt-10 md:pt-8 pl-4 pt-4 flex flex-col items-end">
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
      </main>
    </>
  );
}
