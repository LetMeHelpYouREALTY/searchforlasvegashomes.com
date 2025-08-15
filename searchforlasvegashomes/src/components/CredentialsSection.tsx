'use client';

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ShieldCheckIcon, 
  BookOpenIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const credentials = [
  {
    icon: AcademicCapIcon,
    title: "Doctorate",
    subtitle: "Columbia Pacific University",
    description: "Advanced research methodology and data analysis expertise"
  },
  {
    icon: ShieldCheckIcon,
    title: "REALTOR® License",
    subtitle: "S.0197614.LLC",
    description: "Licensed real estate professional in Nevada"
  },
  {
    icon: BuildingOfficeIcon,
    title: "Brokerage",
    subtitle: "Berkshire Hathaway HomeServices",
    description: "Nevada Properties - Premier real estate network"
  },
  {
    icon: ChartBarIcon,
    title: "Specialization",
    subtitle: "Market Analysis & Strategic Pricing",
    description: "Data-driven property valuation and market insights"
  },
  {
    icon: BookOpenIcon,
    title: "Best-Selling Author",
    subtitle: "Real Estate Market Trends",
    description: "Published expert on Las Vegas market forecasting"
  },
  {
    icon: UserGroupIcon,
    title: "Research Focus",
    subtitle: "Investment & Market Trends",
    description: "15+ data sources for comprehensive analysis"
  }
];

export default function CredentialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unmatched Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Jan Duffy combines academic excellence with real estate expertise, 
            making her the only research-driven REALTOR® in Las Vegas.
          </p>
        </motion.div>

        <div className="grid-responsive">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              className="col-span-full sm:col-span-6 lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <credential.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {credential.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {credential.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Value Proposition */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid-responsive items-center">
            <div className="col-span-full lg:col-span-7">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Las Vegas&apos;s Only Research-Driven REALTOR®
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                While other agents rely on basic MLS data, Dr. Jan Duffy leverages proprietary 
                market analysis combining 15+ data sources including economic indicators, demographic 
                trends, and investment patterns to provide unparalleled market insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Academic Research Background</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Proprietary Data Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Investment ROI Forecasting</span>
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Data Sources</div>
                  <div className="text-sm text-gray-500 mt-2">Combined for Market Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
