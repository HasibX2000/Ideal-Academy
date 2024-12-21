export default function FeaturesSection() {
  const features = [
    {
      icon: "🎨",
      title: "Creative Arts",
      description: "Explore creativity through painting, crafts, and music",
    },
    {
      icon: "🏃",
      title: "Physical Activities",
      description: "Develop motor skills through structured play and sports",
    },
    {
      icon: "🧮",
      title: "Early Mathematics",
      description: "Build number sense and basic mathematical concepts",
    },
    {
      icon: "📚",
      title: "Language & Literacy",
      description: "Develop reading and communication skills",
    },
    {
      icon: "🌱",
      title: "Nature Studies",
      description: "Learn about environment and natural sciences",
    },
    {
      icon: "🤝",
      title: "Social Skills",
      description: "Build confidence and learn to work with others",
    },
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Program Features</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We offer a comprehensive curriculum designed to nurture every aspect of your child's
            development
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent-yellow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-neutral-800">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
