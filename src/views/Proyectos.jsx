import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Toggler from "../components/Toggler";
import CommonCard from "../components/CommonCard";
import { SiGithub } from "react-icons/si";
import sipoImg from "../images/sipo.png";

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
                <FaArrowLeft className="text-3xl lg:text-5xl 2xl:text-7xl" />
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
                <h1 className="font-bold tracking-tight text-transparent text-7xl lg:text-8xl 2xl:text-9xl bg-clip-text bg-gradient-to-b dark:from-purple-300 dark:to-purple-800 from-purple-800 to-blue-500 whitespace-nowrap select-none">
                    Proyectos
                </h1>
            </motion.div>

            <motion.a
                // whileHover={{ scale: 1.05 }}
                // transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://sipo.onrender.com/tienda"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col relative justify-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 order-7 col-span-3 overflow-hidden z-10 h-32 md:h-auto"
            >

                <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 pointer-events-none -z-10"></div>
                
                <div className="m-12 z-20"> 
                    <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200 select-none">
                        Sipo Marketplace
                    </h2>
                    <p>blabla</p>

                </div>


                <div className="rounded-2xl w-60 lg:w-80 overflow-hidden -rotate-12 absolute top-2 -right-12 group-hover:scale-[115%] group-hover:-rotate-6 transition-all duration-300 ease-in-out">
                    <img src={sipoImg} alt="imagen sipo" className="" />
                </div>
            </motion.a>

            <CommonCard
                customeClassName="order-8 aspect-square"
                titulo="Mamma Mia"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <CommonCard
                customeClassName="order-9 md:order-10 col-span-2"
                titulo="Pokedex"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <CommonCard
                customeClassName="order-10 md:order-11 col-span-2"
                titulo="Music App"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <Toggler />
            <CommonCard
                customeClassName="order-11 md:order-9 aspect-square"
                titulo="Game Boy"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
        </motion.main>
    );
};

export default Proyectos;
