"use client";

export default function Education() {
    
    const skills: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Next JS', 'TypeScript', 'Github', 'Firebase', 'Figma', 'Node JS', 'MySQL'];

    return (
        <section className="min-h-screen">
            <div className="border-b-8 pb-5 border-yellow-400">
                <h1 className="text-6xl font-bold">Skills & Education</h1>
            </div>
            <main className="mt-16 overflow-hidden w-3/5 m-auto rounded-lg">
                <h2 className="text-center py-5 text-2xl font-bold">Skills</h2>
                <div className="flex whitespace-nowrap animate-marquee">
                    <div className="flex-none flex flex-row ">
                        {[...skills, ...skills].map((item, index) => (
                            <div key={index} className="flex-none px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    @tailwind base;
                    @tailwind components;
                    @tailwind utilities;

                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-marquee {
                        animation: marquee 20s linear infinite;
                        white-space: nowrap;
                    }

                `}</style>
            </main>
            <main className="mt-20">
                <span className="text-gray-500 text-2xl">Education</span>
                <h2 className="mt-6 text-4xl font-bold">ESTsoft 프론트엔드 개발자 부트캠프 오르미 1기</h2>
                <span className="text-xl">2024/06/03 ~ 2024/10/21</span>
                <div className="mt-4">
                    <h3 className="text-xl font-bold">기술스택</h3>
                    <div>HTML, CSS, JavaScript, React, Redux, TypeScript, GitHub, Firebase ,Figma</div>
                </div>
            </main>
        </section>
    );
}
