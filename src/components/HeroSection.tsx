'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { AuthorityContent } from '../data/authorityContent';

export default function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Optimized background pattern using CSS */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 1px, transparent 1px), radial-gradient(circle at 75% 75%, #6366F1 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>
      
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Credentials Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <AcademicCapIcon className="w-4 h-4" />
            <span>Ph.D. in Research, Columbia Pacific University</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {AuthorityContent.hero.headline}
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-600 font-semibold mb-6"
          >
            {AuthorityContent.hero.subheadline}
          </motion.p>
          
          {/* Proof Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            {AuthorityContent.hero.proof} with proprietary research methodology and access to exclusive market data
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Get Market Analysis
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Research Reports
            </button>
          </motion.div>
          
          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg w-fit mx-auto mb-3">
                <ChartBarIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Data Sources</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 p-3 rounded-lg w-fit mx-auto mb-3">
                <DocumentTextIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Transactions</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg w-fit mx-auto mb-3">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Since 1983</div>
              <div className="text-sm text-gray-600">In Real Estate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
