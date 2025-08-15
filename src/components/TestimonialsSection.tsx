'use client';

import { motion } from 'framer-motion';
import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    role: "First-Time Homebuyers",
    location: "Summerlin, Las Vegas",
    content: "Dr. Jan's market analysis was incredible. She showed us exactly why Summerlin was the right choice and predicted the appreciation we've seen. Her data-driven approach gave us confidence in our investment.",
    rating: 5,
    image: "/testimonials/chen-family.jpg"
  },
  {
    name: "Robert Martinez",
    role: "Real Estate Investor",
    location: "Multiple Properties, Las Vegas",
    content: "I've worked with many agents, but Dr. Jan's research capabilities are unmatched. Her ROI projections were spot-on, and she identified emerging neighborhoods before they became popular. She's my go-to for all investment decisions.",
    rating: 5,
    image: "/testimonials/martinez.jpg"
  },
  {
    name: "Jennifer & David Thompson",
    role: "California Relocators",
    location: "Henderson, Nevada",
    content: "Moving from California, we needed someone who understood both markets. Dr. Jan's comparative analysis was eye-opening. She showed us exactly how much more house we could get in Nevada for the same money.",
    rating: 5,
    image: "/testimonials/thompson-family.jpg"
  },
  {
    name: "Marcus Johnson",
    role: "Luxury Home Seller",
    location: "The Ridges, Las Vegas",
    content: "Dr. Jan's luxury market analysis helped us price our home perfectly. She understood the international buyer market and positioned our property to sell above asking price in just 3 weeks.",
    rating: 5,
    image: "/testimonials/johnson.jpg"
  },
  {
    name: "Lisa Rodriguez",
    role: "55+ Community Buyer",
    location: "Sun City Anthem, Henderson",
    content: "As a retiree, I needed someone who understood the 55+ market. Dr. Jan's research on active adult communities was comprehensive. She found us the perfect home with great appreciation potential.",
    rating: 5,
    image: "/testimonials/rodriguez.jpg"
  },
  {
    name: "Thomas & Amanda Wilson",
    role: "New Construction Buyers",
    location: "Inspirada, Las Vegas",
    content: "Dr. Jan's analysis of new construction pricing strategies saved us thousands. She showed us exactly when to buy and which builder offered the best value. Her insights were invaluable.",
    rating: 5,
    image: "/testimonials/wilson-family.jpg"
  }
];

export default function TestimonialsSection() {
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
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Dr. Jan&apos;s research-driven approach has helped clients make 
            informed decisions and achieve their real estate goals.
          </p>
        </motion.div>

        <div className="grid-responsive">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="col-span-full sm:col-span-6 lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl p-8 h-full border border-gray-100 hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Proven Results
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. Jan&apos;s research-driven approach has delivered measurable results for clients across all market segments.
            </p>
          </div>

          <div className="grid-responsive">
            <motion.div 
              className="col-span-full sm:col-span-6 lg:col-span-3 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Based on post-transaction surveys</div>
            </motion.div>

            <motion.div 
              className="col-span-full sm:col-span-6 lg:col-span-3 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Data Sources</div>
              <div className="text-sm text-gray-500 mt-1">For comprehensive market analysis</div>
            </motion.div>

            <motion.div 
              className="col-span-full sm:col-span-6 lg:col-span-3 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Happy Clients</div>
              <div className="text-sm text-gray-500 mt-1">Served across Las Vegas Valley</div>
            </motion.div>

            <motion.div 
              className="col-span-full sm:col-span-6 lg:col-span-3 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">24hr</div>
              <div className="text-gray-700 font-medium">Data Updates</div>
              <div className="text-sm text-gray-500 mt-1">Real-time market information</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
