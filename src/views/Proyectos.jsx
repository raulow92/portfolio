import { motion } from "framer-motion";
import Toggler from "../components/Toggler";
import CommonCard from "../components/CommonCard";
import { SiGithub } from "react-icons/si";
import ProyectosTitulo from "../components/ProyectosTitulo";
import Flecha from "../components/Flecha";
import SipoCard from "../components/SipoCard";

const Proyectos = () => {

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            exit={{ x: "-100vw", opacity: 1 }}
            className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container"
        >
            <Flecha />
            <CommonCard
                customeClassName="order-2 md:order-6 aspect-square"
                titulo="GitHub"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <ProyectosTitulo />
            <SipoCard />

            <CommonCard
                customeClassName="order-8 aspect-square"
                titulo="Mamma Mia"
                icon={SiGithub}
                url=""
            />
            <CommonCard
                customeClassName="order-9 md:order-10 col-span-2"
                titulo="Pokedex"
                icon={SiGithub}
                url=""
            />
            <CommonCard
                customeClassName="order-10 md:order-11 col-span-2"
                titulo="Music App"
                icon={SiGithub}
                url=""
            />
            <Toggler />
            <CommonCard
                customeClassName="order-11 md:order-9 aspect-square"
                titulo="Game Boy"
                icon={SiGithub}
                url=""
            />
        </motion.main>
    );
};

export default Proyectos;
