"use client";

import Link from "next/link";
import TypeIt from "typeit-react";

export default function About() {
    return(
        <section className="flex flex-col md:flex-row min-h-screen">
            <nav className="flex flex-col items-center justify-between bg-slate-500 md:w-1/5 w-full py-16">
                <div className="flex flex-col items-center gap-7">
                    <Link href='https://github.com/Hongaproject' target="_blank" className="text-4xl font-bold text-white hover:text-yellow-500 transition-colors duration-500 ease-in-out">GitHub</Link>
                    <Link href='https://github.com/Hongaproject' target="_blank" className="text-4xl font-bold text-white hover:text-yellow-500 transition-colors duration-500 ease-in-out">Velog</Link>
                </div>
                <Link href='mailto:tkwlscjq13@naver.com' target="_blank" className="text-lg text-gray-200 mt-7">tkwlscjq13@naver.com</Link>
            </nav>
            <main className=" bg-gray-300 bg-opacity-10 md:w-4/5 w-full flex flex-col container mx-auto px-5 py-20 items-center justify-center">
                <TypeIt className="text-3xl font-bold mt-8 mb-12 text-center"
                    options={{
                        strings: ["실패를 두려워하지 않고 항상 도전하고 배우는 개발자 홍성원입니다."],
                        speed: 70,
                        waitUntilVisible: true,
                    }} 
                />
                <div className="flex flex-col md:flex-row items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                        <img src="/img/photo.jpg" alt="프로필 사진" className="object-cover object-center rounded-3xl"/> 
                    </div>
                    <div className="flex flex-col md:items-start md:text-left items-center text-center">
                        <p className="leading-relaxed text-xl">
                            <strong>
                                개발 시에 화면에 바로 나타나는 것이 흥미롭게 다가왔고 <br />
                                새로운 기능이나 효율적인 방법을 접했을 때 <br />개발자로써 성장하고 싶다는 생각을 가지게 되었습니다.  <br /><br />
                            </strong>                
                            사용자에게 좋은 경험을 주기 위해 <strong>새로운 기술을 능동적으로 학습하고 있으며</strong> <br />
                            협업을 하면서 소통의 부재로 <strong>커뮤니케이션의 중요성</strong>을 깨닫게 되었으며    <br />
                            <strong>꾸준한 개발 성장</strong>을 위해 현재도 프로젝트를 진행하고 있습니다.<br /> <br />
                            그리고 개인 공부 내용을 <strong>깃허브에 1일 1커밋하고 있으며, <br />
                            블로그에도 한 달에 평균적으로 2개씩 토이 프로젝트 및 공부 내용을 포스팅하고 있습니다.</strong>  
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-24">
                    <img src="/img/down.png" alt="아래 버튼" className="animate-bounce"/>
                </div>
                <style jsx>{`
                    @tailwind base;
                    @tailwind components;
                    @tailwind utilities;

                    @keyframes bounce {
                        0% {
                            transform: translateY(0);
                        }
                        30% {
                            transform: translateY(-80px);
                        }
                        50% {
                            transform: translateY(0);
                        }
                        60% {
                            transform: translateY(-50px);
                        }
                        80% {
                            transform: translateY(0);
                        }
                        90% {
                            transform: translateY(-20px);
                        }
                        100% {
                            transform: translateY(0);
                        }
                    }
                    .animate-bounce {
                        animation: bounce 2s cubic-bezier(0.280, 0.840, 0.420, 1) infinite;
                    }
                `}</style>
            </main>
        </section>
    );
}