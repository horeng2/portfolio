const Header = () => (
  <header className="hidden sm:block sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <a href="#hero" className="text-base font-semibold tracking-tight hover:text-sky-400">
        Kim Seonyeong
      </a>{" "}
      <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
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
);

export default Header;
