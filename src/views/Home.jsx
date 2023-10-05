import Skills from "../components/Skills";
import Toggler from "../components/Toggler";
import Ingles from "../components/Ingles";
import Nombre from "../components/Nombre";
import FullStack from "../components/FullStack";
import ProyectosCard from "../components/ProyectosCard";
import CommonCard from "../components/CommonCard";
import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { TbMapPin } from "react-icons/tb";

const Home = () => {

    return (
        <motion.main
            initial={{ x: "100vw", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25, type: "spring" }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container"
        >
            <CommonCard
                customeClassName="order-1 aspect-square"
                titulo="CV"
                icon={HiOutlineDocumentText}
                url="https://drive.google.com/file/d/1aU_r1Re6avzh7pUxHB39tNSzC4vFuJpk/view?usp=sharing"
            />
            <CommonCard
                customeClassName="order-2 md:order-3 aspect-square"
                titulo="LinkedIn"
                icon={BiLogoLinkedin}
                url="https://www.linkedin.com/in/raulow/"
            />
            <Toggler />
            <CommonCard
                customeClassName="order-4 md:order-2 aspect-square"
                titulo="Mail"
                icon={HiOutlineMail}
                url="mailto:raulou92@gmail.com"
            />
            <CommonCard
                customeClassName="order-5 md:order-3 aspect-square"
                titulo="GitHub"
                icon={SiGithub}
                url="https://github.com/raulow92"
            />
            <CommonCard
                customeClassName="order-6 aspect-square"
                titulo="Chile"
                icon={TbMapPin}
                url="https://maps.app.goo.gl/kstjLtETwSQP3pRE7"
            />
            <Nombre />
            <Skills />
            <ProyectosCard />
            <Ingles />
            <FullStack />
        </motion.main>
    );
};

export default Home;
