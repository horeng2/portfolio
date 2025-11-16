import { FiLayers, FiGrid, FiSmartphone, FiTrendingUp } from "react-icons/fi";

const About = () => (
  <section id="about" className="border-t border-slate-800 pt-8 pb-10 scroll-mt-10">
    <h2 className="text-xl font-semibold text-sky-400 text-center">About</h2>

    <p className="text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
      iOS로 시작해 웹 프론트엔드까지 영역을 넓혀 왔습니다.
      <br />
      필요한 기술을 상황에 맞게 선택하고 빠르게 구현하는 데 강점을 지니며,
      <br />
      사용자 경험을 고려해 필요한 기능을 정확하게 구현합니다.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
      {/* 카드 1 */}
      <div className="rounded-2xl bg-slate-900/40 p-6 text-center border border-slate-800">
        <FiLayers className="h-7 w-7 text-sky-400 mx-auto" />
        <h3 className="mt-4 text-sm font-semibold text-slate-100">운영 중심 시스템 설계</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          이커머스, 백오피스 등
          <br />
          운영 환경의 시스템을 설계·개발
        </p>
      </div>

      {/* 카드 2 */}
      <div className="rounded-2xl bg-slate-900/40 p-6 text-center border border-slate-800">
        <FiGrid className="h-7 w-7 text-sky-400 mx-auto" />
        <h3 className="mt-4 text-sm font-semibold text-slate-100">다양한 프레임워크 경험</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          React·Vue·SvelteKit 등<br /> 여러 프레임워크를 실무에 사용
        </p>
      </div>

      {/* 카드 3 */}
      <div className="rounded-2xl bg-slate-900/40 p-6 text-center border border-slate-800">
        <FiSmartphone className="h-7 w-7 text-sky-400 mx-auto" />
        <h3 className="mt-4 text-sm font-semibold text-slate-100">모바일 이해도</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          SwiftUI·TCA 기반
          <br />
          iOS 개발 경험을 통한
          <br />
          모바일 생태계 이해
        </p>
      </div>

      {/* 카드 4 */}
      <div className="rounded-2xl bg-slate-900/40 p-6 text-center border border-slate-800">
        <FiTrendingUp className="h-7 w-7 text-sky-400 mx-auto" />
        <h3 className="mt-4 text-sm font-semibold text-slate-100">향후 방향</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          프론트엔드에서 백엔드까지 확장하는 풀스택 개발자로 성장
        </p>
      </div>
    </div>
  </section>
);

export default About;
