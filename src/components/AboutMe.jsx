const AboutMe = () => {
  return (
    <section className="ABOUT-ME">
      <article className="mx-auto flex flex-col mt-8 justify-center 2xl:w-4/6 xl:w-5/6 md:w-8/12 w-11/12">
        <header>
          <h3 className="my-6 xl:text-3xl md:text-xl font-semibold italic text-[--cyellow]  font-oswald">
            ABOUT ME
          </h3>
        </header>
        <div className="flex xl:flex-row flex-col">
          <div className=" xl:w-2/3  md:mx-0  mx-2 xl:mt-0 mt-4 order-2 text-[--cwhite] font-regular   xl:text-2xl md:text-xl  xl:leading-relaxed  font-redhat">
            <p className="mb-8">
              I{"'"}m Héctor, a fullstack developer passionate about all kind of
              graphic arts, games and music.
            </p>
            <p className=" mb-8">
              In my projects I worked in different areas: Backend, frontend,
              design, even some basic devops and lead or organizative roles.
            </p>
            <p className="mb-8">
              Now I can bring all this experience and passion to your team.
              <span className="pl-4 xl:text-xl font-medium font-oswald italic text-cturquoise">
                <br></br> WANT TO KNOW MORE?
              </span>
            </p>
          </div>
          <img
            src="./image.jpg"
            className=" xl:h-72 md:h-64  xl:w-1/3 md:w-full  xl:self-auto md:self-center  xl:mr-8 2xl:object-contain md:object-cover  rounded-lg grow order-1"
          ></img>
        </div>
      </article>
    </section>
  );
};
export default AboutMe;
