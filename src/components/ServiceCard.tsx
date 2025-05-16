import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-primary-600 mb-4 p-3 bg-primary-50 inline-block rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-dark-900">{title}</h3>
      <p className="text-dark-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;