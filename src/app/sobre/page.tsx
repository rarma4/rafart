import '../styles/pages/sobre.scss'

export default function Sobre() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column " id="sobre">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className="text-center text-warning">REACT</h2>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#BoasPraticas"
                  type="button"
                  role="tab"
                  aria-selected="true"
                  tabIndex={0}
                >
                  Boas Praticas
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#Performance"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Performance
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#TecnicasProjetos"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Tecnicas Projetos
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#Questoes"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Questoes
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#Outras"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Outras
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#Inicio"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Inicio
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#Hooks"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Hooks
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#Padroes"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Padroes
                </button>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="BoasPraticas" role="tabpanel">
                <ol>
                  <li>Use Componentes Funcionais + Hooks
                    <ul>
                      <li>Prefira *componentes funcionais* em vez de classes.</li>
                      <li>Use *Hooks* como useState, useEffect, etc.</li>
                    </ul>
                  </li>
                  <li>Separe lógica e apresentação
                    <ul>
                      <li>Evite componentes muito grandes</li>
                      <li>Separe lógica (hooks, requisições) da visualização (JSX)</li>
                    </ul>
                  </li>
                  <li>Nomeie bem os arquivos e componentes
                    <ul>
                      <li>Componentes com letra maiúscula: BotaoConfirmar.js</li>
                      <li>Arquivos organizados por função ou módulo.</li>
                    </ul>
                  </li>
                  <li>Use prop-types ou TypeScript
                    <ul>
                      <li>Ajuda a validar e documentar as props.</li>
                    </ul>
                  </li>
                  <li>Evite lógica complexa no JSX
                    <ul>
                      <li>Declare variáveis antes do return, facilita a leitura.</li>
                    </ul>
                  </li>
                  <li>Trate efeitos colaterais com useEffect
                    <ul>
                      <li>Ex: chamadas à API, manipulação de DOM.</li>
                    </ul>
                  </li>
                  <li>Use Context API ou bibliotecas (ex: Redux, Zustand) para estado global
                    <ul>
                      <li>Evite passar props demais entre muitos níveis (prop drilling).</li>
                    </ul>
                  </li>
                  <li>Reutilize componentes sempre que possível
                    <ul>
                      <li>Exemplo: um botão, um modal, um campo de entrada.</li>
                    </ul>
                  </li>
                  <li>Use ESLint + Prettier
                    <ul>
                      <li>Garante código limpo, consistente e com menos erros.</li>
                    </ul>
                  </li>
                  <li>Escreva testes <ul>
                    <li>Use ferramentas como Jest e React Testing Library.</li>
                  </ul>
                  </li>
                </ol>
              </div>
              <div className="tab-pane fade" id="Performance" role="tabpanel">
                <ol>
                  <li>Otimizar renderizações
                    <ul>
                      <li>Evite re-renderizações desnecessárias usando React.memo, useMemo e useCallback.</li>
                      <li>Garanta que props não mudem sem necessidade (objetos/arrays criados dinamicamente podem disparar renders extras).</li>
                      <li>Quebre componentes grandes em partes menores para isolar re-renderizações.</li>
                    </ul>
                  </li>
                  <li>Lazy loading e code splitting
                    <ul>
                      <li>Importe páginas/componentes sob demanda com React.lazy e Suspense.</li>
                    </ul>
                  </li>
                  <li>Imagens otimizadas
                    <ul>
                      <li>Sempre usar formatos modernos (WebP, AVIF) e tamanho adequado.</li>
                      <li>Use lazy loading para imagens fora da tela.</li>
                      <li>Em Next.js, prefira o componente IMAGE.</li>
                    </ul>
                  </li>
                  <li>Minificar e comprimir assets
                    <ul>
                      <li>Configure Gzip ou Brotli no servidor.</li>
                      <li>Garanta que o build do React está em modo produção (NODE_ENV=production).</li>
                    </ul>
                  </li>
                  <li>Evitar cálculos pesados no render
                    <ul>
                      <li>Mova cálculos para fora do JSX usando useMemo ou pré-processamento.</li>
                      <li>Para listas grandes, use virtualização com react-window ou react-virtualized.</li>
                      <li>const processedData = useMemo</li>
                    </ul>
                  </li>
                  <li>Cache de dados
                    <ul>
                      <li>Evite requisições repetidas usando React Query, SWR ou cache manual.</li>
                      <li>Prefira SSR/SSG em vez de fazer tudo no cliente (Next.js).</li>
                    </ul>
                  </li>
                  <li>Uso eficiente do CSS
                    <ul>
                      <li>Prefira CSS Modules ou Tailwind para evitar CSS muito grande.</li>
                      <li>Remova CSS não utilizado com PurgeCSS.</li>
                    </ul>
                  </li>
                  <li>Prefetch e pré-carregamento
                    <ul>
                      <li>Use rel=preload rel=prefetch para recursos importantes.</li>
                      <li>Em Next.js, links internos já fazem prefetch automático.</li>
                    </ul>
                  </li>
                  <li>Lighthouse e DevTools
                    <ul>
                      <li>Use o Lighthouse para medir performance.</li>
                      <li>Analise o React Profiler para encontrar gargalos.</li>
                    </ul>
                  </li>
                  <li>10. Técnicas avançadas
                    <ul>
                      <li>Server Components (em Next.js 13+) para reduzir JavaScript no cliente.</li>
                      <li>Hydration parcial para evitar carregar todo o app de uma vez.</li>
                      <li>Suspense + streaming para entregar conteúdo mais rápido.</li>
                    </ul>
                  </li>
                </ol>

              </div>
              <div className="tab-pane fade mt-3" id="TecnicasProjetos" role="tabpanel">
                <p>Se fosse para resumir as técnicas que mais diferenciam um frontend React de alta qualidade, eu dividiria em 4 pilares — arquitetura, performance, UX e manutenibilidade.</p>

                <div className="d-flex flex-row flex-wrap justify-content-evenly gap-1 ">
                  <div className="card border-primary mt-3" >
                    <div className="card-header">Arquitetura bem pensada</div>
                    <div className="card-body">
                      {/* <h4 className="card-title">Arquitetura bem pensada</h4> */}
                      <div className="card-text">
                        <p>Organização por feature (feature-based structure)<br />Evitar um “pasta components” gigante e genérica.</p>
                        <p>Componentização inteligente<br />Reaproveitar o máximo sem exagerar em fragmentar.</p>
                        <p>Hooks personalizados<br />Para encapsular lógica de negócio/reutilizável (useAuth, useFetch, etc.).</p>
                        <p>State management bem escolhido<br />Usar useState/useReducer para coisas simples, mas Redux/Zustand/Recoil para estados complexos.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Performance</div>
                    <div className="card-body">
                      {/* <h4 className="card-title">useEffect</h4> */}
                      <div className="card-text">
                        <p>React.memo, useMemo, useCallback para evitar renders desnecessários.</p>
                        <p>Code splitting + lazy loading para reduzir bundle inicial.</p>
                        <p>Virtualização de listas grandes (react-window).</p>
                        <p>Pré-renderização (SSR/SSG com Next.js) para entregar conteúdo rápido.</p>
                        <p>Uso de formatos leves (imagens WebP/AVIF, SVG para ícones).</p>
                      </div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">UX (Experiência do Usuário)</div>
                    <div className="card-body">
                      {/* <h4 className="card-title">useRef</h4> */}
                      <div className="card-text">
                        <p>Feedback rápido: loaders, skeletons e transições suaves.</p>
                        <p>Design responsivo e adaptado para mobile-first.</p>
                        <p>Acessibilidade (a11y): labels, aria-attributes, contraste de cores.</p>
                        <p>Interações fluidas usando animações leves (Framer Motion, CSS transitions).</p>
                        <p>Formulários amigáveis: validação instantânea e mensagens claras.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header"> Manutenibilidade e Qualidade</div>
                    <div className="card-body">
                      {/* <h4 className="card-title">useContext</h4> */}
                      <div className="card-text">
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
              <div className="tab-pane fade" id="Questoes" role="tabpanel">
                <p>questoes</p>
                <ol>
                  <li>Como você organiza suas tarefas em um ambiente ágil? <br />
                    Quais ferramentas você costuma utilizar para controle de versão e organização do trabalho?</li>
                  <ul><li>usando ferramentas como Jira, Trello ou GitHub Projects.<br></br>Para controle de versão, utilizo Git com repositórios no GitHub,seguindo boas práticas de branching e code review</li></ul>

                  <li>Quais práticas você adota para garantir a qualidade do código?</li>
                  <ul><li>Adoto escrita de código limpo e legível, padronização cpm ESLint, Prettier,
                    versionamento organizado, revisões de código, cobertura de testes automatizados
                    (unitários e integração) e monitoramento contínuo via CI/CD para garantir que o
                    código chegue estável em produção.</li></ul>
                  <li>Como você lida com prazos curtos ou mudanças de escopo em projetos?</li>
                  <ul><li>A prioridade é alinhar com o time e o gestor o impacto das alterações.<br />
                    Costumo dividir o trabalho em entregas menores, priorizar o que gera mais valor imediato e
                    comunicar claramente riscos ou limitações. Assim, conseguimos manter qualidade sem comprometer o prazo</li></ul>
                  <li>Você prefere trabalhar de forma independente ou em equipe? Por quê?</li>
                  <ul><li>Em equipe porque acredito que a troca de ideias e revisão de código elevam a qualidade do produto, mas também consigo atuar de forma independente quando necessário, mantendo disciplina e autonomia para entregar resultados</li></ul>
                  <li>Como você se organiza ao trabalhar em múltiplos projetos ou demandas simultâneas?</li>
                  <ul><li>Priorizo tarefas de maior impacto e prazo, uso ferramentas como Jira e Trello para acompanhar o progresso e mantenho comunicação constante com o time e gestores para ajustar prioridades quando necessário</li></ul>
                </ol>
              </div>

              <div className="tab-pane fade" id="Outras" role="tabpanel">
                <h6>1. Perguntas sobre Fundamentos e Componentes</h6>
                <ul >
                  <li>Pergunta: Qual a diferença entre componentes controlados e não controlados? Quando você usaria cada um?</li>
                  <p>Resposta: Um componente controlado tem seu estado gerenciado pelo React, geralmente usando o useState. O valor do input é sempre sincronizado com o estado do componente. Já um componente não controlado armazena seu próprio estado internamente, e você acessa o valor usando uma ref. Eu usaria um componente controlado para formulários onde preciso validar a entrada em tempo real, enquanto um componente não controlado é útil para formulários simples, como um campo de busca, ou para interagir com elementos DOM diretamente, como um campo de upload de arquivo.</p>
                  <li>Pergunta: Explique o que são props e qual a sua principal característica.</li>
                  <p>Resposta: Props (abreviação de properties) são o principal mecanismo para passar dados de um componente pai para um componente filho. A principal característica é que são imutáveis (somente leitura). Um componente filho não pode alterar as props que recebeu. Isso garante um fluxo de dados unidirecional, tornando o estado da aplicação mais previsível.</p>
                  <li>Pergunta: O que é o Virtual DOM e como ele melhora a performance em uma aplicação React?</li>
                  <p>Resposta: O Virtual DOM é uma representação leve do DOM real que o React mantém na memória. Quando o estado de um componente muda, o React cria um novo Virtual DOM e o compara com o anterior. Esse processo, chamado de diffing, identifica as diferenças. Em seguida, o React atualiza apenas as partes do DOM real que foram alteradas, em vez de redesenhar a página inteira. Isso é muito mais rápido do que manipular o DOM diretamente.</p>
                </ul>

                <h6>2. Perguntas sobre Hooks e Gerenciamento de Estado</h6>
                <ul>
                  <li>Pergunta: Qual a diferença entre useState e useEffect? Dê um exemplo de uso para cada um.</li>
                  <p>Resposta: useState é usado para adicionar estado a um componente funcional. Ele retorna um array com a variável de estado e uma função para atualizá-la.</p>
                  <p>useEffect é um hook para gerenciar efeitos colaterais em componentes funcionais. Ele executa uma função após a renderização do componente, sendo útil para buscar dados de uma API, assinar eventos ou interagir com o DOM.</p>
                  <li>Pergunta: Explique o que é o useContext e em que cenário ele é mais útil.</li>
                  <p>Resposta: O useContext permite que você acesse dados do contexto sem a necessidade de passar props manualmente através de cada nível da árvore de componentes (prop drilling). Ele é ideal para compartilhar dados globais na aplicação, como temas (claro/escuro), informações do usuário autenticado ou configurações de idioma.</p>
                  <li>Pergunta: Fale sobre o useCallback e o useMemo. Quando e por que você os usaria?</li>
                  <p>Resposta: useCallback e useMemo são hooks de otimização. O useCallback memoriza uma função, retornando a mesma referência da função enquanto suas dependências não mudam. Isso é útil para evitar re-renderizações desnecessárias de componentes filhos, especialmente aqueles otimizados com React.memo. Já o useMemo memoriza o resultado de uma computação cara, evitando que ela seja executada novamente a cada renderização. Eu os usaria quando um componente está re-renderizando com frequência e essas funções ou cálculos estão afetando a performance.</p>
                </ul>
                <h6>3. Perguntas sobre Arquitetura e Padrões</h6>
                <ul>
                  <li>Pergunta: O que é o padrão de renderização condicional em React? Dê um exemplo.</li>
                  <p>Resposta: Renderização condicional é a técnica de renderizar diferentes componentes ou elementos, dependendo de uma condição. Isso pode ser feito usando operadores como if/else, operador ternário (? :), ou o operador lógico &&</p>

                  <li>Pergunta: O que são Higher-Order Components (HOCs) e qual a alternativa moderna para eles?</li>
                  <p>Resposta: Um HOC é uma função que recebe um componente como argumento e retorna um novo componente com funcionalidade extra. Por exemplo, você pode criar um HOC para adicionar um loader de carregamento ou gerenciar o estado de um formulário. A alternativa moderna e mais comum são os Hooks, que oferecem uma maneira mais simples e limpa de reutilizar a lógica de estado em componentes funcionais.</p>

                  <li>Pergunta: Qual a diferença entre gerenciamento de estado local e global? Quando você usaria uma ferramenta como Redux ou Zustand?</li>
                  <p>Resposta: O estado local é o estado interno de um componente, gerenciado com useState. Ele é usado para dados que não precisam ser compartilhados com outros componentes. O estado global é compartilhado por múltiplos componentes. Eu usaria uma ferramenta de gerenciamento de estado global como Redux ou Zustand quando a aplicação começa a ter muitos componentes que precisam compartilhar o mesmo estado, como informações do usuário, dados do carrinho de compras ou tema da aplicação, evitando o prop drilling e centralizando a lógica de estado.</p>
                </ul>
                <h6>4. Fundamentos e Conceitos Core</h6>
                <ul>
                  <li>O que é JSX e por que o React o utiliza?</li>
                  <p>R: JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript que nos permite escrever uma estrutura semelhante a HTML diretamente no código. Não é HTML, mas uma fachada que, quando compilada (pelo Babel, por exemplo), se transforma em chamadas de função React.createElement(). O React o utiliza porque torna a criação da UI mais declarativa e visual, facilitando a compreensão da estrutura de um componente apenas lendo o código.</p>

                  <li>Qual a diferença entre Componentes de Classe e Componentes Funcionais? Qual você prefere e por quê?</li>
                  <p>R: Componentes de Classe são classes ES6 que herdam de React.Component e gerenciam estado e ciclo de vida através de this.state e métodos como componentDidMount. Componentes Funcionais são funções JavaScript simples. Com a introdução dos Hooks (como useState e useEffect), eles se tornaram a forma padrão e recomendada de escrever componentes. Eu prefiro Componentes Funcionais porque o código é mais conciso, mais fácil de ler e testar, e evita a complexidade e os problemas comuns associados ao this em JavaScript.</p>

                  <li>P: Explique o fluxo de dados unidirecional no React.</li>
                  <p>R: O fluxo de dados unidirecional significa que os dados em uma aplicação React fluem em uma única direção: de cima para baixo, dos componentes pais para os componentes filhos. O estado é passado através de props, que são somente leitura. Se um componente filho precisa modificar um dado que veio do pai, ele deve chamar uma função (também passada via props) que foi definida no componente pai. Isso torna o estado da aplicação mais previsível e fácil de depurar, pois você sempre sabe de onde os dados vêm e onde a lógica de atualização está localizada.</p>
                </ul>
                <h6>5. Hooks</h6>
                <ul>
                  <li>Qual a finalidade do array de dependências no useEffect? O que acontece se ele estiver vazio ou se for omitido?</li>
                  <p>R: O array de dependências diz ao React quando ele deve re-executar a função de efeito.</p>

                  <p>Com dependências [valor1, valor2]: O efeito será executado sempre que um dos valores no array mudar.</p>

                  <p>Array vazio []: O efeito será executado apenas uma vez, após a primeira renderização do componente. É o padrão para buscar dados de uma API.</p>

                  <p>Omitido: O efeito será executado após cada renderização do componente. Isso é perigoso e pode facilmente levar a loops infinitos se o efeito modificar o estado.</p>
                  <li>P: Em que cenário você escolheria useCallback em vez de apenas definir uma função dentro do componente?</li>
                  <p>R: Eu usaria useCallback principalmente como uma otimização de performance. Se eu estiver passando uma função como prop para um componente filho que está otimizado com React.memo, o useCallback garante que a referência da função não seja recriada a cada renderização do componente pai. Isso evita que o componente filho seja re-renderizado desnecessariamente, já que a prop da função não mudou. Sem useCallback, uma nova instância da função seria criada a cada renderização, quebrando a otimização do React.memo.</p>
                  <li>P: Qual a diferença entre useState e useReducer? Quando você optaria por useReducer?</li>
                  <p>R: useState é ideal para gerenciar estados simples e locais (números, strings, booleanos). useReducer é uma alternativa mais poderosa, inspirada no Redux. Eu optaria por useReducer quando:</p>
                  <ul>
                    <li>O estado é complexo e envolve múltiplos sub-valores (como um formulário com vários campos).</li>
                    <li>A lógica de atualização do estado é complexa e depende do estado anterior.</li>
                    <li>Preciso centralizar a lógica de estado para facilitar os testes e a manutenção.</li>
                  </ul>
                </ul>
                <h6>5. Performance e Otimização</h6>
                <ul>
                  <li>O que é memoization no contexto do React? Cite exemplos.</li>
                  <p>R: Memoization é uma técnica de otimização que consiste em armazenar o resultado de uma operação cara e retorná-lo de um cache quando os mesmos inputs ocorrem novamente. No React, isso evita re-renderizações e cálculos desnecessários</p>

                  <p>React.memo: É um Higher-Order Component (HOC) que memoiza um componente. Ele impede que o componente seja re-renderizado se suas props não mudarem.</p>

                  <p>useMemo: É um Hook que memoiza o resultado de um cálculo. Ele re-executa o cálculo apenas se uma de suas dependências mudar.</p>

                  <p>useCallback: É um Hook que memoiza a definição de uma função, garantindo que ela mantenha a mesma referência entre renderizações.</p>
                  <li>P: O que são keys em listas e por que são importantes?</li>
                  <p>R: Keys são atributos especiais que você precisa incluir ao criar listas de elementos. Elas ajudam o React a identificar quais itens foram alterados, adicionados ou removidos. Sem keys, o React teria que recriar toda a lista a cada mudança, o que é ineficiente. Com keys estáveis e únicas (como um ID do banco de dados), o React pode otimizar a renderização, atualizando apenas os elementos que realmente mudaram, melhorando significativamente a performance.</p>

                </ul>
                <h6>6. Arquitetura e Padrões</h6>
                <ul>
                  <li>O que é Prop Drilling e quais são as principais estratégias para evitá-lo?</li>
                  <p>R: Prop Drilling é o processo de passar dados de um componente de alto nível para um componente aninhado profundamente, através de vários componentes intermediários que não precisam desses dados. <br />
                    As principais estratégias para evitar isso são:</p>

                  <p> Context API: A solução nativa do React para compartilhar dados considerados globais para uma árvore de componentes, como tema, idioma ou informações de autenticação.
                    <br />
                    Gerenciamento de Estado Global: Usar bibliotecas como Redux ou Zustand para centralizar o estado da aplicação em uma store externa, permitindo que qualquer componente acesse os dados diretamente, sem a necessidade de props.
                    <br />
                    Composição de Componentes: Reestruturar os componentes para que o estado seja gerenciado o mais próximo possível de onde ele é necessário, passando componentes como props (usando props.children, por exemplo).</p>


                  <li>P: O que são Hooks Customizados (Custom Hooks) e qual a principal vantagem de usá-los?</li>
                  <p>R: Hooks Customizados são funções JavaScript que começam com o prefixo use e que podem chamar outros Hooks dentro delas. A principal vantagem é a reutilização de lógica com estado entre componentes. Em vez de duplicar a mesma lógica (como buscar dados de uma API, gerenciar a inscrição em um evento ou controlar um formulário) em vários componentes, você pode extraí-la para um Hook Customizado e simplesmente chamá-lo onde for necessário. Isso segue o princípio DRY (Dont Repeat Yourself) e torna o código mais limpo e fácil de manter.</p>

                </ul>

              </div>
              <div className="tab-pane fade" id="Inicio" role="tabpanel">

                <div className="d-flex flex-row flex-wrap justify-content-evenly gap-1 ">
                  <div className="card border-primary mt-3" >
                    <div className="card-header">Como Começaria um projeto</div>
                    <div className="card-body">
                      {/* <h4 className="card-title">Arquitetura bem pensada</h4> */}
                      <div className="card-text">
                        <p>A Escolha Padrão para Iniciar: Componentes Funcionais e Hooks</p>
                        <p>Para a grande maioria das aplicações, de projetos pessoais a startups, o padrão mais moderno e recomendado para começar é a combinação de Componentes Funcionais com Hooks.</p>
                        <p>Este padrão se tornou o padrão ouro do ecossistema React por vários motivos:</p>
                        <p>Simplicidade e Clareza: Componentes funcionais são simplesmente funções JavaScript. Eles são mais fáceis de ler, escrever e testar do que os antigos componentes de classe.</p>
                        <p>Reutilização de Lógica: Hooks como useState e useEffect permitem que você adicione estado e efeitos colaterais aos seus componentes de forma limpa e modular. Além disso, você pode criar Hooks Customizados para reutilizar lógicas complexas em diferentes componentes, como a busca de dados de uma API.</p>
                        <p>Gerenciamento de Estado Simples: Para dados que só precisam ser acessados por um único componente, useState é perfeito. Para dados que precisam ser compartilhados entre vários componentes, você pode usar a Context API para evitar o famoso Prop Drilling sem a necessidade de uma biblioteca externa.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Quando e Por que Escolher Outro Padrão?</div>
                    <div className="card-body">
                      {/* <h4 className="card-title">useEffect</h4> */}
                      <div className="card-text">
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

              <div className="tab-pane fade" id="Hooks" role="tabpanel">
                <div className="d-flex flex-row flex-wrap justify-content-evenly gap-1 ">
                  <div className="card border-primary mt-3" >
                    <div className="card-header">Hooks Essenciais do React</div>
                    <div className="card-body">
                      <h4 className="card-title">useState</h4>
                      <div className="card-text">É o mais fundamental de todos. Ele permite que você adicione estado a um componente de função. O estado é basicamente uma variável que, quando alterada, faz com que o componente seja renderizado novamente.</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Hooks Essenciais do React</div>
                    <div className="card-body">
                      <h4 className="card-title">useEffect</h4>
                      <div className="card-text">Usado para lidar com efeitos colaterais em componentes, como buscar dados de uma API, manipular o DOM diretamente, ou configurar e limpar subscriptions. Ele executa a função que você passar, seja após a primeira renderização ou após cada atualização do componente, dependendo da sua configuração.</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Hooks Essenciais do React</div>
                    <div className="card-body">
                      <h4 className="card-title">useRef</h4>
                      <div className="card-text">Cria uma referência (um objeto mutável) que persiste entre as renderizações do componente. É útil para armazenar valores que não precisam causar uma nova renderização quando mudam, como um timer ID, ou para acessar um elemento do DOM diretamente.</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Hooks Essenciais do React</div>
                    <div className="card-body">
                      <h4 className="card-title">useContext</h4>
                      <div className="card-text">Serve para acessar o contexto global de um componente, evitando a necessidade de passar props manualmente através de múltiplos níveis da árvore de componentes (o chamado prop drilling).</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Hooks de Performance</div>
                    <div className="card-body">
                      <h4 className="card-title">useReducer</h4>
                      <div className="card-text">Uma alternativa ao useState para gerenciar estados complexos ou que dependem de estados anteriores. Ele recebe um reducer (uma função que descreve como o estado muda) e um estado inicial, retornando o estado atual e uma função dispatch para disparar ações que o alteram.</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Hooks de Performance</div>
                    <div className="card-body">
                      <h4 className="card-title">useMemo</h4>
                      <div className="card-text">Memoriza um valor computado. Use-o para evitar que cálculos caros sejam reexecutados a cada renderização, a menos que as dependências do cálculo tenham mudado.</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Hooks de Performance</div>
                    <div className="card-body">
                      <h4 className="card-title">useCallback</h4>
                      <div className="card-text">Similar ao useMemo, mas memoriza uma função inteira. É útil para evitar que funções sejam recriadas a cada renderização, o que pode ser importante para otimizar componentes filhos que dependem de referências estáveis.</div>
                    </div>
                  </div>
                  <div className="card border-primary mt-3">
                    <div className="card-header">Hooks de Performance</div>
                    <div className="card-body">
                      <h4 className="card-title">useLayoutEffect</h4>
                      <div className="card-text">Quase idêntico ao useEffect, mas sua função é executada sincronamente após o DOM ser atualizado, antes que o navegador tenha tempo de pintá-lo na tela. É útil para medir dimensões de elementos do DOM, por exemplo, ou fazer alterações visuais que precisam acontecer antes da pintura. Ele pode bloquear a renderização, por isso, use-o com cautela.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Padroes" role="tabpanel">
                <div className="d-flex flex-row flex-wrap justify-content-evenly gap-1 ">

                  <div className="card border-primary mt-3" >
                    <div className="card-header">Atomic Design</div>
                    <div className="card-body">
                      <h4 className="card-title">Atomic Design</h4>
                      <div className="card-text">
                        Pense nisso como a organização de um quebra-cabeça. Você começa com os pedaços menores e mais básicos (Átomos - botões, inputs), constrói componentes um pouco maiores com eles (Moléculas - um formulário de busca), agrupa as moléculas para formar seções maiores (Organismos - o cabeçalho completo da página), e finalmente monta tudo para criar as páginas finais.
                      </div><br/>
                      <div>
                        Quando usar? Ideal para grandes projetos com muitos componentes reutilizáveis, pois ajuda a manter a consistência e a organização.
                        </div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Clean Code</div>
                    <div className="card-body">
                      <h4 className="card-title">Clean Code</h4>
                      <div className="card-text">É uma filosofia de escrever código de forma clara, simples e fácil de entender. Significa usar nomes descritivos para variáveis e funções, escrever funções pequenas que fazem apenas uma coisa e remover código duplicado.</div><br/>
                      <div>Quando usar? Sempre! É uma boa prática fundamental em qualquer projeto de software, não apenas no React.</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">SOLID</div>
                    <div className="card-body">
                      <h4 className="card-title">SOLID</h4>
                      <div className="card-text">São cinco princípios para escrever código robusto e de fácil manutenção. O mais aplicável no React é o S de Single Responsibility Principle (Princípio da Responsabilidade Única), que sugere que um componente (ou função) deve ter apenas uma razão para mudar.</div><br/>
                      <div>Quando usar? Use para guiar o design dos seus componentes. Por exemplo, um componente que exibe uma lista de produtos não deve ser responsável por buscar esses produtos da API.</div>
                    </div>
                  </div>

                  <div className="card border-primary mt-3">
                    <div className="card-header">Componentização</div>
                    <div className="card-body">
                      <h4 className="card-title">Componentização</h4>
                      <div className="card-text">Este é o padrão mais fundamental do React. A ideia é dividir a UI em pedaços pequenos e reutilizáveis. Em vez de ter uma única página gigante, você a divide em componentes menores, como Header, Button, Card, etc.</div><br/>
                      <div>Quando usar? Sempre! É o coração do React e a base de como você constrói aplicações com ele.</div>
                    </div>
                  </div>

                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
