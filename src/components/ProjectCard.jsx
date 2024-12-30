"use client";
const ProjectCard = ({ project }) => {
  return (
    <a href={`/project/${project.projectId}`}>
      <article className="flex flex-col justify-end items-end md:h-96 h-60">
        <div className="relative h-full w-full overflow-hidden group">
          <div
            style={{
              backgroundImage: `url(${project.projectImage})`,
            }}
            className="z-0 relative  bg-cover bg-center w-full h-full overflow-hidden sm:group-hover:scale-110 group-hover:brightness-100 sm:brightness-50 sm:transition-all"
          ></div>
          <h4 className=" z-10 absolute bottom-0 right-0  bg-opacity-40 bg-black py-2 px-8 text-right my-6 xl:text-3xl text-2xl  font-semibold italic text-[--cyellow]  font-oswald">
            {project.projectName}
          </h4>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
