"use client";
import { useState } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    program: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    previousSchool: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">
            Admission Application
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            Please fill out the form below to begin the admission process
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-primary-50 p-8 rounded-lg shadow-soft">
            <h3 className="text-xl font-bold text-neutral-800 mb-6 font-quicksand">
              Student Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="studentName"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Student's Full Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="program"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Program
                </label>
                <select
                  id="program"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  required
                >
                  <option value="">Select Program</option>
                  <option value="toddler">Toddler Program (2-3 Years)</option>
                  <option value="nursery">Nursery Program (3-4 Years)</option>
                  <option value="junior">Junior KG (4-5 Years)</option>
                  <option value="senior">Senior KG (5-6 Years)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg shadow-soft">
            <h3 className="text-xl font-bold text-neutral-800 mb-6 font-quicksand">
              Parent/Guardian Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="parentName"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Parent's Name
                </label>
                <input
                  type="text"
                  id="parentName"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-neutral-800 font-medium mb-2 font-nunito"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent-yellow text-neutral-800 py-3 px-6 rounded-lg font-medium 
              hover:bg-accent-yellow/90 transition-colors focus:outline-none focus:ring-2 
              focus:ring-accent-yellow focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
