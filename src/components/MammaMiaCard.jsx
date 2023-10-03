import { motion } from "framer-motion";
import MammaImg from "../assets/images/mammamia.png";

const GameBoyCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group flex flex-col relative justify-center order-8 md:order-8 items-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 text-center aspect-square z-10 overflow-hidden"
        >
            <div className="mt-1 md:mt-2 text-xs md:text-sm 2xl:text-base font-semibold hidden group-hover:flex transition-all ease-in-out duration-300 z-40 absolute">
                <a
                    href="https://mamma-mia-rlow.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-100 dark:bg-amber-400 dark:text-gray-800 bg-neutral-800 rounded-full px-2 md:px-3 py-1 mr-1 md:mr-3 hover:opacity-90"
                >
                    Demo
                </a>
                <a
                    href="https://github.com/raulow92/mamma-mia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-100 dark:bg-amber-400 dark:text-gray-800 bg-neutral-800 rounded-full px-2 md:px-3 py-1 hover:opacity-90"
                >
                    Código
                </a>
            </div>

            <img src={MammaImg} alt="imagen sipo" className="scale-125 group-hover:-rotate-12 group-hover:scale-[2.25] transition-all duration-300 ease-in-out z-10"/>

            <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 -z-10 left-0"></div>

            <div className="hidden group-hover:flex absolute w-full h-full bg-black opacity-50 transition-all duration-300 ease-in-out z-20"></div>
        </motion.div>
    );
};

export default GameBoyCard;
