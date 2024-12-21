import Navbar from "@/components/Navbar";
import AdmissionHero from "@/components/admission/AdmissionHero";
import AdmissionProcess from "@/components/admission/AdmissionProcess";
import AdmissionForm from "@/components/admission/AdmissionForm";
import AdmissionFees from "@/components/admission/AdmissionFees";
import AdmissionFAQ from "@/components/admission/AdmissionFAQ";

export default function Admission() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AdmissionHero />
      <AdmissionProcess />
      <AdmissionFees />
      <AdmissionForm />
      <AdmissionFAQ />
    </main>
  );
}
