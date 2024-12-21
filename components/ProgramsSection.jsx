export default function ProgramsSection() {
  const programs = [
    {
      age: "2-3 Years",
      title: "Toddler Program",
      description: "Early development through play-based learning and sensory activities.",
      features: [
        "Basic Language Skills",
        "Motor Development",
        "Social Interaction",
        "Creative Play",
      ],
    },
    {
      age: "3-4 Years",
      title: "Nursery Program",
      description: "Structured learning with focus on foundational skills and creative expression.",
      features: ["Phonics & Numbers", "Art & Craft", "Physical Activities", "Story Time"],
    },
    {
      age: "4-5 Years",
      title: "Junior KG",
      description: "Advanced learning preparing children for formal education.",
      features: ["Basic Writing", "Mathematics", "Environmental Awareness", "Music & Movement"],
    },
    {
      age: "5-6 Years",
      title: "Senior KG",
      description: "Comprehensive preparation for primary school transition.",
      features: ["Reading & Writing", "Advanced Numbers", "Science Activities", "Life Skills"],
    },
  ];

  return (
    <section id="programs" className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">Our Programs</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            Age-appropriate programs designed to nurture every aspect of your child's development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-primary-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-accent-yellow text-neutral-800 rounded-full px-4 py-1 inline-block mb-4 font-nunito">
                {program.age}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 font-quicksand">
                {program.title}
              </h3>
              <p className="text-neutral-600 mb-4 font-nunito">{program.description}</p>
              <ul className="space-y-2 font-nunito">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-600">
                    <span className="text-accent-green mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
