import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/munyuaw",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      href: "https://linkedin.com/in/munyua-wanyoike",
    },
    {
      id: 3,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/254795050539",
    },
    {
      id: 4,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mrmunyuajm@gmail.com",
      style: "rounded-br-md",
    },
  ];

  const linkElems = links.map(({ id, child, href, style }) => (
    <li
      key={id}
      className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 -ml-25 hover:-ml-2.5 hover:rounded-md duration-300 ${style}`}>
      <a
        href={href}
        className="flex justify-between items-center w-full text-white">
        {child}
      </a>
    </li>
  ));

  return (
    <div className="fixed top-[35%] left-0 hidden lg:flex flex-col">
      <ul>{linkElems}</ul>
    </div>
  );
};

export default SocialLinks;
