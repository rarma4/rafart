"use client"

const TecnicasProjetos = () => {


  return (
    <div className="space-y-6">
      <p className="text-zinc-700 dark:text-zinc-300 text-lg">Se fosse para resumir as técnicas que mais diferenciam um frontend React de alta qualidade, eu dividiria em 4 pilares — arquitetura, performance, UX e manutenibilidade.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Arquitetura bem pensada</div>
          <div className="p-4">
            <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
              <p>Organização por feature (feature-based structure)<br />Evitar um “pasta components” gigante e genérica.</p>
              <p>Componentização inteligente<br />Reaproveitar o máximo sem exagerar em fragmentar.</p>
              <p>Hooks personalizados<br />Para encapsular lógica de negócio/reutilizável (useAuth, useFetch, etc.).</p>
              <p>State management bem escolhido<br />Usar useState/useReducer para coisas simples, mas Redux/Zustand/Recoil para estados complexos.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Performance</div>
          <div className="p-4">
            <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
              <p>React.memo, useMemo, useCallback para evitar renders desnecessários.</p>
              <p>Code splitting + lazy loading para reduzir bundle inicial.</p>
              <p>Virtualização de listas grandes (react-window).</p>
              <p>Pré-renderização (SSR/SSG com Next.js) para entregar conteúdo rápido.</p>
              <p>Uso de formatos leves (imagens WebP/AVIF, SVG para ícones).</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-amber-500 text-white px-4 py-3 font-semibold">UX (Experiência do Usuário)</div>
          <div className="p-4">
            <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
              <p>Feedback rápido: loaders, skeletons e transições suaves.</p>
              <p>Design responsivo e adaptado para mobile-first.</p>
              <p>Acessibilidade (a11y): labels, aria-attributes, contraste de cores.</p>
              <p>Interações fluidas usando animações leves (Framer Motion, CSS transitions).</p>
              <p>Formulários amigáveis: validação instantânea e mensagens claras.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Manutenibilidade e Qualidade</div>
          <div className="p-4">
            <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
              <p>Tipagem forte (TypeScript) para evitar bugs em tempo de desenvolvimento.</p>
              <p>Testes unitários (Jest, React Testing Library) e testes E2E (Cypress/Playwright).</p>
              <p>Padronização de código com ESLint + Prettier.</p>
              <p>Documentação clara (README, Storybook para UI).</p>
              <p>Commits semânticos (Conventional Commits).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TecnicasProjetos