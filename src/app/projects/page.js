"use client";

import Link from "next/link";
import { useState } from "react";

const images = [
  "/heflu_thumbnail.png",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
];

const Projects = () => {
  const [mainPicture, setMainPicture] = useState(images[0]);

  const triggerAnimation = async () => {
    const mainPictureDiv = document.getElementById("mainPicture");
    mainPictureDiv.style.animation = "fade-in 1s linear";
    setTimeout(() => {
      mainPictureDiv.style.animation = "";
    }, 1400);
  };

  const handlePictureClick = async (e) => {
    setMainPicture(e.target.src);
    await triggerAnimation();
  };

  return (
    <>
      <header
        className={
          "bg-cblack border-b-cdarkpurple border-b font-light px-10 flex w-full items-center justify-end fixed z-50 h-16"
        }
      >
        <nav className="text-2xl">
          <Link href={"/"} className="text-cwhite font-oswald">
            Go back
          </Link>
        </nav>
      </header>
      <main className="flex flex-col snap-proximity snap-y items-center  mb-0 ">
        <header className="mt-12 self-start w-full">
          <div>
            <div className="absolute xl:pl-12 md:pl-8 xl:pt-10 md:pt-8 pl-4 pt-8 flex flex-col items-end lg:ml-48 sm:ml-36 ml-12">
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
        <section className="w-4/6  my-12 flex justify-start">
          <div className="grid gap-4 w-2/6">
            <div id="mainPicture" className="transition-all w-full  h-3/4">
              <img
                className="h-72 w-full object-cover rounded-lg"
                src={mainPicture}
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div onClick={handlePictureClick}>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={images[0]}
                  alt=""
                />
              </div>
              <div onClick={handlePictureClick}>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={images[1]}
                  alt=""
                />
              </div>
              <div onClick={handlePictureClick}>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={images[2]}
                  alt=""
                />
              </div>
              <div onClick={handlePictureClick}>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={images[3]}
                  alt=""
                />
              </div>
              <div onClick={handlePictureClick}>
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={images[4]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
