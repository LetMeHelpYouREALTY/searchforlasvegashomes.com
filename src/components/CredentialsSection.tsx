'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, ChartBarIcon, ShieldCheckIcon, ServerIcon, DocumentTextIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { AuthorityContent } from '../data/authorityContent';

export default function CredentialsSection() {
  const credentials = [
    {
      icon: AcademicCapIcon,
      title: "Doctorate Degree",
      description: "Columbia Pacific University",
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      title: "REALTOR® License",
      description: "S.0197614.LLC",
      color: "green"
    },
    {
      icon: ServerIcon,
      title: "Data Access",
      description: "MLS + Public + Private",
      color: "purple"
    },
    {
      icon: DocumentTextIcon,
      title: "Published Author",
      description: "Market forecasts since 2010",
      color: "orange"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic & Professional Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy combines advanced academic training with extensive real estate expertise 
              to deliver unparalleled market insights and analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`bg-${credential.color}-100 text-${credential.color}-600 p-4 rounded-full w-fit mx-auto mb-4`}>
                  <credential.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{credential.title}</h3>
                <p className="text-gray-600">{credential.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Unique Value Proposition</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Las Vegas&apos;s only research-driven REALTOR® combining doctorate-level methodology 
                with exclusive market data access and proprietary algorithms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">What Makes Dr. Jan Different:</h4>
                <ul className="space-y-2 text-blue-100">
                  {AuthorityContent.differentiators.map((differentiator, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{differentiator}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Trust & Credibility:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{AuthorityContent.trustSignals.berkshireHathaway}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{AuthorityContent.trustSignals.dataAccess}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{AuthorityContent.trustSignals.trackRecord}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 bg-gray-100 rounded-full px-6 py-3"
            >
              <GlobeAltIcon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">
                Trusted by local media and cited in market reports since 2010
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
