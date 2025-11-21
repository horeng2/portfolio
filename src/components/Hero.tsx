import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.4 },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] sm:min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-10 pb-12"
    >
      {/* 배경 블롭 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl animate-[spin_40s_linear_infinite]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl animate-[spin_50s_linear_infinite]" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        <motion.p
          custom={0}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-xs font-medium tracking-[0.2em] text-sky-400"
        >
          FRONTEND DEVELOPER
        </motion.p>

        <motion.h1
          custom={1}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl font-semibold leading-snug"
        >
          새로움을 빠르게 흡수하는 개발자 <br className="sm:hidden" />
          <span className="text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text">김선영</span>
          입니다.
        </motion.h1>

        <motion.p
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed"
        >
          7급 전산직 공무원이었지만 <br className="sm:hidden" />더 즐겁고 역동적인 일을 하고 싶었습니다.
          <br />
          흥미를 느끼는 일로 조직과 함께 성장할 수 있는 길을 고민해왔고,
          <br />
          5년 간 몸담은 공직을 떠나 개발자로 새로운 여정을 시작했습니다.
        </motion.p>

        <motion.div
          custom={3}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 flex justify-center gap-3 text-sm"
        >
          <a href="#projects" className="rounded-full bg-sky-500 px-4 py-2 font-medium text-slate-950 hover:bg-sky-400">
            Projects 보기
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 hover:border-sky-500"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex justify-center text-xs text-slate-400 sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="animate-bounce">↓</span>
            <span>아래에서 경험과 프로젝트를 확인할 수 있습니다</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
