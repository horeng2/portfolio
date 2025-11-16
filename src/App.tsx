import "./App.css";

// src/App.tsx
// src/App.tsx
// src/App.tsx
import {
  SiReact,
  SiSvelte,
  SiVuedotjs,
  SiNodedotjs,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiSwift,
  SiApple,
} from "react-icons/si";

import { AzureIcon } from "./assets/azureIcon";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-base font-semibold tracking-tight">Kim Seonyeong</div>
          <nav className="flex flex-wrap gap-3 text-xs text-slate-300">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#strengths" className="hover:text-white">
              Strengths
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-20">
        {/* Hero */}
        <section id="hero" className="pt-12 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">Frontend Engineer · iOS Developer</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">
            변화를 두려워하지 않는 개발자 <span className="text-sky-400">김선영</span>입니다.
          </h1>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            정육각에서 약 2년 8개월 동안 커머스 웹과 관리자 시스템을 개발하며 비즈니스 핵심 도메인을 폭넓게
            경험했습니다. React·Vue·SvelteKit 기반 SPA 개발부터 Node.js·Firebase·CosmosDB 연동, Azure AD(MSAL) 인증,
            Docker/Kubernetes 환경 대응까지 클라이언트와 서버 전반의 흐름을 이해하는 개발자로 성장했습니다. 또한 정육각
            iOS 앱 선물하기 기능을 SwiftUI·TCA 기반으로 네이티브 재구현하며 웹과 모바일 양쪽 생태계를 함께 바라볼 수
            있게 되었습니다.
          </p>
        </section>

        {/* About */}
        <section id="about" className="border-t border-slate-800 pt-8 pb-10">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            저는 단순한 기능 구현보다{" "}
            <span className="font-medium text-slate-100">문제를 해결하고 흐름을 개선하는 일</span>에 더 큰 흥미를
            느낍니다. 초록마을에서는 근태 관리 시스템(HERA)과 FC/이커머스 관리자 백오피스를 주도적으로 개발해 운영
            효율을 높였고, 정육각에서는 커머스 웹과 선물하기 기능을 개선하며 안정적인 사용자 경험을 제공하는 데
            집중했습니다.
          </p>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            React·Vue·SvelteKit 등 여러 프레임워크를 실무에서 사용해 본 경험이 있어, 기술 자체보다 문제에 적합한 도구를
            선택하는 것을 중요하게 생각합니다. Azure AD(MSAL) 기반 인증, 권한 분기, Slack 알림, 반응형 UI 등 실제
            현장에서 필요한 기능들을 안정적으로 구현해 왔으며, 공무원 시절 전산직 경험 덕분에 인프라와 행정 시스템 운영
            관점도 함께 갖추고 있습니다.
          </p>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            iOS 사이드 프로젝트를 통해 SwiftUI·Combine·클린 아키텍처에도 익숙하며, 웹과 모바일 전반에 걸쳐 사용자 경험을
            통합적으로 보는 개발자를 지향합니다.
          </p>
        </section>

        {/* Skills – 아이콘 기반 카드 UI */}
        <section id="skills" className="border-t border-slate-800 pt-8 pb-10">
          <h2 className="text-lg font-semibold">Skills</h2>
          <p className="mt-2 text-xs text-slate-400">자주 사용하는 기술들을 분야별로 정리했습니다.</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Frontend */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-100">Frontend</h3>
                <div className="flex gap-2 text-slate-500">
                  <SiReact className="text-2xl group-hover:text-sky-400 transition-colors" />
                  <SiVuedotjs className="text-2xl group-hover:text-emerald-400 transition-colors" />
                  <SiSvelte className="text-2xl group-hover:text-orange-400 transition-colors" />
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                <li>React, Vue 2/3, SvelteKit, Next.js</li>
                <li>TypeScript, Redux Toolkit, Vuex</li>
                <li>Tailwind CSS, Emotion, Styled Components, SCSS</li>
                <li>Vite, Webpack</li>
              </ul>
            </div>

            {/* Backend & Infra */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-100">Backend & Infra</h3>
                <div className="flex gap-2 text-slate-500">
                  <SiNodedotjs className="text-2xl group-hover:text-emerald-400 transition-colors" />
                  <SiFirebase className="text-2xl group-hover:text-amber-400 transition-colors" />
                  <SiDocker className="text-2xl group-hover:text-sky-400 transition-colors" />
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                <li>Node.js, REST API</li>
                <li>Firebase RTDB / Firestore</li>
                <li>CosmosDB, MongoDB, PostgreSQL(Prisma)</li>
                <li>Docker, Kubernetes, Azure, GitHub Actions</li>
              </ul>
            </div>

            {/* Platform & Tooling */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-100">Platform & Tooling</h3>
                <div className="flex gap-2 text-slate-500">
                  <div className="flex gap-2">
                    <AzureIcon className="h-6 w-6" />
                    <SiGithubactions className="h-6 w-6 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                <li>Azure AD(MSAL) 기반 인증 및 권한 분기</li>
                <li>ESLint, Prettier, Sentry</li>
                <li>GitHub PR 코드리뷰, Figma 기반 UI 협업</li>
                <li>Slack Webhook 알림 연동</li>
              </ul>
            </div>

            {/* iOS & Mobile */}
            <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-100">iOS & Mobile</h3>
                <div className="flex gap-2 text-slate-500">
                  <SiSwift className="text-2xl group-hover:text-orange-400 transition-colors" />
                  <SiApple className="text-2xl group-hover:text-slate-100 transition-colors" />
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                <li>Swift, SwiftUI, UIKit</li>
                <li>TCA, Combine, MVVM, 클린 아키텍처</li>
                <li>CoreData, Keychain, Localization</li>
                <li>애니메이션, GitHub/OpenWeather API 연동</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-slate-800 pt-8 pb-10">
          <h2 className="text-lg font-semibold">Experience</h2>
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
                  인수 후 자회사 **초록마을 시스템 개발도 정육각 개발팀에서 통합 운영**, 근태·백오피스·매장관리 시스템
                  개선 및 신규 기능 개발
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

        {/* Projects */}
        <section id="projects" className="border-t border-slate-800 pt-8 pb-10">
          <h2 className="text-lg font-semibold">Projects</h2>
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
                클라이언트·서버·DB까지 단독 개발했습니다. Slack 알림 연동과 관리자 권한 분기, 연차 촉진 정책을 반영해
                실제 운영 흐름에 맞춘 기능을 구현했습니다.
              </p>
            </article>

            {/* 3 FC 관리자 백오피스 */}
            <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="font-semibold">초록마을 FC 관리자 백오피스</h3>
              <p className="mt-1 text-[11px] text-slate-400">
                React 18 · TypeScript · Redux Toolkit · Emotion · MUI · MSAL
              </p>
              <p className="mt-2 text-slate-200">
                기존 Vue 기반 시스템을 React SPA로 마이그레이션하고, MSAL 기반 인증 및 권한 구조를 설계했습니다.
                프랜차이즈 매장 개설 상담· 사업설명회 관리 기능, 반응형 UI 구성, Docker/Kubernetes 기반 배포 환경
                대응까지 포함해 운영 효율을 높였습니다.
              </p>
            </article>

            {/* 4 아틀라스 */}
            <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="font-semibold">초록마을 이커머스 백오피스 (아틀라스)</h3>
              <p className="mt-1 text-[11px] text-slate-400">
                React 18 · Vite · Tailwind · MSAL · AG Grid · NestJS · PostgreSQL
              </p>
              <p className="mt-2 text-slate-200">
                Turborepo 기반 모노레포 구조에서 리셀러 관리, 전시 상태 관리, 카테고리·상품 우선순위 제어, 매장 전용
                상품 관리 기능을 개발했습니다. 데이터 구조 변경에 따른 리팩터링과 운영 피드백 반영으로 유지보수성과 운영
                효율을 함께 개선했습니다.
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
                정육각 앱 내 선물하기 기능을 웹뷰 기반으로 구현한 뒤, SwiftUI·TCA 기반 iOS 네이티브 기능으로
                재구현했습니다. 로그인/비로그인 인증 흐름, 장바구니/결제/배송, 알림톡 시나리오 처리 전반을 담당했고, App
                Store 배포까지 전체 과정을 운영했습니다.
              </p>
            </article>

            {/* 7 새벽배송 관리자 */}
            <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="font-semibold">초록마을 새벽배송 관리자 시스템</h3>
              <p className="mt-1 text-[11px] text-slate-400">Node.js · Express · Handlebars · Bootstrap · CosmosDB</p>
              <p className="mt-2 text-slate-200">
                새벽배송 운영에 필요한 주문·배송·가맹점·통계 조회 및 관리 기능을 단독 개발했습니다. 상품 발주·입고 내역,
                우편번호 제한, Azure AD 기반 권한 제어와 Slack 알림을 연동해 운영 데이터의 신뢰성과 업무 효율을
                높였습니다.
              </p>
            </article>

            {/* 8 iOS 사이드 프로젝트 */}
            <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="font-semibold">iOS Side Projects</h3>
              <p className="mt-1 text-[11px] text-slate-400">SwiftUI · async/await · Combine · CoreData · GitHub API</p>
              <p className="mt-2 text-slate-200">
                GitHub 커밋 기록에 메모를 더하는 <span className="font-medium">Commit Diary</span>와 여러 도시의 날씨를
                조회하는 <span className="font-medium">오늘의 날씨</span> 앱을 개발했습니다. GitHub API, OpenWeather
                API, Keychain, CoreData, Localization, Animation 등을 활용해 앱 구조와 사용자 경험을 함께 설계했습니다.
              </p>
            </article>
          </div>
        </section>

        {/* Strengths */}
        <section id="strengths" className="border-t border-slate-800 pt-8 pb-10">
          <h2 className="text-lg font-semibold">Strengths</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              • 웹뷰, 모노레포, 새벽배송·근태·커머스 등 다양한 환경과 도메인을 경험하며 문제 중심으로 기술을 선택하는
              역량
            </li>
            <li>• 대규모 서비스(정육각) 운영 경험을 바탕으로 안정적인 배포와 오류 대응에 익숙함</li>
            <li>• React·TypeScript 기반 구조 설계 및 MSAL 인증, 권한 분기 등 기업 환경 개발 경험</li>
            <li>• iOS 앱 개발 경험을 바탕으로 웹과 모바일 전반의 사용자 경험을 함께 고려하는 설계</li>
            <li>• Docker/Kubernetes, CI/CD 파이프라인 이해로 배포 프로세스에 능동적으로 참여 가능</li>
            <li>• 단독 프로젝트 및 풀스택 개발 경험으로 끝까지 책임지고 마무리하는 업무 스타일</li>
            <li>• 새로운 기술을 시도하고 빠르게 학습해 기존 서비스에 녹여내는 태도</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-slate-800 pt-8 pb-4">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-3 text-sm text-slate-300">채용 관련 문의는 아래 연락처로 편하게 연락 주세요.</p>
          <div className="mt-3 text-sm">
            <p className="text-slate-200">
              Email{" "}
              <a href="mailto:huski.a.a@gmail.com" className="text-sky-400 hover:underline">
                huski.a.a@gmail.com
              </a>
            </p>
            <p className="mt-1 text-slate-200">Phone 010-5189-1992</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
