import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Proyectos = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <main className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container">
            <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col relative justify-center order-1 items-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 text-center aspect-square"
            >
                <FaArrowLeft className="text-4xl lg:text-6xl 2xl:text-7xl mb-3" />
                <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5 2xl:bottom-8">
                    CV
                </p>
            </motion.a>
        </main>
    );
};

export default Proyectos;
