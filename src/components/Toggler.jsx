import { useState, useEffect } from "react";

const Toggler = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

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
        <button
            className="flex justify-center items-center order-3 md:order-5 rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-slate-900 dark:text-white aspect-square"
            onClick={handleThemeSwitch}
        >
            <span className="toggle-switch lg:scale-125">
                <span className="toggle-knob"></span>
            </span>
        </button>
    );
};
export default Toggler;
