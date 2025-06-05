import Link from 'next/link';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import React from 'react';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'For Students | Thryvo',
  description: 'Discover how Thryvo can help you land your dream job, develop in-demand skills, and explore global education opportunities.',
};

export default function StudentsPage() {
  return (
    <React.Fragment>      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Your <span className="text-indigo-600">Career Mentor</span>, In Your Pocket
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thryvo provides everything you need to launch your career, enhance your skills, and explore global opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="large">
                    Create Your Career Profile
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="outline" size="large">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image later */}
              <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-300">Student Hero Image</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Carousel */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Your Path to Success Starts Here
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how Thryvo empowers your career journey every step of the way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Career Paths',
                description: 'Discover career options that match your skills, interests, and academic background.',
                icon: '🧭'
              },
              {
                title: 'Exclusive Internships',
                description: 'Access opportunities with leading companies that recruit specifically through Thryvo.',
                icon: '🏢'
              },
              {
                title: 'Skill Tracking',
                description: 'Build and track in-demand skills that make you stand out to employers.',
                icon: '📊'
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>      {/* Platform Walkthrough */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Platform Walkthrough
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience how Thryvo works to enhance your career journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md order-2 lg:order-1">
              <div className="space-y-8">
                {[
                  {
                    title: 'Smart Profile Builder',
                    description: 'Create a dynamic profile that showcases your skills, projects, and aspirations to employers.',
                  },
                  {
                    title: 'Opportunity Matching',
                    description: 'Our AI algorithm matches you with opportunities that align with your skills and career goals.',
                  },
                  {
                    title: 'Skill Development Hub',
                    description: 'Access courses, workshops, and resources to build skills that are in demand.',
                  },
                  {
                    title: 'Application Tracking',
                    description: 'Keep track of all your applications, interviews, and skill development progress in one place.',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
              {/* Animated explainer placeholder - replace with actual content */}
              <div className="absolute inset-0 bg-indigo-100 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-indigo-300 mb-4">Platform Demo</span>
                <p className="text-indigo-400 text-center max-w-xs">
                  [Interactive platform walkthrough animation would go here]
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* How it Works */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Thryvo Works for You</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-gray-500">Steps to Success</span>
              </div>
            </div>

            <div className="mt-8 space-y-16">
              {[
                {
                  step: '01',
                  title: 'Create Your Profile',
                  description: 'Build a comprehensive profile that showcases your education, skills, projects, and aspirations. Upload your resume and let employers discover you.',
                },
                {
                  step: '02',
                  title: 'Explore Opportunities',
                  description: 'Browse through campus placement drives, internships, skill development workshops, and higher education programs tailored to your interests.',
                },
                {
                  step: '03',
                  title: 'Prepare & Apply',
                  description: 'Use our resources to prepare for interviews and assessments. When you\'re ready, apply directly through our platform with a single click.',
                },
                {
                  step: '04',
                  title: 'Connect & Succeed',
                  description: 'Attend interviews, participate in skill-building activities, or apply to international universities. Track your applications and progress all in one place.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white font-bold text-lg mr-4">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-lg text-gray-600 ml-16">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Benefits for Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Campus Placement Support',
                description: 'Get priority access to campus placement drives from top companies across industries.',
                icon: '🏢',
              },
              {
                title: 'Skill Development',
                description: 'Access courses and workshops in high-demand skills like coding, digital marketing, and more.',
                icon: '🚀',
              },
              {
                title: 'Resume Building',
                description: 'Create a standout resume with our AI-powered templates and expert guidance.',
                icon: '📝',
              },
              {
                title: 'Interview Preparation',
                description: 'Practice with mock interviews, access company-specific question banks, and receive feedback.',
                icon: '🎯',
              },
              {
                title: 'Global Education',
                description: 'Explore international universities, scholarship opportunities, and exchange programs.',
                icon: '🌎',
              },
              {
                title: 'Career Guidance',
                description: 'Get personalized career advice from industry professionals and academic mentors.',
                icon: '🧭',
              },
            ].map((benefit, index) => (
              <Card key={index} className="border border-gray-200 h-full flex flex-col">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 flex-grow">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>      {/* Success Stories */}
      <section className="py-16 bg-indigo-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real students who transformed their careers with Thryvo
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                university: 'Delhi University',
                outcome: 'Software Engineer at Google',
                story: 'Thanks to Thryvo\'s placement preparation resources, I aced my interviews and landed my dream job at Google. The mock interviews and company-specific guidance were invaluable.',
                image: '/student1.jpg',
              },
              {
                name: 'Rahul Patel',
                university: 'BITS Pilani',
                outcome: 'Full scholarship to MIT',
                story: 'Thryvo helped me identify and apply for scholarships that aligned with my research interests. Their guidance throughout the application process was crucial to my success.',
                image: '/student2.jpg',
              },
              {
                name: 'Sophie Chen',
                university: 'Manipal Institute of Technology',
                outcome: 'Product Manager at Amazon',
                story: 'The skills courses on Thryvo helped me pivot from engineering to product management. The industry connections and mentorship made all the difference.',
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-indigo-600 h-2" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-500">{story.university}</p>
                    </div>
                  </div>
                  <p className="text-indigo-600 font-semibold mb-2">{story.outcome}</p>
                  <p className="text-gray-600 italic">"{story.story}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="primary">Join Thryvo Today</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-indigo-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
              {
                question: 'Is Thryvo free for students?',
                answer: 'Yes, our basic platform is free for all students. Premium features like advanced courses and one-on-one mentorship may have associated costs.',
              },
              {
                question: 'How do I get access to campus placements?',
                answer: 'Once you create your profile, you\'ll get access to placement drives happening at your college. You can also explore off-campus opportunities based on your skills and preferences.',
              },
              {
                question: 'What skill courses are available?',
                answer: 'We offer courses across various domains including programming, data science, digital marketing, design, soft skills, and more. New courses are added regularly based on industry demands.',
              },
              {
                question: 'Can Thryvo help with international applications?',
                answer: 'Absolutely! We provide resources for standardized tests, university selection, application preparation, visa guidance, and scholarship applications for global education opportunities.',
              },
              {
                question: 'Do you provide internship opportunities?',
                answer: 'Yes, we connect students with both summer internships and part-time opportunities throughout the academic year across various industries.',
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="bg-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
                Join thousands of students who have found success through Thryvo's platform. Your future starts here.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Sign Up for Free
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>    </React.Fragment>
  );
}
