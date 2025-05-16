{/* Providing the complete file content with the escaped apostrophe */}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured?: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const caseStudies: CaseStudy[] = [
    {
      id: 'ecommerce-growth',
      title: 'E-commerce Revenue Growth',
      client: 'FashionTrends',
      category: 'Digital Marketing',
      description: 'How we helped an e-commerce brand increase revenue by 127% through targeted digital marketing strategies.',
      challenge: 'FashionTrends was struggling to convert website visitors into customers, with a high cart abandonment rate and low ROI on their existing advertising efforts. They needed a comprehensive strategy to improve conversion rates and increase revenue.',
      solution: 'We implemented a multi-channel approach focusing on targeted Facebook and Instagram ads, email marketing automation for cart abandonment, and conversion rate optimization (CRO) for their product pages. We also refined their Google Shopping campaigns and introduced dynamic retargeting.',
      results: [
        '127% increase in e-commerce revenue within 6 months',
        '43% reduction in cart abandonment rate',
        '3.2x improvement in ROAS (Return on Ad Spend)',
        '68% increase in average order value'
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      featured: true
    },
    {
      id: 'b2b-lead-generation',
      title: 'B2B Lead Generation Campaign',
      client: 'TechSolutions Inc.',
      category: 'PPC & Content Strategy',
      description: 'Generating 350+ qualified B2B leads per month through an integrated PPC and content marketing approach.',
      challenge: 'TechSolutions Inc. was struggling to generate high-quality B2B leads for their enterprise software solution. Their existing lead generation efforts were costly and resulted in many unqualified leads, leading to wasted sales team resources.',
      solution: 'We developed a comprehensive lead generation strategy that combined targeted LinkedIn advertising, industry-specific content marketing, and search engine marketing. We implemented lead scoring and qualification processes to ensure sales teams received only high-potential prospects.',
      results: [
        '350+ qualified leads generated monthly',
        '42% reduction in cost per qualified lead',
        '68% increase in sales pipeline value',
        '3.8x ROI on advertising spend'
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      featured: true
    },
    {
      id: 'brand-awareness',
      title: 'Brand Awareness Revolution',
      client: 'GreenLife Products',
      category: 'Social Media Marketing',
      description: 'How we increased brand awareness by 215% for a new product launch using strategic social media campaigns.',
      challenge: 'GreenLife Products was launching a new line of eco-friendly household products but had limited brand recognition in a competitive market. They needed to build awareness and establish their brand values to support their product launch.',
      solution: 'We crafted a comprehensive social media strategy focused on telling the brand\'s sustainability story. This included influencer partnerships, user-generated content campaigns, and targeted social media advertising. We also developed educational content about environmental impact to position the brand as a thought leader.',
      results: [
        '215% increase in brand awareness metrics',
        '187% growth in social media following',
        '43% engagement rate on campaign content',
        'Featured in 12 major lifestyle publications'
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      featured: true
    },
    {
      id: 'local-seo',
      title: 'Local SEO Domination',
      client: 'City Dental Group',
      category: 'SEO',
      description: 'How we helped a dental practice dominate local search results and increase new patient appointments by 83%.',
      challenge: 'City Dental Group was struggling to stand out in a competitive local market. Their online visibility was poor, and they were not appearing in local search results for key dental services in their area.',
      solution: 'We implemented a comprehensive local SEO strategy, including Google Business Profile optimization, local citation building, review management, and location-based content creation. We also developed a mobile-friendly website with location-specific landing pages.',
      results: [
        'Ranked in the top 3 positions for 45 local dental keywords',
        '83% increase in new patient appointments from organic search',
        '124% increase in website traffic from local searches',
        '4.8-star average rating across review platforms'
      ],
      image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'video-marketing',
      title: 'Video Marketing Success',
      client: 'FitLife Supplements',
      category: 'Content Creation',
      description: 'How we used video marketing to increase engagement by 245% and drive a 76% increase in product sales.',
      challenge: 'FitLife Supplements was struggling to connect with their target audience and differentiate their products in a saturated market. Their text-heavy marketing approach wasnt resonating with their audience or effectively demonstrating product benefits.',
      solution: 'We developed a comprehensive video marketing strategy including product demonstrations, customer testimonials, educational content, and short-form videos for social media. We optimized video content for each platform and implemented a testing framework to continuously improve performance.',
      results: [
        '245% increase in social media engagement',
        '76% increase in product sales attributed to video content',
        '3.2x increase in time spent on product pages',
        '189% increase in organic social media reach'
      ],
      image: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'saas-growth',
      title: 'SaaS Growth Marketing',
      client: 'ProjectFlow',
      category: 'Digital Marketing',
      description: 'How we helped a SaaS startup achieve 210% user growth through a comprehensive digital marketing strategy.',
      challenge: 'ProjectFlow, a project management SaaS startup, was struggling with high customer acquisition costs and low conversion rates from free trials to paid subscriptions. They needed a scalable growth strategy to increase their user base while improving unit economics.',
      solution: 'We implemented a comprehensive growth marketing strategy focusing on content marketing, SEO, targeted advertising, and conversion rate optimization. We developed a customer journey map and created specific interventions at key decision points to improve trial-to-paid conversion rates.',
      results: [
        '210% increase in monthly active users within 12 months',
        '45% reduction in customer acquisition cost',
        '68% improvement in free trial to paid conversion rate',
        '3.5x increase in organic traffic'
      ],
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const filteredCaseStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 to-primary-900 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore how we've helped businesses achieve exceptional results through strategic advertising and marketing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Success Stories</h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              These case studies showcase some of our most impactful client success stories
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <AnimatedSection key={study.id} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {study.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">Client: {study.client}</p>
                    <p className="text-dark-600 mb-4">{study.description}</p>
                    <Button variant="outline">View Case Study</Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">All Case Studies</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-dark-600 hover:bg-primary-50'
                }`}
              >
                All
              </button>
              {['Digital Marketing', 'Social Media', 'SEO', 'PPC', 'Content Creation'].map(category => (
                <button 
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-dark-600 hover:bg-primary-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <AnimatedSection key={study.id} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {study.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-dark-500 text-sm mb-4">Client: {study.client}</p>
                    <p className="text-dark-600 mb-4">{study.description}</p>
                    <Button variant="outline">View Case Study</Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Example */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">E-commerce Revenue Growth</h2>
                <p className="text-dark-500 mb-8">Client: FashionTrends | Category: Digital Marketing</p>
                <img 
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="E-commerce Revenue Growth" 
                  className="w-full rounded-lg shadow-md mb-8"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-dark-600">
                    Fashion Trends was struggling to convert website visitors into customers, with a high cart abandonment rate and low ROI on their existing advertising efforts. They needed a comprehensive strategy to improve conversion rates and increase revenue.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                  <p className="text-dark-600">
                    We implemented a multi-channel approach focusing on targeted Facebook and Instagram ads, email marketing automation for cart abandonment, and conversion rate optimization (CRO) for their product pages. We also refined their Google Shopping campaigns and introduced dynamic retargeting.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Results</h3>
                  <ul className="space-y-3">
                    {caseStudies[0].results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-dark-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Client Testimonial</h3>
                  <blockquote className="italic text-dark-600 border-l-4 border-primary-600 pl-4 py-2">
                    "The AnsAds team transformed our e-commerce strategy completely. Their data-driven approach and constant optimization led to results that far exceeded our expectations. Our revenue growth has been phenomenal, and they've given us a foundation for sustainable growth."
                  </blockquote>
                  <p className="text-dark-700 font-medium mt-4">- Sarah Chen, E-commerce Director, FashionTrends</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve exceptional results through strategic advertising and marketing solutions.
              </p>
              <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                Start Your Success Story
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;