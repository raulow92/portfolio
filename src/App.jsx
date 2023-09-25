import { useEffect, useState } from "react";
import "./App.css";
import Linkedin from "./components/linkedin";
import Github from "./components/Github";
import Mail from "./components/Mail";
import Skills from "./components/Skills";

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        const toggler = document.querySelector(".toggle-switch");
        toggler.classList.toggle("active");
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <main className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container">
            <a
                href="https://drive.google.com/file/d/1aU_r1Re6avzh7pUxHB39tNSzC4vFuJpk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center order-1 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square"
            >
                <p className="font-extrabold text-lg md:text-4xl">CV</p>
            </a>
            <a
                href="https://www.linkedin.com/in/raulow/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center order-2 md:order-3 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 dark:text-white aspect-square"
            >
                <Linkedin />
            </a>
            <button
                className="flex justify-center items-center order-3 md:order-5 rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-slate-900 dark:text-white aspect-square"
                onClick={handleThemeSwitch}
            >
                <span className="toggle-switch md:scale-125">
                    <span className="toggle-knob"></span>
                </span>
            </button>
            <a
                href="mailto:raulou92@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center order-4 md:order-2 items-center rounded-[2rem] font-medium bg-sky-300 dark:bg-neutral-900 text-lg md:text-2xl text-center aspect-square"
            >
                <Mail />
            </a>
            <a
                href="https://github.com/raulow92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center order-5 md:order-3 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square"
            >
                <Github />
            </a>
            <div className="flex justify-center order-6 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square">
                <p className="">Ubicación</p>
            </div>
            <div className="flex flex-col order-7 justify-center col-span-3 bg-[#ececec] dark:bg-neutral-900 rounded-[2rem] p-8 md:p-0 text-center">
                <h1 className="font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-b dark:from-purple-300 dark:to-purple-800 from-purple-800 to-blue-500">
                    Raúl Low
                </h1>
                <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200">
                    Full Stack Developer & Industrial Designer
                </p>
            </div>
            <Skills />
            <div className="flex justify-center order-9 md:order-8 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square">
                <p className="">Proyectos</p>
            </div>
            <div className="flex justify-center order-10 md:order-9 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square">
                <p className="">Inglés</p>
            </div>
            <div className="flex justify-center order-11 col-span-2 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white">
                <p className="">Certificado DL</p>
            </div>
        </main>
    );
}

export default App;
