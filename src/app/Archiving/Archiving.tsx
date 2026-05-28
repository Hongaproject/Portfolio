import Link from "next/link";
import Image from "next/image";

export default function Archiving() {
  const archivingData = [
    {
      id: "github-heading",
      title: "GitHub",
      // 깃허브도 구조를 통일하여 라벨과 주소를 매핑합니다.
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Hongaproject",
          linkText: "github.com/Hongaproject",
          ariaLabel: "깃허브 사이트로 이동",
        },
      ],
      description: "소스 코드 저장소입니다.",
      items: ["혼자서 코딩 공부 한 소스 코드", "프로젝트 소스 코드"],
    },
    {
      id: "blog-heading",
      title: "Velog, Tistory",
      // 원하시는 대로 각각의 블로그 이름(label)과 주소를 매핑합니다.
      links: [
        {
          label: "Velog",
          href: "https://velog.io/@hongga/posts",
          linkText: "https://velog.io/@hongga/posts",
          ariaLabel: "벨로그 사이트로 이동",
        },
        {
          label: "Tistory",
          href: "https://honggacoding.tistory.com/",
          linkText: "https://honggacoding.tistory.com/",
          ariaLabel: "티스토리 사이트로 이동",
        },
      ],
      description: "공부 및 지식 공유 목적의 블로그입니다.",
      items: [
        "공부한 내용을 복습하기 위해 기록",
        "프로젝트 내용 정리",
        "개발하면서 배운 내용 및 해결 방법 정리",
        "지식 공유를 통한 선한 영향력 선사",
      ],
    },
  ];

  return (
    <section className="min-h-screen" aria-labelledby="share-heading">
      <header className="border-b-8 pb-5 border-yellow-400">
        <h1 id="share-heading" className="text-6xl font-bold">
          Archiving
        </h1>
      </header>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {archivingData.map((item) => (
          <article
            key={item.id}
            aria-labelledby={item.id}
            className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex flex-col gap-4"
          >
            <h2 id={item.id} className="text-3xl font-semibold">
              {item.title}
            </h2>

            {/* 링크 영역: 아이콘과 함께 세로로 링크들을 나열합니다 */}
            <div className="text-xl flex flex-col gap-2">
              {item.links.map((link, idx) => (
                <div key={idx} className="flex items-center flex-wrap gap-1">
                  <Image
                    src="/img/link.png"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  <div>
                    <span className="font-medium text-gray-900">
                      {link.label}:{" "}
                    </span>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="text-sky-500 hover:underline ml-1 break-all"
                      aria-label={link.ariaLabel}
                    >
                      {link.linkText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl">
              <strong>{item.description.replace("입니다.", "")}</strong>
              입니다.
            </p>

            <ul
              className="list-disc pl-6 text-xl space-y-2 text-gray-700"
              aria-label={`${item.title} 관련 항목`}
            >
              {item.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
