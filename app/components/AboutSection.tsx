'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Globe } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            EL PODER TRANSFORMADOR ESTÁ EN LA UNIÓN
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              AÚNA nace con el propósito de romper con la idea de la lucha solitaria desde las mujeres para avanzar hacia una sociedad con equidad de género, incorporando a los hombres, las familias y a todo el ecosistema que rodea a la mujer para realmente lograr permear la cultura y hacerles parte de una "causa colectiva" para un futuro más equitativo, colaborativo y empático.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A través de una metodología propia llamada "LaTriada" (Poderío, Autoliderazgo y Emprendimiento femenino), AUNA trabaja con diversas instituciones interviniendo comunidades fortaleciendo el desarrollo de sus mujeres con el apoyo de sus entornos inmediatos, AUNANDO a todas y todos en la tarea de equilibrar la balanza de los derechos y oportunidades para mujeres y hombres.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            CAMBIEMOS LAS "O" POR LAS "Y"
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              ¿Qué pasaría si dejamos de enfrentarnos, compararnos y separarnos para empezar a unirnos, complementarnos, sensibilizarnos, validar nuestras diferencias y cooperación?
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              La mujer ha demostrado capacidad en todos los ámbitos, Sin embargo las brechas persisten. Es por ello que desde <strong>AÚNA</strong> trabajamos para hacer un cambio de switch, de cultura, de mentalidad y de cómo hablamos. Porque no es <strong>Mujer o Hombre</strong>, <strong>mujer de familia o mujer trabajadora</strong>, <strong>mamá o emprendedora</strong>, es hora de decir:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                ¡Mujer <strong>Y</strong> hombre, Mujer de familia <strong>Y</strong> de trabajo, Mamá <strong>Y</strong> emprendedora!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            SÚMATE A LA REVOLUCIÓN DE LA UNIÓN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agente de cambio</h4>
              <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Conviértete en un agente de cambio</h5>
              <p className="text-gray-600 dark:text-gray-300">Forma parte de un movimiento social que está transformando el panorama cultural, económico y social.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Impacto en tu comunidad</h4>
              <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Impacta en tu comunidad</h5>
              <p className="text-gray-600 dark:text-gray-300">Únete a eventos nacionales, apoya a otras mujeres y hombres, y participa en experiencias que generen un impacto positivo.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contribuye a la equidad</h4>
              <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Contribuye a la equidad</h5>
              <p className="text-gray-600 dark:text-gray-300">Ayuda a reducir las brechas de género y a crear un ecosistema más justo para todos.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
