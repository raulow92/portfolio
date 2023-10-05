import { motion } from "framer-motion";

const Ingles = () => (
    <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://www.efset.org/cert/HUcWkb"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-10 md:order-9 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out aspect-square overflow-hidden z-10"
    >
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 -z-10"></div>
        <p className="text-sm lg:text-lg absolute top-3 lg:top-5 2xl:top-8">Inglés</p>
        <p className="font-bold text-4xl lg:text-7xl 2xl:text-8xl my-1 lg:my-2">C1</p>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5 2xl:bottom-8">Avanzado</p>
    </motion.a>
);

export default Ingles;