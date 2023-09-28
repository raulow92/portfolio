import "./App.css";
import Linkedin from "./components/Linkedin";
import Github from "./components/Github";
import Mail from "./components/Mail";
import Skills from "./components/Skills";
import Curriculum from "./components/Curriculum";
import Toggler from "./components/Toggler";
import Ingles from "./components/Ingles";
import Nombre from "./components/Nombre";
import Map from "./components/Map";
import FullStack from "./components/FullStack";
import Proyectos from "./components/Proyectos";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    return (
        <AnimatePresence>
            <motion.main
                initial={{ x: -2000 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, delay: 0.25, type: "spring" }}
                exit={{ x: 2000, opacity: 0 }}
                className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container"
            >
                <Curriculum />
                <Linkedin />
                <Toggler />
                <Mail />
                <Github />
                <Map />
                <Nombre />
                <Skills />
                <Proyectos />
                <Ingles />
                <FullStack />
            </motion.main>
        </AnimatePresence>
    );
}

export default App;
