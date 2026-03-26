import Link from "next/link";

export default function Career() {
  return (
    <section className="min-h-screen" aria-labelledby="career-heading">
      <header className="border-b-8 pb-5 border-yellow-400">
        <h1 id="career-heading" className="text-6xl font-bold">
          Career
        </h1>
      </header>

      <main className="mt-12">
        <h2 className="text-gray-500 text-3xl">
          델타이에스 2024.12 ~ (재직 중)
        </h2>
        <p className="mt-2">
          &quot;CAE/CFD 솔루션 판매 및 엔지니어링 컨설팅 기업&quot;
        </p>

        {/* ================= 홈페이지 ================= */}
        <article className="mt-12">
          <h3 className="text-2xl font-bold mt-1">
            기업 홈페이지 리뉴얼 및 서비스 구축 -
            <Link
              href="https://www.deltaes.co.kr/main"
              target="_blank"
              className="text-sky-500 hover:underline ml-1"
            >
              델타이에스
            </Link>
          </h3>
          <p className="text-xl text-gray-500">2025.01 ~ 2025.06, 2026.03 ~</p>

          <p className="mt-4 text-lg">
            WIX 기반 기업 홈페이지를 Next.js 환경으로 마이그레이션하고 서비스
            구조를 재설계하여 성능 및 운영 효율 개선
          </p>

          <h4 className="mt-6 font-bold text-xl">주요 업무</h4>
          <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
            <li>Next.js 기반 기업 홈페이지 UI/컴포넌트 개발 및 서비스 구축</li>
            <li>Firebase 연동 문의 시스템 및 관리자 데이터 대시보드 개발</li>
            <li>Google Analytics / Calendar / Drive API 연동</li>
            <li>실시간 채팅 및 이메일 알림 자동화 기능 개발</li>
            <li>Cloudinary CDN 기반 이미지 관리 및 성능 최적화</li>
            <li>SEO 구조 개선 및 검색엔진 노출 최적화</li>
          </ul>

          <h4 className="mt-6 font-bold text-xl">성과</h4>
          <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
            <li>정적 사이트 → 서비스형 구조 전환으로 유지보수 효율 개선</li>
            <li>이미지 로딩 및 페이지 성능 최적화 구조 구축</li>
            <li>관리자 콘텐츠 관리 자동화 환경 구축</li>
          </ul>

          <p className="mt-6 text-xl font-semibold">Tech</p>
          <p className="text-lg">
            Next.js · TypeScript · Tailwind · Firebase · Cloudinary · Google API
            · Nodemailer
          </p>
        </article>

        {/* ================= 이메일 ================= */}
        <article className="mt-16">
          <h3 className="text-2xl font-bold mt-1">
            대규모 이메일 발송 시스템 개발
          </h3>
          <p className="text-xl text-gray-500">2025.07 ~ 2025.09</p>

          <p className="mt-4 text-lg">
            Excel 기반 수신자 데이터를 활용한 대량 이메일 자동 발송 데스크톱
            시스템 개발
          </p>

          <h4 className="mt-6 font-bold text-xl">주요 업무</h4>
          <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
            <li>Excel 업로드 기반 수신자 자동 추출 기능 개발</li>
            <li>Gmail SMTP 기반 대량 메일 발송 시스템 구현</li>
            <li>멀티 메일 계정 관리 구조 설계</li>
            <li>메일 발송 성공/실패 로그 관리 시스템 구축</li>
            <li>Electron 기반 데스크톱 애플리케이션 개발</li>
          </ul>

          <h4 className="mt-6 font-bold text-xl">성과</h4>
          <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
            <li>수작업 메일 발송 업무 자동화</li>
            <li>발송 이력 추적 및 운영 안정성 확보</li>
          </ul>

          <p className="mt-6 text-xl font-semibold">Tech</p>
          <p className="text-lg">
            Next.js · Electron · TypeScript · Nodemailer · ExcelJS
          </p>
        </article>

        {/* ================= ERP ================= */}
        <article className="mt-16 pb-20">
          <h3 className="text-2xl font-bold mt-1">
            사내 업무 관리 및 전자결재 시스템
          </h3>
          <p className="text-xl text-gray-500">2025.10 ~ 2026.03</p>

          <p className="mt-4 text-lg">
            전자결재·업무보고·일정관리를 통합한 사내 업무 플랫폼 설계 및 개발
          </p>

          <h4 className="mt-6 font-bold text-xl">주요 업무</h4>
          <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
            <li>1~3차 다단계 전자결재 시스템 설계 및 구현</li>
            <li>업무 보고 및 관리자 관리 기능 개발</li>
            <li>실시간 알림 및 이메일 자동 발송 시스템 구축</li>
            <li>Google Drive API 기반 파일 업로드 및 권한 관리</li>
            <li>FullCalendar 조직 일정 관리 기능 구현</li>
            <li>React Query 기반 서버 상태 관리 및 캐싱 구조 설계</li>
          </ul>

          <h4 className="mt-6 font-bold text-xl">성과</h4>
          <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
            <li>문서 승인 프로세스 디지털 전환</li>
            <li>
              Firebase 인덱스 및 캐싱 전략으로 조회 성능 개선 및 클라우드 비용
              최적화
            </li>
            <li>조직 업무 흐름 중앙화</li>
          </ul>

          <p className="mt-6 text-xl font-semibold">Tech</p>
          <p className="text-lg">
            Next.js · TypeScript · React Query · Redux · Firebase · FullCalendar
            · Nodemailer
          </p>
        </article>
      </main>
    </section>
  );
}
