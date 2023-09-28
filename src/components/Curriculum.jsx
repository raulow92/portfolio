import { HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

const Curriculum = () => (
    <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://drive.google.com/file/d/1aU_r1Re6avzh7pUxHB39tNSzC4vFuJpk/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-1 items-center rounded-[2rem] bg-[#ececec]  dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out text-neutral-600 dark:text-neutral-300 text-center aspect-square"
    >
        <HiOutlineDocumentText className="text-4xl lg:text-6xl 2xl:text-7xl mb-3" />
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5 2xl:bottom-8">
            CV
        </p>
    </motion.a>
);

export default Curriculum;
