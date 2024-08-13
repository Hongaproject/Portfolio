'use client'

import { Link, Element } from 'react-scroll';
import Education from "../Education/Education";
import Project from "../Projects/Project";

export default function Section() {
    return (
        <section className="relative flex flex-col md:flex-row min-h-screen">
            <nav className="sticky top-0 md:h-screen h-auto md:flex hidden flex-col items-center md:w-1/5 w-full py-24 bg-white">
                <div className="flex flex-col items-center gap-7">
                    <Link
                        to="skillEducation"
                        smooth={true}
                        duration={500}
                    >
                        <h2 className="cursor-pointer text-xl font-semibold hover:text-gray-400 transition-colors duration-300 ease-in-out">Skills & Education</h2>
                    </Link>
                    <Link
                        to="project"
                        smooth={true}
                        duration={500}
                    >
                        <h2 className="cursor-pointer text-xl font-semibold hover:text-gray-400 transition-colors duration-300 ease-in-out">Project</h2>
                    </Link>
                </div>
            </nav>
            <main className="md:w-4/5 w-full flex flex-col container mx-auto px-10 py-20">
                <Element name="skillEducation">
                    <Education />
                </Element>
                <Element name="project">
                    <Project />
                </Element>
            </main>
        </section>
    );
}
