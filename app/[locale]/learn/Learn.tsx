'use client'

import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import BoasPraticas from './components/BoasPraticas'
import Performance from './components/Performance'
import TecnicasProjetos from './components/TecnicasProjetos'
import Questoes from './components/Questoes'
import Outras from './components/Outras'
import Inicio from './components/Inicio'
import Hooks from './components/Hooks'
import Padroes from './components/Padroes'

const Learn = () => {
  const t = useTranslations('LearnPage')
  const [activeTab, setActiveTab] = useState('BoasPraticas')

  return (
    <div className="pt-20 pb-12 min-h-screen bg-zinc-500 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-20">
          <h2 className="text-center text-4xl font-bold text-amber-500 mb-8">REACT</h2>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-zinc-300 dark:border-zinc-700 mb-6 overflow-x-auto">
            {['BoasPraticas', 'Performance', 'TecnicasProjetos', 'Questoes', 'Outras', 'Inicio', 'Hooks', 'Padroes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab
                    ? 'text--amber-800 dark:text-amber-600 border-b-2 border--amber-800 dark:border-amber-600'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {tab === 'BoasPraticas' && 'Boas Práticas'}
                {tab === 'Performance' && 'Performance'}
                {tab === 'TecnicasProjetos' && 'Técnicas Projetos'}
                {tab === 'Questoes' && 'Questões'}
                {tab === 'Outras' && 'Outras'}
                {tab === 'Inicio' && 'Início'}
                {tab === 'Hooks' && 'Hooks'}
                {tab === 'Padroes' && 'Padrões'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
            {activeTab === 'BoasPraticas' && (
              <BoasPraticas/>
            )}
            
            {activeTab === 'Performance' && (
              <Performance/>
            )}

            {activeTab === 'TecnicasProjetos' && (
              <TecnicasProjetos/>
            )}

            {activeTab === 'Questoes' && (
              <Questoes/>
            )}

            {activeTab === 'Outras' && (
              <Outras/>
            )}

            {activeTab === 'Inicio' && (
              <Inicio/>
            )}

            {activeTab === 'Hooks' && (
              <Hooks/>
            )}
            
            {activeTab === 'Padroes' && (
              <Padroes/>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
