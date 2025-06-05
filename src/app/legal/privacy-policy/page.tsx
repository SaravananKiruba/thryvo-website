import Container from '@/components/ui/Container';

export const metadata = {
  title: 'Privacy Policy | Thryvo',
  description: 'Thryvo\'s privacy policy detailing how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Privacy Policy</h1>
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
              At Thryvo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website and use our platform.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on our platform, 
              express interest in obtaining information about our services, or otherwise contact us. The personal information 
              we collect may include:
            </p>
            <ul>
              <li>Name, email address, phone number, and other contact details</li>
              <li>Educational information including institutions attended, courses, and qualifications</li>
              <li>Professional experience including work history, skills, and certifications</li>
              <li>Profile information including resume/CV, profile picture, and personal statements</li>
              <li>Login data, browser type, IP address, device information, and usage information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Facilitate and maintain your user account and profile</li>
              <li>Connect students with placement opportunities, educational resources, and employers</li>
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you administrative information, updates, and marketing communications</li>
              <li>Monitor and analyze usage trends and preferences to improve our website and platform</li>
              <li>Protect our platform and users from fraud, unauthorized access, and other illegal activities</li>
              <li>Comply with legal requirements and enforce our terms of service</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share information with:</p>
            <ul>
              <li><strong>Educational Institutions</strong>: We may share your information with colleges and universities that you are associated with or interested in.</li>
              <li><strong>Employers</strong>: We may share your profile and application information with employers for recruitment purposes.</li>
              <li><strong>Service Providers</strong>: We may share your information with third-party vendors who provide services on our behalf.</li>
              <li><strong>Business Transfers</strong>: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements</strong>: We may disclose your information when required by law or in response to valid legal requests.</li>
            </ul>

            <h2>Security of Your Information</h2>
            <p>
              We implement appropriate security measures to protect your information against unauthorized access, alteration, 
              disclosure, or destruction. However, no internet or electronic transmission is ever fully secure or error-free, 
              and we cannot guarantee absolute security.
            </p>

            <h2>Your Privacy Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details provided below. Please note that we may ask you 
              to verify your identity before responding to such requests.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13. If we learn we have collected personal information from a child under 13, we will delete 
              that information as quickly as possible.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our platform and store certain information. 
              Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct 
              your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites that are not operated by us. We have no control over and 
              assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically 
              for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Thryvo<br />
              123 Innovation Way<br />
              Tech Park, Bangalore 560001<br />
              India<br /><br />
              Email: privacy@thryvo.com<br />
              Phone: +91 123-456-7890
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
