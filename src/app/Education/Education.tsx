"use client";

import Link from "next/link";

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
                    <h3 className="text-2xl font-bold">현재 상황 (2024/10/15) 기준</h3>
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
            <main className="lg:max-w-3xl lg:w-full md:mb-0 pb-28">
                <span className="text-gray-500 text-2xl">Team Project</span>
                <h2 className="mt-6 text-4xl font-bold mb-4">레시피 연구소</h2>
                <span className="block text-xl mb-5">2024/09/23 ~ (Front-End 4인)</span>
                <span className="block text-xl mb-5">
                    <strong>요리 레시피를 알려주는 사이트</strong>입니다. 팀원들끼리 서로 아이디어를 모아서 결정했습니다. <br /><br />
                    Pigma를 사용해서 디자인 틀을 제작했으며, 작업 진행도와 일정 관리를 위해 Jira를 사용하고 있습니다. 개발은 React와 TypeScript를 사용해서 제작했습니다. <br /><br />

                    제 역할은 회원가입, 프로필 페이지 제작을 담당했습니다. Firebase를 사용해서 회원가입 구현을 제작했으며, 이메일과 닉네임 중복체크 기능을 추가했습니다. <br />
                    프로필 페이지는 Firestore를 사용하여 사용자 정보를 가져와서 제작했고, 회원 정보 수정과 게시글, 좋아요한 게시물들을 확인할 수 있는 기능을 구현했습니다.<br /><br />

                    이번 프로젝트를 진행하면서 소통의 중요성을 느꼈습니다. 팀원들과 의견을 교환하고 서로의 아이디어를 조율하면서 다양한 문제를 해결할 수 있었습니다. <br />
                    특히, 기술적인 문제나 의견 충돌이 있을 때 적극적으로 소통하며 해결하는 과정에서 소통의 중요성을 알게 되었습니다.
                </span>
                <div className="mb-5">
                    <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/link.png" alt="링크 이미지" className="mr-2"/>관련링크들</h2>
                    <h3 className="text-xl mb-2">사이트 주소 : <Link href='https://recipeproject-theta.vercel.app/' target="_blank" className="text-sky-500 hover:underline">레시피 연구소</Link></h3>
                    <h3 className="text-xl mb-2">깃허브 주소 : <Link href='https://github.com/Hongaproject/recipe_project' target="_blank" className="text-sky-500 hover:underline">GitHub</Link></h3>
                </div>
                <div>
                    
                </div>
            </main>
        </section>
    );
}
