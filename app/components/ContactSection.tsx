'use client'

import { motion } from 'framer-motion'
import { Mail, Heart, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            ¡AÚNATE!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            La verdadera transformación comienza cuando nos unimos
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-lg"
          >
            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <a 
              href="mailto:hola@auna.cl" 
              className="text-lg font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              hola@auna.cl
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¡Muy pronto!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Descubre las fechas de nuestra gira de <strong>Emprendimiento Femenino</strong> por el norte, centro y sur de Chile, junto a las empresas que se <strong>AÚNAN</strong> a nuestro propósito de impulsar mujeres como agentes de cambio.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                ¡Porque juntos podemos! AÚNATE TÚ TAMBIÉN!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Únete al Movimiento
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sé parte de la transformación social que está cambiando Chile. 
              Tu participación es fundamental para construir un futuro más equitativo.
            </p>
            <button className="btn-primary flex items-center space-x-2 px-8 py-4 text-lg mx-auto">
              <span>AÚNATE AHORA</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
