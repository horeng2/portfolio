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
    <section id="hero" className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4">
      {/* 배경 블롭 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl animate-[spin_40s_linear_infinite]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl animate-[spin_50s_linear_infinite]" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
        <motion.p
          custom={0}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-xs font-medium tracking-[0.25em] text-sky-400"
        >
          WEB FRONTEND & iOS
        </motion.p>

        <motion.h1
          custom={1}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-semibold leading-snug sm:text-4xl"
        >
          새로움을 빠르게 흡수하는{" "}
          <span className="text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text">
            개발자 김선영
          </span>
          입니다.
        </motion.h1>

        <motion.p
          custom={2}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mt-1 text-sm text-slate-300 leading-relaxed"
        >
          커머스와 운영 시스템을 중심으로 웹 프론트엔드와 iOS를 경험해 왔고,
          <br />
          실제 서비스에서 필요한 기능을 안정적으로 구현하는 데 강점을 갖고 있습니다.
        </motion.p>

        <motion.div
          custom={3}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mt-3 flex justify-center gap-3 text-sm"
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
          className="mt-8 flex justify-center text-[11px] text-slate-400"
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
