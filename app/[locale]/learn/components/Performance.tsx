"use client"

const Performance = () => {


  return (
    <div className="prose dark:prose-invert max-w-none">
      <ol className="space-y-4 list-decimal list-inside text-zinc-700 dark:text-zinc-300">
        <li className="font-semibold">Otimizar renderizações
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Evite re-renderizações desnecessárias usando React.memo, useMemo e useCallback.</li>
            <li>Garanta que props não mudem sem necessidade (objetos/arrays criados dinamicamente podem disparar renders extras).</li>
            <li>Quebre componentes grandes em partes menores para isolar re-renderizações.</li>
          </ul>
        </li>
        <li className="font-semibold">Lazy loading e code splitting
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Importe páginas/componentes sob demanda com React.lazy e Suspense.</li>
          </ul>
        </li>
        <li className="font-semibold">Imagens otimizadas
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Sempre usar formatos modernos (WebP, AVIF) e tamanho adequado.</li>
            <li>Use lazy loading para imagens fora da tela.</li>
            <li>Em Next.js, prefira o componente IMAGE.</li>
          </ul>
        </li>
        <li className="font-semibold">Minificar e comprimir assets
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Configure Gzip ou Brotli no servidor.</li>
            <li>Garanta que o build do React está em modo produção (NODE_ENV=production).</li>
          </ul>
        </li>
        <li className="font-semibold">Evitar cálculos pesados no render
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Mova cálculos para fora do JSX usando useMemo ou pré-processamento.</li>
            <li>Para listas grandes, use virtualização com react-window ou react-virtualized.</li>
            <li>const processedData = useMemo</li>
          </ul>
        </li>
        <li className="font-semibold">Cache de dados
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Evite requisições repetidas usando React Query, SWR ou cache manual.</li>
            <li>Prefira SSR/SSG em vez de fazer tudo no cliente (Next.js).</li>
          </ul>
        </li>
        <li className="font-semibold">Uso eficiente do CSS
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Prefira CSS Modules ou Tailwind para evitar CSS muito grande.</li>
            <li>Remova CSS não utilizado com PurgeCSS.</li>
          </ul>
        </li>
        <li className="font-semibold">Prefetch e pré-carregamento
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Use rel=preload rel=prefetch para recursos importantes.</li>
            <li>Em Next.js, links internos já fazem prefetch automático.</li>
          </ul>
        </li>
        <li className="font-semibold">Lighthouse e DevTools
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Use o Lighthouse para medir performance.</li>
            <li>Analise o React Profiler para encontrar gargalos.</li>
          </ul>
        </li>
        <li className="font-semibold">10. Técnicas avançadas
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>Server Components (em Next.js 13+) para reduzir JavaScript no cliente.</li>
            <li>Hydration parcial para evitar carregar todo o app de uma vez.</li>
            <li>Suspense + streaming para entregar conteúdo mais rápido.</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}

export default Performance