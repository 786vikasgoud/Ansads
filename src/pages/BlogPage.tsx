import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, User, ArrowRight, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 'digital-marketing-trends-2023',
      title: 'Top Digital Marketing Trends to Watch in 2023',
      excerpt: 'Explore the emerging trends in digital marketing that will shape the industry in 2023 and beyond. From AI-powered personalization to immersive experiences, these trends will help you stay ahead of the competition.',
      author: 'Sarah Williams',
      date: 'June 15, 2023',
      category: 'Digital Marketing',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      featured: true
    },
    {
      id: 'social-media-strategy',
      title: 'Building a Social Media Strategy That Converts',
      excerpt: 'Learn how to create a social media strategy that not only engages your audience but also drives conversions and contributes to your bottom line. Discover proven tactics for each platform.',
      author: 'Michael Chen',
      date: 'May 28, 2023',
      category: 'Social Media',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      featured: true
    },
    {
      id: 'seo-ultimate-guide',
      title: 'The Ultimate Guide to SEO in 2023',
      excerpt: 'A comprehensive guide to search engine optimization in 2023. Learn about the latest algorithm updates, best practices, and strategies to improve your organic visibility and drive qualified traffic.',
      author: 'Emily Rodriguez',
      date: 'April 12, 2023',
      category: 'SEO',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      featured: true
    },
    {
      id: 'content-marketing-roi',
      title: 'Measuring the ROI of Your Content Marketing Efforts',
      excerpt: 'Discover effective methods to measure and track the return on investment of your content marketing campaigns. Learn which metrics matter and how to connect them to business outcomes.',
      author: 'Alex Johnson',
      date: 'March 8, 2023',
      category: 'Content Marketing',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'ppc-campaign-optimization',
      title: 'PPC Campaign Optimization: Tips from the Experts',
      excerpt: 'Expert tips and strategies to optimize your pay-per-click campaigns for better performance and higher ROI. Learn about advanced targeting, bid management, and creative optimization.',
      author: 'Sarah Williams',
      date: 'February 20, 2023',
      category: 'PPC',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'video-marketing-strategy',
      title: 'Video Marketing: Creating Content That Engages and Converts',
      excerpt: 'Learn how to develop a video marketing strategy that captivates your audience and drives conversions. From planning to production to distribution, this guide covers it all.',
      author: 'Michael Chen',
      date: 'January 15, 2023',
      category: 'Content Marketing',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'email-marketing-best-practices',
      title: 'Email Marketing Best Practices for Higher Open Rates',
      excerpt: 'Discover proven strategies to improve your email marketing open rates and engagement. From subject lines to segmentation to scheduling, these tips will help you get better results.',
      author: 'Emily Rodriguez',
      date: 'December 10, 2022',
      category: 'Email Marketing',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'brand-strategy-development',
      title: 'Developing a Brand Strategy That Resonates with Your Audience',
      excerpt: 'Learn how to create a compelling brand strategy that connects with your target audience and sets you apart from competitors. From positioning to messaging to visual identity.',
      author: 'Alex Johnson',
      date: 'November 5, 2022',
      category: 'Branding',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 to-primary-900 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Marketing Insights</h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore our latest articles, guides, and industry insights to stay ahead in the world of advertising and marketing.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-12 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute right-4 top-3.5 text-white/70" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Articles</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1} className="flex flex-col h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-dark-500 mb-3">
                      <div className="flex items-center mr-4">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-dark-600 mb-4 flex-grow">{post.excerpt.substring(0, 120)}...</p>
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                        Read more <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">All Articles</h2>
              
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white text-dark-600 hover:bg-primary-50'
                    }`}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1} className="flex flex-col h-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-dark-500 mb-3">
                        <div className="flex items-center mr-4">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                      <p className="text-dark-600 mb-4 flex-grow">{post.excerpt.substring(0, 120)}...</p>
                      <div className="mt-auto">
                        <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                          Read more <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-dark-600">No articles found. Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sample Full Article */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fadeIn">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Digital Marketing Trends to Watch in 2023</h2>
                <div className="flex flex-wrap items-center text-dark-500 mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <User size={16} className="mr-2" />
                    <span>Sarah Williams</span>
                  </div>
                  <div className="flex items-center mr-6 mb-2">
                    <Clock size={16} className="mr-2" />
                    <span>June 15, 2023</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Tag size={16} className="mr-2" />
                    <span>Digital Marketing</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <img 
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Digital Marketing Trends" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  The digital marketing landscape is constantly evolving, with new technologies, platforms, and consumer behaviors emerging all the time. To stay competitive in 2023 and beyond, brands need to stay ahead of these trends and adapt their strategies accordingly.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">1. AI-Powered Personalization</h3>
                <p className="mb-6">
                  Artificial intelligence is transforming how brands personalize their marketing efforts. In 2023, we're seeing AI being used to analyze customer data and deliver highly personalized content, product recommendations, and experiences at scale. This goes beyond simple segmentation to true one-to-one personalization that adapts in real-time.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">2. Video Continues to Dominate</h3>
                <p className="mb-6">
                  Video remains the most engaging content format across platforms, with short-form video continuing its meteoric rise. Brands that aren't investing in video content are falling behind. In 2023, we're seeing more emphasis on authentic, value-driven video content rather than highly produced commercials.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">3. Privacy-First Marketing</h3>
                <p className="mb-6">
                  With increasing regulations and platform changes around data privacy, marketers must adapt to a world with less third-party data. Successful brands are focusing on building first-party data strategies and delivering value in exchange for customer information.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">4. Immersive Experiences</h3>
                <p className="mb-6">
                  Augmented reality, virtual reality, and mixed reality are creating new opportunities for immersive brand experiences. From virtual product try-ons to immersive branded environments, these technologies are helping brands connect with customers in more engaging ways.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">5. Voice Search Optimization</h3>
                <p className="mb-6">
                  As voice assistants continue to proliferate in homes and on smartphones, optimizing for voice search is becoming increasingly important. This requires a shift in SEO strategy, focusing on natural language queries and conversational content.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h3>
                <p className="mb-6">
                  The digital marketing landscape will continue to evolve rapidly in 2023 and beyond. Brands that stay ahead of these trends and adapt their strategies accordingly will be best positioned for success. The key is to remain agile, data-driven, and customer-focused while embracing new technologies and approaches.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-semibold mb-4">Related Articles</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.slice(1, 3).map((post) => (
                    <div key={post.id} className="flex items-start">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded mr-4"
                      />
                      <div>
                        <h5 className="font-medium mb-1">{post.title}</h5>
                        <div className="text-sm text-dark-500">{post.readTime}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-dark-600 mb-6">
                Stay up to date with the latest marketing insights, trends, and tips delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <Button>Subscribe</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;