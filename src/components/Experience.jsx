import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Experience = ({ refAlter, initNeons, setNeonState }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) {
      let neons = initNeons;
      neons.experience = true;
      setNeonState({ ...neons });
    }
  }, [inView]);

  return (
    <>
      <div ref={refAlter}></div>
      <section className="EXPERIENCE lg:mt-16 lg:mb-28">
        <article className="mx-auto flex flex-col mt-8 justify-center 2xl:w-4/6 lg:w-5/6 md:w-8/12 w-11/12">
          <header>
            <h3 className="my-6 xl:text-3xl lg:text-2xl sm:text-xl font-semibold italic text-[--cyellow]  font-oswald">
              EXPERIENCE
            </h3>
          </header>
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col lg:w-2/3  md:mx-0  mx-2 lg:mt-0 mt-4 order-2 text-[--cwhite] font-regular   xl:text-2xl md:text-xl  lg:leading-relaxed  font-redhat">
              <p ref={ref} className="lg:mb-8 mb-4">
                I have mostly worked with NodeJS Express for the backend , MySQL
                as Database and React/Next as the frontend framework.<br></br> I
                have also worked with Python, C#, Symphony and MongoDB in a
                lesser extent.
              </p>
              <p className="lg:mb-8 mb-4">
                Relative to deploys and devops I{"'"}m familiar with
                Docker/Kubernetes, Vercel, Render and to a lesser extent AWS,
                Azure and Google cloud.
              </p>
              <p className="lg:mb-8 mb-4">
                As graphic design intern I worked mostly with Adobe Illustrator,
                Photoshop and Indesign. For my web projects I{"'"}m using mostly
                Figma.
              </p>
              <p className="lg:mb-8 mb-4">
                For my organizative tasks as a Scrum master / Project Leader /
                Community ambassador, I worked with: Notion, Trello, Github and
                Discord
              </p>
              <p className="lg:mb-8 mb-4">
                If you don{"'"}t find something of your stack here, don{"'"}t
                worry, I{"'"}m always eager to learn new technologies
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
export default Experience;
