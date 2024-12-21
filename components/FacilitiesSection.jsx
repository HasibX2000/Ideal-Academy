export default function FacilitiesSection() {
  const facilities = [
    {
      icon: "🎨",
      title: "Art Studio",
      description:
        "Dedicated space for creative expression through painting, crafts, and artistic activities.",
    },
    {
      icon: "🎮",
      title: "Smart Classrooms",
      description: "Interactive learning environment with modern educational technology.",
    },
    {
      icon: "🎭",
      title: "Activity Room",
      description: "Multi-purpose space for indoor games, dance, and performances.",
    },
    {
      icon: "🌳",
      title: "Play Area",
      description: "Safe and engaging outdoor playground with age-appropriate equipment.",
    },
    {
      icon: "🏥",
      title: "Medical Room",
      description: "Fully equipped first-aid facility with regular health check-ups.",
    },
    {
      icon: "🚌",
      title: "Transport",
      description: "Safe and comfortable school transport service with GPS tracking.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">
            Our Facilities
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            State-of-the-art facilities designed for your child's safety, comfort, and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-primary-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2 font-quicksand">
                {facility.title}
              </h3>
              <p className="text-neutral-600 font-nunito">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
