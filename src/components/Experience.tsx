const Experience = () => (
  <section id="experience" className="border-t border-slate-800 pt-8 pb-10 scroll-mt-10">
    <h2 className="text-xl font-semibold text-left sm:text-center">Experience</h2>

    <div className="mt-6 text-sm text-left">
      <article className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-5 shadow-sm">
        <header>
          <h3 className="text-base font-semibold text-slate-50 sm:text-lg">정육각 · 프론트엔드 개발자</h3>
          <p className="mt-1 text-[12px] font-medium text-slate-300">커머스 웹 · iOS · 자회사(초록마을) 시스템 개발</p>
          <p className="mt-0.5 text-[11px] text-slate-400">약 2년 8개월 근무</p>
        </header>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-slate-100 marker:text-slate-500 sm:text-[14px]">
          {/* 정육각 웹 */}
          <li>커머스 웹(Vue 2.7) 기능 유지·신규 개발</li>
          <li>명절·선물세트 등 프로모션 페이지 및 웹뷰 UI 개발</li>
          <li>상품 노출 구조 리팩터링 및 운영 로직 개선</li>
          <li>Axios 인터셉터 인증·보안 구조 개선</li>

          {/* 정육각 iOS */}
          <li>앱 선물하기 기능: 웹뷰 → SwiftUI·TCA 기반 iOS 네이티브 재구현</li>

          {/* 초록마을 시스템 */}
          <li>초록마을 근태관리 시스템(HERA) 클라이언트·서버·DB 단독 구축</li>
          <li>초록마을 FC 관리자 백오피스 React SPA 전면 재개발(MSAL 인증)</li>
          <li>초록마을 이커머스 관리자(아틀라스) 모노레포 환경 운영 및 기능 고도화</li>
          <li>초록마을 새벽배송 운영 시스템(Node.js·Express) 실시간 기능 개발</li>
        </ul>
      </article>
    </div>
  </section>
);

export default Experience;
