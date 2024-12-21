"use client";
import { useState } from "react";

export default function AdmissionFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the admission process?",
      answer:
        "The admission process involves submitting an application form, document verification, an interview/assessment, and completion of enrollment upon acceptance.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Required documents include birth certificate, immunization records, previous school records (if applicable), and parent/guardian identification.",
    },
    {
      question: "Is there an age requirement for each program?",
      answer:
        "Yes, we have specific age requirements for each program: Toddler (2-3 years), Nursery (3-4 years), Junior KG (4-5 years), and Senior KG (5-6 years).",
    },
    {
      question: "What are the school timings?",
      answer:
        "School hours are from 8:00 AM to 2:00 PM, Sunday through Thursday. We also offer extended care options for working parents.",
    },
    {
      question: "Do you provide transportation services?",
      answer:
        "Yes, we provide safe and monitored transportation services with GPS-tracked vehicles for various routes. Additional charges apply.",
    },
    {
      question: "What is included in the fee structure?",
      answer:
        "Our fees include tuition, learning materials, activity supplies, snacks, and basic healthcare. Additional services like transportation are charged separately.",
    },
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            Find answers to common questions about our admission process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-800 font-quicksand">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-neutral-600 transform transition-transform duration-200
                    ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-4 text-neutral-600 font-nunito">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
