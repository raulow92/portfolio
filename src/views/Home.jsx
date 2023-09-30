import Linkedin from "../components/Linkedin";
import Github from "../components/Github";
import Mail from "../components/Mail";
import Skills from "../components/Skills";
import Curriculum from "../components/Curriculum";
import Toggler from "../components/Toggler";
import Ingles from "../components/Ingles";
import Nombre from "../components/Nombre";
import Map from "../components/Map";
import FullStack from "../components/FullStack";
import ProyectosCard from "../components/ProyectosCard";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.main
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 0.25, type: "spring" }}
            exit={{ x: -2000 }}
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
            <ProyectosCard />
            <Ingles />
            <FullStack />
        </motion.main>
    );
};

export default Home;
