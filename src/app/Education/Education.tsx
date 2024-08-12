"use client";

export default function Education() {
    
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next JS', 'TypeScript', 'Github', 'Firebase', 'Figma', 'Node JS', 'MySQL'];

    return (
        <section>
            <div className="border-b-8 pb-5 border-yellow-400">
                <h1 className="text-6xl font-bold">Skill & Education</h1>
            </div>
            <main className="mt-20 overflow-hidden w-3/5 m-auto rounded-lg">
                <h2 className="text-center py-5 text-2xl font-bold">Skills</h2>
                <div className="flex whitespace-nowrap animate-marquee">
                    <div className="flex-none flex flex-row ">
                        {skills.map((item, index) => (
                            <div key={index} className="flex-none px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg">
                                {item}
                            </div>
                        ))}
                        {skills.map((item, index) => (
                            <div key={index + skills.length} className="flex-none px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg">
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
        </section>
    );
}
