'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container-max section-padding relative z-10">
        <div className="grid-responsive">
          <motion.div 
            className="col-span-full lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <AcademicCapIcon className="w-4 h-4" />
                <span>Market Research Expert</span>
              </motion.div>

              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Meet Dr. Jan
                <span className="block text-blue-600 mt-2">
                  Market Research Expert
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-600 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Combining academic excellence with real estate expertise, Dr. Jan Duffy 
                is Las Vegas&apos;s only research-driven REALTOR®. Her proprietary 
                methodology combines 15+ data sources to deliver unparalleled market insights.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <button className="btn-primary">
                  View Research Methodology
                </button>
                <button className="btn-secondary">
                  Download Market Reports
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="col-span-full lg:col-span-4 flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium mb-2">Data Sources</div>
                <div className="text-sm text-gray-500">
                  Combined for comprehensive analysis
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
