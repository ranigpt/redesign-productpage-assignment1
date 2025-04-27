import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-indigo-100">
    <button
      onClick={onClick}
      className="w-full py-3 px-0 md:px-4 flex items-center justify-between text-left rounded-lg transition hover:bg-indigo-50/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      aria-expanded={isOpen}
      aria-controls={`faq-content-${question}`}
    >
      <h3 className="text-base md:text-lg font-medium text-gray-900 pr-8">{question}</h3>
      <BiChevronDown
        className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>

    <div
      id={`faq-content-${question}`}
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden text-gray-600 p-4 pt-0">
        {answer}
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
    {
      que: 'What is gogetwell.ai?',
      ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
    },
    {
      que: 'What is the AI Front Office for Healthcare Agents?',
      ans: 'The AI Front Office is a powerful platform that helps manage healthcare services efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI.',
    },
    {
      que: 'How does the AI Agent assist me in my healthcare business?',
      ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time, boosting your productivity.',
    },
    {
      que: 'Can I customize the website for my healthcare services?',
      ans: 'Yes, you can fully customize the website to showcase your services, choose the design, features, and content that best represent your brand.',
    },
    {
      que: 'How does this platform support independent healthcare facilitators like me?',
      ans: 'The platform automates front-office tasks, manages patient leads, and even processes payments, ideal for gig economy professionals and small teams.',
    },
    {
      que: 'How does the platform help me manage patient leads?',
      ans: 'The AI system captures, organizes, and prioritizes patient leads, schedules consultations, and ensures you never miss opportunities.',
    },
    {
      que: 'Is it easy to integrate the platform with the hospitals I work with?',
      ans: 'Yes, the platform easily connects with hospital systems, helping you manage billing, communication, and partnerships seamlessly.',
    },
    {
      que: 'Is the platform secure and compliant with healthcare regulations?',
      ans: "Absolutely. The platform follows top-level security practices and complies with healthcare regulations to protect patient data.",
    },
    {
      que: 'How quickly can I get started with the platform?',
      ans: 'You can set up the platform quickly with guided support, creating your AI-powered front office and website easily.',
    },
    {
      que: 'What kind of customer support is available if I need help?',
      ans: 'You get 24/7 customer support, tutorials, and live demos to help you maximize the platform’s potential.',
    },
    {
      que: 'How does the platform help me attract more patients?',
      ans: 'By building a custom SEO-optimized website and managing patient communication, the platform helps you grow and retain your patient base.',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 bg-white rounded-2xl shadow-2xl p-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.que}
              answer={faq.ans}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
