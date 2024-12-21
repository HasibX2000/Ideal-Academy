export default function AdmissionFees() {
  const fees = [
    {
      program: "Toddler Program",
      age: "2-3 Years",
      monthly: "2,500",
      admission: "10,000",
      features: [
        "Learning Materials",
        "Activity Supplies",
        "Snacks & Refreshments",
        "Basic Healthcare",
      ],
    },
    {
      program: "Nursery Program",
      age: "3-4 Years",
      monthly: "3,000",
      admission: "12,000",
      features: [
        "Learning Materials",
        "Activity Supplies",
        "Snacks & Refreshments",
        "Basic Healthcare",
      ],
    },
    {
      program: "Junior KG",
      age: "4-5 Years",
      monthly: "3,500",
      admission: "15,000",
      features: [
        "Learning Materials",
        "Activity Supplies",
        "Snacks & Refreshments",
        "Basic Healthcare",
      ],
    },
    {
      program: "Senior KG",
      age: "5-6 Years",
      monthly: "4,000",
      admission: "15,000",
      features: [
        "Learning Materials",
        "Activity Supplies",
        "Snacks & Refreshments",
        "Basic Healthcare",
      ],
    },
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">Fee Structure</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            Transparent and inclusive fee structure for all programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fees.map((fee) => (
            <div key={fee.program} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-accent-yellow p-4 text-center">
                <h3 className="text-xl font-bold text-neutral-800 font-quicksand">{fee.program}</h3>
                <p className="text-neutral-600 font-nunito">{fee.age}</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-neutral-800 font-quicksand">
                    ৳{fee.monthly}
                    <span className="text-base font-normal text-neutral-600">/month</span>
                  </div>
                  <div className="text-neutral-600 font-nunito mt-2">
                    Admission Fee: ৳{fee.admission}
                  </div>
                </div>
                <ul className="space-y-3">
                  {fee.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-600 font-nunito">
                      <span className="text-accent-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
