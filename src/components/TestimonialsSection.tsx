'use client';

import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, StarIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { AuthorityContent } from '@/data/authorityContent';

export default function TestimonialsSection() {
  const testimonials = [
    {
      content: "Dr. Jan&apos;s data-driven approach helped us make the best investment decision. Her proprietary algorithms identified opportunities we never would have seen.",
      rating: 5,
      client: "Michael & Sarah Chen",
      type: "Investment Buyers",
      initials: "MC"
    },
    {
      content: "The neighborhood scoring algorithm was incredible. We found the perfect area with the highest appreciation potential, exactly as predicted.",
      rating: 5,
      client: "David Rodriguez",
      type: "First-Time Buyer",
      initials: "DR"
    },
    {
      content: "Weekly market reports kept us informed during our search. Dr. Jan&apos;s forecasts were spot-on and helped us time our purchase perfectly.",
      rating: 5,
      client: "Jennifer Thompson",
      type: "Relocating from California",
      initials: "JT"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real success stories from clients who trusted Dr. Jan&apos;s data-driven approach 
              to make informed real estate decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Client Avatar */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.client}</h4>
                    <p className="text-sm text-gray-600">{testimonial.type}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dr. Jan&apos;s research methodology and proprietary tools deliver measurable outcomes 
                that set her apart from traditional real estate agents.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg w-fit mx-auto mb-3">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-600 p-3 rounded-lg w-fit mx-auto mb-3">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-600">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg w-fit mx-auto mb-3">
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg w-fit mx-auto mb-3">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Weekly</div>
                <div className="text-sm text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Trusted by Local Media</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Dr. Jan&apos;s weekly market reports have been cited by local media outlets since 2010, 
              establishing her as Las Vegas&apos;s go-to authority for real estate market analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                View Media Mentions
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Download Latest Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
