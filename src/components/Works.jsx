import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { FaEye } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview_link,
}) => {
  // ✅ Use state to track window width for mobile responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary !p-5 rounded-2xl w-full max-w-[320px] sm:max-w-[360px]">
        <ProjectContent
          name={name}
          description={description}
          tags={tags}
          image={image}
          source_code_link={source_code_link}
          live_preview_link={live_preview_link}
        />
      </div>
    </motion.div>
  );
};

const ProjectContent = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview_link,
}) => (
  <>
    <div className="relative w-full sm:h-[fit-content] h-[fit-content]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-2xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/fallback-image.png"; // ✅ Use fallback image if missing
        }}
      />
      <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
        <div
          onClick={() => window.open(live_preview_link, "_blank")}
          className="bg-black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <FaEye fontSize={25} />
        </div>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="bg-black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
        </div>
      </div>
    </div>
    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <p key={index} className={`text-[14px] ${tag.color}`}>
          {tag.name}
        </p>
      ))}
    </div>
  </>
);

const Works = () => {
  // ✅ Debug: Check if projects data is available
  console.log("Projects Data:", projects);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h1 className={styles.sectionHeadText}>Projects.</h1>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl leading-[30px] text-[17px]"
        >
          Below are some of the projects I have worked on, each reflecting my
          skills, creativity, and problem-solving abilities. These projects
          showcase my experience in web development, UI/UX design, and
          programming. I have carefully crafted each one with attention to
          detail and functionality. Feel free to explore the code on my GitHub
          to gain insight into my development process, coding standards, and
          the technologies I have used. I am always open to feedback and
          collaboration, so don’t hesitate to reach out!
        </motion.p>
      </div>

      {/* ✅ Show a message if projects array is empty */}
      {projects.length === 0 ? (
        <p className="text-white text-center mt-10">No projects found.</p>
      ) : (
        <div className="!mt-20 flex flex-wrap justify-center md:items-start md:justify-start gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
