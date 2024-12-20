const AboutMe = () => {
  return (
    <section className="ABOUT-ME">
      <article className="mx-auto flex flex-col mt-8 justify-center 2xl:w-4/6 lg:w-5/6 md:w-8/12 w-11/12">
        <header>
          <h3 className="my-6 xl:text-3xl lg:text-2xl sm:text-xl font-semibold italic text-[--cyellow]  font-oswald">
            ABOUT ME
          </h3>
        </header>
        <div className="flex lg:flex-row flex-col">
          <div className=" lg:w-2/3  md:mx-0  mx-2 lg:mt-0 mt-4 order-2 text-[--cwhite] font-regular   xl:text-2xl md:text-xl  lg:leading-relaxed  font-redhat">
            <p className="xl:mb-8 mb-4">
              I{"'"}m Héctor, a fullstack developer passionate about all kind of
              graphic arts, games and music.
            </p>
            <p className=" lg:mb-8 mb-4">
              In my projects I worked in different areas: Backend, frontend,
              design, even some basic devops and lead or organizative roles.
            </p>
            <div className="xl:mb-8 mb-4">
              <p className="">
                Now I can bring all this experience and passion to your team!
              </p>
              <span className="pl-4 lg:text-xl font-medium font-oswald italic text-cturquoise">
                <br></br> WANT TO KNOW MORE?
              </span>
            </div>
          </div>
          <img
            src="./image.jpg"
            className=" lg:h-80 md:h-64  xl:w-1/3 lg:w-3/6 md:w-full  lg:self-auto md:self-center  lg:mr-8  md:object-cover  rounded-lg grow order-1"
          ></img>
        </div>
      </article>
    </section>
  );
};
export default AboutMe;
