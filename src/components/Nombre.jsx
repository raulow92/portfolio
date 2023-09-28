import { useState } from "react";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";

const Nombre = () => {
    const [isExploding, setIsExploding] = useState(false);
    let counter = 0
    
    const handleClick = (e) => {
        counter++
        if (counter == 5) {
            setIsExploding(true)
            e.currentTarget.classList.remove('from-purple-800')
            e.currentTarget.classList.remove('to-blue-500')
            e.currentTarget.classList.remove('dark:from-purple-300')
            e.currentTarget.classList.remove('dark:to-purple-800')
            e.currentTarget.classList.add('from-[#ffd24e]')
            e.currentTarget.classList.add('to-[#b96205]')
            e.currentTarget.classList.add('dark:from-[#ffd24e]')
            e.currentTarget.classList.add('dark:to-[#b96205]')
            counter = 0
        }
    };

    return (
        <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex flex-col order-7 justify-center col-span-3 bg-[#ececec] dark:bg-neutral-900 rounded-[2rem] p-8 md:p-0 text-center hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-300 ease-in-out cursor-pointer">
            <div className="absolute w-full h-full z-20 left-0 flex justify-center items-center pointer-events-none">
                {isExploding && (
                    <ConfettiExplosion
                        className="absolute left-auto top-auto"
                        width={1600}
                        force={0.8}
                        onComplete={() => setIsExploding(false)}
                    />
                )}
            </div>
            <h1
                onClick={handleClick}
                className="font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl 2xl:text-9xl bg-clip-text bg-gradient-to-b dark:from-purple-300 dark:to-purple-800 from-purple-800 to-blue-500 whitespace-nowrap select-none"
            >
                Raúl Low
            </h1>
            <p className="font-medium text-sm lg:text-lg 2xl:text-xl text-gray-800 dark:text-gray-200 select-none">
                Full Stack Developer & Industrial Designer
            </p>
        </motion.div>
    );
};

export default Nombre;
