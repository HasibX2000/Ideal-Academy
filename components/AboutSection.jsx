export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-neutral-800">Welcome to Our Preschool</h2>
            <p className="text-neutral-600 leading-relaxed">
              We provide a nurturing environment where children can grow, learn, and discover their
              potential. Our experienced teachers create engaging activities that promote cognitive,
              social, and emotional development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-primary-500 mb-2">5+</h3>
                <p className="text-neutral-600">Years Experience</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-primary-500 mb-2">10+</h3>
                <p className="text-neutral-600">Qualified Teachers</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-primary-500 mb-2">1000+</h3>
                <p className="text-neutral-600">Happy Students</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-primary-500 mb-2">20+</h3>
                <p className="text-neutral-600">Activities</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/about-image.jpg"
              alt="Preschool children learning"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent-yellow text-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2">Enroll Now</h3>
              <p className="text-sm">Limited seats available for 2025-26</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
