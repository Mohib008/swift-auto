"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Lucide icons for expand/collapse

const faqs = [
  {
    id: 1,
    question: "What is Next.js?",
    answer: "Next.js is a React framework for production.",
  },
  {
    id: 2,
    question: "How does Tailwind CSS work?",
    answer: "Tailwind is a utility-first CSS framework.",
  },
  {
    id: 3,
    question: "What is an API route in Next.js?",
    answer: "API routes allow you to build backend functionality.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = (useState < number) | (null > null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">FAQ Section</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">
                {faq.id}. {faq.question}
              </span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
