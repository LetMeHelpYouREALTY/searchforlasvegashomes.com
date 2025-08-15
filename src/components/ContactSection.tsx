'use client';

import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: PhoneIcon,
    title: "Phone",
    value: "(702) 555-0123",
    description: "Call for immediate assistance",
    action: "tel:+17025550123",
    color: "blue"
  },
  {
    icon: EnvelopeIcon,
    title: "Email",
    value: "drjan@searchforlasvegashomes.com",
    description: "Send detailed inquiries",
    action: "mailto:drjan@searchforlasvegashomes.com",
    color: "green"
  },
  {
    icon: MapPinIcon,
    title: "Office",
    value: "Berkshire Hathaway HomeServices",
    description: "Nevada Properties, Las Vegas",
    action: "#",
    color: "purple"
  },
  {
    icon: ClockIcon,
    title: "Hours",
    value: "Mon-Fri: 9AM-6PM",
    description: "Weekend appointments available",
    action: "#",
    color: "orange"
  }
];

const services = [
  "Market Analysis & Pricing Strategy",
  "Investment Property Analysis",
  "Comparative Market Analysis (CMA)",
  "Neighborhood Research Reports",
  "Luxury Market Insights",
  "55+ Community Analysis",
  "New Construction Analysis",
  "California vs Nevada Market Comparison"
];

export default function ContactSection() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with Dr. Jan Duffy for expert market research and data-driven 
            real estate insights that will transform your property decisions.
          </p>
        </motion.div>

        <div className="grid-responsive">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="col-span-full sm:col-span-6 lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gray-800 rounded-xl p-6 h-full border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 ${method.color === 'blue' ? 'bg-blue-900 border-blue-600 text-blue-300' : 
                                                                                           method.color === 'green' ? 'bg-green-900 border-green-600 text-green-300' :
                                                                                           method.color === 'purple' ? 'bg-purple-900 border-purple-600 text-purple-300' :
                                                                                           'bg-orange-900 border-orange-600 text-orange-300'}`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {method.title}
                    </h3>
                    <a 
                      href={method.action}
                      className="text-blue-400 hover:text-blue-300 font-medium mb-2 block"
                    >
                      {method.value}
                    </a>
                    <p className="text-gray-400 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services & CTA */}
        <motion.div 
          className="mt-20 bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid-responsive items-center">
            <div className="col-span-full lg:col-span-7">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Comprehensive Real Estate Research Services
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Dr. Jan Duffy provides expert analysis across all aspects of Las Vegas real estate, 
                from market trends to investment strategies. Get the data-driven insights you need 
                to make informed decisions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
                  Schedule Consultation
                </button>
                <button className="btn-secondary bg-transparent border-2 border-gray-600 text-white hover:bg-gray-700 px-8 py-4 text-lg font-semibold">
                  Download Market Report
                </button>
              </div>
            </div>
            
            <div className="col-span-full lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-8 border border-blue-700">
                <div className="text-center">
                  <ChatBubbleLeftRightIcon className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
                  <div className="text-blue-200 mb-4">30-minute market analysis</div>
                  <div className="text-sm text-gray-300 mb-6">
                    Get personalized insights on your specific real estate needs
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
                    Book Your Free Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            <strong>Dr. Jan Duffy</strong> • REALTOR® License S.0197614.LLC • 
            Berkshire Hathaway HomeServices Nevada Properties
          </p>
          <p className="text-gray-500 text-xs mt-2">
            &ldquo;Where Data Meets Real Estate&rdquo; - Las Vegas&apos;s Premier Research-Driven REALTOR®
          </p>
        </motion.div>
      </div>
    </section>
  );
}
