const Projects = () => (
  <section id="projects" className="border-t border-slate-800 pt-8 pb-10 scroll-mt-10">
    <h2 className="text-xl font-semibold">Projects</h2>
    <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
      {/* 1 정육각 커머스 웹 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">정육각 커머스 웹</h3>
        <p className="mt-1 text-[11px] text-slate-400">
          Vue 2.7 · Vuex · Vite · TypeScript · Axios · Firebase · Sentry
        </p>
        <p className="mt-2 text-slate-200">
          100만 명 이상 회원을 대상으로 하는 온라인 커머스 웹을 유지보수하고 신규 기능을 개발했습니다. 명절 이벤트
          페이지, 선물 세트·선물하기· 팝업 상품 구조 분리, 시크릿 상품 노출, 네이버 SEO 최적화, CSRF 보안 강화 등
          실서비스 안정성과 매출에 직결되는 부분을 다뤘습니다.
        </p>
      </article>

      {/* 2 HERA */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">초록마을 근태관리 시스템 (HERA)</h3>
        <p className="mt-1 text-[11px] text-slate-400">
          SvelteKit · TypeScript · Tailwind · Firebase · CosmosDB · MongoDB
        </p>
        <p className="mt-2 text-slate-200">
          전 직원 연차/보상휴가/휴일근무 신청·승인, 부서·직원·연차 유형 관리 등 근태 전반을 다루는 시스템을
          클라이언트·서버·DB까지 단독 개발했습니다. Slack 알림 연동과 관리자 권한 분기, 연차 촉진 정책을 반영해 실제
          운영 흐름에 맞춘 기능을 구현했습니다.
        </p>
      </article>

      {/* 3 FC 관리자 백오피스 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">초록마을 FC 관리자 백오피스</h3>
        <p className="mt-1 text-[11px] text-slate-400">React 18 · TypeScript · Redux Toolkit · Emotion · MUI · MSAL</p>
        <p className="mt-2 text-slate-200">
          기존 Vue 기반 시스템을 React SPA로 마이그레이션하고, MSAL 기반 인증 및 권한 구조를 설계했습니다. 프랜차이즈
          매장 개설 상담· 사업설명회 관리 기능, 반응형 UI 구성, Docker/Kubernetes 기반 배포 환경 대응까지 포함해 운영
          효율을 높였습니다.
        </p>
      </article>

      {/* 4 아틀라스 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">초록마을 이커머스 백오피스 (아틀라스)</h3>
        <p className="mt-1 text-[11px] text-slate-400">
          React 18 · Vite · Tailwind · MSAL · AG Grid · NestJS · PostgreSQL
        </p>
        <p className="mt-2 text-slate-200">
          Turborepo 기반 모노레포 구조에서 리셀러 관리, 전시 상태 관리, 카테고리·상품 우선순위 제어, 매장 전용 상품 관리
          기능을 개발했습니다. 데이터 구조 변경에 따른 리팩터링과 운영 피드백 반영으로 유지보수성과 운영 효율을 함께
          개선했습니다.
        </p>
      </article>

      {/* 5 매장 관리 시스템 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">초록마을 매장 관리 시스템 (moffice)</h3>
        <p className="mt-1 text-[11px] text-slate-400">Node.js(Express) · CosmosDB · Bootstrap</p>
        <p className="mt-2 text-slate-200">
          매장 포스기에서 사용하는 체크리스트와 할인 바코드 출력 기능을 개발했습니다. 이미지 업로드, Slack 연동,
          직영/가맹점 구분 UI와 권한 분기 메뉴 구성 등을 구현해 현장 운영 편의성과 자동화를 높였습니다.
        </p>
      </article>

      {/* 6 정육각 선물하기 웹뷰/네이티브 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">정육각 선물하기 (웹뷰 & iOS 네이티브)</h3>
        <p className="mt-1 text-[11px] text-slate-400">React · TypeScript · Firestore · SwiftUI · TCA · Tuist</p>
        <p className="mt-2 text-slate-200">
          정육각 앱 내 선물하기 기능을 웹뷰 기반으로 구현한 뒤, SwiftUI·TCA 기반 iOS 네이티브 기능으로 재구현했습니다.
          로그인/비로그인 인증 흐름, 장바구니/결제/배송, 알림톡 시나리오 처리 전반을 담당했고, App Store 배포까지 전체
          과정을 운영했습니다.
        </p>
      </article>

      {/* 7 새벽배송 관리자 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">초록마을 새벽배송 관리자 시스템</h3>
        <p className="mt-1 text-[11px] text-slate-400">Node.js · Express · Handlebars · Bootstrap · CosmosDB</p>
        <p className="mt-2 text-slate-200">
          새벽배송 운영에 필요한 주문·배송·가맹점·통계 조회 및 관리 기능을 단독 개발했습니다. 상품 발주·입고 내역,
          우편번호 제한, Azure AD 기반 권한 제어와 Slack 알림을 연동해 운영 데이터의 신뢰성과 업무 효율을 높였습니다.
        </p>
      </article>

      {/* 8 iOS 사이드 프로젝트 */}
      <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold">iOS Side Projects</h3>
        <p className="mt-1 text-[11px] text-slate-400">SwiftUI · async/await · Combine · CoreData · GitHub API</p>
        <p className="mt-2 text-slate-200">
          GitHub 커밋 기록에 메모를 더하는 <span className="font-medium">Commit Diary</span>와 여러 도시의 날씨를
          조회하는 <span className="font-medium">오늘의 날씨</span> 앱을 개발했습니다. GitHub API, OpenWeather API,
          Keychain, CoreData, Localization, Animation 등을 활용해 앱 구조와 사용자 경험을 함께 설계했습니다.
        </p>
      </article>
    </div>
  </section>
);

export default Projects;
