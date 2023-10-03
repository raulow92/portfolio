import { motion } from "framer-motion";
import PokeImg from "../assets/images/poke.png";

const PokeCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex place-items-center group relative rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 order-9 md:order-10 col-span-2 overflow-hidden z-10"
        >
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 pointer-events-none -z-10"></div>

            <div className="ml-6 md:ml-10 2xl:ml-14 z-50">
                <h2 className="dark:text-shadow text-2xl md:text-4xl 2xl:text-5xl font-medium text-gray-800 dark:text-gray-200 select-none z-50">
                    Poke SPA
                </h2>
                <p className="text-sm md:text-lg 2xl:text-xl group-hover:hidden z-50 mt-1">
                    React + PokeAPI 
                </p>
                <div className="mt-1 md:mt-2 text-xs md:text-sm 2xl:text-base font-semibold hidden group-hover:flex transition-all ease-in-out duration-300">
                    <a
                        href="https://poke-spa-rlow.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-100 dark:bg-amber-400 dark:text-gray-800 bg-neutral-800 rounded-full px-2 md:px-3 py-1 mr-2 md:mr-3 hover:opacity-90"
                    >
                        Demo
                    </a>
                    <a
                        href="https://github.com/raulow92/SPA-Pokemon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-100 dark:bg-amber-400 dark:text-gray-800 bg-neutral-800 rounded-full px-2 md:px-3 py-1 hover:opacity-90"
                    >
                        Código
                    </a>
                </div>
            </div>

            <div className="rounded-2xl w-36 lg:w-60 2xl:w-[310px] overflow-hidden -rotate-12 absolute top-2 -right-12 group-hover:scale-[115%] group-hover:-rotate-6 transition-all duration-300 ease-in-out -z-20 drop-shadow-xl">
                <img src={PokeImg} alt="imagen sipo" />
            </div>
        </motion.div>
    );
};

export default PokeCard;
