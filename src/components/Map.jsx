import { TbMapPin } from "react-icons/tb";
import { motion } from "framer-motion";

const Map = () => {
    return (
    <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://maps.app.goo.gl/kstjLtETwSQP3pRE7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-6 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out aspect-square"
    >   
        <TbMapPin className="text-4xl lg:text-6xl 2xl:text-7xl mb-4"/>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5 xl:bottom-8">Chile</p>
    </motion.a>

    );
};

export default Map;
