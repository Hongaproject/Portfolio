"use client";

import Link from "next/link";
import Image from "next/image";
import TypeIt from "typeit-react";

export default function About() {
  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      <nav
        className="flex flex-col items-center justify-between bg-slate-500 md:w-1/5 w-full py-16"
        role="navigation"
      >
        <div className="flex flex-col items-center gap-7">
          <Link
            href="https://github.com/Hongaproject"
            target="_blank"
            aria-label="깃허브 사이트로 이동"
            className="text-4xl font-bold text-white hover:text-yellow-500 transition-colors duration-500 ease-in-out"
          >
            GitHub
          </Link>
          <Link
            href="https://velog.io/@hongga/posts"
            target="_blank"
            aria-label="벨로그 사이트로 이동"
            className="text-4xl font-bold text-white hover:text-yellow-500 transition-colors duration-500 ease-in-out"
          >
            Velog
          </Link>
        </div>
        <Link
          href="mailto:tkwlscjq13@naver.com"
          target="_blank"
          aria-label="이메일 보내기"
          className="text-lg text-gray-200 mt-7"
        >
          tkwlscjq13@naver.com
        </Link>
      </nav>
      <section
        className="bg-gray-300 bg-opacity-10 md:w-4/5 w-full flex flex-col container mx-auto px-5 py-20 items-center justify-center"
        aria-label="소개 섹션"
      >
        <TypeIt
          className="text-3xl font-bold mt-8 mb-14 text-center text-gray-500"
          options={{
            strings: [
              "끊임없이 배우며 더 나은 사용자 경험을 만들어가는 개발자 홍성원입니다.",
            ],
            speed: 70,
            waitUntilVisible: true,
          }}
        />
        <article className="flex flex-col md:flex-row items-center">
          <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="/img/photo.jpg"
              alt="프로필 사진"
              width={420}
              height={520}
              className="object-cover object-center rounded-3xl"
            />
          </div>

          <div className="flex flex-col md:items-start md:text-left items-center text-center max-w-2xl px-4 md:px-8">
            <p className="leading-relaxed text-xl">
              처음 개발을 접했을 때,{" "}
              <strong>
                제가 작성한 코드가 화면에 바로 나타나는 경험이 무척
                흥미로웠습니다.
              </strong>
              <br />
              작은 코드의 변화가 실제 화면의 동작과{" "}
              <strong>사용자 경험에 영향을 준다는 점</strong>에서 큰 매력을
              느꼈고,
              <br />
              그때부터 <strong>프론트엔드 개발자로 성장하고 싶다는 목표</strong>
              를 가지게 되었습니다.
              <br />
              <br />
              새로운 기능이나 기술을 접할 때마다{" "}
              <strong>단순히 구현하는 것에 그치지 않고</strong>, <br />
              더 효율적인 방법은 없는지 고민하며 개발하고 있습니다.
              <br />
              특히 사용자가 웹 서비스를 이용할 때{" "}
              <strong>
                불편함 없이 정보를 찾고 기능을 사용할 수 있도록 하는 것
              </strong>
              을 중요한 가치로 생각합니다.
              <br />
              <br />
              또한 프로젝트를 진행하며 <strong>소통과 협업의 중요성</strong>을
              느꼈습니다.
              <br />
              개발은 혼자 완성하는 작업이 아니라 여러 구성원과{" "}
              <strong>함께 만들어가는 과정</strong>이라고 생각합니다.
              <br />
              명확한 커뮤니케이션을 통해 의견을 공유하고{" "}
              <strong>더 나은 방향을 함께 고민하는 개발자</strong>로 성장하고자
              합니다.
            </p>
          </div>
        </article>
        <div className="flex flex-col items-center mt-24">
          <Image
            src="/img/down.png"
            alt="아래로 스크롤 안내"
            width={48}
            height={48}
            className="animate-bounce"
          />
        </div>
        <div
          className="fixed bottom-10 right-0 z-10"
          role="button"
          onClick={moveTop}
        >
          <Image
            src="/img/top.png"
            alt="최상단으로 이동"
            width={56}
            height={56}
            className="w-14 h-14 ml-auto mr-10 rounded-full bg-slate-100 shadow-gray-500 shadow-2xl cursor-pointer"
          />
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
            animation: bounce 6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
          }
        `}</style>
      </section>
    </section>
  );
}
