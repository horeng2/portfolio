const Experience = () => (
  <section id="experience" className="border-t border-slate-800 pt-10 pb-12 scroll-mt-10">
    <h2 className="text-xl font-semibold text-left sm:text-center">Experience</h2>

    <div className="mt-6 text-sm text-left">
      <article className="mx-auto max-w-[734px] rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
        <header>
          <h3 className="text-base sm:text-lg font-semibold text-slate-50">정육각 – 프론트엔드 개발자</h3>

          <p className="mt-1 text-[12px] font-medium text-slate-300 leading-relaxed">
            정육각 커머스 웹 · iOS 개발 / 자회사(초록마을) 시스템 개발
          </p>

          <p className="mt-0.5 text-[11px] text-slate-400">2022.12. ~ 2025.07. (2년 8개월)</p>
        </header>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-slate-100 marker:text-slate-500 sm:text-[14px]">
          <li>정육각 커머스 웹(Vue 2.7) 유지·신규 기능 개발 및 운영 로직 개선</li>
          <li>초록마을 근태·백오피스·매장·배송 등 핵심 운영 시스템 다수 개발</li>
          <li>웹뷰 → SwiftUI·TCA 기반 iOS 네이티브 재구현</li>
          <li>운영 환경 기반 구조 개선 및 도메인 요구사항 반영</li>
        </ul>
      </article>
    </div>
  </section>
);

export default Experience;
