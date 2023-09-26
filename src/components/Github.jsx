import { SiGithub } from "react-icons/si";

const Github = () => (
    <a
        href="https://github.com/raulow92"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-5 md:order-3 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 aspect-square"
    >
        <SiGithub className="text-4xl lg:text-6xl mb-3"/>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5">GitHub</p>
    </a>
);

export default Github;
