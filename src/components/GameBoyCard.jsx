import { motion } from "framer-motion";
import GameBoy from "./GameBoy";

const GameBoyCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group flex flex-col relative justify-center order-11 md:order-9 items-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 text-center aspect-square z-10 overflow-hidden"
        >
            <div className="mt-1 md:mt-2 text-xs md:text-sm 2xl:text-base font-semibold hidden group-hover:flex transition-all ease-in-out duration-300 z-40 absolute">
                <a
                    href="https://css-gameboy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-100 dark:bg-amber-400 dark:text-gray-800 bg-neutral-800 rounded-full px-2 md:px-3 py-1 mr-1 md:mr-3 hover:opacity-90"
                >
                    Demo
                </a>
                <a
                    href="https://github.com/raulow92/css-gameboy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-100 dark:bg-amber-400 dark:text-gray-800 bg-neutral-800 rounded-full px-2 md:px-3 py-1 hover:opacity-90"
                >
                    Código
                </a>
            </div>

            <GameBoy className="scale-[0.14] md:scale-[0.25] group-hover:-rotate-12 group-hover:scale-[0.23] md:group-hover:scale-[0.45] transition-all duration-300 ease-in-out z-10" />

            <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 -z-10 left-0"></div>

            <div className="hidden group-hover:flex absolute w-full h-full bg-black opacity-50 transition-all duration-300 ease-in-out z-20"></div>
        </motion.div>
    );
};

export default GameBoyCard;
