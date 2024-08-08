import Link from "next/link";

export default function About() {
    return(
        <section className="flex h-screen">
            <nav className="flex flex-col items-center justify-between bg-slate-500 w-1/5 py-16">
                <div className="flex flex-col items-center gap-7">
                    <Link href='https://github.com/Hongaproject' target="_blank" className="text-4xl font-bold text-white">GitHub</Link>
                    <Link href='https://github.com/Hongaproject' target="_blank" className="text-4xl font-bold text-white">Velog</Link>
                </div>
                <Link href='mailto:tkwlscjq13@naver.com' target="_blank" className="text-lg text-gray-200 ">tkwlscjq13@naver.com</Link>
            </nav>
            <main className="bg-black bg-opacity-20 w-4/5 flex flex-col">
                <div className="flex items-center justify-center h-2/5">
                    프로필사진
                </div>
                <div className="flex items-center justify-center h-3/5">
                    소개 글
                </div>
            </main>
        </section>
    );
}