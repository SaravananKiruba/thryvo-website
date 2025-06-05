import Container from '@/components/ui/Container';
import React from 'react';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Frequently Asked Questions | Thryvo',
  description: 'Find answers to common questions about Thryvo\'s platform, services, and how we help students, colleges, and employers.',
};

const faqs = [
  {
    question: "What is Thryvo?",
    answer: "Thryvo is a next-generation platform that connects students with campus placement opportunities, skill development resources, and global higher education pathways. We help students build their careers, colleges improve their placement programs, and employers find the best talent."
  },
  {
    question: "How does Thryvo help students?",
    answer: "Thryvo helps students by providing access to personalized job recommendations through our AI matching system, skill development resources tailored to industry demands, verified placement opportunities, career guidance, and global higher education pathways."
  },
  {
    question: "How does Thryvo help colleges?",
    answer: "For colleges, Thryvo offers a comprehensive placement management system, analytics on student performance and industry trends, employer connections, personalized skill gap analysis, and tools to enhance the institution's placement statistics."
  },
  {
    question: "How does Thryvo help employers?",
    answer: "Employers benefit from Thryvo through our talent intelligence platform that provides access to a pre-vetted pool of candidates, AI-powered matching of job requirements with student skills, diversity hiring initiatives, internship program management, and analytics on talent acquisition."
  },
  {
    question: "Is Thryvo free for students?",
    answer: "Thryvo offers a freemium model for students. Basic features like profile creation, job browsing, and limited skill assessments are free. Premium features such as advanced matching, personalized career coaching, and premium learning resources are available through subscription plans."
  },
  {
    question: "How do I create an account on Thryvo?",
    answer: "To create an account, visit our website and click on 'Get Started' or 'Sign Up'. You can register using your email address, phone number, or social media accounts. Students can also sign up using their college email address for automatic verification."
  },
  {
    question: "How does Thryvo's AI matching work?",
    answer: "Our AI matching system analyzes a combination of your educational background, skills, experience, interests, and career goals. It then compares this data with job requirements, company culture, and industry trends to recommend the most suitable opportunities for you."
  },
  {
    question: "Which colleges and employers are partnered with Thryvo?",
    answer: "Thryvo partners with over 50+ educational institutions across India, including top engineering colleges, business schools, and universities. Our employer network spans across IT, finance, manufacturing, healthcare, and other sectors, including both established corporations and growing startups."
  },
  {
    question: "What kinds of jobs are available on Thryvo?",
    answer: "Thryvo offers a wide range of opportunities including full-time positions, internships, part-time roles, remote work, and campus-specific recruitment drives across various industries and job functions."
  },
  {
    question: "How can I improve my profile visibility to employers?",
    answer: "Complete your profile with detailed information about your education, skills, projects, and experiences. Take skill assessments to showcase your abilities, engage with learning resources to develop in-demand skills, and keep your availability and preferences updated."
  },
  {
    question: "What skill development resources does Thryvo offer?",
    answer: "Thryvo provides access to online courses, webinars, workshops, industry certifications, mock interviews, resume building tools, and personalized learning paths based on your career goals and current skill gaps."
  },
  {
    question: "How can colleges integrate Thryvo with their existing systems?",
    answer: "Thryvo offers API integration with common college management systems, student information systems, and learning management platforms. Our technical team provides dedicated support for smooth integration and data migration."
  },
  {
    question: "Is my data secure on Thryvo?",
    answer: "Yes, we take data security and privacy seriously. Thryvo implements industry-standard security measures including encryption, secure access controls, regular security audits, and compliance with relevant data protection regulations. For more details, please check our Privacy Policy and Security pages."
  },
  {
    question: "How can I get support if I face issues?",
    answer: "You can reach our support team through multiple channels: email at support@thryvo.com, live chat on our platform, phone support at +91 8800 123 456, or through our Help Center. Our support team is available Monday to Friday, 9 AM to 6 PM IST."
  },
  {
    question: "Does Thryvo offer services outside India?",
    answer: "Currently, our primary focus is on the Indian market. However, we do facilitate global higher education opportunities and international placement options for students. We have plans to expand our services to other countries in the near future."
  }
];

export default function FAQPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about Thryvo's platform and services.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <div className="text-gray-600">{faq.answer}</div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-indigo-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">Our team is here to help with any other questions you might have.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:support@thryvo.com" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Email Support
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
