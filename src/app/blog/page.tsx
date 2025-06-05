import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Blog | Thryvo',
  description: 'Stay updated with the latest insights on campus placements, skill development, and higher education opportunities.',
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
              Thryvo Blog
            </h1>
            <p className="text-lg text-gray-600">
              Insights, tips, and resources to help students navigate their education and career journeys.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-4 bg-indigo-100">
                {/* Placeholder for featured image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-300">Featured Image</span>
                </div>
              </div>
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href={`/blog/${blogPosts[0].id}`} className="hover:text-indigo-600">
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{blogPosts[0].date}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
                <span className="mx-2">•</span>
                <span>By {blogPosts[0].author}</span>
              </div>
            </div>

            <div className="space-y-8">
              {blogPosts.slice(1, 3).map((post) => (
                <div key={post.id} className="flex flex-col sm:flex-row gap-4">
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
