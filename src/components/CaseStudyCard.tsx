import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  category,
  description,
  image,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="text-sm text-primary-600 font-medium mb-2">{category}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-dark-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        View case study <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;