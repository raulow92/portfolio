import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Toggler from "../components/Toggler";
import CommonCard from "../components/CommonCard";
import Nombre from "../components/Nombre";

const Proyectos = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        exit={{ x: "-100vw", opacity: 1}}
            className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container">
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
                customeClassName=""
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName=""
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName=""
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <Nombre />
            <CommonCard
                customeClassName=""
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName="order-7"
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName="order-7"
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName="order-7"
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName="order-7"
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName="order-7"
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <CommonCard
                customeClassName="order-7"
                titulo="LinkedIn"
                icon={FaArrowLeft}
                url="https://www.linkedin.com/in/raulow/"
            />
            <Toggler />
        </motion.main>
    );
};

export default Proyectos;
