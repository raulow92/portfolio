import { BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";

const Linkedin = () => (
    <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://www.linkedin.com/in/raulow/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-2 md:order-3 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out aspect-square"
    >
        <BiLogoLinkedin className="text-4xl lg:text-6xl 2xl:text-7xl mb-3"/>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5 2xl:bottom-8">LinkedIn</p>
    </motion.a>
);

export default Linkedin;
