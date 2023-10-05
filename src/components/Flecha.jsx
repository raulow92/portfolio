import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Flecha = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col relative justify-center order-1 items-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 text-center aspect-square cursor-pointer z-10 overflow-hidden"
        >
            <FaArrowLeft className="text-3xl lg:text-5xl 2xl:text-6xl" />
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 -z-10 left-0"></div>
        </motion.a>
    );
};

export default Flecha;