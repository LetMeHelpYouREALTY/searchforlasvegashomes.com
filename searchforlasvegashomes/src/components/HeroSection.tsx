'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, MagnifyingGlassIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid-responsive">
          {/* Main Content */}
          <motion.div 
            className="col-span-full lg:col-span-8 xl:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Credentials Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <AcademicCapIcon className="w-4 h-4" />
                <span>Doctorate, Columbia Pacific University</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Dr. Jan Duffy
                <span className="block text-blue-200 mt-2">
                  Las Vegas&apos;s Premier
                </span>
                <span className="block text-blue-100">
                  Real Estate Market Researcher
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p 
                className="text-xl sm:text-2xl text-blue-100 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Where Data Meets Real Estate
              </motion.p>

              {/* Description */}
              <motion.p 
                className="text-lg text-blue-200 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                The only research-driven REALTOR® in Las Vegas combining proprietary market analysis 
                with 15+ data sources to deliver unparalleled insights for buyers, sellers, and investors.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button className="btn-primary bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Get Market Analysis
                </button>
                <button className="btn-secondary bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                  View Research Reports
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Stats/Features */}
          <motion.div 
            className="col-span-full lg:col-span-4 xl:col-span-5 flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-sm">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-blue-200 text-sm">Data Sources</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-100">
                    <ChartBarIcon className="w-6 h-6 text-blue-300" />
                    <span className="text-sm">Market Trend Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <MagnifyingGlassIcon className="w-6 h-6 text-blue-300" />
                    <span className="text-sm">Comparative Market Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <AcademicCapIcon className="w-6 h-6 text-blue-300" />
                    <span className="text-sm">Investment ROI Forecasting</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#F7F9FC"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.71,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#F7F9FC"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#F7F9FC"
          />
        </svg>
      </div>
    </section>
  );
}
