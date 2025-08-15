'use client';

import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  CalculatorIcon, 
  MapIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const tools = [
  {
    icon: ChartBarIcon,
    title: "Real-Time Market Dashboard",
    description: "Live market data with interactive charts showing price trends, inventory levels, and market velocity",
    features: ["Price per square foot trends", "Days on market analysis", "Inventory turnover rates"],
    color: "blue"
  },
  {
    icon: CalculatorIcon,
    title: "Investment ROI Calculator",
    description: "Advanced calculator incorporating appreciation projections, rental income, and tax implications",
    features: ["5-10 year appreciation models", "Cash flow projections", "Tax benefit calculations"],
    color: "green"
  },
  {
    icon: MapIcon,
    title: "Neighborhood Analysis Tool",
    description: "Interactive mapping tool with demographic data, school ratings, and appreciation history",
    features: ["Demographic overlays", "School district ratings", "Appreciation history"],
    color: "purple"
  },
  {
    icon: DocumentTextIcon,
    title: "Comparative Market Analysis",
    description: "Comprehensive CMA reports with 15+ data points beyond traditional MLS comparisons",
    features: ["Recent sales analysis", "Price per square foot", "Market condition ratings"],
    color: "orange"
  },
  {
    icon: PresentationChartBarIcon,
    title: "Market Trend Reports",
    description: "Monthly and quarterly reports on Las Vegas market trends and future projections",
    features: ["Monthly market updates", "Quarterly trend analysis", "Future projections"],
    color: "red"
  },
  {
    icon: ClockIcon,
    title: "Market Timing Tool",
    description: "Data-driven insights on optimal buying and selling timing based on market cycles",
    features: ["Seasonal patterns", "Market cycle analysis", "Timing recommendations"],
    color: "indigo"
  }
];

const colorClasses = {
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  green: "bg-green-50 border-green-200 text-green-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
  red: "bg-red-50 border-red-200 text-red-700",
  indigo: "bg-indigo-50 border-indigo-200 text-indigo-700"
};

export default function MarketAnalysisTools() {
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
            Market Analysis Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access Dr. Jan&apos;s proprietary research tools and interactive dashboards 
            for comprehensive market analysis and investment decision-making.
          </p>
        </motion.div>

        <div className="grid-responsive">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="col-span-full sm:col-span-6 lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 ${colorClasses[tool.color as keyof typeof colorClasses]}`}>
                      <tool.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid-responsive items-center">
            <div className="col-span-full lg:col-span-7">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Experience Dr. Jan&apos;s Research Tools
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Get hands-on experience with the same tools Dr. Jan uses for her market analysis. 
                These interactive dashboards provide real-time insights that go far beyond 
                standard real estate websites.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Real-time data updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Interactive visualizations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Exportable reports</span>
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Try Now</div>
                  <div className="text-gray-700 font-medium mb-4">Interactive Demo</div>
                  <button className="btn-primary w-full">
                    Launch Market Dashboard
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    No registration required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Widget Integration Note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 text-sm">
            <strong>Note:</strong> All tools are optimized for mobile and desktop use, with 
            data updated every 24 hours for maximum accuracy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
