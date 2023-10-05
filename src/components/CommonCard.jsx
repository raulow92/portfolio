import { motion } from "framer-motion";

const CommonCard = ({ customeClassName, url, titulo, icon: IconComponent }) => {

    const defaultClassName = "flex flex-col relative justify-center items-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 text-center overflow-hidden z-10"

    return (
    <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href={ url }
        target="_blank"
        rel="noopener noreferrer"
        className={`${defaultClassName} ${customeClassName}`}
    >
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 -z-10"></div>
        <IconComponent className="text-4xl lg:text-6xl 2xl:text-7xl mb-3" />
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5 2xl:bottom-8">
            {titulo}
        </p>
    </motion.a>
    )
}

export default CommonCard;