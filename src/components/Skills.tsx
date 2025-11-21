import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiSvelte,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiGithubactions,
  SiSwift,
  SiApple,
} from "react-icons/si";
import { FiCode, FiServer, FiTool, FiSmartphone } from "react-icons/fi";

const tagBaseClass = "px-2 py-1 rounded-md bg-slate-800/70 border border-slate-700/70 text-[11px] text-slate-200";

const Skills = () => (
  <section id="skills" className="border-t border-slate-800 pt-10 pb-12 scroll-mt-10">
    <h2 className="text-xl font-semibold text-left sm:text-center">Skills</h2>
    <p className="mt-2 text-sm sm:text-[15px] text-slate-400 leading-relaxed text-left sm:text-center">
      프로젝트에서 사용해 온 기술들을 분야별로 정리했습니다.
    </p>

    <div className="mx-auto mt-6 grid max-w-5xl gap-5 px-4 md:grid-cols-2">
      {/* Frontend */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-50 sm:text-base">
            <FiCode />
            Frontend
          </h3>
          <div className="flex gap-2">
            <SiTypescript className="text-2xl text-[#3178C6]" />
            <SiReact className="text-2xl text-[#61DAFB]" />
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
              <SiNextdotjs className="text-xl text-white" />
            </div>
            <SiVuedotjs className="text-2xl text-[#4FC08D]" />
            <SiSvelte className="text-2xl text-[#FF3E00]" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["TS", "React", "Next.js", "Vue", "SvelteKit"].map((skill) => (
            <li key={skill} className={tagBaseClass}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Backend & Infra */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-50 sm:text-base">
            <FiServer />
            Backend & Infra
          </h3>
          <div className="flex gap-2 text-slate-500">
            <SiNodedotjs className="text-2xl text-[#5FA04E]" />
            <SiFirebase className="text-2xl text-[#DD2C00]" />
            <SiMongodb className="text-2xl text-[#47A248]" />
            <img className="h-6 w-6" src="/assets/cosmosdb.svg" alt="CosmosDB" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["Node.js", "Firebase", "MongoDB", "CosmosDB"].map((skill) => (
            <li key={skill} className={tagBaseClass}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Platform & Tooling */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-50 sm:text-base">
            <FiTool />
            Platform & Tooling
          </h3>
          <div className="flex gap-2 text-slate-500">
            <img className="h-6 w-6" src="/assets/azure.svg" alt="Azure" />
            <SiGithubactions className="h-6 w-6 text-[#2088FF]" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["MSAL", "GitHub Actions", "Sentry", "Slack Webhook", "Figma"].map((skill) => (
            <li key={skill} className={tagBaseClass}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* iOS & Mobile */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-50 sm:text-base">
            <FiSmartphone />
            iOS & Mobile
          </h3>
          <div className="flex gap-2 text-slate-500">
            <SiSwift className="text-2xl text-[#F05138]" />
            <SiApple className="text-2xl text-white" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["Swift", "SwiftUI", "TCA", "MVVM", "CoreData", "Keychain"].map((skill) => (
            <li key={skill} className={tagBaseClass}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
