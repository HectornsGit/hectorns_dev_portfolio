"use client";
import MainHeader from "../components/MainHeader";
export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <main>
        <header className="">
          <div>
            <div className="absolute xl:pl-12 xl:pt-10 pl-4 pt-4">
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
        <section className="flex items-center flex-col">
          <h3 className="my-8 text-2xl font-medium text-[--cpink] italic">
            {"if("}
            <span className="text-[--clightgreen]">
              Something.interesting
              {<span className="text-[--cpink]">{")"}</span>}
            </span>
            <span className=" text-[--clightblue]">{"=> "}</span>
            <span className="text-[--clightblue]">{"Hector.try()"}</span>
          </h3>
          <article className="border-y flex md:flex-row flex-col justify-between border-[--clightpurple] gap-6 w-5/6 mx-20">
            <p className="text-[--cturquoise] my-8 font-semibold w-4/6 ">
              vaslkfghaskgbnklqbwgqpoi qbiogqbw bqkjb
              qbwjgkbqpgbqwgbaslkfghaskgbnklqbwgqpoi qbiogqbw bqkjb
              qbwjgkbqpgbqwgbaslkfghaskgbnklqbwgqpoi qbiogqbw bqkjb
              qbwjgkbqpgbqwgbaslkfghaskgbnklqbwgqpoi qbiogqbw bqkjb
              qbwjgkbqpgbqwgbaslkfghaskgbnklqbwgqpoi qbiogqbw bqkjb
              qbwjgkbqpgbqwgb
            </p>
            <div className="w-40 h-40 m-4 bg-orange-700 grow "></div>
          </article>
        </section>
      </main>
    </>
  );
}
