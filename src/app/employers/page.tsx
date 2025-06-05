import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'For Employers | Thryvo',
  description: 'Discover how Thryvo connects employers with top student talent through campus recruitment, skill-based matching, and talent acquisition solutions.',
};

export default function EmployersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Source the Best Student Talent
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thryvo helps companies connect with skilled, motivated students and fresh graduates through our campus recruitment platform.
            </p>
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact">
                <Button variant="primary" size="large">
                  Start Recruiting
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Recruit with Thryvo */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Recruit with Thryvo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform streamlines campus recruitment, saving you time and resources while connecting you with the best student talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Access Top Talent',
                description: 'Connect with students from leading institutions across the country with just a few clicks.',
                icon: '🎓',
              },
              {
                title: 'Skill-Based Matching',
                description: 'Our AI-powered system matches job requirements with student skills for better compatibility.',
                icon: '🔍',
              },
              {
                title: 'Streamlined Process',
                description: 'Post jobs, screen applicants, schedule interviews, and make offers all in one platform.',
                icon: '⚡',
              },
              {
                title: 'Campus-Wide Reach',
                description: 'Post once and reach students across multiple campuses simultaneously.',
                icon: '🌐',
              },
              {
                title: 'Data-Driven Insights',
                description: 'Access analytics on applicant pools, conversion rates, and recruitment performance.',
                icon: '📊',
              },
              {
                title: 'Employer Branding',
                description: 'Showcase your company culture and opportunities to attract the right talent.',
                icon: '✨',
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
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-2 text-gray-500">Simple 4-Step Process</span>
              </div>
            </div>

            <div className="mt-8 space-y-16">
              {[
                {
                  step: '01',
                  title: 'Create Your Company Profile',
                  description: 'Set up your company page with key information, culture highlights, and employer branding materials.',
                },
                {
                  step: '02',
                  title: 'Post Job Opportunities',
                  description: 'Create detailed job postings with skills required, job description, and compensation details.',
                },
                {
                  step: '03',
                  title: 'Review Matched Candidates',
                  description: 'Our system matches your requirements with student profiles. Review and shortlist the best fits.',
                },
                {
                  step: '04',
                  title: 'Interview and Hire',
                  description: 'Schedule interviews, provide feedback, and extend offers all through our integrated platform.',
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

      {/* Recruitment Solutions */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Recruitment Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Campus Placement Drives',
                description: 'Organize virtual or on-campus recruitment drives across multiple institutions simultaneously.',
                features: [
                  'Centralized event management',
                  'Pre-screening of candidates',
                  'Interview scheduling',
                  'Real-time analytics',
                ],
              },
              {
                title: 'Direct Hiring',
                description: 'Post jobs and connect directly with qualified students and recent graduates.',
                features: [
                  'AI-powered candidate matching',
                  'Application tracking system',
                  'Collaborative hiring tools',
                  'Automated candidate communication',
                ],
              },
              {
                title: 'Internship Programs',
                description: 'Find interns who can bring fresh perspectives and potential for future employment.',
                features: [
                  'Semester-based or summer internships',
                  'Project-based assignments',
                  'Intern performance tracking',
                  'Conversion to full-time pipeline',
                ],
              },
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-2 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Employers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Thryvo has transformed how we recruit fresh graduates. The quality of candidates and the efficiency of the process have significantly improved our campus recruitment outcomes.",
                name: "Amrita Patel",
                title: "Head of Talent Acquisition, Tech Innovators",
              },
              {
                quote: "The skill-matching algorithm saved us countless hours in screening. We found perfect-fit candidates for our technical roles much faster than traditional methods.",
                name: "Rajesh Kumar",
                title: "HR Director, Global Solutions Inc.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <svg className="h-12 w-12 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner Companies */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Companies That Trust Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Placeholder for company logos */}
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Logo {i+1}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Recruitment Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Flexible options to suit businesses of all sizes, from startups to enterprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹25,000',
                period: 'per month',
                description: 'For small businesses and startups',
                features: [
                  '10 active job postings',
                  'Basic candidate matching',
                  'Application tracking',
                  'Email support',
                ],
                cta: 'Get Started',
                highlighted: false,
              },
              {
                name: 'Business',
                price: '₹75,000',
                period: 'per month',
                description: 'For growing companies',
                features: [
                  'Unlimited job postings',
                  'Advanced candidate matching',
                  'Virtual recruitment drives',
                  'Analytics dashboard',
                  'Priority support',
                ],
                cta: 'Start Now',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large organizations',
                features: [
                  'Everything in Business',
                  'API integration',
                  'Custom branding',
                  'Dedicated account manager',
                  'Multi-campus campaigns',
                ],
                cta: 'Contact Sales',
                highlighted: false,
              },
            ].map((plan) => (
              <div 
                key={plan.name} 
                className={`rounded-lg overflow-hidden border ${
                  plan.highlighted 
                    ? 'border-indigo-600 ring-2 ring-indigo-600' 
                    : 'border-gray-200'
                }`}
              >
                <div 
                  className={`p-6 ${
                    plan.highlighted ? 'bg-indigo-600 text-white' : 'bg-white'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className={`ml-1 text-sm ${plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}`}>{plan.period}</span>}
                  </div>
                  <p className={`text-sm ${plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <ul className="mb-6 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-2 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button 
                      variant={plan.highlighted ? "primary" : "outline"} 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to transform your campus recruitment?
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Join hundreds of employers who have streamlined their hiring with Thryvo.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
                <Link href="/contact">
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                    Schedule a Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="bg-transparent text-white border-white hover:bg-indigo-700">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
