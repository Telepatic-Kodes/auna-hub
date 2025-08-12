'use client'

import { motion } from 'framer-motion'
import { Heart, Radio, Plane, Building, MapPin, Shirt, Users, Target, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Heart,
      title: 'Comunidad Inspírate Mujer',
      description: 'Activa un efecto multiplicador de liderazgo femenino y libertad interior desde la sororidad.',
      color: 'pink',
      target: 'Mujeres'
    },
    {
      icon: Radio,
      title: 'Programa radial "Juntas Podemos"',
      description: 'Fortalece el sentido de comunidad, llega donde no llega lo digital, e inspira transformación intergeneracional.',
      color: 'purple',
      target: 'Mujeres y sus familias en todo el territorio nacional'
    },
    {
      icon: Plane,
      title: 'Viajes con Propósito',
      description: 'Aumenta el grado de conocimiento y conciencia de los caminos que pueden tomar para impactar positivamente la calidad de vida de millones de familias.',
      color: 'blue',
      target: 'Líderes Organizacionales'
    },
    {
      icon: Building,
      title: 'Consultoría a Empresas',
      description: 'Visibiliza desigualdades normalizadas y promueve una cultura empresarial inclusiva y corresponsable.',
      color: 'green',
      target: 'Colaboradoras/es'
    },
    {
      icon: MapPin,
      title: 'Intervención Territorial',
      description: 'Empodera económicamente y culturalmente a mujeres líderes que transforman creencias y estructuras sociales.',
      color: 'orange',
      target: 'Comunidades'
    },
    {
      icon: Shirt,
      title: 'Viste AÚNA',
      description: 'Genera conciencia visible, conversaciones valientes y un contagio cultural a favor de la equidad de género.',
      color: 'red',
      target: 'Ciudadanía comprometida con la transformación cultural'
    }
  ]

  const colorClasses = {
    pink: 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400',
    green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400',
    red: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
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
            ECOSISTEMA AÚNA
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Nuestro ecosistema está compuesto por diversos pilares que tocan diferentes ámbitos de la sociedad, 
            expandiendo así nuestro propósito común. Te animamos a involucrarte en esta causa de justicia social 
            según tu propio contexto e intereses. ¡Tienes 6 caminos para unirte!
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
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Target className="w-4 h-4" />
                <span className="font-medium">Capa Social:</span>
                <span>{feature.target}</span>
              </div>
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
              ¡AÚNATE!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              La verdadera transformación comienza cuando nos unimos. 
              Únete a miles de personas que ya están construyendo un futuro más equitativo con AUNA.
            </p>
            <button className="btn-primary px-8 py-3 text-lg">
              Únete al Movimiento
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
