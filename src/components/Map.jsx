import { TbMapPin } from "react-icons/tb"; 

const Map = () => {
    return (
    <a
        href="https://maps.app.goo.gl/sqpKZjLscjeomaNz8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-6 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 aspect-square"
    >   
        <TbMapPin className="text-4xl lg:text-6xl mb-3"/>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5">Chile</p>
    </a>

    );
};

export default Map;
