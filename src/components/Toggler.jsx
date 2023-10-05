import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Context from "../Context";

const Toggler = () => {
    const {theme, setTheme} = useContext(Context);

    useEffect(() => {
        const toggler = document.querySelector(".toggle-switch");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            toggler.classList.remove("active");
        } else {
            document.documentElement.classList.remove("dark");
            toggler.classList.add("active");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex justify-center items-center order-3 md:order-5 rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-slate-900 dark:text-white hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out aspect-square relative overflow-hidden z-10"
            onClick={handleThemeSwitch}
        >
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 -z-10"></div>
            <span className="toggle-switch lg:scale-125">
                <span className="toggle-knob"></span>
            </span>
        </motion.button>
    );
};
export default Toggler;
