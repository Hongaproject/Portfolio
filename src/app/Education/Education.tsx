"use client";

export default function Education() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next JS",
    "TypeScript",
    "Github",
    "Firebase",
    "Figma",
    "Node JS",
    "MySQL",
  ];

  return (
    <main
      className="min-h-screen"
      role="main"
      aria-labelledby="skills-education-heading"
    >
      <header className="border-b-8 pb-5 border-yellow-400">
        <h1 id="skills-education-heading" className="text-6xl font-bold">
          Skills & Education
        </h1>
      </header>
      <section
        className="mt-16 overflow-hidden w-3/5 m-auto rounded-lg"
        aria-labelledby="skills-heading"
      >
        <h2 id="skills-heading" className="text-center py-5 text-2xl font-bold">
          Skills
        </h2>
        <article>
          <div className="flex whitespace-nowrap animate-marquee">
            <div className="flex-none flex flex-row ">
              {[...skills, ...skills].map((item, index) => (
                <div
                  key={index}
                  className="flex-none px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
                  role="listitem"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </article>
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
      </section>
      <section className="mt-20 pb-20" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-gray-500 text-2xl">
          Education
        </h2>
        <article>
          <h3 className="mt-6 text-4xl font-bold">
            ESTsoft 프론트엔드 개발자 부트캠프 오르미 1기
          </h3>
          <p className="mt-2 text-xl">2024.06 ~ 2024.10</p>
        </article>
        <article>
          <h3 className="mt-6 text-4xl font-bold">한남대학교</h3>
          <p className="mt-2 text-xl">2017.03 ~ 2023.02 정보통신공학과 졸업</p>
        </article>
        <article>
          <h3 className="mt-6 text-4xl font-bold">육군 병장 만기 전역</h3>
          <p className="mt-2 text-xl">2018.08 ~ 2020.04 유선장비수리병</p>
        </article>
        <article>
          <h3 className="mt-6 text-4xl font-bold">대전 괴정고등학교</h3>
          <p className="mt-2 text-xl">2014.03 ~ 2017.02 자연계 졸업</p>
        </article>
      </section>
    </main>
  );
}
