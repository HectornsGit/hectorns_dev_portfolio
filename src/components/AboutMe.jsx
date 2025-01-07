import GithubLogo from "./logos/GithubLogo";
import LinkedinLogo from "./logos/LinkedinLogo";

const AboutMe = () => {
  return (
    <section className="ABOUT-ME lg:mt-16 ">
      <article className="mx-auto flex flex-col mt-8 justify-center 2xl:w-4/6 lg:w-5/6 md:w-8/12 w-11/12">
        <header>
          <h3 className="my-6 xl:text-3xl lg:text-2xl sm:text-xl font-semibold italic text-[--cyellow]  font-oswald">
            ABOUT ME
          </h3>
        </header>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col lg:w-2/3  md:mx-0  mx-2 lg:mt-0 mt-4 order-2 text-[--cwhite] font-regular   xl:text-2xl md:text-xl  lg:leading-relaxed  font-redhat">
            <p className="  lg:mb-8 mb-4">
              I{"'"}m Héctor, a fullstack developer passionate about all kind of
              graphic arts, games and music.
            </p>
            <p className=" lg:mb-8 mb-4">
              In my projects I worked in different areas: Backend, frontend,
              design, even some basic devops and lead or organizative roles.
            </p>
            <div className=" lg:mb-8 mb-4">
              <p className="">
                Now I can bring all this experience and passion to your team!
              </p>
              <ul className="flex justify-between items-center mt-14">
                <li>
                  <p className="lg:text-2xl font-medium font-oswald italic text-cturquoise flex justify-between  text-right">
                    WANT TO KNOW MORE?
                  </p>
                </li>
                <li>
                  <ul className=" flex justify-between items-end text-right gap-4">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/hectornovoa/"
                        target="blank"
                      >
                        <LinkedinLogo
                          style={
                            " hover:fill-cyellow fill-cwhite md:w-12 w-8 md:h-12 h-8"
                          }
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/HectornsGit" target="blank">
                        <GithubLogo
                          style={
                            " hover:fill-cyellow fill-cwhite md:w-12 w-8 md:h-12 h-8"
                          }
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-cyellow  lg:text-4xl font-medium font-oswald italic  flex justify-between  text-right text-3xl "
                        href="./Hector_Novoa_Segade_CV_11_11_2024.pdf"
                        download={true}
                      >
                        CV
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
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
