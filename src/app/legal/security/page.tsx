import Container from '@/components/ui/Container';

export const metadata = {
  title: 'Security Policy | Thryvo',
  description: 'Learn about Thryvo\'s commitment to security and how we protect your data and privacy.',
};

export default function SecurityPolicyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Security Policy</h1>
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
              At Thryvo, we take security seriously. We understand that the security of your personal information and data 
              is critical, and we employ a comprehensive approach to protect it. This Security Policy outlines our commitment 
              to maintaining the confidentiality, integrity, and availability of your information.
            </p>

            <h2>Our Security Commitments</h2>
            <p>
              We are committed to:
            </p>
            <ul>
              <li>Protecting your personal information from unauthorized access, use, or disclosure</li>
              <li>Maintaining the accuracy and integrity of your data</li>
              <li>Ensuring the appropriate use of your information</li>
              <li>Providing secure and reliable access to our services</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Continuously improving our security measures</li>
            </ul>

            <h2>Data Protection Measures</h2>
            <p>
              Thryvo implements multiple layers of security measures to protect your data:
            </p>
            <h3>Physical Security</h3>
            <ul>
              <li>Our servers are hosted in secure data centers with 24/7 monitoring, surveillance, and controlled access</li>
              <li>We maintain strict access controls to our offices and facilities</li>
              <li>Regular physical security audits and assessments</li>
            </ul>

            <h3>Network Security</h3>
            <ul>
              <li>Firewalls and intrusion detection/prevention systems to monitor and block suspicious activities</li>
              <li>Regular vulnerability scans and penetration testing</li>
              <li>DDoS protection and mitigation</li>
              <li>Secure VPN access for remote employees</li>
            </ul>

            <h3>Application Security</h3>
            <ul>
              <li>Secure software development lifecycle</li>
              <li>Regular code reviews and security testing</li>
              <li>Input validation and output encoding to prevent injection attacks</li>
              <li>Protection against common web vulnerabilities (OWASP Top 10)</li>
            </ul>

            <h3>Data Security</h3>
            <ul>
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>Strong access controls and role-based permissions</li>
              <li>Regular data backups with secure off-site storage</li>
              <li>Data minimization and retention policies</li>
            </ul>

            <h2>Employee Security</h2>
            <p>
              Our security measures extend to our team members:
            </p>
            <ul>
              <li>Background checks for employees with access to sensitive data</li>
              <li>Regular security awareness training</li>
              <li>Strict access controls based on the principle of least privilege</li>
              <li>Secure authentication mechanisms including multi-factor authentication</li>
            </ul>

            <h2>Security Incident Response</h2>
            <p>
              Despite our best efforts, security incidents may occur. We maintain a comprehensive incident response plan that includes:
            </p>
            <ul>
              <li>A dedicated security incident response team</li>
              <li>Clearly defined procedures for identifying, containing, and resolving security incidents</li>
              <li>Regular testing of our incident response procedures</li>
              <li>Notification processes in accordance with applicable laws and regulations</li>
            </ul>

            <h2>Compliance</h2>
            <p>
              Thryvo is committed to compliance with applicable security and privacy regulations, including:
            </p>
            <ul>
              <li>General Data Protection Regulation (GDPR)</li>
              <li>Information Technology Act, 2000 (India)</li>
              <li>Personal Data Protection Bill (India)</li>
              <li>Industry best practices and frameworks</li>
            </ul>

            <h2>Third-Party Security</h2>
            <p>
              We carefully select and monitor our third-party service providers:
            </p>
            <ul>
              <li>Vendor security assessments before engagement</li>
              <li>Contractual security requirements</li>
              <li>Regular monitoring and reassessment</li>
              <li>Limited access to only what is necessary</li>
            </ul>

            <h2>Your Role in Security</h2>
            <p>
              Security is a shared responsibility. You can help protect your account by:
            </p>
            <ul>
              <li>Creating strong, unique passwords</li>
              <li>Enabling two-factor authentication when available</li>
              <li>Being cautious about phishing attempts and suspicious communications</li>
              <li>Keeping your devices and software updated</li>
              <li>Logging out of your account when using shared devices</li>
              <li>Promptly notifying us of any suspicious activity related to your account</li>
            </ul>

            <h2>Updates to This Policy</h2>
            <p>
              We regularly review and update our security practices and this policy to address new threats and technologies. 
              We will notify users of significant changes to our security practices.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our security practices or want to report a security concern, please contact us at:
            </p>
            <p>
              Thryvo Technologies Pvt. Ltd.<br />
              123 Innovation Hub, Sector 21<br />
              Gurgaon, Haryana 122001<br />
              India<br /><br />
              Email: security@thryvo.com<br />
              Phone: +91 8800 123 456
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
