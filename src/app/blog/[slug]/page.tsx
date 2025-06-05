import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Top 10 Skills Employers Will Look for in 2025 | Thryvo Blog',
  description: 'As technology evolves and industries transform, discover the most sought-after skills that employers will be looking for in 2025.',
  keywords: 'in-demand skills, future skills, job market, employment trends, career development',
  openGraph: {
    title: 'Top 10 Skills Employers Will Look for in 2025',
    description: 'As technology evolves and industries transform, discover the most sought-after skills that employers will be looking for in 2025.',
    type: 'article',
    publishedTime: '2025-05-15T14:30:00Z',
    authors: ['Maria Garcia'],
  },
};

export default function BlogPostPage() {
  return (
    <>
      <article>
        {/* Article Header */}
        <header className="bg-gradient-to-b from-indigo-50 to-white py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Career Insights
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Top 10 Skills Employers Will Look for in 2025
              </h1>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                  MG
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Maria Garcia</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime="2025-05-15">May 15, 2025</time>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* Featured Image */}
        <div className="py-8">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-indigo-100">
                {/* Placeholder for featured image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-300">Featured Image</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Article Body */}
        <div className="py-8">
          <Container>
            <div className="max-w-3xl mx-auto prose prose-lg prose-indigo">
              <p>
                As we navigate through rapidly evolving technological landscapes and shifting economic priorities, 
                the skills that employers value most are also transforming. Based on our research and conversations with 
                industry leaders, here are the top 10 skills that will be in high demand in 2025:
              </p>

              <h2>1. Artificial Intelligence and Machine Learning</h2>
              <p>
                The AI revolution is no longer coming—it's here. Professionals who can work with AI systems, 
                understand machine learning models, and apply these technologies to business problems will be 
                highly sought after across industries. From healthcare to finance, organizations are looking for 
                talent that can harness the power of intelligent systems.
              </p>

              <h2>2. Data Analysis and Interpretation</h2>
              <p>
                As data continues to grow exponentially, the ability to analyze, interpret, and derive 
                meaningful insights from complex datasets remains crucial. Beyond technical analysis, employers 
                value professionals who can translate data findings into strategic business decisions.
              </p>

              <h2>3. Digital Collaboration</h2>
              <p>
                With hybrid and remote work models becoming permanent fixtures, digital collaboration skills are 
                essential. This goes beyond using collaboration tools—it includes virtual leadership, digital communication 
                etiquette, and the ability to facilitate productive remote teamwork.
              </p>

              <h2>4. Cybersecurity Awareness</h2>
              <p>
                As digital systems become more integrated into every aspect of business operations, cybersecurity 
                is everyone's responsibility. Basic security awareness and best practices will be expected of all 
                professionals, not just IT specialists.
              </p>

              <h2>5. Sustainability and Environmental Management</h2>
              <p>
                As companies face increasing pressure to reduce their environmental footprint, professionals with 
                knowledge of sustainable practices and environmental management principles will be in high demand. 
                This includes understanding carbon accounting, circular economy principles, and sustainable supply chain management.
              </p>

              <h2>6. Critical Thinking and Complex Problem-Solving</h2>
              <p>
                In an age where AI can handle routine tasks, human value lies in addressing complex, multifaceted problems. 
                Employers are looking for individuals who can think critically, approach problems from multiple perspectives, 
                and develop innovative solutions.
              </p>

              <h2>7. Emotional Intelligence</h2>
              <p>
                As automation handles more technical tasks, human skills become more valuable. Emotional intelligence—the 
                ability to understand, manage, and effectively express one's own feelings, as well as engage and navigate 
                successfully with the emotions of others—is increasingly important in the workplace.
              </p>

              <h2>8. Adaptive Learning and Resilience</h2>
              <p>
                The half-life of skills is shrinking rapidly. The ability to continuously learn, unlearn, and relearn 
                is becoming essential. Employers value candidates who demonstrate learning agility and resilience in the 
                face of constant change.
              </p>

              <h2>9. Cross-Cultural Communication</h2>
              <p>
                In our global economy, the ability to communicate effectively across cultures is invaluable. 
                This includes language skills, cultural sensitivity, and the ability to adapt communication styles to 
                different contexts and audiences.
              </p>

              <h2>10. Ethical Judgment and Decision-Making</h2>
              <p>
                As technology raises complex ethical questions, professionals who can navigate these challenges with 
                sound ethical judgment will be highly valued. This includes understanding the ethical implications of 
                AI, data privacy, and other technological developments.
              </p>

              <h2>Preparing for the Future</h2>
              <p>
                The good news is that many of these skills can be developed through intentional practice, continued education, 
                and real-world experience. At Thryvo, we're committed to helping students develop these future-ready 
                skills through our specialized programs and industry partnerships.
              </p>

              <p>
                Remember, the most successful professionals will be those who combine technical expertise with human skills 
                like creativity, empathy, and ethical judgment. As you plan your career development, focus on building a 
                diverse skill set that includes both technical and human capabilities.
              </p>
            </div>
          </Container>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-8 border-t border-gray-200">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About the Author</h2>
            <div className="flex items-start">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                MG
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Maria Garcia</h3>
                <p className="text-gray-600 mb-3">
                  Maria Garcia is the Director of Student Success at Thryvo. With over 15 years of experience in career counseling 
                  and talent development, she specializes in helping students prepare for emerging workforce trends.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'How to Build Your Personal Brand as a Student',
                  excerpt: 'Learn strategies to establish a strong professional identity while still in college.',
                  category: 'Career Tips',
                  date: 'April 22, 2025',
                },
                {
                  title: 'The Rise of Micro-Credentials in the Job Market',
                  excerpt: 'How targeted certifications are transforming how employers evaluate candidates.',
                  category: 'Education Trends',
                  date: 'May 2, 2025',
                },
                {
                  title: 'Networking in the Digital Age: A Student\'s Guide',
                  excerpt: 'Effective networking strategies for building professional connections online.',
                  category: 'Career Development',
                  date: 'May 10, 2025',
                },
              ].map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 bg-indigo-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-indigo-300">Image</span>
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      <Link href="#" className="hover:text-indigo-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Develop These Skills?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thryvo offers specialized courses and resources to help you build the skills employers are looking for.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/students">
                <Button variant="primary">
                  Explore Our Resources
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  Talk to an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
