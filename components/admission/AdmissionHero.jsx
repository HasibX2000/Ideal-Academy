export default function AdmissionHero() {
  return (
    <section className="relative h-[70vh] bg-primary-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <img src="/admission-hero.jpg" alt="Admission" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-[2] h-full flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mt-14 font-bold text-white mb-6 font-quicksand">
            Join Our Learning Community
          </h1>
          <p className="text-xl text-white/90 font-nunito">
            Begin your child's educational journey with Ideal Academy
          </p>
        </div>
      </div>
    </section>
  );
}
