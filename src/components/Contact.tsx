import { Github, Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="border-t border-slate-800 pt-10 pb-12 scroll-mt-10">
    <h2 className="text-xl font-semibold text-center">Contact</h2>

    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">문의/협업 제안은 편하게 연락 바랍니다.</p>

    <div className="mt-2 text-sm ">
      <p className="text-slate-200">
        Email{" "}
        <a href="mailto:huski.a.a@gmail.com" className="text-sky-400 hover:underline">
          huski.a.a@gmail.com
        </a>
      </p>
      <div className="flex gap-4 justify-center mt-4">
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
  </section>
);

export default Contact;
