// Add structured data (JSON-LD) for SEO
import { getOrganizationSchema, getWebsiteSchema, SchemaScript } from '@/lib/schema';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Thryvo | Campus Placements & Career Development Platform',
  description: 'Thryvo connects students with campus placement opportunities, skill development resources, and global higher education pathways for future career success.',
  keywords: 'campus placements, career development, student opportunities, skill development, higher education, campus recruitment',
};

export default function HomePage() {
  // Get the 3 most recent blog posts for the teaser section
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
    .slice(0, 3);

  return (
    <>
      <SchemaScript schema={getOrganizationSchema()} />
      <SchemaScript schema={getWebsiteSchema()} />
        {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Your Campus. Your Career. <span className="text-indigo-600">Your Future.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thryvo is the next-generation platform connecting students with campus placement opportunities, skill development resources, and global higher education pathways.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/students">
                  <Button variant="primary" size="large">
                    Get Started
                  </Button>
                </Link>
                <Link href="/colleges">
                  <Button variant="outline" size="large">
                    For Colleges
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              {/* Replace with actual image later */}
              <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-300">Hero Image</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Trust Signals */}
      <section className="py-12">
        <Container>
          <div className="text-center mb-8">
            <p className="text-lg font-medium text-gray-600">Trusted by 50+ institutions across India</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {/* Replace with actual logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">Partner {i}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              What Makes Thryvo Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've built a next-generation platform that addresses the real needs of students, educational institutions, and employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card 
              className="border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              title="AI Matching"
              description="Our AI-powered system matches students with opportunities that fit their skills, experience, and aspirations."
              imageUrl="/window.svg"
              imageAlt="AI Matching"
            />
            <Card 
              className="border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              title="Verified Recruiters"
              description="Connect with validated employers from top companies actively seeking fresh talent."
              imageUrl="/file.svg"
              imageAlt="Verified Recruiters"
            />
            <Card 
              className="border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              title="Upskilling Tools"
              description="Access industry-relevant courses and workshops to develop in-demand skills for the modern job market."
              imageUrl="/globe.svg"
              imageAlt="Upskilling Tools"
            />
            <Card 
              className="border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              title="Higher Education"
              description="Explore global education opportunities including scholarships and exchange programs."
              imageUrl="/globe.svg"
              imageAlt="Higher Education"
            />
          </div>
        </Container>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              How Thryvo Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple three-step process to launch your career journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                description: 'Build your digital resume and highlight your skills, projects, and aspirations.'
              },
              {
                step: '02',
                title: 'Get Matched',
                description: 'Our AI matches you with relevant opportunities based on your unique profile.'
              },
              {
                step: '03',
                title: 'Connect & Grow',
                description: 'Connect with employers, develop new skills, and advance your career.'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-indigo-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989592 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#A5B4FC"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 sm:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students, colleges and employers who have benefited from Thryvo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                title: 'Computer Science Student',
                institution: 'IIT Bombay',
                quote: 'Thryvo helped me land my dream internship at Microsoft. The AI-based matching system connected me with opportunities that perfectly matched my skills and aspirations.'
              },
              {
                name: 'Dr. Suresh Patel',
                title: 'Training & Placement Officer',
                institution: 'Delhi Technological University',
                quote: 'Implementing Thryvo has streamlined our entire campus placement process. We\'ve seen a 40% increase in student placements within just one semester.'
              },
              {
                name: 'Rajiv Mehta',
                title: 'HR Manager',
                institution: 'Tech Innovations Ltd',
                quote: 'Thryvo has revolutionized how we recruit fresh talent. The quality of candidates we\'ve hired through their platform has exceeded our expectations.'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                    <p className="text-sm text-indigo-600">{testimonial.institution}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Blog Teasers */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Career insights, success stories, and resources to help you excel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-lg transition-all"
                title={post.title}
                description={post.excerpt}
              >
                <div className="h-48 mb-4 bg-gray-100 relative overflow-hidden rounded-t-lg">
                  {post.featuredImage ? (
                    <Image 
                      src={post.featuredImage} 
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">Featured image</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white bg-indigo-600 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Read more →
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline">
                View All Articles
              </Button>
            </Link>
          </div>
        </Container>
      </section>      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-16 sm:px-12 sm:py-20 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Join the Movement?
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Join Thryvo today and take the first step towards a successful career journey.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link href="/students">
                    <Button className="bg-white text-indigo-600 hover:bg-indigo-50" size="large">
                      For Students
                    </Button>
                  </Link>
                </div>
                <div className="inline-flex rounded-md">
                  <Link href="/colleges">
                    <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10" size="large">
                      For Colleges
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
