'use client'

import { motion } from 'framer-motion'
import { Users, Award, Briefcase, Heart } from 'lucide-react'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Constanza Vásquez Díaz',
      role: 'Fundadora AÚNA',
      description: 'Líder visionaria que impulsa la transformación social a través de la equidad de género.',
      icon: Heart
    },
    {
      name: 'Mario Balmaceda',
      role: 'Fundador de Agencia Los Quiltros',
      description: 'Experto en comunicación y estrategia para el cambio social.',
      icon: Briefcase
    },
    {
      name: 'Gabriela Sandoval',
      role: 'Fundadora de SANFIC',
      description: 'Especialista en desarrollo cultural y comunitario.',
      icon: Award
    }
  ]

  const teamProfessionals = [
    {
      name: 'Catalina Jacob',
      role: 'Terapeuta en psicodrama y sonoterapia',
      description: 'Especialista en desarrollo personal y terapias alternativas.',
      icon: Users
    },
    {
      name: 'Esteban Martínez Llanos',
      role: 'Mentor de Hábitos y Productividad',
      description: 'Experto en optimización personal y desarrollo de hábitos efectivos.',
      icon: Award
    },
    {
      name: 'Tomás Schiappacasse',
      role: 'Fundador de AIAIAI Consulting',
      description: 'Especialista en transformación digital y consultoría estratégica.',
      icon: Briefcase
    },
    {
      name: 'Francisca Valdebenito',
      role: 'Especialista en levantamiento de información crítica para políticas públicas',
      description: 'Experta en análisis de datos y políticas públicas.',
      icon: Users
    },
    {
      name: 'Andrea Burón',
      role: 'PROPÓSITO',
      description: 'Especialista en desarrollo de propósito personal y organizacional.',
      icon: Heart
    },
    {
      name: 'Iván Salazar',
      role: 'GESTIÓN DE LAS EMOCIONES',
      description: 'Experto en inteligencia emocional y bienestar psicológico.',
      icon: Users
    },
    {
      name: 'Mauricio Yanquez',
      role: 'RESILIENCIA INDIVIDUAL Y COLECTIVA',
      description: 'Especialista en desarrollo de resiliencia y adaptación al cambio.',
      icon: Award
    },
    {
      name: 'Marisol Beytia',
      role: 'PROGRAMACIÓN NEUROLINGUISTICA',
      description: 'Experta en PNL y transformación personal.',
      icon: Heart
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conoce al equipo de profesionales que impulsa nuestras iniciativas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Con compromiso, propósito y experiencia, nuestro equipo trabaja para transformar la sociedad hacia una mayor equidad de género.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Directorio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            NUESTRO EQUIPO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamProfessionals.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-4 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <member.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
