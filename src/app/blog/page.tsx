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
  title: 'Blog & Resources | Thryvo',
  description: 'Stay updated with the latest insights on campus placements, skill development, and higher education opportunities to advance your career.',
};

const blogPosts = [
  {
    id: 'top-skills-2025',
    title: 'Top 10 Skills Employers Will Look for in 2025',
    excerpt: 'As technology evolves and industries transform, the skills in demand are shifting. Learn about the most sought-after skills for the coming year.',
    author: 'Maria Garcia',
    date: 'May 15, 2025',
    category: 'Career Insights',
    readTime: '5 min read',
    imageUrl: '#'
  },
  {
    id: 'campus-placement-prep',
    title: 'How to Prepare for Your Campus Placement Season',
    excerpt: 'A comprehensive guide to help students navigate the campus placement process, from resume building to acing interviews.',
    author: 'John Smith',
    date: 'April 28, 2025',
    category: 'Placement Tips',
    readTime: '8 min read',
    imageUrl: '#'
  },
  {
    id: 'global-education-trends',
    title: 'Global Education Trends: Opportunities Beyond Borders',
    excerpt: 'Exploring international education opportunities, scholarships, and how to prepare for studying abroad.',
    author: 'Sarah Patel',
    date: 'April 10, 2025',
    category: 'Higher Education',
    readTime: '6 min read',
    imageUrl: '#'
  },
  {
    id: 'tech-industry-hiring',
    title: 'Inside Tech Industry Hiring: What Companies Really Look For',
    excerpt: 'Beyond technical skills: what tech companies prioritize when evaluating fresh graduates.',
    author: 'David Kim',
    date: 'March 22, 2025',
    category: 'Industry Insights',
    readTime: '7 min read',
    imageUrl: '#'
  },
  {
    id: 'portfolio-building',
    title: 'Building a Standout Portfolio as a Student',
    excerpt: 'Learn how to showcase your projects, skills and achievements in a portfolio that catches employers\' attention.',
    author: 'Alex Johnson',
    date: 'March 5, 2025',
    category: 'Career Tips',
    readTime: '4 min read',
    imageUrl: '#'
  },
  {
    id: 'internship-remote',
    title: 'Making the Most of Remote Internships',
    excerpt: 'Strategies and best practices for thriving in virtual internship environments and making meaningful connections.',
    author: 'Jane Doe',
    date: 'February 18, 2025',
    category: 'Internships',
    readTime: '5 min read',
    imageUrl: '#'
  }
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Blog & <span className="text-indigo-600">Resources</span>
            </h1>
            <p className="text-lg text-gray-600">
              Insights, tips, and resources to help students navigate their education and career journeys.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Topic Filters */}
      <section className="py-8 border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {['All Topics', 'Study Abroad', 'Internships', 'Career Tips', 'College Hacks', 'Tech Trends', 'Higher Education'].map((topic) => (
              <button 
                key={topic} 
                className={`px-4 py-2 rounded-full text-sm font-medium ${topic === 'All Topics' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {topic}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main featured article */}
            <div className="lg:col-span-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-300">Featured Image</span>
                </div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold mb-3">
                    {blogPosts[2].category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-200 transition-colors">
                    <Link href={`/blog/${blogPosts[2].id}`}>
                      {blogPosts[2].title}
                    </Link>
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-3">
                    {blogPosts[2].excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-bold mr-3">
                      {blogPosts[2].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{blogPosts[2].author}</div>
                      <div className="text-xs text-gray-300">{blogPosts[2].date} • {blogPosts[2].readTime}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary featured articles in grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[blogPosts[0], blogPosts[1]].map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-indigo-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                        Read more →
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Sidebar featured articles */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {['Internships', 'Resume Tips', 'Interview Prep', 'Study Abroad', 'Skill Development', 'Career Paths'].map((tag) => (
                    <Link 
                      key={tag} 
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-800"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {blogPosts.slice(3, 5).map((post) => (
                <div key={post.id} className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-4">
                  <div className="sm:w-1/3">
                    <div className="h-24 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-indigo-300">Image</span>
                    </div>
                  </div>
                  <div className="sm:w-2/3">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      <Link href={`/blog/${post.id}`} className="hover:text-indigo-600">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border border-gray-200">
                <div className="h-48 bg-indigo-100 -mx-6 -mt-6 mb-4 flex items-center justify-center">
                  <span className="text-lg font-bold text-indigo-300">Image</span>
                </div>
                <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-indigo-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mt-auto">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Career Tips', 'Placement Guides', 'Skill Development', 'Higher Education', 'Industry Insights', 'Student Life'].map((category) => (
              <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:border-indigo-600 hover:shadow-md transition-all">
                <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-900 hover:text-indigo-600 font-medium">
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-indigo-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest articles, resources, and career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
