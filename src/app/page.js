export default function Home() {
  return (
    <>
      <header className="h-14 bg-[#170B1E] border-b-[#3D2343] border-b flex w-full items-center p-4">
        <nav className="text-[--cwhite] font-oswald font-light w-full">
          <ul className="flex flex-row justify-between ">
            <li className="py-4 px-2">Polla</li>
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
      <main></main>
    </>
  );
}
