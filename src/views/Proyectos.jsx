import { motion } from "framer-motion";
import Toggler from "../components/Toggler";
import CommonCard from "../components/CommonCard";
import { SiGithub } from "react-icons/si";
import ProyectosTitulo from "../components/ProyectosTitulo";
import Flecha from "../components/Flecha";
import SipoCard from "../components/SipoCard";
import PokeCard from "../components/PokeCard";
import MusicCard from "../components/MusicCard";
import GameBoyCard from "../components/GameBoyCard";
import MammaMiaCard from "../components/MammaMiaCard";

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
            <MammaMiaCard />
            <PokeCard />
            <MusicCard />
            <Toggler />
            <GameBoyCard />
        </motion.main>
    );
};

export default Proyectos;
