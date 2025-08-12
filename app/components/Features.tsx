'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Zap, Shield, Palette, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Code,
      title: 'TypeScript Support',
      description: 'Full TypeScript support for better development experience and type safety.',
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Perfectly responsive design that works beautifully on all devices and screen sizes.',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Built with performance in mind using Next.js 14 and modern optimization techniques.',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with best practices and modern authentication.',
      color: 'red'
    },
    {
      icon: Palette,
      title: 'Customizable UI',
      description: 'Highly customizable UI components with Tailwind CSS and design system.',
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'Global Ready',
      description: 'Internationalization support and global deployment capabilities.',
      color: 'blue'
    }
  ]

  const colorClasses = {
    primary: 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
    green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
    red: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400',
    yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
  }

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build modern, scalable web applications with the latest technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of developers building amazing applications with Auna Hub.
            </p>
            <button className="btn-primary px-8 py-3 text-lg">
              Start Building Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
