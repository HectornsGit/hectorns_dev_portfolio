export default function Home() {
  return (
    <>
      <header className="h-14 bg-[#170B1E] border-b-[#3D2343] border-b flex w-full items-center p-4">
        <nav className="text-[--cwhite] font-oswald font-light w-full">
          <ul className="flex flex-row justify-between ">
            <li className="py-4 px-2">
              <h1 className="text-xl font-normal">Hectorns Dev</h1>
            </li>
            <li className=" justify-self-start items-center mr-2">
              <ul className="flex gap-2">
                <li className="border-b-[--clightpurple]  py-4 px-2 border-b-2">
                  About Me
                </li>
                <li className="py-4 px-2">Projects</li>
                <li className="py-4 px-2">Contact Me</li>
                <li className="py-4 px-2">Other interests</li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <header className="">
          <div>
            <div className="fixed xl:pl-12 xl:pt-10 pl-4 pt-4">
              <h2 className="text-[--cwhite]  xl:text-7xl text-4xl  font-oswald font-normal w-full ">
                Héctor Novoa
              </h2>
              <h3 className="xl:text-2xl text-xs text-[--cyellow] text-right font-oswald font-light w-full">
                Fullstack Dev
              </h3>
            </div>
            <img
              src="hero.jpg"
              className="xl:h-52 h-24 w-full object-right object-cover"
            ></img>
          </div>
        </header>
      </main>
    </>
  );
}
