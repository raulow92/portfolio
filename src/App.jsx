import "./App.css";
import Linkedin from "./components/linkedin";
import Github from "./components/Github";
import Mail from "./components/Mail";
import Skills from "./components/Skills";
import Curriculum from "./components/Curriculum";
import Toggler from "./components/Toggler";
import Ingles from "./components/Ingles";

function App() {
    return (
        <main className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container">
            <Curriculum />
            <Linkedin />
            <Toggler />
            <Mail />
            <Github />
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
            <Ingles />
            <div className="flex justify-center order-11 col-span-2 items-center rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-lg md:text-2xl text-center text-slate-900 dark:text-white">
                <p className="">Certificado DL</p>
            </div>
        </main>
    );
}

export default App;
