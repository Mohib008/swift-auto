"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const accordionData = [
  { title: "Section 1", content: "This is the content of section 1." },
  { title: "Section 2", content: "This is the content of section 2." },
  { title: "Section 3", content: "This is the content of section 3." },
];

const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
        onClick={onClick}
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-white">{content}</div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
