import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../views/Home";
import Proyectos from "../views/Proyectos";
import { AnimatePresence } from "framer-motion";

const Router = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<Proyectos />} />
            </Routes>
        </AnimatePresence>
    );
};
export default Router;
