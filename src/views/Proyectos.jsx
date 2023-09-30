import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Toggler from "../components/Toggler";
import CommonCard from "../components/CommonCard";
import { SiGithub } from "react-icons/si";

const Proyectos = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            exit={{ x: "-100vw", opacity: 1 }}
            className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container"
        >
            <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col relative justify-center order-1 items-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 text-center aspect-square"
            >
                <FaArrowLeft className="text-4xl lg:text-6xl 2xl:text-7xl" />
            </motion.a>
            <CommonCard
                customeClassName="order-2 md:order-6 aspect-square"
                titulo="GitHub"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex flex-col order-4 justify-center col-span-3 bg-[#ececec] dark:bg-neutral-900 rounded-[2rem] p-8 md:p-0 text-center hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out cursor-pointer"
            >
                <div className="absolute w-full h-full z-20 left-0 flex justify-center items-center pointer-events-none"></div>
                <h1 className="font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl 2xl:text-9xl bg-clip-text bg-gradient-to-b dark:from-purple-300 dark:to-purple-800 from-purple-800 to-blue-500 whitespace-nowrap select-none">
                    Proyectos
                </h1>
                <p className="font-medium text-sm lg:text-lg 2xl:text-xl text-gray-800 dark:text-gray-200 select-none">
                    Full Stack Developer & Industrial Designer
                </p>
            </motion.div>
            <CommonCard
                customeClassName="order-7 col-span-3"
                titulo="GitHub"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <CommonCard
                customeClassName="order-7 col-span-3"
                titulo="GitHub"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <CommonCard
                customeClassName="order-7 col-span-3"
                titulo="GitHub"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <Toggler />
        </motion.main>
    );
};

export default Proyectos;
