import { Tooltip } from "flowbite-react";

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
        <div className="grid grid-cols-4 place-content-center place-items-center justify-center gap-2 md:gap-4 order-8 md:order-10 col-span-2 rounded-[2rem] font-medium bg-[#ececec] dark:bg-neutral-900 text-xl lg:text-4xl text-neutral-600 dark:text-neutral-300 px-6 md:px-8">
            <Tooltip content="HTML" style="light" animation="duration-500" className="rounded-[2rem]">
                <SiHtml5 className="mt-1"/>
            </Tooltip>
            <Tooltip content="CSS" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiCss3 className="mt-1"/>
            </Tooltip>
            <Tooltip content="JavaScript" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiJavascript className="mt-1"/>
            </Tooltip>
            <Tooltip content="React" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiReact className="mt-1"/>
            </Tooltip>
            <Tooltip content="Bootstrap" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiBootstrap className="mt-1"/>
            </Tooltip>
            <Tooltip content="Tailwind" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiTailwindcss className="mt-1"/>
            </Tooltip>
            <Tooltip content="Node.js" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiNodedotjs className="mt-1"/>
            </Tooltip>
            <Tooltip content="Next.js" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiNextdotjs className="mt-1"/>
            </Tooltip>
            <Tooltip content="Express.js" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiExpress className="mt-1"/>
            </Tooltip>
            <Tooltip content="Python" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiPython className="mt-1"/>
            </Tooltip>
            <Tooltip content="PostgreSQL" style="light" animation="duration-500" className="rounded-[2rem] ">
                <BiLogoPostgresql className="text-2xl lg:text-5xl mt-1"/>
            </Tooltip>
            <Tooltip content="Django" style="light" animation="duration-500" className="rounded-[2rem] ">
                <SiDjango className="mt-1"/>
            </Tooltip>
        </div>
    );
};

export default Skills;
