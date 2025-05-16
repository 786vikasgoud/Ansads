{/* Providing the complete file content with the escaped apostrophe */}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    error: boolean;
    message: string;
  }>({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you shortly.',
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: '',
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 to-primary-900 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-200 mb-8">
              Have a question or ready to start your next project? Reach out to us and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-dark-600">+1 (555) 123-4567</p>
                  <p className="text-dark-600">+1 (555) 987-6543</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-dark-600">info@ansads.com</p>
                  <p className="text-dark-600">support@ansads.com</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Clock className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                  <p className="text-dark-600">Monday - Friday: 9am - 6pm</p>
                  <p className="text-dark-600">Saturday: 10am - 2pm</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection animation="slideRight" className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className={`p-4 rounded-lg mb-6 ${formStatus.error ? 'bg-error-100 text-error-700' : 'bg-success-100 text-success-700'}`}>
                  {formStatus.message}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-dark-700 font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-dark-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-dark-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-dark-700 font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="service" className="block text-dark-700 font-medium mb-2">
                      Service You're Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    >
                      <option value="">Select a service</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media">Social Media Advertising</option>
                      <option value="SEO">SEO Optimization</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="PPC">PPC Campaigns</option>
                      <option value="Brand Strategy">Brand Strategy</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-dark-700 font-medium mb-2">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    ></textarea>
                  </div>
                </div>
                
                <Button type="submit" className="flex items-center">
                  Send Message <Send size={16} className="ml-2" />
                </Button>
              </form>
            </AnimatedSection>
            
            {/* Map & Location */}
            <AnimatedSection animation="slideLeft">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="flex items-start mb-6">
                  <MapPin className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium">Headquarters</h3>
                    <p className="text-dark-600">123 Advertising Avenue</p>
                    <p className="text-dark-600">Marketing City, MC 10101</p>
                    <p className="text-dark-600">United States</p>
                  </div>
                </div>
                
                {/* Map Placeholder - In a real implementation, this would be an actual map */}
                <div className="bg-gray-200 rounded-lg h-80 w-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-dark-500">
                    <p>Map would be embedded here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">We'll Contact You</h3>
                      <p className="text-dark-600">We'll get back to you within 24 hours to discuss your needs.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Discovery Meeting</h3>
                      <p className="text-dark-600">We'll schedule a call to discuss your goals and requirements in detail.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Proposal & Strategy</h3>
                      <p className="text-dark-600">We'll provide you with a tailored proposal and strategy to meet your goals.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
                question: 'How soon can you start working on my project?', 
                answer: 'Typically, we can begin work within 1-2 weeks of finalizing the proposal and contract. For urgent projects, we may be able to accommodate faster timelines—just let us know your needs during our initial conversation.' 
              },
              { 
                question: 'Do you work with businesses outside the United States?', 
                answer: 'Yes, we work with clients globally. Our team has experience managing advertising campaigns across numerous international markets and can adapt strategies to specific regional requirements and cultural contexts.' 
              },
              { 
                question: 'What information do you need from me to get started?', 
                answer: 'To provide an accurate proposal, we typically need information about your business goals, target audience, current marketing efforts, budget parameters, and timeline. During our discovery process, we\'ll guide you through providing all the necessary details.' 
              },
              { 
                question: 'How do you measure the success of your services?', 
                answer: 'We establish clear KPIs at the beginning of each project based on your specific goals. These might include metrics like conversion rates, ROAS, lead generation, engagement rates, or brand awareness measures. We provide regular reporting and analysis to track performance against these goals.' 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your business goals through strategic advertising and marketing solutions.
              </p>
              <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                Schedule a Consultation
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;