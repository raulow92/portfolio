import Context from "./Context";
import Router from "./router/router";
import { useState, useEffect } from "react";
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

    return (
        <Context.Provider value={{theme, setTheme}}>
            <Router />
        </Context.Provider>
    );
}

export default App;
