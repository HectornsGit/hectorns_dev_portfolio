export default function Home() {
  return (
    <>
      <header className="h-16 bg-[--darkerpurple] border-b-[--cdarkpurple] border-b flex w-full items-center ">
        <nav className="text-[--cwhite] font-oswald font-light w-full">
          <ul className="md:flex gap-4 hidden  justify-self-end items-center mr-2 text-lg">
            <li className="border-b-[--clightpurple]  py-4 px-2 ">About Me</li>
            <li className="py-4 px-2">Projects</li>
            <li className="py-4 px-2">Contact Me</li>
            <li className="py-4 px-2">Other interests</li>
          </ul>
          <div className=" hidden absolute bg-[--cblack] z-10 w-full">
            <ul className="flex flex-col items-center justify-center text-lg">
              <li className="border-b-[--clightpurple]  py-4">About Me</li>
              <li className="py-4 px-2">Projects</li>
              <li className="py-4 px-2">Contact Me</li>
              <li className="py-4 px-2">Other interests</li>
            </ul>
          </div>
        </nav>
      </header>
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
