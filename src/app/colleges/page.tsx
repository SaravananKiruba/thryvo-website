import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'For Colleges | Thryvo',
  description: 'Enhance your campus placement program, streamline recruitment processes, and provide better career opportunities for your students with Thryvo.',
};

export default function CollegesPage() {
  return (
    <>      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Seamless <span className="text-indigo-600">Campus Management</span> Solution
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thryvo helps educational institutions streamline their placement processes, connect with top employers, and provide data-driven insights for better student outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="large">
                    Request Demo
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="large">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image later */}
              <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-300">College Dashboard Preview</span>
              </div>
            </div>
          </div>
        </Container>
      </section>      {/* Dashboard Previews */}
      <section id="features" className="py-16">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful TPO Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage campus recruitment in one intuitive interface
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                title: "Analytics & Reporting",
                description: "Gain valuable insights into placement trends, student performance, and recruiter engagement with real-time analytics dashboards.",
                features: ["Placement rate tracking", "Department-wise analytics", "Year-over-year comparison", "Recruiter activity monitoring"],
                imagePosition: "right"
              },
              {
                title: "Recruiter Management",
                description: "Build and maintain relationships with employers through a dedicated CRM specifically designed for campus recruitment.",
                features: ["Company profiles", "Recruitment history", "Communication logs", "Event scheduling"],
                imagePosition: "left"
              },
              {
                title: "Student Tracking",
                description: "Keep track of every student's placement journey from profile creation to job acceptance.",
                features: ["Skills assessment", "Application tracking", "Interview preparation", "Offer management"],
                imagePosition: "right"
              }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={item.imagePosition === "right" ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-[300px] rounded-lg overflow-hidden shadow-lg ${item.imagePosition === "right" ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
                  {/* Replace with actual dashboard images */}
                  <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-indigo-300">{item.title} Dashboard Preview</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Integration Info */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Thryvo works with your existing systems for a smooth implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexible Integration Options</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">ERP Integration</h4>
                  <p className="text-gray-600">Connect Thryvo with your institution's ERP system for seamless data flow and student management.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">LMS Compatibility</h4>
                  <p className="text-gray-600">Integrate with popular Learning Management Systems to track student skill development and course completion.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">API Access</h4>
                  <p className="text-gray-600">Use our comprehensive API to build custom integrations specific to your institution's needs.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {/* Replace with actual integration partner logos */}
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white h-20 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-400 font-medium">Partner {i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Colleges Choose Thryvo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform brings value to your placement department, faculty, and most importantly, your students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Streamlined Placement Process',
                description: 'Automate job postings, applications, and interview scheduling. Reduce administrative burden and focus on what matters most.',
                icon: '⚡',
              },
              {
                title: 'Employer Network',
                description: 'Tap into our extensive network of employers ranging from startups to Fortune 500 companies actively looking for fresh talent.',
                icon: '🤝',
              },
              {
                title: 'Analytics Dashboard',
                description: 'Access real-time placement statistics, track student progress, and generate comprehensive reports for stakeholders.',
                icon: '📊',
              },
              {
                title: 'Skill Gap Analysis',
                description: 'Identify skill gaps among your student population and bridge them with targeted development programs.',
                icon: '🔍',
              },
              {
                title: 'Alumni Network',
                description: 'Keep track of your alumni and leverage their success for current students through mentorship and referrals.',
                icon: '👥',
              },
              {
                title: 'Customized Solutions',
                description: 'We understand that each institution is unique. Our platform adapts to your specific needs and processes.',
                icon: '🔧',
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

      {/* Integration Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless Integration</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform integrates easily with your existing systems and workflows. Whether you're using an advanced ERP or simple spreadsheets, 
                Thryvo adapts to your needs.
              </p>
              <ul className="space-y-4">
                {[
                  'Integration with student information systems',
                  'Single sign-on with your college portal',
                  'Customizable workflow to match your processes',
                  'API access for advanced integration needs',
                  'Data migration support from legacy systems',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-2">
                      ✓
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-100 h-[400px] rounded-lg flex items-center justify-center">
              {/* Placeholder for integration diagram */}
              <span className="text-2xl font-bold text-indigo-300">Integration Diagram</span>
            </div>
          </div>
        </Container>
      </section>      {/* Key Metrics */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Measurable Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real metrics from colleges that have implemented Thryvo
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '40%', label: 'Average increase in placements' },
              { metric: '65%', label: 'Reduction in administrative work' },
              { metric: '3 Days', label: 'Average onboarding time' },
              { metric: '89%', label: 'Student engagement rate' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{item.metric}</div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Case Study */}
      <section className="py-16 bg-indigo-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Case Study: Delhi Technical University
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How DTU transformed their placement process with Thryvo
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-600 mb-6">
                    DTU was struggling with manual placement processes, limited employer reach, and difficulty tracking student outcomes. Their placement team was overwhelmed with administrative tasks.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
                  <p className="text-gray-600">
                    Implementing Thryvo's platform allowed DTU to automate routine tasks, expand their employer network, and gain insights into student placement patterns.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Results</h3>
                  <ul className="space-y-4">
                    {[
                      '40% increase in placement rate within the first year',
                      '250+ new companies participating in placement drives',
                      '65% reduction in administrative workload for TPO staff',
                      'Improved student satisfaction with the placement process'
                    ].map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3 text-xs">
                          ✓
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <blockquote className="italic text-gray-600 mb-4">"Thryvo has revolutionized our placement process. We've seen a significant increase in employer interest and student satisfaction. The platform's analytics have been invaluable in helping us make data-driven decisions about our placement strategy."</blockquote>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                    AV
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Dr. Amit Verma</p>
                    <p className="text-sm text-gray-500">Director of Training & Placement, Delhi Technical University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-indigo-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Implementation Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-indigo-200 ml-3" />
              <div className="space-y-12">
                {[
                  {
                    title: 'Initial Consultation',
                    description: 'We meet with your team to understand your current processes, challenges, and goals.',
                    duration: 'Week 1',
                  },
                  {
                    title: 'Platform Customization',
                    description: 'Our team configures the Thryvo platform to align with your institutional needs and branding.',
                    duration: 'Weeks 2-3',
                  },
                  {
                    title: 'Data Migration & Integration',
                    description: 'We ensure a smooth transition by migrating existing data and integrating with your systems.',
                    duration: 'Weeks 3-4',
                  },
                  {
                    title: 'Training & Onboarding',
                    description: 'Comprehensive training for administrators, faculty, and students on using the platform effectively.',
                    duration: 'Week 5',
                  },
                  {
                    title: 'Launch & Support',
                    description: 'Platform goes live with ongoing support from our dedicated customer success team.',
                    duration: 'Week 6 onwards',
                  },
                ].map((step, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-indigo-600 z-10 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <span className="text-sm font-medium text-indigo-600">{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Flexible Pricing Models</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We offer various pricing structures to accommodate institutions of all sizes and budgets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: 'Free',
                description: 'Essential tools for small institutions',
                features: [
                  'Job posting portal',
                  'Basic student profiles',
                  'Simple analytics',
                  'Email support',
                ],
                cta: 'Get Started',
                highlighted: false,
              },
              {
                name: 'Professional',
                price: 'Custom Pricing',
                description: 'Comprehensive solution for growing institutions',
                features: [
                  'Everything in Basic',
                  'Advanced analytics dashboard',
                  'Employer relationship management',
                  'Skill development integration',
                  'Priority support',
                ],
                cta: 'Contact Sales',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom Pricing',
                description: 'Full-scale solution for large institutions',
                features: [
                  'Everything in Professional',
                  'Custom integrations',
                  'API access',
                  'Dedicated customer success manager',
                  'On-campus training',
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
                  <div className="text-3xl font-bold mb-2">{plan.price}</div>
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
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="px-6 py-12 sm:px-12 sm:py-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Ready to Transform Your Campus Placements?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Schedule a demo to see how Thryvo can work for your institution. Our team will guide you through the platform and answer any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary">
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
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
