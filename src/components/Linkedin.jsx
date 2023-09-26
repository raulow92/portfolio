import { BiLogoLinkedin } from "react-icons/bi";

const Linkedin = () => (
    <a
        href="https://www.linkedin.com/in/raulow/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-2 md:order-3 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 aspect-square"
    >
        <BiLogoLinkedin className="text-4xl lg:text-6xl mb-3"/>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5">LinkedIn</p>
    </a>
);

export default Linkedin;
