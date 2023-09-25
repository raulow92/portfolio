import { Button, Tooltip } from "flowbite-react";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiDjango,
    SiNextdotjs,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
    return (
        <div className="grid grid-cols-4 place-content-center place-items-center justify-center gap-3 md:gap-5 order-8 md:order-10 col-span-2 rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-xl md:text-4xl text-slate-900 dark:text-neutral-300 px-8 md:px-10">
            <SiHtml5 className="hover:text-red-600 " />
            <SiCss3 />
            <SiJavascript />
            <SiReact />
            <SiBootstrap />
            <SiTailwindcss />
            <SiNodedotjs />
            <SiNextdotjs />
            <SiExpress />
            <SiPython />
            <BiLogoPostgresql className="text-2xl md:text-5xl" />
            <Tooltip content="Django" style="light" animation="duration-500" className="">
                <SiDjango />
            </Tooltip>
        </div>
    );
};

export default Skills;
