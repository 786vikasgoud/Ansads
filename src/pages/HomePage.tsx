import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  BarChart, 
  Globe, 
  Share2, 
  Search, 
  PenTool, 
  TrendingUp, 
  Users,
  ArrowRight
} from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CaseStudyCard from '../components/CaseStudyCard';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'Skyrocket Your Clickthrough Rates',
      description: 'Drive more engagement and revenue by using intelligent ad placements that are proven to boost CTR across every device and user segment.',
      icon: <Globe size={24} />,
      link: '/services#digital-marketing',
    },
    {
      title: 'Boost eCPMs & Ad Revenue',
      description: 'Increase eCPMs and maximize ad revenue with our powerful, data-driven monetization tools — all from one platform.',
      icon: <Share2 size={24} />,
      link: '/services#social-media',
    },
    {
      title: 'Ad Viewability Enhance',
      description: 'Enhance your ad viewability with our Professionals highly tested placements that keep ads in sight and revenue climbing.',
      icon: <Search size={24} />,
      link: '/services#seo',
    },
    {
      title: 'Increase Bid Competition to Boost Ad Revenue',
      description: 'Attract more advertisers and raise CPMs with smart bid competition strategies that maximize every impression’s value.',
      icon: <PenTool size={24} />,
      link: '/services#content',
    },
    {
      title: 'Ad Integration with Ultra-Low Latency',
      description: 'Our JS-based integration ensures faster loading, reduced latency, and optimized performance through modular code and CDN delivery.',
      icon: <LineChart size={24} />,
      link: '/services#ppc',
    },
    {
      title: 'Brand Strategy',
      description: 'Develop a cohesive brand identity that connects with your target audience and sets you apart.',
      icon: <TrendingUp size={24} />,
      link: '/services#brand-strategy',
    },
  ];

  const testimonials = [
    {
      name: 'Willom',
      position: 'Publisher',
      company: 'Brazil.',
      testimonial: 'AnsAds transformed our digital marketing strategy. Their team delivered exceptional results that exceeded our expectations, driving a 45% increase in qualified leads within just three months.',
      rating: 5,
      // image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Charles',
      position: 'Publisher',
      company: 'US',
      testimonial: 'Working with AnsAds has been a game-changer for our business. Their strategic approach to advertising helped us reach new markets and significantly improve our conversion rates.',
      rating: 5,
      // image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Robhot',
      position: 'Publisher',
      company: 'Hokong',
      testimonial: 'The team at AnsAds not only delivered outstanding advertising campaigns but also provided valuable insights that helped reshape our entire marketing approach.',
      rating: 4,
      // image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Revenue Growth',
      category: 'Digital Marketing',
      description: 'How we helped an e-commerce brand increase revenue by 127% through targeted digital marketing strategies.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/case-studies/ecommerce-growth',
    },
    {
      title: 'B2B Lead Generation Campaign',
      category: 'PPC & Content Strategy',
      description: 'Generating 350+ qualified B2B leads per month through an integrated PPC and content marketing approach.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/case-studies/b2b-lead-generation',
    },
    {
      title: 'Brand Awareness Revolution',
      category: 'Social Media Marketing',
      description: 'How we increased brand awareness by 215% for a new product launch using strategic social media campaigns.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/case-studies/brand-awareness',
    },
  ];

  const stats = [
    { value: '250+', label: 'Publishers' },
    { value: '98%', label: 'Client Satisfaction on our personalised tool' },
    { value: '65%', label: 'Ad Revenue boost' },
    { value: '15+', label: 'Connected MCM companies' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-900 to-primary-900 text-white pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Maximize Your <span className="text-accent-400">Ad</span> Revenue
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
              >
              We help content creators around the world make more revenue by connecting them with over 50 top ad networks. We use the latest ad technology and give expert support to manage their ads.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                <Button size="lg">
                  Contact us
                </Button>
                </Link>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button> */}
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Digital Marketing Team" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <BarChart className="text-primary-600 mr-2" size={20} />
                    <span className="text-dark-900 font-medium">245% Avg. ROI</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl text-center text-dark-600 mb-8">Trusted by innovative companies worldwide</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
              <div key={brand} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="h-8 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold text-xl">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">Maximize Ad Revenue from Every Impression with One Unified Platform</h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Increase your website’s ad revenue effortlessly. Our all-in-one platform helps publishers get the highest possible yield from every single ad impression.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-200">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {/* <section className="py-20 bg-gray-50">  
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">Case Studies</h2>
                <p className="text-lg text-dark-600 max-w-2xl">
                  See how we've helped businesses like yours achieve remarkable results
                </p>
              </div>
              <Link to="/case-studies" className="mt-4 md:mt-0">
                <Button variant="outline">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.title}
                {...caseStudy}
                index={index}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900">What Our Clients Say</h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say about working with us
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <TestimonialCard {...testimonial} />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Ad Revenue</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                 Unlock higher eCPMs, better fill rates, and smarter monetization with a platform built to maximize your earnings..
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                  Schedule a Consultation
                </Button>
                </Link>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <span className="flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </span>
                </Button> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;