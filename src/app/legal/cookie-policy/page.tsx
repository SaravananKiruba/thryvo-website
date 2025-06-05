import Container from '@/components/ui/Container';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Cookie Policy | Thryvo',
  description: 'Learn about how Thryvo uses cookies and similar technologies to provide, improve, and protect our services.',
};

export default function CookiePolicyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Cookie Policy</h1>
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
              This Cookie Policy explains how Thryvo Technologies Pvt. Ltd. ("we", "us", or "our") uses cookies and similar 
              technologies to recognize you when you visit our website and use our platform. It explains what these technologies 
              are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well 
              as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Thryvo) are called "first-party cookies". Cookies set by 
              parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party 
              features or functionality to be provided on or through the website (e.g., advertising, interactive content, 
              and analytics). The parties that set these third-party cookies can recognize your device both when it visits 
              the website in question and also when it visits certain other websites.
            </p>

            <h2>Why Do We Use Cookies?</h2>
            <p>
              We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in 
              order for our website and platform to operate, and we refer to these as "essential" or "necessary" cookies. 
              Other cookies enable us to track and target the interests of our users to enhance the experience on our website 
              and platform. Third parties serve cookies through our website for advertising, analytics, and other purposes.
            </p>
            <p>
              Specifically, we use cookies for the following purposes:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available 
                through our website and platform and to use some of its features, such as access to secure areas. Because these 
                cookies are strictly necessary to deliver the website and platform, you cannot refuse them without impacting how 
                our website and platform function.
              </li>
              <li>
                <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and 
                functionality of our website and platform but are non-essential. However, without these cookies, certain 
                functionality may become unavailable.
              </li>
              <li>
                <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in 
                aggregate form to help us understand how our website and platform are being used or how effective our marketing 
                campaigns are, or to help us customize our website and platform for you.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. 
                They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly 
                displayed, and in some cases selecting advertisements that are based on your interests.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> These cookies are used to enable you to share pages and content that you 
                find interesting on our website and platform through third-party social networking and other websites. These 
                cookies may also be used for advertising purposes.
              </li>
            </ul>

            <h2>How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by 
              clicking on the appropriate opt-out links provided in the cookie banner on our website.
            </p>
            <p>
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
              you may still use our website though your access to some functionality and areas of our website and platform may 
              be restricted. As the means by which you can refuse cookies through your web browser controls vary from 
              browser-to-browser, you should visit your browser's help menu for more information.
            </p>
            <p>
              In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to 
              find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> or 
              <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>.
            </p>

            <h2>How Often Will We Update This Cookie Policy?</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
              or for other operational, legal or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay 
              informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p>
              Thryvo Technologies Pvt. Ltd.<br />
              123 Innovation Hub, Sector 21<br />
              Gurgaon, Haryana 122001<br />
              India<br /><br />
              Email: privacy@thryvo.com<br />
              Phone: +91 8800 123 456
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
