'use client'

import { Link, Element } from 'react-scroll';
import Education from "../Education/Education";
import Project from "../Projects/Project";
import { useState } from 'react';
import classNames from 'classnames';
import Share from '../\bShare/Share';

export default function Section() {

    const [activeLink, setActiveLink] = useState("");

    return (
        <section className="relative flex flex-col md:flex-row min-h-screen" aria-label="메인 콘텐츠 섹션">
            <nav className="sticky top-0 md:h-screen h-auto md:flex hidden flex-col items-center md:w-1/5 w-full py-24 bg-white">
                <div className="flex flex-col items-center gap-7">
                    <Link
                        to="skillEducation"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onSetActive={() => setActiveLink('skillEducation')}
                        role="link"
                        aria-current={activeLink === 'skillEducation' ? 'page' : undefined}
                        aria-label="사용 기술 및 교육 섹션으로 이동"
                    >
                        <h2 className={classNames(
                                "cursor-pointer text-xl font-semibold hover:text-gray-400 transition-colors duration-300 ease-in-out",
                                {'text-yellow-500' : activeLink === 'skillEducation'}
                            )}
                        >
                            Skills & Education
                        </h2>
                    </Link>
                    <Link
                        to="share"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onSetActive={() => setActiveLink('share')}
                        role="link"
                        aria-current={activeLink === 'share' ? 'page' : undefined}
                        aria-label="공유 섹션으로 이동"
                    >
                        <h2 className={classNames(
                                "cursor-pointer text-xl font-semibold hover:text-gray-400 transition-colors duration-300 ease-in-out",
                                {'text-yellow-500' : activeLink === 'share'}
                            )}
                        >
                            Share
                        </h2>
                    </Link>
                    <Link
                        to="project"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onSetActive={() => setActiveLink('project')}
                        role="link"
                        aria-current={activeLink === 'project' ? 'page' : undefined}
                        aria-label="프로젝트 섹션으로 이동"
                    >
                        <h2 className={classNames(
                                "cursor-pointer text-xl font-semibold hover:text-gray-400 transition-colors duration-300 ease-in-out",
                                {'text-yellow-500' : activeLink === 'project'}
                            )}
                        >
                            Project
                        </h2>
                    </Link>
                </div>
            </nav>
            <main className="md:w-4/5 w-full flex flex-col container mx-auto px-10 py-20">
                <Element name="skillEducation" aria-label="사용 기술 및 교육 섹션">
                    <Education />
                </Element>
                <Element name="share" aria-label="공유 섹션">
                    <Share />
                </Element>
                <Element name="project" aria-label="프로젝트 섹션">
                    <Project />
                </Element>
            </main>
        </section>
    );
}
