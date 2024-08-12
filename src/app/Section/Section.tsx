import Education from "../Education/Education";

export default function Section() {
    return(
        <section className="flex flex-col md:flex-row min-h-screen">
            <nav className="flex flex-col items-center md:w-1/5 w-full py-24">
                <div className="flex flex-col items-center gap-7">
                    <h2 className=" text-xl font-semibold">
                        Skill & Education
                    </h2>
                    <h2 className=" text-xl font-semibold">
                        Project
                    </h2>
                </div>
            </nav>
            <main className="md:w-4/5 w-full flex flex-col container mx-auto px-10 py-20">
                <Education />
            </main>
        </section>
    );
}