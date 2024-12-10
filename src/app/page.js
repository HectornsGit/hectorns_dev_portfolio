"use client";
import { useState } from "react";
import MainHeader from "../components/MainHeader";
export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <main>
        <header className="">
          <div>
            <div className="fixed xl:pl-12 xl:pt-10 pl-4 pt-4">
              <h1 className="text-[--cwhite]  xl:text-7xl text-4xl  font-oswald font-normal w-full ">
                Héctor Novoa
              </h1>
              <h2 className="xl:text-2xl text-xs text-[--cyellow] text-right font-oswald font-light w-full">
                Fullstack Dev
              </h2>
            </div>
            <img
              src="hero.jpg"
              className="xl:h-52 h-24 w-full object-right object-cover"
            ></img>
          </div>
        </header>
        <section></section>
      </main>
    </>
  );
}
