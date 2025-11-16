const Contact = () => (
  <section id="contact" className="border-t border-slate-800 pt-8 pb-4 scroll-mt-10">
    <h2 className="text-lg font-semibold">Contact</h2>
    <p className="mt-3 text-sm text-slate-300">채용 관련 문의는 아래 연락처로 편하게 연락 주세요.</p>
    <div className="mt-3 text-sm">
      <p className="text-slate-200">
        Email{" "}
        <a href="mailto:huski.a.a@gmail.com" className="text-sky-400 hover:underline">
          huski.a.a@gmail.com
        </a>
      </p>
      <p className="mt-1 text-slate-200">Phone 010-5189-1992</p>
    </div>
  </section>
);

export default Contact;
