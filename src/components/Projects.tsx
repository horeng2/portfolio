import { useState } from "react";

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  tech: string;
  summary: string[];
  details: string[];
  linkLabel?: string;
  linkUrl?: string;
};

const projects: Project[] = [
  {
    id: "butcher-web",
    title: "정육각 커머스 웹",
    subtitle: "온라인 커머스 운영 및 신규 기능 개발",
    tech: "Vue 2.7 · Vuex · Vite · Axios · Firebase · Sentry",
    summary: ["100만+ 회원 대상 커머스 웹/모바일 웹 유지·신규 기능 개발", "프로모션(명절·선물하기) 웹뷰·페이지 개발"],
    details: [
      "CSRF 대응을 위한 Axios 인터셉터 인증 구조 개선",
      "네이버 SEO 최적화로 주요 키워드 상위 노출",
      "Sentry 기반 모니터링·오류 대응 및 안정적 배포",
    ],
  },

  {
    id: "hera",
    title: "초록마을 근태관리 시스템 (HERA)",
    subtitle: "전 직원 근태·연차 관리 시스템 (단독 설계·개발)",
    tech: "SvelteKit · TypeScript · Tailwind · Firebase(Firestore) · CosmosDB/MongoDB · Slack Webhook",
    summary: [
      "근태/연차/보상휴가/휴일근무 신청·승인 시스템 단독 구축",
      "근태 도메인 기반의 데이터 모델·컬렉션·타입 구조 설계",
    ],
    details: [
      "근태/연차 도메인 분석 후 CosmosDB 컬렉션/문서 구조 모델링",
      "잔여 연차·이력 계산 로직 및 TypeScript 타입/유틸 구조화",
      "부서/직원/연차 유형 관리자 메뉴 및 권한 분기 로직 구현",
    ],
  },

  {
    id: "dawn-delivery",
    title: "초록마을 새벽배송 관리자 시스템",
    subtitle: "새벽 배송 실시간 운영 관리 (단독 개발)",
    tech: "Node.js · Express · Handlebars · CosmosDB/MongoDB · Azure AD",
    summary: ["주문·배송·가맹점·통계 실시간 운영 데이터 조회·관리", "Azure AD·Slack 연동으로 운영 효율 개선"],
    details: [
      "주문·배송·가맹점·통계 실시간 조회 및 관리 기능 개발",
      "상품 발주·입고·우편번호 제한 등 운영 도메인 로직 구현",
      "CosmosDB/MongoDB 직접 연결해 데이터 모델 설계·가공",
    ],
  },

  {
    id: "chogreen-admins",
    title: "초록마을 운영 백오피스",
    subtitle: "가맹점 홍보 관리 백오피스 · 이커머스 관리 백오피스 · 매장 운영 백오피스",
    tech: "React · Redux Toolkit · Vite · MUI · Tailwind · MSAL · Turborepo · Docker/K8s · Node.js · CosmosDB",
    summary: [
      "프랜차이즈·이커머스·매장 운영 등 전사 운영 시스템 다수 개발",
      "React SPA·Monorepo 환경 기반 관리자 기능 고도화",
    ],
    details: [
      "기존 Vue FC 시스템을 React SPA로 재구현",
      "MSAL 기반 인증 및 권한 분기 설계",
      "리셀러 관리/전시/우선순위 등 운영 기능 고도화",
      "체크리스트·바코드 출력 등 운영 UI/UX 개선",
    ],
  },

  {
    id: "gift",
    title: "정육각 선물하기 기능",
    subtitle: "웹뷰 → iOS 네이티브 전환",
    tech: "React · Firestore · SwiftUI · TCA · Tuist",
    summary: ["선물하기 기능의 인증~결제 전체 플로우 담당", "웹뷰 기반 기능을 SwiftUI·TCA로 네이티브 재구현"],
    details: [
      "[웹뷰] 로그인/비로그인 인증 및 접근 제어 구현",
      "[웹뷰] 장바구니·결제·배송 API 연동 및 알림톡 처리",
      "[iOS] 웹뷰 로직을 SwiftUI 기반 네이티브 UI로 전환",
      "[iOS] TCA 기반 상태 관리·로직 분리, 배포 파이프라인 운영",
    ],
  },
];

const Projects = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="border-t border-slate-800 pt-8 pb-10 scroll-mt-10">
      <h2 className="text-xl font-semibold text-left sm:text-center">Projects</h2>

      <p className="mt-2 text-sm text-slate-400 text-left sm:text-center">
        서비스 환경 에서 운영했던 프로젝트들입니다.
      </p>
      <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 px-4">
        {projects.map((project) => {
          const isOpen = openId === project.id;

          return (
            <article
              key={project.id}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm shadow-sm transition-colors hover:border-sky-500/70"
            >
              <button
                onClick={() => toggle(project.id)}
                className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-sky-500 bg-slate-900/80 text-[11px] text-slate-200 hover:border-sky-500 hover:text-sky-300"
              >
                <span className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}>▶</span>
              </button>
              <header className="text-center">
                <h3 className="text-base font-semibold text-slate-50">{project.title}</h3>
                {project.subtitle && <p className="mt-0.5 text-[12px] text-slate-300">{project.subtitle}</p>}
                <p className="mt-1 text-[12px] text-slate-400">{project.tech}</p>
              </header>
              <ul className="mx-auto mt-3 max-w-[400px] list-disc space-y-1.5 pl-4 text-slate-200">
                {project.summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[600px] opacity-100 mt-1.5" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mx-auto max-w-[400px] list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-slate-200">
                  {project.details.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-center text-[12px] text-sky-400 hover:underline"
                  >
                    {project.linkLabel ?? "더 보기"}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
