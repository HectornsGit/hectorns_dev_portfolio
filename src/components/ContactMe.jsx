import EmailLogo from "./logos/EmailLogo";
import LinkedinLogo from "./logos/LinkedinLogo";

const ContactMe = () => {
  return (
    <section className="CONTACT-ME lg:mb-64">
      <article className="mx-auto flex flex-col mt-8 justify-center 2xl:w-4/6 lg:w-5/6 md:w-8/12 w-11/12">
        <header>
          <h3 className="my-6 xl:text-3xl lg:text-2xl sm:text-xl font-semibold italic text-[--cyellow]  font-oswald">
            CONTACT ME
          </h3>
        </header>
        <div className="flex lg:flex-row flex-col gap-8 ">
          <div className="flex flex-col lg:w-2/3  md:mx-0  lg:mt-0 mt-4 text-left text-[--cwhite] font-regular   xl:text-2xl md:text-xl  lg:leading-relaxed  font-redhat lg:order-1 order-2">
            <p className="lg:mb-16 mb-4">
              If you felt like something here resonated with your needs or do
              you just want to know more, you can contact me by any of these
              channels or any other you prefer, just send me an email or
              linkedin DM:
            </p>
            <ul className="font-oswald italic font-semibold flex gap-8  justify-between md:mx-4 flex-wrap ">
              <li className="flex md:gap-4 gap-2 items-center hover:text-cyellow hover:fill-cyellow fill-cwhite">
                <EmailLogo style={"  md:w-12 w-8 md:h-12 h-8"} />
                <p className="text-xs md:text-2xl">
                  hector.novoa.segade@gmail.com
                </p>
              </li>
              <li className="hover:text-cyellow text-cwhite self-end">
                <a
                  href="https://calendly.com/hector-novoa-segade/30-minute-meeting-clone"
                  target="blank"
                >
                  GOOGLE MEET
                </a>
              </li>
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
            </ul>
          </div>
          <img
            src="./image.jpg"
            className="  lg:h-64  xl:w-1/3 lg:w-3/6 md:w-full   lg:self-auto md:self-center  lg:mr-8  md:object-cover  rounded-lg grow order-1 lg:order-2"
          ></img>
        </div>
      </article>
    </section>
  );
};
export default ContactMe;
