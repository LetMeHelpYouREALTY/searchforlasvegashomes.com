'use client';

import { motion } from 'framer-motion';
import { 
  ArrowTrendingUpIcon, 
  CalculatorIcon, 
  MapIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  HomeIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const specializations = [
  {
    icon: ArrowTrendingUpIcon,
    title: "Las Vegas Market Trend Analysis",
    description: "Comprehensive analysis of market cycles, price movements, and seasonal patterns using proprietary algorithms",
    color: "blue"
  },
  {
    icon: CalculatorIcon,
    title: "Comparative Market Analysis (CMA) Expert",
    description: "Advanced CMA methodology incorporating 15+ data points beyond traditional MLS comparisons",
    color: "green"
  },
  {
    icon: ChartBarIcon,
    title: "Investment ROI Forecasting",
    description: "Data-driven investment analysis with 5-10 year appreciation projections and cash flow modeling",
    color: "purple"
  },
  {
    icon: MapIcon,
    title: "Neighborhood Appreciation Studies",
    description: "Micro-market analysis identifying emerging neighborhoods and appreciation potential",
    color: "orange"
  },
  {
    icon: GlobeAltIcon,
    title: "California vs Nevada Market Comparison",
    description: "Cross-state market analysis for California investors considering Nevada real estate",
    color: "red"
  },
  {
    icon: BuildingOffice2Icon,
    title: "Luxury Market Analytics",
    description: "High-end market research with international buyer analysis and luxury trend forecasting",
    color: "indigo"
  },
  {
    icon: UserGroupIcon,
    title: "55+ Community Market Research",
    description: "Specialized analysis of active adult communities and retirement real estate trends",
    color: "teal"
  },
  {
    icon: HomeIcon,
    title: "New Construction Price Analysis",
    description: "Builder pricing strategies, construction cost trends, and new home market dynamics",
    color: "pink"
  }
];

const colorClasses = {
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  green: "bg-green-50 border-green-200 text-green-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
  red: "bg-red-50 border-red-200 text-red-700",
  indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
  teal: "bg-teal-50 border-teal-200 text-teal-700",
  pink: "bg-pink-50 border-pink-200 text-pink-700"
};

export default function ResearchSpecializations() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Research Specializations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Jan Duffy&apos;s expertise spans the full spectrum of real estate market research, 
            from neighborhood analysis to international investment trends.
          </p>
        </motion.div>

        <div className="grid-responsive">
          {specializations.map((specialization, index) => (
            <motion.div
              key={index}
              className="col-span-full sm:col-span-6 lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl p-8 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 ${colorClasses[specialization.color as keyof typeof colorClasses]}`}>
                      <specialization.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {specialization.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {specialization.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology Highlight */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid-responsive items-center">
            <div className="col-span-full lg:col-span-7">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Proprietary Research Methodology
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Jan&apos;s research combines traditional real estate data with cutting-edge analytics, 
                including economic indicators, demographic trends, and investment patterns. This 
                multi-dimensional approach provides insights that go far beyond standard market reports.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Economic Indicators</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Demographic Trends</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Investment Patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Market Cycles</span>
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium text-lg mb-2">Data Sources</div>
                  <div className="text-sm text-gray-600">
                    Combined for comprehensive market analysis
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    Updated in real-time for accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
