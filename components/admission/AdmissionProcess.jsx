export default function AdmissionProcess() {
  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Fill out the online application form with required information",
    },
    {
      number: "02",
      title: "Document Verification",
      description: "Submit necessary documents for verification",
    },
    {
      number: "03",
      title: "Interview & Assessment",
      description: "Schedule an interview with our admission team",
    },
    {
      number: "04",
      title: "Confirmation",
      description: "Receive admission confirmation and complete the enrollment process",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">
            Admission Process
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            A simple and straightforward process to enroll your child
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-primary-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-accent-yellow mb-4 font-quicksand">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2 font-quicksand">
                {step.title}
              </h3>
              <p className="text-neutral-600 font-nunito">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
