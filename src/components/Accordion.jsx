import React from "react";
import { useState, useEffect } from "react";
const questions = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
  },
  {
    question: "What are hooks?",
    answer:
      "Hooks are functions that let you use state and other React features without writing a class.",
  },
  {
    question: "Why use Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    question: "What is React Router?",
    answer:
      "React Router is a library for routing in React applications. It allows navigation between different components and URLs.",
  },
];
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(
    localStorage.getItem("activeAccordion") || null
  );
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    localStorage.setItem("activeAccordion", activeIndex);
  }, [activeIndex]);
  return (
    <div className="w-full max-w-lg mx-auto">
      {questions.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleIndex(index)}
            className="w-full p-4 text-left bg-gray-100 border-b border-gray-300"
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white border border-gray-300 transition-max-height duration-500 ease-in-out overflow-hidden">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
