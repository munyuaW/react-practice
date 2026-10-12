import html from "../assets/tech/html.webp";
import css from "../assets/tech/css.webp";
import javascript from "../assets/tech/javascript.webp";
import reactIcon from "../assets/tech/react.webp";
import tailwind from "../assets/tech/tailwind.webp";
import git from "../assets/tech/git.webp";
import github from "../assets/tech/github.webp";
import node from "../assets/tech/node.webp";
import nextjs from "../assets/tech/nextjs.webp";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactIcon,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
  ];

  const techCards = techs.map(({ id, src, title, style }) => (
    <div
      key={id}
      className={
        "shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + style
      }>
      <img src={src} alt="" className="w-20 mx-auto" />
      <p className="mt-4">{title}</p>
    </div>
  ));

  return (
    <div
      name="experience"
      className="min-h-dvh w-full bg-linear-to-b from-gray-800 to-black text-white">
      <div className="max-w-5xl p-4 mx-auto w-full flex flex-col justify-start py-16 md:justify-center md:min-h-dvh">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-gray-500 pb-2">
            Experience
          </p>
          <p className="py-6">Tech I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techCards}
        </div>
      </div>
    </div>
  );
};

export default Experience;
