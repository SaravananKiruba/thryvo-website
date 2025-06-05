import Link from 'next/link';
import Container from '@/components/ui/Container';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Page Not Found | Thryvo',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
