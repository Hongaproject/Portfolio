"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Skill {
  title: string;
  detail: string;
}

interface ProjectData {
  id: string;
  heading: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
  periods: string[];
  description: string;
  links: { label: string; href: string; text: string; ariaLabel: string }[];
  skillsKey: string;
}

const projects: ProjectData[] = [
  {
    id: "marathon-heading",
    heading: "RunPick",
    title: "RunPick",
    imgSrc: "/img/runpick.png",
    imgAlt: "RunPick 사이트의 스크린샷",
    periods: ["2026.02 ~ 2026.05 (1인 프로젝트)"],
    description:
      "러닝이 취미라 마라톤 대회에 자주 참가하고 있는데, 참가할 대회가 무엇이 있는지 찾아보고 비교하는 과정이 번거롭다고 느꼈습니다.\n기존에도 다양한 마라톤 정보 사이트가 있었지만, 실제 러너 입장에서 직접 사용하기 편한 마라톤 정보 플랫폼을 만들어보고자 개발하게 되었습니다.\n또한 단순히 대회 정보를 확인하는 것뿐만 아니라, 러너들끼리 자유롭게 정보 공유와 질문을 할 수 있는 커뮤니티 기능도 함께 구현했습니다.\n\n최근 AI 기술에 관심이 많아지면서, 이번 프로젝트에서는 Figma AI와 Claude를 적극 활용해 기획과 개발 생산성을 높였고\n데이터베이스에 대한 관심이 생겨 학습 목적도 함께 담아 PostgreSQL기반의 Supabase를 도입하였고, 데이터 구조 설계와 관리 경험을 쌓았습니다.\n\n추가로 GitHub Actions와 Nodemailer를 활용하여 사용자가 즐겨찾기한 대회의 마감 3일 전, 그리고 대회 7일 전에 자동으로 이메일 알림이 발송되는 기능도 구현했습니다.",
    links: [
      {
        label: "사이트 주소",
        href: "https://run-pick-psi.vercel.app/",
        text: "RunPick",
        ariaLabel: "RunPick 사이트로 이동",
      },
      {
        label: "깃허브 주소",
        href: "https://github.com/Hongaproject/RunPick",
        text: "GitHub",
        ariaLabel: "깃허브 사이트로 이동",
      },
      {
        label: "블로그 주소",
        href: "https://honggacoding.tistory.com/",
        text: "Tistory",
        ariaLabel: "블로그 사이트로 이동",
      },
    ],
    skillsKey: "marathon",
  },
  {
    id: "alcohol-heading",
    heading: "대한민국 모든 주류",
    title: "대한민국 모든 주류",
    imgSrc: "/img/alcohol.png",
    imgAlt: "대한민국 모든 주류 사이트의 스크린샷",
    periods: [
      "2024.06 ~ 2024.08 (1인 프로젝트)",
      "2025.05 ~ 2025.10 (FE 1인, UI/UX 1인) - 리뉴얼 작업",
    ],
    description:
      "대한민국 술 종류를 소개하는 사이트입니다. 주류 판매점을 구경 갔다가 대한민국에 주류가 몇 개가 있을까? 사람들이 자주 먹는 술은 어떻게 만들어지고 어떤 역사가 있을까에 대해 궁금증이 생겨서 개발하게 되었습니다.\n\nPigma를 사용해서 디자인을 직접 제작했으며 React를 사용해서 개발했습니다. Firebase를 사용해서 로그인 및 회원가입, store를 사용했고 Context API를 사용해서 상태 관리를 진행했습니다. 또한 메일을 보낼 수 있게 도와주는 email JS를 사용했으며, styled-components를 사용해서 스타일을 적용했습니다.\n\n상태관리와 다양한 라이브러리를 사용해 볼 수 있어서 배울점이 많았습니다. 현재도 사용자에게 의견을 받으면서 업데이트를 진행하고 있습니다.",
    links: [
      {
        label: "사이트 주소",
        href: "https://korea-alcohol-drinks.vercel.app/",
        text: "대한민국 모든 주류",
        ariaLabel: "대한민국 모든 주류 사이트로 이동",
      },
      {
        label: "깃허브 주소",
        href: "https://github.com/Hongaproject/AlcoholDrinks",
        text: "GitHub",
        ariaLabel: "깃허브 사이트로 이동",
      },
      {
        label: "블로그 주소",
        href: "https://velog.io/@hongga/%ED%95%98%EB%A3%A8-3%EC%8B%9C%EA%B0%84-%EC%BD%94%EB%94%A9-%EC%A3%BC%EB%A5%98-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%B5%9C%EC%A2%85%EB%B3%B8",
        text: "Velog",
        ariaLabel: "벨로그 사이트로 이동",
      },
    ],
    skillsKey: "alcohol",
  },
  {
    id: "portfolio-heading",
    heading: "포트폴리오",
    title: "포트폴리오",
    imgSrc: "/img/portfolio.png",
    imgAlt: "포트폴리오 사이트의 스크린샷",
    periods: ["2024/08/07 ~ 2024/08/13 (1인 프로젝트)"],
    description:
      "포트폴리오를 제작하기 위해 개발했습니다.\n\nNext.js와 Tailwind CSS를 사용해 사이트를 구성하고, TypeScript를 통해 더 안전한 코드 작성을 경험했습니다.\n\n포트폴리오 사이트를 제작하며 Next.js와 TypeScript를 사용해 React와 JavaScript의 차이점을 공부했습니다. 또한, 작업 후 웹 접근성을 고려한 개선과 코드 리팩토링을 통해 코드의 가독성과 유지보수성을 높이는 경험을 했습니다.",
    links: [
      {
        label: "사이트 주소",
        href: "https://hsw-portfolio.vercel.app",
        text: "포트폴리오",
        ariaLabel: "포트폴리오 사이트로 이동",
      },
      {
        label: "깃허브 주소",
        href: "https://github.com/Hongaproject/Portfolio",
        text: "GitHub",
        ariaLabel: "깃허브 사이트로 이동",
      },
      {
        label: "블로그 주소",
        href: "https://velog.io/@hongga/하루-3시간-코딩-포트폴리오-제작하기-최종본-배포",
        text: "Velog",
        ariaLabel: "벨로그 사이트로 이동",
      },
    ],
    skillsKey: "portfolio",
  },
  {
    id: "recipe-heading",
    heading: "레시피 연구소",
    title: "레시피 연구소",
    imgSrc: "/img/recipe.png",
    imgAlt: "레시피 연구소 사이트의 스크린샷",
    periods: ["2024/09/23 ~ 2024/10/22 (Front-End 4인)"],
    description:
      "요리 레시피를 알려주는 사이트입니다. 팀원들끼리 서로 아이디어를 모아서 결정했습니다.\n\nPigma를 사용해서 디자인 틀을 제작했으며, 작업 진행 도와 일정 관리를 위해 Jira를 사용했습니다. 사용 개발은 React와 TypeScript를 사용해서 제작했습니다.\n\n제 역할은 회원가입, 프로필 페이지 제작을 담당했습니다. Firebase를 사용해서 회원가입 구현을 제작했으며, 이메일과 닉네임 중복체크 기능을 추가했습니다. 프로필 페이지는 Firestore를 사용하여 사용자 정보를 가져와서 제작했고, 회원 정보 수정과 게시글, 좋아요한 게시물들을 확인할 수 있는 기능을 구현했습니다.\n\n이번 프로젝트를 진행하면서 소통의 중요성을 느꼈습니다. 팀원들과 의견을 교환하고 서로의 아이디어를 조율하면서 다양한 문제를 해결할 수 있었습니다.",
    links: [
      {
        label: "사이트 주소",
        href: "https://recipeproject-theta.vercel.app/",
        text: "레시피 연구소",
        ariaLabel: "레시피 연구소 사이트로 이동",
      },
      {
        label: "깃허브 주소",
        href: "https://github.com/Hongaproject/recipe_project",
        text: "GitHub",
        ariaLabel: "깃허브 사이트로 이동",
      },
    ],
    skillsKey: "recipe",
  },
];

