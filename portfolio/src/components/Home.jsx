import profileImg from "../assets/profile/profile-nbg.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-dvh w-full pt-20 bg-linear-to-b from-black via-black to-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 px-4 py-8 md:flex-row md:justify-center md:items-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-7xl text-white font-bold">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            officiis? Consequatur voluptatum facere similique quam! Eligendi
            recusandae magni minus aliquam quo in, delectus quae voluptas cum
            beatae fugiat atque quisquam?
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2.5 flex items-center rounded-md bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRightAlt size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={profileImg}
            alt="profile"
            className="mx-auto w-2/3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-500 shrink md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
