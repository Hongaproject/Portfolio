import Link from "next/link";

interface CareerItem {
  title: string;
  titleLink?: { href: string; label: string };
  period: string;
  description: string;
  tasks: string[];
  results: string[];
  tech: string;
}

const careerItems: CareerItem[] = [
  {
    title: "기업 홈페이지 리뉴얼 및 서비스 구축",
    titleLink: {
      href: "https://www.deltaes.co.kr/main",
      label: "델타이에스",
    },
    period: "2025.01 ~ 2025.06, 2026.03 ~",
    description:
      "WIX 기반 기업 홈페이지를 Next.js 환경으로 마이그레이션하고 서비스 구조를 재설계하여 성능 및 운영 효율 개선",
    tasks: [
      "Next.js 기반 기업 홈페이지 UI/컴포넌트 개발 및 서비스 구축",
      "Firebase 연동 문의 시스템 및 관리자 대시보드 개발",
      "Google Analytics / Calendar / Drive API 연동",
      "문의 채팅 및 이메일 알림 자동화 기능 개발",
      "Cloudinary CDN 기반 이미지 관리 및 성능 최적화",
      "SEO 구조 개선 및 검색엔진 노출 최적화",
    ],
    results: [
      "정적 사이트 → 서비스형 구조 전환으로 유지보수 효율 개선",
      "이미지 로딩 및 페이지 성능 최적화 구조 구축",
    ],
    tech: "Next.js · TypeScript · Tailwind · Firebase · Cloudinary · Google API · Nodemailer",
  },
  {
    title: "대규모 이메일 발송 시스템 개발",
    period: "2025.07 ~ 2025.09",
    description:
      "Excel 기반 수신자 데이터를 활용한 대량 이메일 자동 발송 데스크톱 시스템 개발",
    tasks: [
      "Excel 업로드 기반 수신자 자동 추출 기능 개발",
      "Gmail SMTP 기반 대량 메일 발송 시스템 구현",
      "멀티 메일 계정 관리 구조 설계",
      "메일 발송 성공/실패 로그 관리 시스템 구축",
      "Electron 기반 데스크톱 애플리케이션 개발",
    ],
    results: [
      "수작업 메일 발송 업무 자동화",
      "발송 이력 추적 및 운영 안정성 확보",
    ],
    tech: "Next.js · Electron · TypeScript · Nodemailer · ExcelJS",
  },
  {
    title: "사내 업무 관리 및 전자결재 시스템",
    period: "2025.10 ~ 2026.03",
    description:
      "전자결재·업무보고·일정관리를 통합한 사내 업무 플랫폼 설계 및 개발",
    tasks: [
      "1~3차 다단계 전자결재 시스템 설계 및 구현",
      "업무 보고 및 관리자 관리 기능 개발",
      "실시간 알림 및 이메일 자동 발송 시스템 구축",
      "Google Drive API 기반 파일 업로드 및 권한 관리",
      "FullCalendar 조직 일정 관리 기능 구현",
      "React Query 기반 서버 상태 관리 및 캐싱 구조 설계",
    ],
    results: [
      "문서 승인 프로세스 디지털 전환",
      "Firebase 인덱스 및 캐싱 조회 성능 개선 및 클라우드 비용 최적화",
      "조직 업무 흐름 중앙화",
    ],
    tech: "Next.js · TypeScript · React Query · Redux · Firebase · FullCalendar · Nodemailer",
  },
];

export default function Career() {
  return (
    <section className="min-h-screen" aria-labelledby="career-heading">
      <header className="border-b-8 pb-5 border-yellow-400">
        <h1 id="career-heading" className="text-6xl font-bold">
          Career
        </h1>
      </header>

      <div className="mt-12">
        <div className="mb-16">
          <h2 className="text-gray-500 text-3xl">
            HB디지털이노베이션 2026.07 ~ (재직중)
          </h2>
          <p className="mt-2 text-lg font-bold">
            한빛자산관리대부그룹 계열 금융IT 서비스기업
          </p>
          <p className="mt-1 text-lg font-bold">
            채권관리 업무 운영 및 업무 시스템 개발·개선 담당
          </p>
        </div>

        <h2 className="text-gray-500 text-3xl">델타이에스 2025.01 ~ 2026.07</h2>
        <p className="mt-2 text-lg">
          &quot;CAE/CFD 솔루션 판매 및 엔지니어링 컨설팅 기업&quot;
        </p>

        {/* 타임라인 */}
        <div className="my-10 relative border-l-4 border-yellow-400 pl-8 flex flex-col gap-10 pb-40">
          {careerItems.map((item, index) => (
            <article
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* 타임라인 점 */}
              <span className="absolute -left-[2.85rem] top-8 w-4 h-4 rounded-full bg-yellow-400 border-4 border-white shadow" />

              <h3 className="text-2xl font-bold">
                {item.title}
                {item.titleLink && (
                  <>
                    {" - "}
                    <Link
                      href={item.titleLink.href}
                      target="_blank"
                      className="text-sky-500 hover:underline"
                    >
                      {item.titleLink.label}
                    </Link>
                  </>
                )}
              </h3>
              <p className="text-xl text-gray-500 mt-1">{item.period}</p>
              <p className="mt-4 text-lg text-gray-700">{item.description}</p>

              <h4 className="mt-6 font-bold text-xl">주요 업무</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-lg">
                {item.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>

              <h4 className="mt-6 font-bold text-xl">성과</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-lg">
                {item.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>

              <p className="mt-6 text-xl font-semibold">Tech</p>
              <p className="text-lg text-gray-700">{item.tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
