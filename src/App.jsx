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

function App() {
    return (
        <main className="grid grid-cols-3 mx-auto gap-3 sm:gap-4 xl:px-20 md:grid-cols-5 md:gap-4 container">
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
        </main>
    );
}

export default App;
