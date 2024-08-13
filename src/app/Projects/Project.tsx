"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface Skill {
    title: string;
    detail: string;
}

export default function Project() {

    const [alcoholSkills, setAlcoholSkills] = useState<Skill[]>([]);
    const [activeAlcoholSkill, setActiveAlcoholSkill] = useState<string[]>([]);
    const [portfolioSkils, setPortFolioSkils] = useState<Skill[]>([]);
    const [activePortfolioSkils, setActivePortFolioSkils] = useState<string[]>([]);

    useEffect(() => {
        fetch('/db/alcohol.json')
            .then(response => response.json())
            .then((data: {skills: Skill[]}) => setAlcoholSkills(data.skills))
            .catch(error => console.error('Error fetching the JSON data:', error));

        fetch('/db/portfolio.json')
            .then(response => response.json())
            .then((data: {portfolio: Skill[]}) => setPortFolioSkils(data.portfolio))
            .catch(error => console.error('Error fetching the portfolio data:', error));
    }, []);

    const toggleAlcoholDetail = (title: string) => {
        setActiveAlcoholSkill(detailsActive => 
            detailsActive.includes(title) 
                ? detailsActive.filter(skill => skill !== title)
                : [...detailsActive, title]
        )
    }

    const togglePortfolioDetail = (title: string) => {
        setActivePortFolioSkils(detailsActive => 
            detailsActive.includes(title) 
                ? detailsActive.filter(skill => skill !== title)
                : [...detailsActive, title]
        )
    }
    return(
        <section className="min-h-screen">   
            <div className="border-b-8 pb-5 border-yellow-400">
                <h1 className="text-6xl font-bold">Project</h1>
            </div>
            <main className="mt-12">
                <article className="lg:max-w-3xl lg:w-full md:w-1/2 w-5/6 md:mb-0 pb-20">
                    <h2 className="text-3xl font-semibold mb-4">포트폴리오</h2>
                    <img src="/img/portfolio.png" alt="포트폴리오 이미지" className="object-cover object-center rounded-3xl mb-2" />
                    <span className="block text-lg mb-5">2024/08/07 ~ 2024/08/13 (1인 프로젝트)</span>
                    <span className="block text-xl mb-5">
                        <strong>포트폴리오를 제작하기 위해 개발했습니다.</strong> <br /><br />
                        Next JS를 사용해서 개발을 진행했습니다. React와 차이점을 알기 위해 사용해봤습니다. <br />
                        Tailwind CSS를 사용해서 스타일을 적용했고, TypeScript를 사용해봤습니다. <br /><br />

                        포트폴리오 사이트를 제작한다는 점이 흥미로웠으며, Next JS와 TypeScript를 사용하면서 <br />
                        React와 JavaScript의 차이점에 대해서 공부를 할 수 있었습니다. <br />
                    </span>
                    <div className="mb-5">
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/link.png" alt="링크 이미지" className="mr-2"/>관련링크들</h2>
                        <h3 className="text-xl mb-2">사이트 주소 : <Link href='' target="_blank" className="text-sky-500 hover:underline"></Link></h3>
                        <h3 className="text-xl mb-2">깃허브 주소 : <Link href='https://github.com/Hongaproject/Portfolio' target="_blank" className="text-sky-500 hover:underline">GitHub</Link></h3>
                        <h3 className="text-xl mb-2">블로그 주소 : <Link href='' target="_blank" className="text-sky-500 hover:underline"></Link></h3>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/keyboard.png" alt="기술 이미지" className="mr-2"/>사용기술들</h2>
                        <div className="border-2 rounded-lg">
                            {
                                portfolioSkils.map((skill, index) => (
                                    <div key={index}>
                                        <div className="py-2 border-2 pl-2 flex cursor-pointer" onClick={() => togglePortfolioDetail(skill.title)}>
                                            {skill.title} <img src="/img/sdown.png" alt="사용기술 내용 보여주는 이미지" className="ml-auto mr-2" />
                                        </div>
                                        {
                                            activePortfolioSkils.includes(skill.title) && (
                                                <div className="p-4 border-2">
                                                    <p>{skill.detail}</p>
                                                </div>    
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </article>
                <article className="lg:max-w-3xl lg:w-full md:w-1/2 w-5/6 md:mb-0 pb-20">
                    <h2 className="text-3xl font-semibold mb-4">대한민국 모든 주류</h2>
                    <img src="/img/alcohol.png" alt="대안민국 모든 주류 이미지" className="object-cover object-center rounded-3xl mb-2" />
                    <span className="block text-lg mb-5">2024/06/24 ~ 2024/08/06 (1인 프로젝트)</span>
                    <span className="block text-xl mb-5">
                        <strong>대한민국 술 종류를 소개하는 사이트</strong>입니다. 주류 판매점을 구경 갔다가 대한민국에 주류가 몇 개가 있을까? 사람들이 자주 먹는 술은 어떻게 만들어지고 어떤 역사가 있을까에 대해 궁금증이 생겨서 개발하게 되었습니다. <br /><br />
                        Pigma를 사용해서 디자인을 직접 제작했으며 React를 사용해서 개발했습니다. Firebase를 사용해서 로그인 및 회원가입, store를 사용했고 Context API를 사용해서 상태 관리를 진행했습니다. 또한 메일을 보낼수 있게 도와주는 email JS를 사용했으며, styled-components를 사용해서 스타일을 적용했습니다. <br /><br/>
                        상태관리와 다양한 라이브러리를 사용해 볼 수 있어서 배울점이 많았습니다. <br />
                        현재도 사용자에게 의견을 받으면서 업데이트를 진행하고 있습니다. <br />
                    </span>
                    <div className="mb-5">
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/link.png" alt="링크 이미지" className="mr-2"/>관련링크들</h2>
                        <h3 className="text-xl mb-2">사이트 주소 : <Link href='https://korea-alcohol-drinks.vercel.app/' target="_blank" className="text-sky-500 hover:underline">대한민국 모든 주류</Link></h3>
                        <h3 className="text-xl mb-2">깃허브 주소 : <Link href='https://github.com/Hongaproject/AlcoholDrinks' target="_blank" className="text-sky-500 hover:underline">GitHub</Link></h3>
                        <h3 className="text-xl mb-2">블로그 주소 : <Link href='https://velog.io/@hongga/%ED%95%98%EB%A3%A8-3%EC%8B%9C%EA%B0%84-%EC%BD%94%EB%94%A9-%EC%A3%BC%EB%A5%98-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%B5%9C%EC%A2%85%EB%B3%B8' target="_blank" className="text-sky-500 hover:underline">Velog</Link></h3>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/keyboard.png" alt="기술 이미지" className="mr-2"/>사용기술들</h2>
                        <div className="border-2 rounded-lg">
                            {
                                alcoholSkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="py-2 border-2 pl-2 flex cursor-pointer" onClick={() => toggleAlcoholDetail(skill.title)}>
                                            {skill.title} <img src="/img/sdown.png" alt="사용기술 내용 보여주는 이미지" className="ml-auto mr-2" />
                                        </div>
                                        {
                                            activeAlcoholSkill.includes(skill.title) && (
                                                <div className="p-4 border-2">
                                                    <p>{skill.detail}</p>
                                                </div>    
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
}