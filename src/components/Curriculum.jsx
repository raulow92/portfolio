import { HiOutlineDocumentText } from "react-icons/hi"; 

const Curriculum = () => (
    <a
        href="https://drive.google.com/file/d/1aU_r1Re6avzh7pUxHB39tNSzC4vFuJpk/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col relative justify-center order-1 items-center rounded-[2rem] bg-[#ececec] dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 aspect-square"
    >
        <HiOutlineDocumentText className="text-4xl lg:text-6xl mb-3"/>
        <p className="text-sm lg:text-lg absolute bottom-3 lg:bottom-5">CV</p>
    </a>
);

export default Curriculum;
