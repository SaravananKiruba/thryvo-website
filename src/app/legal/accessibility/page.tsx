import Container from '@/components/ui/Container';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Accessibility Statement | Thryvo',
  description: 'Learn about Thryvo\'s commitment to accessibility and how we strive to make our platform usable by everyone.',
};

export default function AccessibilityPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Accessibility Statement</h1>
            <p className="text-lg text-gray-600">
              Last Updated: June 1, 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              Thryvo is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user 
              experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2>Our Commitment to Accessibility</h2>
            <p>
              We strive to ensure that our website and platform are accessible to all users, regardless of ability or technology. 
              Thryvo aims to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which define how to make 
              web content more accessible to people with a wide range of disabilities.
            </p>
            <p>
              These disabilities include, but are not limited to:
            </p>
            <ul>
              <li>Visual impairments</li>
              <li>Hearing impairments</li>
              <li>Motor disabilities</li>
              <li>Cognitive disabilities</li>
              <li>Speech disabilities</li>
            </ul>

            <h2>Accessibility Features</h2>
            <p>
              We have implemented various features to enhance accessibility, including:
            </p>
            <ul>
              <li>Semantic HTML structure for better screen reader compatibility</li>
              <li>Keyboard navigation support throughout the website</li>
              <li>Text alternatives for non-text content</li>
              <li>Color contrast that meets minimum requirements</li>
              <li>Resizable text without loss of content or functionality</li>
              <li>Consistent navigation and identification of elements</li>
              <li>ARIA (Accessible Rich Internet Applications) attributes where appropriate</li>
              <li>Form labels and instructions for input fields</li>
              <li>Error identification and suggestions for correction</li>
            </ul>

            <h2>Ongoing Improvements</h2>
            <p>
              Accessibility is an ongoing effort, and we are committed to:
            </p>
            <ul>
              <li>Regularly testing our website with assistive technologies</li>
              <li>Training our development and content teams on accessibility best practices</li>
              <li>Incorporating accessibility reviews into our development process</li>
              <li>Engaging with users with disabilities to gather feedback</li>
              <li>Promptly addressing accessibility issues when they are identified</li>
            </ul>

            <h2>Known Issues</h2>
            <p>
              While we strive for full accessibility, we acknowledge that there may be areas of our website that are not yet 
              fully accessible. We are actively working to identify and address these issues. If you encounter any accessibility 
              problems, please let us know so we can make improvements.
            </p>

            <h2>Testing and Validation</h2>
            <p>
              Our website is regularly tested for accessibility issues using:
            </p>
            <ul>
              <li>Automated accessibility testing tools</li>
              <li>Manual testing by developers</li>
              <li>User testing with assistive technologies</li>
              <li>Expert reviews by accessibility specialists</li>
            </ul>

            <h2>Compatibility with Assistive Technologies</h2>
            <p>
              We aim to ensure our website works well with common assistive technologies, including:
            </p>
            <ul>
              <li>Screen readers (such as JAWS, NVDA, VoiceOver, and TalkBack)</li>
              <li>Screen magnifiers</li>
              <li>Speech recognition software</li>
              <li>Alternative keyboard and pointing devices</li>
            </ul>

            <h2>Feedback and Contact Information</h2>
            <p>
              We welcome your feedback on the accessibility of our website and platform. Please let us know if you encounter 
              accessibility barriers or have suggestions for improvement:
            </p>
            <p>
              Thryvo Technologies Pvt. Ltd.<br />
              123 Innovation Hub, Sector 21<br />
              Gurgaon, Haryana 122001<br />
              India<br /><br />
              Email: accessibility@thryvo.com<br />
              Phone: +91 8800 123 456
            </p>

            <h2>Legal Disclaimer</h2>
            <p>
              Thryvo is committed to making its website accessible and usable for all people. However, given the rapid pace of 
              technological advancement and the ever-evolving nature of accessibility standards, we cannot guarantee or warrant 
              that our website will comply with all applicable standards at all times.
            </p>
            <p>
              This statement was created on June 1, 2025, and will be reviewed and updated annually or when significant changes 
              are made to the website.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
