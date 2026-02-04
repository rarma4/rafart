'use client'

import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

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
              <div className="prose dark:prose-invert max-w-none">
                <ol className="space-y-4 list-decimal list-inside text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">Use Componentes Funcionais + Hooks
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Prefira *componentes funcionais* em vez de classes.</li>
                      <li>Use *Hooks* como useState, useEffect, etc.</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Separe lógica e apresentação
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Evite componentes muito grandes</li>
                      <li>Separe lógica (hooks, requisições) da visualização (JSX)</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Nomeie bem os arquivos e componentes
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Componentes com letra maiúscula: BotaoConfirmar.js</li>
                      <li>Arquivos organizados por função ou módulo.</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Use prop-types ou TypeScript
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Ajuda a validar e documentar as props.</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Evite lógica complexa no JSX
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Declare variáveis antes do return, facilita a leitura.</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Trate efeitos colaterais com useEffect
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Ex: chamadas à API, manipulação de DOM.</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Use Context API ou bibliotecas (ex: Redux, Zustand) para estado global
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Evite passar props demais entre muitos níveis (prop drilling).</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Reutilize componentes sempre que possível
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Exemplo: um botão, um modal, um campo de entrada.</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Use ESLint + Prettier
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Garante código limpo, consistente e com menos erros.</li>
                    </ul>
                  </li>
                  <li className="font-semibold">Escreva testes 
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Use ferramentas como Jest e React Testing Library.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            )}
            
            {activeTab === 'Performance' && (
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
            )}

            {activeTab === 'TecnicasProjetos' && (
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
            )}

            {activeTab === 'Questoes' && (
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">questoes</p>
                <ol className="space-y-4 list-decimal list-inside text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">Como você organiza suas tarefas em um ambiente ágil? <br />
                    Quais ferramentas você costuma utilizar para controle de versão e organização do trabalho?
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>usando ferramentas como Jira, Trello ou GitHub Projects.<br/>Para controle de versão, utilizo Git com repositórios no GitHub,seguindo boas práticas de branching e code review</li>
                    </ul>
                  </li>

                  <li className="font-semibold">Quais práticas você adota para garantir a qualidade do código?
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Adoto escrita de código limpo e legível, padronização cpm ESLint, Prettier,
                        versionamento organizado, revisões de código, cobertura de testes automatizados
                        (unitários e integração) e monitoramento contínuo via CI/CD para garantir que o
                        código chegue estável em produção.</li>
                    </ul>
                  </li>
                  
                  <li className="font-semibold">Como você lida com prazos curtos ou mudanças de escopo em projetos?
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>A prioridade é alinhar com o time e o gestor o impacto das alterações.<br />
                        Costumo dividir o trabalho em entregas menores, priorizar o que gera mais valor imediato e
                        comunicar claramente riscos ou limitações. Assim, conseguimos manter qualidade sem comprometer o prazo</li>
                    </ul>
                  </li>
                  
                  <li className="font-semibold">Você prefere trabalhar de forma independente ou em equipe? Por quê?
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Em equipe porque acredito que a troca de ideias e revisão de código elevam a qualidade do produto, mas também consigo atuar de forma independente quando necessário, mantendo disciplina e autonomia para entregar resultados</li>
                    </ul>
                  </li>
                  
                  <li className="font-semibold">Como você se organiza ao trabalhar em múltiplos projetos ou demandas simultâneas?
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
                      <li>Priorizo tarefas de maior impacto e prazo, uso ferramentas como Jira e Trello para acompanhar o progresso e mantenho comunicação constante com o time e gestores para ajustar prioridades quando necessário</li>
                    </ul>
                  </li>
                </ol>
              </div>
            )}

            {activeTab === 'Outras' && (
              <div className="prose dark:prose-invert max-w-none space-y-6">
                <h6 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">1. Perguntas sobre Fundamentos e Componentes</h6>
                <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">Pergunta: Qual a diferença entre componentes controlados e não controlados? Quando você usaria cada um?</li>
                  <p className="ml-6 mt-2">Resposta: Um componente controlado tem seu estado gerenciado pelo React, geralmente usando o useState. O valor do input é sempre sincronizado com o estado do componente. Já um componente não controlado armazena seu próprio estado internamente, e você acessa o valor usando uma ref. Eu usaria um componente controlado para formulários onde preciso validar a entrada em tempo real, enquanto um componente não controlado é útil para formulários simples, como um campo de busca, ou para interagir com elementos DOM diretamente, como um campo de upload de arquivo.</p>
                  <li className="font-semibold">Pergunta: Explique o que são props e qual a sua principal característica.</li>
                  <p className="ml-6 mt-2">Resposta: Props (abreviação de properties) são o principal mecanismo para passar dados de um componente pai para um componente filho. A principal característica é que são imutáveis (somente leitura). Um componente filho não pode alterar as props que recebeu. Isso garante um fluxo de dados unidirecional, tornando o estado da aplicação mais previsível.</p>
                  <li className="font-semibold">Pergunta: O que é o Virtual DOM e como ele melhora a performance em uma aplicação React?</li>
                  <p className="ml-6 mt-2">Resposta: O Virtual DOM é uma representação leve do DOM real que o React mantém na memória. Quando o estado de um componente muda, o React cria um novo Virtual DOM e o compara com o anterior. Esse processo, chamado de diffing, identifica as diferenças. Em seguida, o React atualiza apenas as partes do DOM real que foram alteradas, em vez de redesenhar a página inteira. Isso é muito mais rápido do que manipular o DOM diretamente.</p>
                </ul>

                <h6 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">2. Perguntas sobre Hooks e Gerenciamento de Estado</h6>
                <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">Pergunta: Qual a diferença entre useState e useEffect? Dê um exemplo de uso para cada um.</li>
                  <p className="ml-6 mt-2">Resposta: useState é usado para adicionar estado a um componente funcional. Ele retorna um array com a variável de estado e uma função para atualizá-la.</p>
                  <p className="ml-6 mt-2">useEffect é um hook para gerenciar efeitos colaterais em componentes funcionais. Ele executa uma função após a renderização do componente, sendo útil para buscar dados de uma API, assinar eventos ou interagir com o DOM.</p>
                  <li className="font-semibold">Pergunta: Explique o que é o useContext e em que cenário ele é mais útil.</li>
                  <p className="ml-6 mt-2">Resposta: O useContext permite que você acesse dados do contexto sem a necessidade de passar props manualmente através de cada nível da árvore de componentes (prop drilling). Ele é ideal para compartilhar dados globais na aplicação, como temas (claro/escuro), informações do usuário autenticado ou configurações de idioma.</p>
                  <li className="font-semibold">Pergunta: Fale sobre o useCallback e o useMemo. Quando e por que você os usaria?</li>
                  <p className="ml-6 mt-2">Resposta: useCallback e useMemo são hooks de otimização. O useCallback memoriza uma função, retornando a mesma referência da função enquanto suas dependências não mudam. Isso é útil para evitar re-renderizações desnecessárias de componentes filhos, especialmente aqueles otimizados com React.memo. Já o useMemo memoriza o resultado de uma computação cara, evitando que ela seja executada novamente a cada renderização. Eu os usaria quando um componente está re-renderizando com frequência e essas funções ou cálculos estão afetando a performance.</p>
                </ul>
                <h6 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">3. Perguntas sobre Arquitetura e Padrões</h6>
                <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">Pergunta: O que é o padrão de renderização condicional em React? Dê um exemplo.</li>
                  <p className="ml-6 mt-2">Resposta: Renderização condicional é a técnica de renderizar diferentes componentes ou elementos, dependendo de uma condição. Isso pode ser feito usando operadores como if/else, operador ternário (? :), ou o operador lógico &&</p>

                  <li className="font-semibold">Pergunta: O que são Higher-Order Components (HOCs) e qual a alternativa moderna para eles?</li>
                  <p className="ml-6 mt-2">Resposta: Um HOC é uma função que recebe um componente como argumento e retorna um novo componente com funcionalidade extra. Por exemplo, você pode criar um HOC para adicionar um loader de carregamento ou gerenciar o estado de um formulário. A alternativa moderna e mais comum são os Hooks, que oferecem uma maneira mais simples e limpa de reutilizar a lógica de estado em componentes funcionais.</p>

                  <li className="font-semibold">Pergunta: Qual a diferença entre gerenciamento de estado local e global? Quando você usaria uma ferramenta como Redux ou Zustand?</li>
                  <p className="ml-6 mt-2">Resposta: O estado local é o estado interno de um componente, gerenciado com useState. Ele é usado para dados que não precisam ser compartilhados com outros componentes. O estado global é compartilhado por múltiplos componentes. Eu usaria uma ferramenta de gerenciamento de estado global como Redux ou Zustand quando a aplicação começa a ter muitos componentes que precisam compartilhar o mesmo estado, como informações do usuário, dados do carrinho de compras ou tema da aplicação, evitando o prop drilling e centralizando a lógica de estado.</p>
                </ul>
                <h6 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">4. Fundamentos e Conceitos Core</h6>
                <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <li>O que é JSX e por que o React o utiliza?</li>
                  <p>R: JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript que nos permite escrever uma estrutura semelhante a HTML diretamente no código. Não é HTML, mas uma fachada que, quando compilada (pelo Babel, por exemplo), se transforma em chamadas de função React.createElement(). O React o utiliza porque torna a criação da UI mais declarativa e visual, facilitando a compreensão da estrutura de um componente apenas lendo o código.</p>

                  <li>Qual a diferença entre Componentes de Classe e Componentes Funcionais? Qual você prefere e por quê?</li>
                  <p>R: Componentes de Classe são classes ES6 que herdam de React.Component e gerenciam estado e ciclo de vida através de this.state e métodos como componentDidMount. Componentes Funcionais são funções JavaScript simples. Com a introdução dos Hooks (como useState e useEffect), eles se tornaram a forma padrão e recomendada de escrever componentes. Eu prefiro Componentes Funcionais porque o código é mais conciso, mais fácil de ler e testar, e evita a complexidade e os problemas comuns associados ao this em JavaScript.</p>

                  <li>P: Explique o fluxo de dados unidirecional no React.</li>
                  <p>R: O fluxo de dados unidirecional significa que os dados em uma aplicação React fluem em uma única direção: de cima para baixo, dos componentes pais para os componentes filhos. O estado é passado através de props, que são somente leitura. Se um componente filho precisa modificar um dado que veio do pai, ele deve chamar uma função (também passada via props) que foi definida no componente pai. Isso torna o estado da aplicação mais previsível e fácil de depurar, pois você sempre sabe de onde os dados vêm e onde a lógica de atualização está localizada.</p>
                </ul>
                <h6 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">5. Hooks</h6>
                <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">Qual a finalidade do array de dependências no useEffect? O que acontece se ele estiver vazio ou se for omitido?</li>
                  <p className="ml-6 mt-2">R: O array de dependências diz ao React quando ele deve re-executar a função de efeito.</p>

                  <p className="ml-6 mt-2">Com dependências [valor1, valor2]: O efeito será executado sempre que um dos valores no array mudar.</p>

                  <p className="ml-6 mt-2">Array vazio []: O efeito será executado apenas uma vez, após a primeira renderização do componente. É o padrão para buscar dados de uma API.</p>

                  <p className="ml-6 mt-2">Omitido: O efeito será executado após cada renderização do componente. Isso é perigoso e pode facilmente levar a loops infinitos se o efeito modificar o estado.</p>
                  <li className="font-semibold">P: Em que cenário você escolheria useCallback em vez de apenas definir uma função dentro do componente?</li>
                  <p className="ml-6 mt-2">R: Eu usaria useCallback principalmente como uma otimização de performance. Se eu estiver passando uma função como prop para um componente filho que está otimizado com React.memo, o useCallback garante que a referência da função não seja recriada a cada renderização do componente pai. Isso evita que o componente filho seja re-renderizado desnecessariamente, já que a prop da função não mudou. Sem useCallback, uma nova instância da função seria criada a cada renderização, quebrando a otimização do React.memo.</p>
                  <li className="font-semibold">P: Qual a diferença entre useState e useReducer? Quando você optaria por useReducer?</li>
                  <p className="ml-6 mt-2">R: useState é ideal para gerenciar estados simples e locais (números, strings, booleanos). useReducer é uma alternativa mais poderosa, inspirada no Redux. Eu optaria por useReducer quando:</p>
                  <ul className="list-disc list-inside ml-12 mt-2 space-y-1">
                    <li>O estado é complexo e envolve múltiplos sub-valores (como um formulário com vários campos).</li>
                    <li>A lógica de atualização do estado é complexa e depende do estado anterior.</li>
                    <li>Preciso centralizar a lógica de estado para facilitar os testes e a manutenção.</li>
                  </ul>
                </ul>
                <h6 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">5. Performance e Otimização</h6>
                <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">O que é memoization no contexto do React? Cite exemplos.</li>
                  <p className="ml-6 mt-2">R: Memoization é uma técnica de otimização que consiste em armazenar o resultado de uma operação cara e retorná-lo de um cache quando os mesmos inputs ocorrem novamente. No React, isso evita re-renderizações e cálculos desnecessários</p>

                  <p className="ml-6 mt-2">React.memo: É um Higher-Order Component (HOC) que memoiza um componente. Ele impede que o componente seja re-renderizado se suas props não mudarem.</p>

                  <p className="ml-6 mt-2">useMemo: É um Hook que memoiza o resultado de um cálculo. Ele re-executa o cálculo apenas se uma de suas dependências mudar.</p>

                  <p className="ml-6 mt-2">useCallback: É um Hook que memoiza a definição de uma função, garantindo que ela mantenha a mesma referência entre renderizações.</p>
                  <li className="font-semibold">P: O que são keys em listas e por que são importantes?</li>
                  <p className="ml-6 mt-2">R: Keys são atributos especiais que você precisa incluir ao criar listas de elementos. Elas ajudam o React a identificar quais itens foram alterados, adicionados ou removidos. Sem keys, o React teria que recriar toda a lista a cada mudança, o que é ineficiente. Com keys estáveis e únicas (como um ID do banco de dados), o React pode otimizar a renderização, atualizando apenas os elementos que realmente mudaram, melhorando significativamente a performance.</p>

                </ul>
                <h6 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">6. Arquitetura e Padrões</h6>
                <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <li className="font-semibold">O que é Prop Drilling e quais são as principais estratégias para evitá-lo?</li>
                  <p className="ml-6 mt-2">R: Prop Drilling é o processo de passar dados de um componente de alto nível para um componente aninhado profundamente, através de vários componentes intermediários que não precisam desses dados. <br />
                    As principais estratégias para evitar isso são:</p>

                  <p className="ml-6 mt-2">Context API: A solução nativa do React para compartilhar dados considerados globais para uma árvore de componentes, como tema, idioma ou informações de autenticação.
                    <br />
                    Gerenciamento de Estado Global: Usar bibliotecas como Redux ou Zustand para centralizar o estado da aplicação em uma store externa, permitindo que qualquer componente acesse os dados diretamente, sem a necessidade de props.
                    <br />
                    Composição de Componentes: Reestruturar os componentes para que o estado seja gerenciado o mais próximo possível de onde ele é necessário, passando componentes como props (usando props.children, por exemplo).</p>


                  <li className="font-semibold">P: O que são Hooks Customizados (Custom Hooks) e qual a principal vantagem de usá-los?</li>
                  <p className="ml-6 mt-2">R: Hooks Customizados são funções JavaScript que começam com o prefixo use e que podem chamar outros Hooks dentro delas. A principal vantagem é a reutilização de lógica com estado entre componentes. Em vez de duplicar a mesma lógica (como buscar dados de uma API, gerenciar a inscrição em um evento ou controlar um formulário) em vários componentes, você pode extraí-la para um Hook Customizado e simplesmente chamá-lo onde for necessário. Isso segue o princípio DRY (Dont Repeat Yourself) e torna o código mais limpo e fácil de manter.</p>

                </ul>
              </div>
            )}

            {activeTab === 'Inicio' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Como Começaria um projeto</div>
                    <div className="p-4">
                      <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                        <p>A Escolha Padrão para Iniciar: Componentes Funcionais e Hooks</p>
                        <p>Para a grande maioria das aplicações, de projetos pessoais a startups, o padrão mais moderno e recomendado para começar é a combinação de Componentes Funcionais com Hooks.</p>
                        <p>Este padrão se tornou o padrão ouro do ecossistema React por vários motivos:</p>
                        <p>Simplicidade e Clareza: Componentes funcionais são simplesmente funções JavaScript. Eles são mais fáceis de ler, escrever e testar do que os antigos componentes de classe.</p>
                        <p>Reutilização de Lógica: Hooks como useState e useEffect permitem que você adicione estado e efeitos colaterais aos seus componentes de forma limpa e modular. Além disso, você pode criar Hooks Customizados para reutilizar lógicas complexas em diferentes componentes, como a busca de dados de uma API.</p>
                        <p>Gerenciamento de Estado Simples: Para dados que só precisam ser acessados por um único componente, useState é perfeito. Para dados que precisam ser compartilhados entre vários componentes, você pode usar a Context API para evitar o famoso Prop Drilling sem a necessidade de uma biblioteca externa.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Quando e Por que Escolher Outro Padrão?</div>
                    <div className="p-4">
                      <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                        <p>O padrão de Componentes Funcionais + Hooks + Context API é uma base sólida e escalável. Geralmente, você só deve considerar uma biblioteca de gerenciamento de estado mais robusta como Redux ou Zustand se:</p>
                        <p>Sua aplicação for muito grande e complexa, com um estado que precisa ser acessado por dezenas de componentes não relacionados.</p>
                        <p>Você precisar de ferramentas avançadas de depuração e middlewares para lidar com efeitos colaterais.</p>
                        <p>Minha recomendação: Comece com o padrão de Componentes Funcionais e Hooks. Use a Context API para gerenciar o estado global quando necessário. Se, e somente se, essa abordagem não for mais suficiente para manter o seu código organizado e fácil de gerenciar, aí sim você pode considerar a migração para algo como Redux ou Zustand.</p>
                        <p>Começar de forma simples permite que você construa a aplicação rapidamente e adicione complexidade apenas quando ela for realmente necessária.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Hooks' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks Essenciais do React</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useState</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">É o mais fundamental de todos. Ele permite que você adicione estado a um componente de função. O estado é basicamente uma variável que, quando alterada, faz com que o componente seja renderizado novamente.</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks Essenciais do React</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useEffect</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Usado para lidar com efeitos colaterais em componentes, como buscar dados de uma API, manipular o DOM diretamente, ou configurar e limpar subscriptions. Ele executa a função que você passar, seja após a primeira renderização ou após cada atualização do componente, dependendo da sua configuração.</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks Essenciais do React</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useRef</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Cria uma referência (um objeto mutável) que persiste entre as renderizações do componente. É útil para armazenar valores que não precisam causar uma nova renderização quando mudam, como um timer ID, ou para acessar um elemento do DOM diretamente.</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks Essenciais do React</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useContext</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Serve para acessar o contexto global de um componente, evitando a necessidade de passar props manualmente através de múltiplos níveis da árvore de componentes (o chamado prop drilling).</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks de Performance</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useReducer</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Uma alternativa ao useState para gerenciar estados complexos ou que dependem de estados anteriores. Ele recebe um reducer (uma função que descreve como o estado muda) e um estado inicial, retornando o estado atual e uma função dispatch para disparar ações que o alteram.</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks de Performance</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useMemo</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Memoriza um valor computado. Use-o para evitar que cálculos caros sejam reexecutados a cada renderização, a menos que as dependências do cálculo tenham mudado.</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks de Performance</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useCallback</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Similar ao useMemo, mas memoriza uma função inteira. É útil para evitar que funções sejam recriadas a cada renderização, o que pode ser importante para otimizar componentes filhos que dependem de referências estáveis.</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Hooks de Performance</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">useLayoutEffect</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Quase idêntico ao useEffect, mas sua função é executada sincronamente após o DOM ser atualizado, antes que o navegador tenha tempo de pintá-lo na tela. É útil para medir dimensões de elementos do DOM, por exemplo, ou fazer alterações visuais que precisam acontecer antes da pintura. Ele pode bloquear a renderização, por isso, use-o com cautela.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'Padroes' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Atomic Design</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Atomic Design</h4>
                      <div className="text-zinc-700 dark:text-zinc-300 space-y-3">
                        Pense nisso como a organização de um quebra-cabeça. Você começa com os pedaços menores e mais básicos (Átomos - botões, inputs), constrói componentes um pouco maiores com eles (Moléculas - um formulário de busca), agrupa as moléculas para formar seções maiores (Organismos - o cabeçalho completo da página), e finalmente monta tudo para criar as páginas finais.
                      </div>
                      <div className="mt-3">
                        Quando usar? Ideal para grandes projetos com muitos componentes reutilizáveis, pois ajuda a manter a consistência e a organização.
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Clean Code</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Clean Code</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">É uma filosofia de escrever código de forma clara, simples e fácil de entender. Significa usar nomes descritivos para variáveis e funções, escrever funções pequenas que fazem apenas uma coisa e remover código duplicado.</div>
                      <div className="mt-3">Quando usar? Sempre! É uma boa prática fundamental em qualquer projeto de software, não apenas no React.</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">SOLID</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">SOLID</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">São cinco princípios para escrever código robusto e de fácil manutenção. O mais aplicável no React é o S de Single Responsibility Principle (Princípio da Responsabilidade Única), que sugere que um componente (ou função) deve ter apenas uma razão para mudar.</div>
                      <div className="mt-3">Quando usar? Use para guiar o design dos seus componentes. Por exemplo, um componente que exibe uma lista de produtos não deve ser responsável por buscar esses produtos da API.</div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-700 border border-amber-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-amber-500 text-white px-4 py-3 font-semibold">Componentização</div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Componentização</h4>
                      <div className="text-zinc-700 dark:text-zinc-300">Este é o padrão mais fundamental do React. A ideia é dividir a UI em pedaços pequenos e reutilizáveis. Em vez de ter uma única página gigante, você a divide em componentes menores, como Header, Button, Card, etc.</div>
                      <div className="mt-3">Quando usar? Sempre! É o coração do React e a base de como você constrói aplicações com ele.</div>
                    </div>
                  </div>

                  
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
