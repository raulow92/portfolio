import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Proyectos = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/proyectos");

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleClick}
            className="cursor-pointer flex flex-col justify-center order-9 md:order-8 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-center text-neutral-600 dark:text-neutral-300 aspect-square"
        >
            <p className="lg:text-2xl font-medium">Proyectos</p>
            <p className="text-sm lg:text-md font-light">pronto</p>
        </motion.div>
    );
};

export default Proyectos;
