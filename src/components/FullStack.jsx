import DesafioLatam from "./DesafioLatam";

const FullStack = () => {
    return (
    <a
        href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/25408/aprobacion-final-proyecto-final-g28-12771.png"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center px-6 lg:px-12 relative order-11 col-span-2 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300"
    >   
        <DesafioLatam className="h-8 lg:h-14 fill-neutral-600 dark:fill-neutral-300 mr-3 lg:mr-6"/>
        <div className="text-left">
            <p className="text-base lg:text-2xl font-semibold whitespace-nowrap">Full Stack JavaScript</p>
            <p className="text-sm lg:text-lg">Desafio Latam 2023</p>
        </div>
    </a>

    );
};

export default FullStack;
