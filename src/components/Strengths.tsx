const strengths = [
  {
    id: "domain",
    icon: "🌐",
    title: "도메인·운영 경험",
    points: [
      "커머스·백오피스 등 실서비스 도메인 경험",
      "대규모 서비스 운영으로 배포·모니터링·오류 대응 경험",
      "운영 흐름과 실제 문제를 기준으로 기술과 구조를 선택",
    ],
  },
  {
    id: "frontend",
    icon: "🧩",
    title: "프론트엔드 전문성",
    points: [
      "React·TypeScript 기반 구조 설계와 상태 관리, 인증·권한 분기 경험",
      "Vue 레거시 → React SPA 재구현, Monorepo 운영 등 FE 아키텍처 경험",
      "iOS 경험을 바탕으로 웹·모바일 전반의 UX를 함께 고려한 화면 설계",
    ],
  },
  {
    id: "way-of-work",
    icon: "💡",
    title: "일하는 방식",
    points: [
      "타 직군과 매끄럽게 소통하며 ‘일이 잘 돌아가는 상태’를 중시",
      "단독 프로젝트 경험 → 끝까지 책임지고 마무리하는 태도",
      "새로운 기술을 빠르게 익히고 실제 서비스에 적용하는 학습 속도",
    ],
  },
];

const Strengths = () => {
  return (
    <section id="strengths" className="border-t border-slate-800 pt-10 pb-12 scroll-mt-10">
      <h2 className="text-xl font-semibold text-left sm:text-center">Strengths</h2>
      <p className="mt-2 text-sm sm:text-[15px] text-slate-400 leading-relaxed text-left sm:text-center">
        세 가지 분야의 강점입니다.
      </p>

      <div className="mx-auto mt-6 grid max-w-5xl gap-5 px-4 md:grid-cols-3">
        {strengths.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm text-left"
          >
            <header className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <h3 className="font-semibold text-slate-50 text-sm sm:text-base">{item.title}</h3>
            </header>

            <ul className="mt-3 pl-5 space-y-1.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-200">
              {item.points.map((line) => (
                <li key={line} className="list-disc">
                  {line}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Strengths;
