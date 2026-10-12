import carWebsite from "../assets/portfolio/car-website.webp";
import countDown from "../assets/portfolio/new-year-countdown.webp";
import schoolWebsite from "../assets/portfolio/ngano-sec.webp";
import timer from "../assets/portfolio/pomodoro-timer.webp";
import weatherApp from "../assets/portfolio/weather-app.webp";
import rpsGame from "../assets/portfolio/rps.webp";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: carWebsite,
    },
    {
      id: 2,
      src: countDown,
    },
    {
      id: 3,
      src: schoolWebsite,
    },
    {
      id: 4,
      src: timer,
    },
    {
      id: 5,
      src: weatherApp,
    },
    {
      id: 6,
      src: rpsGame,
    },
  ];

  const projectCards = projects.map(({ id, src }) => (
    <div
      key={id}
      className="rounded-lg shadow-md shadow-gray-600 overflow-hidden">
      <img
        src={src}
        alt="Car Website"
        className="w-full h-2/3 object-cover rounded-md hover:scale-105 duration-200"
      />

      <div className="flex justify-center items-center">
        <button className="w-1/2 px-6 py-3 hover:scale-105 duration-200">
          Demo
        </button>
        <button className="w-1/2 px-6 py-3 hover:scale-105 duration-200">
          Code
        </button>
      </div>
    </div>
  ));
  return (
    <div
      name="portfolio"
      className="w-full bg-linear-to-b from-black to-gray-800 text-white md:h-screen">
      <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid gap-8 px-12 sm:px-0 sm:grid-cols-2 md:grid-cols-3">
          {projectCards}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
