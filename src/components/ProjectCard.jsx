const ProjectCard = () => {
  return (
    <article className="relative flex flex-col justify-end items-end md:h-96 h-60">
      <div className="relative h-full w-full overflow-hidden group">
        <div
          style={{
            backgroundImage:
              "url(https://media.licdn.com/dms/image/v2/D4D22AQHjWOK0_hMGLg/feedshare-shrink_1280/feedshare-shrink_1280/0/1733743357297?e=1738195200&v=beta&t=C2AHZCDOzztMMzhZdd-L6DOM3R80Sq9Wz5s9l520jG0 )",
          }}
          className="z-0 relative  bg-cover bg-center w-full h-full overflow-hidden sm:group-hover:scale-110 group-hover:brightness-100 sm:brightness-50 sm:transition-all"
        ></div>
        <h4 className=" z-10 absolute bottom-0 right-0  bg-opacity-40 bg-black py-2 px-8 text-right my-6 xl:text-3xl text-2xl  font-semibold italic text-[--cyellow]  font-oswald">
          Freeday Quiz
        </h4>
      </div>
    </article>
  );
};

export default ProjectCard;
