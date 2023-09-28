import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";

const Nombre = () => {
    const [isExploding, setIsExploding] = useState(false);
    let counter = 0
    
    const handleClick = (e) => {
        counter++
        if (counter == 5) {
            setIsExploding(true)
            e.currentTarget.classList.add('from-[#ffd24e]')
            e.currentTarget.classList.add('to-[#b96205]')
            e.currentTarget.classList.add('dark:from-[#ffd24e]')
            e.currentTarget.classList.add('dark:to-[#b96205]')
            counter = 0
        }
    };

    return (
        <div className="flex flex-col order-7 justify-center col-span-3 bg-[#ececec] dark:bg-neutral-900 rounded-[2rem] p-8 md:p-0 text-center">
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
                className="font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-b dark:from-purple-300 dark:to-purple-800 from-purple-800 to-blue-500 whitespace-nowrap select-none"
            >
                Raúl Low
            </h1>
            <p className="font-medium text-sm lg:text-lg text-gray-800 dark:text-gray-200 select-none">
                Full Stack Developer & Industrial Designer
            </p>
        </div>
    );
};

export default Nombre;
