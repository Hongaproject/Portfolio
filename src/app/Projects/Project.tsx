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
    const [recipeSkills, setRecipeSkills] = useState<Skill[]>([]);
    const [activeRecipeSkills, setActiveRecipeSkills] = useState<string[]>([]);

    useEffect(() => {
        fetch('/db/alcohol.json')
            .then(response => response.json())
            .then((data: {alcohol: Skill[]}) => setAlcoholSkills(data.alcohol))
            .catch(error => console.error('Error fetching the JSON data:', error));

        fetch('/db/portfolio.json')
            .then(response => response.json())
            .then((data: {portfolio: Skill[]}) => setPortFolioSkils(data.portfolio))
            .catch(error => console.error('Error fetching the portfolio data:', error));
        
        fetch('/db/recipe.json')
            .then(response => response.json())
            .then((data: {recipe: Skill[]}) => setRecipeSkills(data.recipe))
            .catch(error => console.error('Error fetching the recipe data:', error));
        
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

    const toggleRecipeDetail = (title: string) => {
        setActiveRecipeSkills(detailsActive => 
            detailsActive.includes(title) 
                ? detailsActive.filter(skill => skill !== title)
                : [...detailsActive, title]
        )
    }

    return(
        <section className="min-h-screen" aria-labelledby="project-heading">   
            <header className="border-b-8 pb-5 border-yellow-400">
                <h1 id="project-heading" className="text-6xl font-bold">Project</h1>
            </header>
            <main className="mt-12" role="main">
                <article className="lg:max-w-3xl lg:w-full md:mb-0 pb-20" aria-labelledby="portfolio-heading">
                    <h2 id="portfolio-heading" className="text-3xl font-semibold mb-4">포트폴리오</h2>
                    <img src="/img/portfolio.png" alt="포트폴리오 사이트의 스크린샷" className="object-cover object-center rounded-3xl mb-2" />
                    <span className="block text-lg mb-5">2024/08/07 ~ 2024/08/13 (1인 프로젝트)</span>
                    <span className="block text-xl mb-5">
                        <strong>포트폴리오를 제작하기 위해 개발했습니다.</strong> <br /><br />
                        Next.js와 Tailwind CSS를 사용해 사이트를 구성하고,
                        TypeScript를 통해 더 안전한 코드 작성을 경험했습니다.<br /><br />

                        포트폴리오 사이트를 제작하며 Next.js와 TypeScript를 사용해 React와 JavaScript의 차이점을 공부했습니다.
                        또한, 작업 후 웹 접근성을 고려한 개선과 코드 리팩토링을 통해 코드의 가독성과 유지보수성을 높이는 경험을 했습니다. <br />
                    </span>
                    <div className="mb-5">
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/link.png" alt="" aria-hidden="true" className="mr-2"/>관련 링크들</h2>
                        <h3 className="text-xl mb-2">사이트 주소 : <Link href='https://hsw-portfolio.vercel.app' target="_blank" aria-label="포트폴리오 사이트로 이동" className="text-sky-500 hover:underline">포트폴리오</Link></h3>
                        <h3 className="text-xl mb-2">깃허브 주소 : <Link href='https://github.com/Hongaproject/Portfolio' target="_blank" aria-label="깃허브 사이트로 이동" className="text-sky-500 hover:underline">GitHub</Link></h3>
                        <h3 className="text-xl mb-2">블로그 주소 : <Link href='https://velog.io/@hongga/하루-3시간-코딩-포트폴리오-제작하기-최종본-배포' target="_blank" aria-label="벨로그 사이트로 이동" className="text-sky-500 hover:underline">Velog</Link></h3>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/keyboard.png" alt="" aria-hidden="true" className="mr-2"/>사용 기술들</h2>
                        <div className="border-2 rounded-lg">
                            {
                                portfolioSkils.map((skill, index) => (
                                    <div key={index}>
                                        <div className="py-2 border-2 pl-2 flex cursor-pointer" role="button" aria-label="사용 기술 상세내용 열기" onClick={() => togglePortfolioDetail(skill.title)}>
                                            {skill.title} <img src="/img/sdown.png" alt="" aria-hidden="true" className="ml-auto mr-2" />
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
                <article className="lg:max-w-3xl lg:w-full md:mb-0 pb-20" aria-labelledby="alcohol-heading">
                    <h2 id="alcohol-heading" className="text-3xl font-semibold mb-4">대한민국 모든 주류</h2>
                    <img src="/img/alcohol.png" alt="대한민국 모든 주류 사이트의 스크린샷" className="object-cover object-center rounded-3xl mb-2" />
                    <span className="block text-lg mb-5">2024/06/24 ~ 2024/08/06 (1인 프로젝트)</span>
                    <span className="block text-xl mb-5">
                        <strong>대한민국 술 종류를 소개하는 사이트</strong>입니다. 주류 판매점을 구경 갔다가 대한민국에 주류가 몇 개가 있을까? 사람들이 자주 먹는 술은 어떻게 만들어지고 어떤 역사가 있을까에 대해 궁금증이 생겨서 개발하게 되었습니다. <br /><br />
                        Pigma를 사용해서 디자인을 직접 제작했으며 React를 사용해서 개발했습니다. Firebase를 사용해서 로그인 및 회원가입, store를 사용했고 Context API를 사용해서 상태 관리를 진행했습니다. 또한 메일을 보낼수 있게 도와주는 email JS를 사용했으며, styled-components를 사용해서 스타일을 적용했습니다. <br /><br/>
                        상태관리와 다양한 라이브러리를 사용해 볼 수 있어서 배울점이 많았습니다. <br />
                        현재도 사용자에게 의견을 받으면서 업데이트를 진행하고 있습니다. <br /><br />
                        또한, 작업 후 웹 접근성을 고려한 개선과 코드 리팩토링을 통해 코드의 가독성과 유지보수성을 높이는 경험을 했습니다. <br />
                    </span>
                    <div className="mb-5">
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/link.png" alt="" aria-hidden="true" className="mr-2"/>관련 링크들</h2>
                        <h3 className="text-xl mb-2">사이트 주소 : <Link href='https://korea-alcohol-drinks.vercel.app/' target="_blank" aria-label="대한민국 모든 주류 사이트로 이동" className="text-sky-500 hover:underline">대한민국 모든 주류</Link></h3>
                        <h3 className="text-xl mb-2">깃허브 주소 : <Link href='https://github.com/Hongaproject/AlcoholDrinks' target="_blank" aria-label="깃허브 사이트로 이동" className="text-sky-500 hover:underline">GitHub</Link></h3>
                        <h3 className="text-xl mb-2">블로그 주소 : <Link href='https://velog.io/@hongga/%ED%95%98%EB%A3%A8-3%EC%8B%9C%EA%B0%84-%EC%BD%94%EB%94%A9-%EC%A3%BC%EB%A5%98-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%B5%9C%EC%A2%85%EB%B3%B8' target="_blank" aria-label="벨로그 사이트로 이동" className="text-sky-500 hover:underline">Velog</Link></h3>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/keyboard.png" alt="" aria-hidden="true" className="mr-2"/>사용 기술들</h2>
                        <div className="border-2 rounded-lg">
                            {
                                alcoholSkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="py-2 border-2 pl-2 flex cursor-pointer" onClick={() => toggleAlcoholDetail(skill.title)}>
                                            {skill.title} <img src="/img/sdown.png" alt="" aria-hidden="true" className="ml-auto mr-2" />
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
                <article className="lg:max-w-3xl lg:w-full md:mb-0 pb-20" aria-labelledby="recipe-heading">
                    <h2 id="recipe-heading" className="text-3xl font-semibold mb-4">레시피 연구소</h2>
                    <img src="/img/recipe.png" alt="레시피 연구소 사이트의 스크린샷" className="object-cover object-center rounded-3xl mb-2" />
                    <span className="block text-lg mb-5">2024/09/23 ~ 2024/10/22 (Front-End 4인)</span>
                    <span className="block text-xl mb-5">
                        <strong>요리 레시피를 알려주는 사이트</strong>입니다. 팀원들끼리 서로 아이디어를 모아서 결정했습니다. <br /><br />
                        Pigma를 사용해서 디자인 틀을 제작했으며, 작업 진행 도와 일정 관리를 위해 Jira를 사용했습니다. 사용 개발은 React와 TypeScript를 사용해서 제작했습니다. <br /><br />

                        제 역할은 회원가입, 프로필 페이지 제작을 담당했습니다. Firebase를 사용해서 회원가입 구현을 제작했으며, 이메일과 닉네임 중복체크 기능을 추가했습니다. <br />
                        프로필 페이지는 Firestore를 사용하여 사용자 정보를 가져와서 제작했고, 회원 정보 수정과 게시글, 좋아요한 게시물들을 확인할 수 있는 기능을 구현했습니다.<br /><br />

                        이번 프로젝트를 진행하면서 소통의 중요성을 느꼈습니다. 팀원들과 의견을 교환하고 서로의 아이디어를 조율하면서 다양한 문제를 해결할 수 있었습니다. <br />
                        특히, 기술적인 문제나 의견 충돌이 있을 때 적극적으로 소통하며 해결하는 과정에서 소통의 중요성을 알게 되었습니다.<br />
                    </span>
                    <div className="mb-5">
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/link.png" alt="" aria-hidden="true"  className="mr-2"/>관련 링크들</h2>
                        <h3 className="text-xl mb-2">사이트 주소 : <Link href='https://recipeproject-theta.vercel.app/' target="_blank" aria-label="레시피 연구소 사이트로 이동" className="text-sky-500 hover:underline">레시피 연구소</Link></h3>
                        <h3 className="text-xl mb-2">깃허브 주소 : <Link href='https://github.com/Hongaproject/recipe_project' target="_blank" aria-label="깃허브 사이트로 이동" className="text-sky-500 hover:underline">GitHub</Link></h3>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-3 font-bold flex items-center"><img src="/img/keyboard.png" alt="" aria-hidden="true" className="mr-2"/>사용 기술들</h2>
                        <div className="border-2 rounded-lg">
                            {
                                recipeSkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="py-2 border-2 pl-2 flex cursor-pointer" role="button" aria-label="사용 기술 상세내용 열기" onClick={() => toggleRecipeDetail(skill.title)}>
                                            {skill.title} <img src="/img/sdown.png" alt="" aria-hidden="true" className="ml-auto mr-2" />
                                        </div>
                                        {
                                            activeRecipeSkills.includes(skill.title) && (
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