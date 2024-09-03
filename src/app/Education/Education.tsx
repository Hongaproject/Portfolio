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
            <main className="mt-20 pb-20">
                <span className="text-gray-500 text-2xl">Education</span>
                <h2 className="mt-6 text-4xl font-bold">ESTsoft 프론트엔드 개발자 부트캠프 오르미 1기</h2>
                <span className="text-xl">2024/06/03 ~ 2024/10/21 <strong>(현재 참여 중)</strong></span>
                <div className="mt-4">
                    <h3 className="text-xl font-bold">기술스택</h3>
                    <span>HTML, CSS, JavaScript, React, Redux, TypeScript, GitHub, Firebase ,Figma</span>
                </div>
                <div className="mt-4">
                    <h3 className="text-2xl font-bold">현재 상황 (2024/09/03) 기준</h3>
                    <span className="text-xl">
                        현재 프론트엔드 개발자 부트캠프에 참여하고 있습니다. 아래 내용은 부트캠프에서 배웠던 내용을 정리했습니다.<br /> <br />
                        HTML : 웹 표준과 웹 접근성 준수, SEO 기법 이해, 시멘틱 마크업을 통한 구조적이고 의미 있는 HTML 문서 작성 <br />
                        CSS : 스타일링과 애니메이션 효과 구현 <br />
                        JavaScript : 기본 문법부터 ES6 이상의 최신 문법 활용, 비동기 프로그래밍과 API 연동 <br />
                        GitHub : 브랜치 전략 및 Pull Request 활용 <br />
                        React: 기본 개념 및 리액트 훅 사용 법, 상태 관리 방법 습득 <br /> <br />

                        부트캠프 수강생들과 수업에 관한 내용을 중심으로 스터디를 진행하고 있습니다. <br />
                        이를 통해 학습한 내용을 복습하고 지식을 쌓으며, 소통하는 방법도 익히고 있습니다.
                    </span>
                </div>
            </main>
        </section>
    );
}
