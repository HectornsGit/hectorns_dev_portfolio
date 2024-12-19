"use client";
import MainHeader from "../components/MainHeader";
export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <main>
        <header className="">
          <div>
            <div className="absolute xl:pl-12 xl:pt-10 pl-4 pt-4 flex flex-col items-end">
              <h1 className="text-[--cwhite]  xl:text-8xl text-4xl  font-oswald font-normal w-full ">
                Héctor Novoa
              </h1>
              <span className="xl:text-3xl  text-xs text-[--cyellow] text-right font-oswald font-extralight w-full">
                Fullstack Developer
              </span>
            </div>
            <img
              src="hero.jpg"
              className="xl:h-52 h-24 w-full object-right object-cover"
            ></img>
          </div>
        </header>
        <section className="ABOUT-ME">
          <article className="mx-auto flex flex-col mt-8 justify-center w-4/6">
            <header>
              <h3 className="my-6 text-3xl font-semibold italic text-[--cyellow]  font-oswald">
                ABOUT ME
              </h3>
            </header>
            <div className="flex">
              <div className="w-2/3">
                <p className="text-2xl text-[--cwhite] font-regular  mb-8 w-2/3 leading-relaxed  font-redhat">
                  I'm Héctor, a fullstack developer passionate about all kind of
                  graphic arts, games and music.
                </p>
                <p className="text-2xl text-[--cwhite] font-regular  mb-8 w-2/3 leading-relaxed  font-redhat">
                  In my projects I worked in different areas: Backend, front,
                  even some basic devops and lead or organizative roles.
                </p>
                <p className="text-2xl text-[--cwhite] font-regular  mb-8 w-2/3 leading-relaxed  font-redhat">
                  Now I can bring all this experience and passion to your team.
                  <span className=" pl-4 text-xl font-medium font-oswald italic text-cturquoise">
                    WANT TO KNOW MORE?
                  </span>
                </p>
              </div>
              <img
                src="./image.jpg"
                className="max-w-1/3 h-72  mx-8 object-contain  rounded-lg grow "
              ></img>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
