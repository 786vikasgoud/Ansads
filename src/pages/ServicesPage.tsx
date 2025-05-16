{/* Providing the complete file content with the escaped apostrophe */}
import React from 'react';
import { 
  LineChart, 
  BarChart, 
  Globe, 
  Share2, 
  Search, 
  PenTool, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Our digital marketing services are designed to maximize your online presence and drive measurable results. We create comprehensive strategies that align with your business goals and target audience.',
      icon: <Globe size={32} />,
      benefits: [
        'Customized marketing strategies aligned with your business goals',
        'Data-driven campaigns that deliver measurable results',
        'Continuous optimization based on performance analytics',
        'Integrated approach across multiple digital channels'
      ],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'social-media',
      title: 'Social Media Advertising',
      description: 'Our social media advertising services help you connect with your audience where they spend their time. We create engaging campaigns that increase brand awareness, drive engagement, and generate leads.',
      icon: <Share2 size={32} />,
      benefits: [
        'Platform-specific strategies for optimal performance',
        'Targeted audience segmentation to reach ideal customers',
        'Engaging content that drives interaction and shares',
        'Performance tracking and ROI measurement'
      ],
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Improve your search engine visibility and drive organic traffic to your website with our comprehensive SEO services. We implement proven strategies to help your business rank higher in search results.',
      icon: <Search size={32} />,
      benefits: [
        'Technical SEO audits and implementation',
        'Content optimization for target keywords',
        'Local SEO strategies for businesses with physical locations',
        'Link building and off-page optimization'
      ],
      image: 'https://images.pexels.com/photos/907607/pexels-photo-907607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'content',
      title: 'Content Creation',
      description: 'Our content creation services help you tell your brand story and connect with your audience. We create engaging, valuable content that builds authority and drives conversions.',
      icon: <PenTool size={32} />,
      benefits: [
        'Strategic content planning aligned with business goals',
        'SEO-optimized content that ranks in search results',
        'Engaging storytelling that resonates with your audience',
        'Multi-format content for diverse platforms and channels'
      ],
      image: 'https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'ppc',
      title: 'PPC Campaigns',
      description: 'Our PPC campaign services help you reach your target audience quickly and efficiently. We create and manage high-performing campaigns that drive traffic, leads, and sales.',
      icon: <LineChart size={32} />,
      benefits: [
        'Strategic keyword research and selection',
        'Compelling ad copy that drives clicks',
        'Continuous campaign optimization for maximum ROI',
        'Detailed performance reporting and analysis'
      ],
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'brand-strategy',
      title: 'Brand Strategy',
      description: 'Our brand strategy services help you define and communicate your brand identity. We create comprehensive strategies that differentiate your business and connect with your target audience.',
      icon: <TrendingUp size={32} />,
      benefits: [
        'Brand positioning and messaging development',
        'Visual identity and design systems',
        'Brand voice and communication guidelines',
        'Competitive analysis and market positioning'
      ],
      image: 'https://images.pexels.com/photos/7681283/pexels-photo-7681283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 to-primary-900 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-200 mb-8">
              Comprehensive advertising solutions tailored to your business goals and target audience. We deliver results-driven campaigns that help your business grow.
            </p>
            <Button size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">What We Offer</h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              We provide a comprehensive range of advertising and marketing services to help your business thrive in the digital landscape
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.slice(0, 6).map((service, index) => (
              <AnimatedSection 
                key={service.id} 
                delay={index * 0.1} 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-dark-600">{service.description.substring(0, 120)}...</p>
                <a href={`#${service.id}`} className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Learn more
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {mainServices.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <AnimatedSection 
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"} 
                className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full"
                />
              </AnimatedSection>
              
              <AnimatedSection 
                animation={index % 2 === 0 ? "slideLeft" : "slideRight"} 
                className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-dark-600 mb-6">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button>Get Started</Button>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We follow a proven process to ensure the success of your advertising campaigns
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', description: 'We start by understanding your business, goals, target audience, and competitors.' },
              { title: 'Strategy', description: 'Based on our findings, we develop a comprehensive strategy tailored to your specific needs.' },
              { title: 'Implementation', description: 'We bring the strategy to life through meticulous execution across selected channels.' },
              { title: 'Optimization', description: 'We continuously monitor, analyze, and optimize campaigns to maximize results.' }
            ].map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1} className="relative">
                <div className="bg-dark-800 rounded-lg p-6 relative z-10 h-full border-l-4 border-primary-600">
                  <div className="text-primary-600 text-6xl font-bold opacity-20 absolute -top-4 -left-2">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 relative">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and approach
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {[
              { 
                question: 'How do you measure the success of advertising campaigns?', 
                answer: 'We establish clear KPIs at the beginning of each campaign, which may include metrics like conversion rates, ROAS, engagement rates, and lead generation. We provide regular reporting and analysis to track performance against these goals.' 
              },
              { 
                question: 'How long does it take to see results from digital advertising?', 
                answer: 'The timeline varies depending on the specific channels and strategies. PPC campaigns can drive immediate traffic, while SEO and content marketing typically show results over 3-6 months. We set realistic expectations and focus on both short-term wins and long-term growth.' 
              },
              { 
                question: 'What sets your agency apart from other advertising agencies?', 
                answer: 'We combine data-driven strategies with creative excellence, focusing on measurable results that impact your bottom line. Our team brings deep expertise across multiple channels, and we pride ourselves on transparent communication and collaborative partnerships with our clients.' 
              },
              { 
                question: 'Do you work with businesses of all sizes?', 
                answer: 'Yes, we work with businesses of all sizes across various industries. We tailor our approach to match your specific needs, goals, and budget, ensuring that our strategies align with your business stage and growth objectives.' 
              },
              { 
                question: 'What is the typical budget range for your services?', 
                answer: 'Our service packages are customized based on your specific goals and requirements. We work with a wide range of budgets and focus on delivering maximum ROI regardless of campaign size. We\'re happy to discuss options during a consultation.' 
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="mb-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-dark-600">{faq.answer}</p>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Advertising?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our team to discuss how we can help you achieve your business goals through strategic advertising.
              </p>
              <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                Get Started Today
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;