export default function Project() {
  const [skillsMap, setSkillsMap] = useState<Record<string, Skill[]>>({});
  const [activeSkills, setActiveSkills] = useState<Record<string, string[]>>(
    {},
  );

  useEffect(() => {
    const files: { key: string; file: string; dataKey: string }[] = [
      { key: "alcohol", file: "/db/alcohol.json", dataKey: "alcohol" },
      { key: "portfolio", file: "/db/portfolio.json", dataKey: "portfolio" },
      { key: "recipe", file: "/db/recipe.json", dataKey: "recipe" },
      { key: "marathon", file: "/db/marathon.json", dataKey: "marathon" },
    ];

    files.forEach(({ key, file, dataKey }) => {
      fetch(file)
        .then((res) => res.json())
        .then((data) =>
          setSkillsMap((prev) => ({ ...prev, [key]: data[dataKey] })),
        )
        .catch((err) => console.error(`Error fetching ${file}:`, err));
    });
  }, []);

  const toggleSkill = (projectKey: string, title: string) => {
    setActiveSkills((prev) => {
      const current = prev[projectKey] ?? [];
      return {
        ...prev,
        [projectKey]: current.includes(title)
          ? current.filter((t) => t !== title)
          : [...current, title],
      };
    });
  };

  return (
    <section className="min-h-screen" aria-labelledby="project-heading">
      <header className="border-b-8 pb-5 border-yellow-400">
        <h1 id="project-heading" className="text-6xl font-bold">
          Project
        </h1>
      </header>

      <div className="mt-12 flex flex-col gap-16 pb-20">
        {projects.map((project) => {
          const skills = skillsMap[project.skillsKey] ?? [];
          const active = activeSkills[project.skillsKey] ?? [];

          return (
            <article
              key={project.id}
              aria-labelledby={project.id}
              className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <h2 id={project.id} className="text-3xl font-semibold mb-4">
                {project.heading}
              </h2>

              <Image
                src={project.imgSrc}
                alt={project.imgAlt}
                width={1200}
                height={675}
                className="object-cover object-center rounded-2xl mb-4 w-full"
              />

              <div className="flex flex-col gap-1 mb-4">
                {project.periods.map((period, i) => (
                  <span key={i} className="text-lg text-gray-500">
                    {period}
                  </span>
                ))}
              </div>

              <p className="text-xl mb-6 whitespace-pre-line leading-relaxed">
                {project.description}
              </p>

              {/* 관련 링크 */}
              <div className="mb-6">
                <h3 className="text-2xl mb-3 font-bold flex items-center">
                  <Image
                    src="/img/link.png"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  관련 링크들
                </h3>
                <div className="flex flex-col gap-1">
                  {project.links.map((link, i) => (
                    <p key={i} className="text-xl">
                      {link.label} :{" "}
                      <Link
                        href={link.href}
                        target="_blank"
                        aria-label={link.ariaLabel}
                        className="text-sky-500 hover:underline"
                      >
                        {link.text}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>

              {/* 사용 기술 아코디언 */}
              <div>
                <h3 className="text-2xl mb-3 font-bold flex items-center">
                  <Image
                    src="/img/keyboard.png"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  사용 기술들
                </h3>
                {skills.length === 0 ? (
                  <p className="text-gray-400 text-lg">
                    기술 정보를 불러오는 중...
                  </p>
                ) : (
                  <div className="border-2 rounded-lg overflow-hidden">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div
                          className="py-3 border-b border-gray-200 px-4 flex items-center cursor-pointer hover:bg-gray-50 transition-colors"
                          role="button"
                          aria-label="사용 기술 상세내용 열기"
                          onClick={() =>
                            toggleSkill(project.skillsKey, skill.title)
                          }
                        >
                          <span className="flex-1">{skill.title}</span>
                          <Image
                            src="/img/sdown.png"
                            alt=""
                            aria-hidden="true"
                            width={20}
                            height={20}
                            className={`transition-transform duration-200 ${
                              active.includes(skill.title) ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {active.includes(skill.title) && (
                          <div className="p-4 bg-gray-50 border-b border-gray-200">
                            <p>{skill.detail}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
