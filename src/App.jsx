import { useEffect, useState } from "react";
import "./App.css";

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
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <main className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container">
            <div className="flex justify-center order-1 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square">
                <p className="">CV</p>
            </div>
            <div className="flex justify-center order-2 md:order-3 items-center rounded-[2rem] font-medium bg-blue-600 dark:bg-blue-950 aspect-square">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-3xl md:text-6xl text-neutral-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
            </div>
            <button
                className="flex justify-center order-3 md:order-5 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square"
                onClick={handleThemeSwitch}
            >
                {theme === "dark" ? "Dark" : "Light"}
            </button>
            <div className="flex justify-center order-4 md:order-2 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square">
                <p className="">Mail</p>
            </div>
            <div className="flex justify-center order-5 md:order-3 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white aspect-square">
                <p className="">Github</p>
            </div>
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

            <div className="flex justify-center order-8 md:order-10 col-span-2 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white">
                <p className="">Skills</p>
            </div>
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
