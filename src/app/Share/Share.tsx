import Link from "next/link";

export default function Share () {
    return(
        <section className="min-h-screen" aria-labelledby="share-heading">
            <header className="border-b-8 pb-5 border-yellow-400">
                <h1 id="share-heading" className="text-6xl font-bold">Share</h1>
            </header>
            <main className="mt-12" role="main">
                <article aria-labelledby="github-heading">
                    <h2 id="github-heading" className="text-3xl font-semibold mb-4">GitHub</h2>
                    <h3 className="text-xl mb-3 flex items-center"><img src="/img/link.png" alt="GitHub 링크 아이콘" className="mr-2"/>
                        깃허브 주소 : <Link href='https://github.com/Hongaproject' target="_blank" className="text-sky-500 hover:underline ml-1" aria-label="GitHub 페이지로 이동">github.com/Hongaproject</Link>
                    </h3>
                    <span className="text-xl"><strong>소스 코드 저장소</strong>입니다.</span>
                    <ul className="mt-4 list-disc pl-5 text-xl space-y-2" aria-label="GitHub 관련 항목">
                        <li>혼자서 코딩 공부 한 소스 코드</li>
                        <li>프로젝트 소스 코드</li>
                    </ul>
                </article>
                <article className="mt-12" aria-labelledby="velog-heading">
                    <h2 id="velog-heading" className="text-3xl font-semibold mb-4">Velog</h2>
                    <h3 className="text-xl mb-3 flex items-center"><img src="/img/link.png" alt="Velog 링크 아이콘" className="mr-2"/>
                        블로그 주소 : <Link href='https://velog.io/@hongga/posts' target="_blank" className="text-sky-500 hover:underline ml-1" aria-label="Velog 페이지로 이동">velog.io/@hongga/posts</Link>
                    </h3>
                    <span className="text-xl"><strong>공부 및 지식 공유 목적의 블로그</strong>입니다.</span>
                    <ul className="mt-4 list-disc pl-5 text-xl space-y-2" aria-label="Velog 관련 항목">
                        <li>공부한 내용을 복습하기 위해 기록</li>
                        <li>프로젝트 내용 정리</li>
                        <li>개발하면서 배운 내용 및 해결 방법 정리</li>
                        <li>지식 공유를 통한 선한 영향력 선사</li>
                    </ul>
                </article>
            </main>
        </section>
    );
}