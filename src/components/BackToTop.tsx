import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const isBottom = scrollY + viewport >= fullHeight - 10;

      if (isBottom) {
        setShow(false);
      } else {
        setShow(scrollY > 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-4 sm:right-1/2 z-50 flex h-10 w-10 items-center justify-center
        rounded-full bg-slate-800/80 border border-slate-700 text-slate-200
        shadow-lg backdrop-blur transition-all duration-300
        hover:bg-sky-500 hover:text-slate-950 
        ${show ? "opacity-80 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <FiArrowUp className="text-lg" />
    </button>
  );
};

export default BackToTop;
