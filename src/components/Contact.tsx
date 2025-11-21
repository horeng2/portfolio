const Contact = () => (
  <section id="contact" className="border-t border-slate-800 pt-10 pb-12 scroll-mt-10">
    <h2 className="text-xl font-semibold text-left sm:text-center">Contact</h2>

    <p className="mt-2 text-sm sm:text-[15px] text-slate-300 leading-relaxed text-left sm:text-center">
      문의/협업 제안은 아래 이메일로 편하게 연락 바랍니다.
    </p>

    <div className="mt-4 text-sm">
      <p className="text-slate-200 text-left sm:text-center">
        Email{" "}
        <a href="mailto:huski.a.a@gmail.com" className="text-sky-400 hover:underline">
          huski.a.a@gmail.com
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
