
export default function Education() {

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next JS', 'TypeScript', 'Github', 'Firebase', 'Pigma', 'Node JS', 'MySQL'];

    return(
        <section>
            <div className="border-b-8 pb-5 border-yellow-400">
                <h2 className="text-6xl font-bold">Skill & Education</h2>
            </div>
            <main className="pt-10">
                <div className="">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {skills.map((item, index) => (
                            <div key={index} className="flex-none px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg">
                                {item}
                            </div>
                        ))}
                        {/* Duplicate list to ensure smooth animation */}
                        {skills.map((item, index) => (
                            <div key={index + skills.length} className="flex-none px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
}