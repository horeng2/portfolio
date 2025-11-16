const Experience = () => (
  <section id="experience" className="border-t border-slate-800 pt-8 pb-10 scroll-mt-10">
    <h2 className="text-xl font-semibold">Experience</h2>
    <div className="mt-4 space-y-4 text-sm">
      {/* 정육각 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <header className="flex items-center justify-between gap-2">
          <div className="font-semibold">정육각 · 프론트엔드 개발자</div>
          <div className="text-[11px] text-slate-400">커머스 웹 · iOS · 자회사 시스템 개발</div>
        </header>

        <p className="mt-1 text-[11px] text-slate-400">약 2년 8개월 근무</p>

        <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-200">
          <li>정육각 커머스 웹(Vue 2.7) 유지·신규 기능 개발</li>
          <li>앱 선물하기 기능 웹뷰 구현 및 SwiftUI 기반 iOS 네이티브 재구현</li>
          <li>Sentry 모니터링 기반 실시간 이슈 대응 및 안정적인 배포 경험</li>
          <li>
            자회사 초록마을 시스템 개발도 정육각 개발팀에서 통합 운영, 근태·백오피스·매장관리 시스템 개선 및 신규 기능
            개발
          </li>
        </ul>
      </article>

      {/* 초록마을 (자회사 프로젝트로 별도 명시) */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <header className="flex items-center justify-between gap-2">
          <div className="font-semibold">초록마을 (정육각 자회사) · 시스템 개발</div>
          <div className="text-[11px] text-slate-400">근태관리 · 백오피스 · 새벽배송</div>
        </header>

        <p className="mt-1 text-[11px] text-slate-400">정육각 개발팀 소속으로 초록마을 전사 시스템을 통합 개발</p>

        <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-200">
          <li>근태관리 시스템(HERA) 클라이언트·서버·DB 단독 구축</li>
          <li>프랜차이즈 관리자 백오피스 React SPA 전면 재개발</li>
          <li>이커머스 백오피스(아틀라스) Turborepo 기반 모노레포 개발</li>
          <li>새벽배송 관리자 시스템(Node.js + Express) 실시간 운영 기능 개발</li>
        </ul>
      </article>
    </div>
  </section>
);

export default Experience;
