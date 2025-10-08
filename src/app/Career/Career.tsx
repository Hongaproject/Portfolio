import Link from "next/link";

export default function Career() {
  return (
    <section className="min-h-screen" aria-labelledby="career-heading">
      <header className="border-b-8 pb-5 border-yellow-400">
        <h1 id="career-heading" className="text-6xl font-bold">
          Career
        </h1>
      </header>
      <main className="mt-12" role="main">
        <h2 id="education-heading" className="text-gray-500 text-3xl">
          델타이에스 2024.12 ~ (재직 중)
        </h2>
        <p className="mt-2">
          &quot;CAE/CFD 솔루션 판매 및 엔지니어링 컨설팅 기업&quot;
        </p>
        <article>
          <p className="mt-6 text-xl">2025.01 ~ 2025.05</p>
          <h3 className="text-2xl font-bold">
            회사 홈페이지 제작 -
            <Link
              href="https://www.deltaes.co.kr/main"
              target="_blank"
              className="text-sky-500 hover:underline ml-1"
              aria-label="벨로그 사이트로 이동"
            >
              델타이에스
            </Link>
          </h3>
          <div className="mt-4">
            <ul
              className="mt-4 list-disc pl-8 text-xl space-y-2"
              aria-label="홈페이지 제작 업무 항목"
            >
              <li>
                기존 WIX 기반 홈페이지를 Next.js로 전환하여 실제 서비스 운영 중
              </li>
              <li>
                Next.js API Routes를 활용해 클라이언트–서버 간 통신 구조 설계 및
                기능 구현
              </li>
              <li>
                관리자 페이지 제작 : 게시글·회원 관리, 글 작성 에디터, 문의 대응
                기능 포함
              </li>
              <li>
                실시간 문의 기능 및 알림 시스템 구현으로 사용자 응답 체계 강화
              </li>
              <li>
                Google Analytics 연동을 통한 일일 방문자 수 집계 및 차트 시각화
                (오늘 / 7주 / 30개월 / 12개월 기준)
              </li>
              <li>
                Google Drive API 연동으로 문서 업로드 및 React Quill 에디터 통합
              </li>
              <li>Cloudinary를 활용한 이미지 최적화</li>
              <li>
                Firebase Authentication 및 Firestore를 통한 사용자
                로그인·회원가입·데이터 관리
              </li>
            </ul>
            <p className="mt-6 text-2xl">사용 기술</p>
            <span className="text-xl">
              Next.js / React / TypeScript / Firebase / Google API / React Quill
              / Nodemailer / Cloudinary
            </span>
          </div>
        </article>
        <article>
          <p className="mt-12 text-xl">2025.07 ~ 2025.08</p>
          <h3 className="text-2xl font-bold">이메일 전송 시스템 구축</h3>
          <div className="mt-4">
            <ul
              className="mt-4 list-disc pl-8 text-xl space-y-2"
              aria-label="홈페이지 제작 업무 항목"
            >
              <li>엑셀(.xlsx) 파일 파싱을 통해 500건 이메일 주소 자동 처리</li>
              <li>
                Next.js API Routes 기반의 실시간 이메일 발송 상태(성공 / 실패 /
                반송) 표시 기능 구현
              </li>
              <li>
                Nodemailer + Gmail SMTP를 활용해 안정적인 대량 이메일 발송 구조
                구축
              </li>
              <li>
                Electron 기반 데스크탑 프로그램으로 제작 및 배포, 설치형
                애플리케이션 형태로 제공
              </li>
            </ul>
            <p className="mt-4 text-xl font-bold">
              수작업 대비 이메일 발송 준비 및 실행 시간 대폭 단축 <br />
              발송 상태를 시각적으로 확인 가능한 UI 제공
            </p>
            <p className="mt-6 text-2xl">사용 기술</p>
            <span className="text-xl">
              Next.js / React / TypeScript / Electron / Tailwind CSS /
              Nodemailer / React Quill / Google Drive API / xlsx
            </span>
          </div>
        </article>
        <article className="pb-20">
          <p className="mt-12 text-xl">2025.09 ~ </p>
          <h3 className="text-2xl font-bold">사내 ERP 페이지 구축</h3>
          <div className="mt-4">
            <ul
              className="mt-4 list-disc pl-8 text-xl space-y-2"
              aria-label="홈페이지 제작 업무 항목"
            >
              <li>
                수작업으로 진행되던 일정 공유 및 결재 절차를 자동화하여 업무
                효율성 향상
              </li>
              <li>캘린더 UI 기반 개인 일정 관리 기능 (등록/수정/삭제) 구현</li>
              <li>
                게시판 및 공지사항 시스템 개발 — 부서별/전체 공지 및 소통 공간
                제공
              </li>
              <li>
                전자 결재 시스템 구축: 휴가원, 품의서, 보고서 등 결재 프로세스
                구현
              </li>
              <li>조직도 및 내선 관리 기능으로 사내 검색 편의성 강화</li>
              <li>
                관리자 페이지를 통한 권한 관리 및 데이터 통합 관리 구조 설계
              </li>
            </ul>
            <p className="mt-4 text-xl font-bold">
              업무 프로세스 자동화로 업무 효율성 및 의사결정 속도 개선
              <br />
              일정·결재·공지 통합 관리로 사내 커뮤니케이션 편의성 향상
            </p>
            <p className="mt-6 text-2xl">사용 기술</p>
            <span className="text-xl">
              Next.js / React / TypeScript / Redux / Firebase / Google API /
              React Quill / Nodemailer
            </span>
          </div>
        </article>
      </main>
    </section>
  );
}
