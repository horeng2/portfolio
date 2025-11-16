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
import { AzureIcon } from "../assets/azureIcon";
import { FiCode, FiServer, FiTool, FiSmartphone } from "react-icons/fi";

const tagBaseClass = "px-2 py-1 rounded-md bg-slate-800/70 border border-slate-700/70 text-[11px] text-slate-200";

const Skills = () => (
  <section id="skills" className="border-t border-slate-800 pt-8 pb-10 scroll-mt-10">
    <h2 className="text-xl font-semibold">Skills</h2>
    <p className="mt-2 text-sm text-slate-400"> 실제 프로젝트에서 사용해 온 기술들을 분야별로 정리했습니다.</p>

    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {/* Frontend */}
      <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FiCode /> Frontend
          </h3>
          <div className="flex gap-2 text-slate-500">
            <SiReact className="text-2xl group-hover:text-sky-400 transition-colors" />
            <SiVuedotjs className="text-2xl group-hover:text-emerald-400 transition-colors" />
            <SiSvelte className="text-2xl group-hover:text-orange-400 transition-colors" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["TS", "React", "Next.js", "Vue", "SvelteKit", "JS"].map((skill) => (
            <li key={skill} className={tagBaseClass}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Backend & Infra */}
      <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        {" "}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FiServer />
            Backend & Infra
          </h3>
          <div className="flex gap-2 text-slate-500">
            <SiNodedotjs className="text-2xl group-hover:text-emerald-400 transition-colors" />
            <SiFirebase className="text-2xl group-hover:text-amber-400 transition-colors" />
            <SiDocker className="text-2xl group-hover:text-sky-400 transition-colors" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["Node.js", "Firebase", "PostgreSQL", "MongoDB", "CosmosDB", "Docker", "Kubernetes", "Azure"].map(
            (skill) => (
              <li key={skill} className={tagBaseClass}>
                {skill}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Platform & Tooling */}
      <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FiTool />
            Platform & Tooling
          </h3>
          <div className="flex gap-2 text-slate-500">
            <AzureIcon className="h-6 w-6" />
            <SiGithubactions className="h-6 w-6 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["MSAL", "Sentry", "GitHub Actions", "Slack Webhook", "Figma"].map((skill) => (
            <li key={skill} className={tagBaseClass}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* iOS & Mobile */}
      <div className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FiSmartphone />
            iOS & Mobile
          </h3>
          <div className="flex gap-2 text-slate-500">
            <SiSwift className="text-2xl group-hover:text-orange-400 transition-colors" />
            <SiApple className="text-2xl group-hover:text-slate-100 transition-colors" />
          </div>
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["Swift", "SwiftUI", "UIKit", "TCA", "MVVM", "CoreData", "Keychain"].map((skill) => (
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
