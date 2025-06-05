import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

type Params = { params: { slug: string } }

// This is required for static site generation with dynamic routes
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Thryvo Blog',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | Thryvo Blog`,
    description: post.description,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.dateISO,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(post.id);  return (
    <>
      <article>
        {/* Article Header */}
        <header className="bg-gradient-to-b from-indigo-50 to-white py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                {post.title}
              </h1>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                  {post.author.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{post.author.name}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={post.dateISO}>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readingTime}</span>
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
                {post.featuredImage ? (
                  // If we have a real image
                  <img 
                    src={post.featuredImage} 
                    alt={`Featured image for ${post.title}`} 
                    className="object-cover w-full h-full"
                  />
                ) : (
                  // Placeholder
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-300">Featured Image</span>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>

        {/* Article Body */}
        <div className="py-8">
          <Container>
            <div 
              className="max-w-3xl mx-auto prose prose-lg prose-indigo"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
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
                {post.author.initials}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{post.author.name}</h3>
                <p className="text-gray-600 mb-3">
                  {post.author.bio}
                </p>
                <div className="flex space-x-4">
                  {post.author.socials.twitter && (
                    <Link href={post.author.socials.twitter} className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                  )}
                  {post.author.socials.linkedin && (
                    <Link href={post.author.socials.linkedin} className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  )}
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
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 bg-indigo-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-indigo-300">Image</span>
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-indigo-600">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{relatedPost.excerpt}</p>
                    <p className="text-xs text-gray-500">{relatedPost.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>      {/* CTA Section */}
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
