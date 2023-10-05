const ProyectosTitulo = () => {
    return (
        <div className="flex flex-col order-4 justify-center relative col-span-3 bg-[#ececec] dark:bg-neutral-900 rounded-[2rem] p-8 md:p-0 text-center transition-colors duration-300 ease-in-out z-10 overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-b from-transparent dark:to-black to-neutral-400 dark:opacity-30 opacity-20 -z-10 left-0"></div>
            <h1 className="font-extrabold tracking-tight text-transparent text-5xl lg:text-7xl 2xl:text-8xl bg-clip-text bg-gradient-to-b from-[#ffd24e] to-[#b96205] whitespace-nowrap select-none text-ellipsis mt-3 pb-3">
                Proyectos
            </h1>
        </div>
    );
};

export default ProyectosTitulo;
