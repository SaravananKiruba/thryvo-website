import Container from '@/components/ui/Container';
import React from 'react';

export const metadata = {
  title: 'About Us | Thryvo',
  description: 'Learn about Thryvo\'s mission, leadership team, and our commitment to empowering students for future success.',
};

export default function AboutPage() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">About Thryvo</h1>
            <p className="text-lg text-gray-600">
              We're on a mission to bridge the gap between education and employment, empowering students to reach their full potential.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision & Mission</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Vision</h3>
                <p className="text-lg text-gray-600 mb-6">
                  To create a world where every student has equal access to quality career opportunities and education regardless of their background or location.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Mission</h3>
                <p className="text-lg text-gray-600 mb-6">
                  At Thryvo, we believe that every student deserves access to quality opportunities that align with their skills and aspirations.
                  Our platform is designed to democratize access to career resources, skill development, and higher education pathways.
                </p>
                <p className="text-lg text-gray-600">
                  We work closely with educational institutions and employers to create a seamless ecosystem 
                  where talent meets opportunity, and where students can thrive in their chosen fields.
                </p>
              </div>
            </div>
            <div className="bg-indigo-100 h-80 rounded-lg flex items-center justify-center">
              {/* Placeholder for mission image */}
              <span className="text-2xl font-bold text-indigo-300">Mission Image</span>
            </div>
          </div>
        </Container>
      </section>      {/* Our Story - Founding Journey */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            The journey from idea to India's most student-centric career platform
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-indigo-500 pl-6 mb-12 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-indigo-500"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Beginning (2023)</h3>
              <p className="text-gray-600 mb-3">
                Thryvo was founded by a team of education enthusiasts and tech innovators who saw the challenges 
                students face when transitioning from education to employment.
              </p>
              <p className="text-gray-600">
                What started as a simple job board for campus placements quickly evolved into a comprehensive platform 
                addressing the holistic needs of students, colleges, and employers.
              </p>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-6 mb-12 relative">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-indigo-500"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth and Evolution (2024)</h3>
              <p className="text-gray-600 mb-3">
                Over the years, we've expanded our services based on feedback from students and educational institutions. 
                We've introduced skill development programs, mentorship opportunities, and global education resources.
              </p>
              <p className="text-gray-600">
                Today, Thryvo serves thousands of students across multiple colleges and universities, 
                helping them navigate their career paths with confidence.
              </p>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Looking Ahead</h3>
              <p className="text-gray-600 mb-3">
                We're constantly innovating to better serve our community. Our roadmap includes AI-powered career guidance, 
                expanded global opportunities, and deeper integration with educational curricula.
              </p>
              <p className="text-gray-600">
                Our vision is to create a world where every student has the tools and resources they need to build a fulfilling career.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Jane Doe', title: 'CEO & Co-founder', bio: 'Former education policy advisor with a passion for EdTech innovation.' },
              { name: 'John Smith', title: 'CTO & Co-founder', bio: 'Tech veteran with 15 years of experience building scalable platforms.' },
              { name: 'Alex Johnson', title: 'Head of Partnerships', bio: 'Expert in building bridges between academia and industry.' },
              { name: 'Maria Garcia', title: 'Director of Student Success', bio: 'Dedicated to ensuring students get the most out of Thryvo.' },
              { name: 'David Kim', title: 'Head of Product', bio: 'Focused on creating intuitive and impactful user experiences.' },
              { name: 'Sarah Patel', title: 'Global Education Lead', bio: 'Specialist in international education and cross-border opportunities.' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center text-indigo-600 font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 text-center text-sm mb-3">{member.title}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>      {/* Values */}
      <section className="py-16 bg-indigo-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Student-First', description: 'Everything we do is designed with students\' needs and success in mind.' },
              { title: 'Innovation', description: 'We constantly seek better ways to connect students with opportunities.' },
              { title: 'Inclusivity', description: 'We believe in creating a platform that works for students from all backgrounds.' },
              { title: 'Impact', description: 'We measure our success by the positive differences we make in students\' lives.' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Thryvo - What Sets Us Apart */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Sets Us Apart</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            How Thryvo differentiates from other platforms in the market
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                title: "Student-Centric Approach",
                description: "Unlike Superset and Internshala, our platform is built around students' needs first, not just employer requirements. Every feature is designed to empower students throughout their career journey.",
              },
              {
                title: "AI-Powered Matching",
                description: "Our proprietary algorithms match students with opportunities based on skills, interests, and potential – not just keywords on a resume. This results in higher-quality matches for both students and employers.",
              },
              {
                title: "End-to-End Journey Support",
                description: "While others focus solely on job listings, we provide comprehensive resources for every stage of a student's journey – from skill development to job placement to higher education.",
              },
              {
                title: "Deep College Integration",
                description: "We work directly with college placement cells and administrators to create seamless experiences, unlike generic platforms that treat educational institutions as mere sources of users.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
