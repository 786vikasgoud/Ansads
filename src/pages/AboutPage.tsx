import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Aditya Nanda Sai',
      position: 'CEO & Founder',
      bio: 'With over 15 years of experience in digital marketing, Alex has helped numerous businesses transform their online presence.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Krishna',
      position: 'Head of Strategy',
      bio: 'Sarah brings 10+ years of strategic marketing expertise, specializing in developing comprehensive advertising solutions.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Vikas',
      position: 'Creative Director',
      bio: 'Michael leads our creative team with his innovative vision and extensive experience in brand development and visual design.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Aditya Nanda Sai',
      position: 'Digital Marketing Specialist',
      bio: 'Emily is an expert in social media marketing and content strategy, helping clients build meaningful connections with their audience.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const values = [
    {
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that drive real business growth for our clients.',
      icon: <Target size={32} />
    },
    {
      title: 'Client Partnership',
      description: 'We view our clients as partners and are committed to their long-term success.',
      icon: <Users size={32} />
    },
    {
      title: 'Innovation',
      description: 'We stay at the forefront of digital marketing trends and technologies to provide cutting-edge solutions.',
      icon: <Award size={32} />
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business dealings.',
      icon: <Heart size={32} />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 to-primary-900 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AnsAds</h1>
            <p className="text-lg text-gray-200 mb-8">
              We're a team of passionate advertising professionals dedicated to helping businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection animation="slideRight" className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Team Collaborating" 
                className="rounded-lg shadow-lg w-full"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="slideLeft" className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-dark-600 mb-6">
                Founded in 2015, AnsAds began with a simple mission: to provide businesses with honest, effective advertising solutions that drive real results. Our founder recognized a gap in the market for a data-driven, transparent approach to digital advertising.
              </p>
              <p className="text-lg text-dark-600 mb-6">
                What started as a small team of three has grown into a full-service advertising agency with expertise across all digital channels. We've helped hundreds of businesses, from startups to established enterprises, achieve their marketing goals and grow their online presence.
              </p>
              <p className="text-lg text-dark-600">
                Today, we continue to evolve with the changing digital landscape, staying at the forefront of advertising trends and technologies while maintaining our commitment to client success and measurable results.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-dark-600">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Our diverse team of experts is passionate about digital advertising and committed to your success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                    <p className="text-dark-600">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection animation="slideRight" className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose AnsAds?</h2>
              <p className="text-lg text-dark-600 mb-8">
                We combine strategic thinking, creative excellence, and technical expertise to deliver advertising solutions that exceed expectations.
              </p>
              
              <div className="space-y-4">
                {[
                  'Data-driven strategies that deliver measurable results',
                  'Transparent communication and reporting',
                  'Experienced team with diverse expertise',
                  'Tailored solutions for your specific business goals',
                  'Continuous optimization and improvement'
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-dark-600">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button>
                  Schedule a Consultation
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideLeft" className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-lg w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '8+', label: 'Years of Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '150+', label: 'Happy Clients' },
              { value: '15+', label: 'Industry Awards' }
            ].map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-300">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your advertising goals and grow your business.
              </p>
              <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                Get in Touch
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;