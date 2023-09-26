import { HiOutlineMail } from "react-icons/hi"; 

const Mail = () => (
    <a
        href="mailto:raulou92@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-4 md:order-2 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 aspect-square"
    >
        <HiOutlineMail className="text-4xl lg:text-6xl mb-3"/>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5">Mail</p>
    </a>
);

export default Mail;
