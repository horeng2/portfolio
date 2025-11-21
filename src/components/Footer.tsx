import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 mt-10">
      <div className="mx-auto max-w-5xl px-4 flex items-center justify-between">
        <p className="text-xs text-slate-500">© 2025 Kim Seonyeong</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/horeng2"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Github size={18} />
          </a>

          <a href="mailto:이메일주소" className="text-slate-400 hover:text-sky-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
