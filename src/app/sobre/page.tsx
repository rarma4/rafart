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
                <a className="nav-link active" data-bs-toggle="tab" href="#BoasPraticas" aria-selected="true" role="tab">Boas Praticas</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#Performance" aria-selected="false" role="tab">Performance</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#TecnicasProjetos" aria-selected="false" role="tab">Tecnicas Projetos</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#Questoes" aria-selected="false" role="tab">Questoes</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#Outras" aria-selected="false" role="tab">Outras</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#Inicio" aria-selected="false" role="tab">Inicio</a>
              </li>

            </ul>
            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="BoasPraticas" role="tabpanel">
                <ul>
                  <li>1. Use Componentes Funcionais + Hooks
                    <p>- Prefira *componentes funcionais* em vez de classes.</p>
                    <p>- Use *Hooks* como `useState`, `useEffect`, etc.</p>
                  </li>
                  <li>2. Separe lógica e apresentação
                    <p>- Evite componentes muito grandes</p>
                    <p>- Separe lógica (hooks, requisições) da visualização (JSX).</p>
                  </li>
                  <li>3. Nomeie bem os arquivos e componentes
                    <p>- Componentes com letra maiúscula: `BotaoConfirmar.js`</p>
                    <p>- Arquivos organizados por função ou módulo.</p>
                  </li>
                  <li>4. Use `prop-types` ou TypeScript
                    <p>- Ajuda a validar e documentar as `props`.</p>

                  </li>
                  <li>5. Evite lógica complexa no JSX
                    <p>- Declare variáveis antes do `return`, facilita a leitura.</p>

                  </li>
                  <li>6. Trate efeitos colaterais com `useEffect`
                    <p>- Ex: chamadas à API, manipulação de DOM.</p>

                  </li>
                  <li>7. Use Context API ou bibliotecas (ex: Redux, Zustand) para estado global
                    <p>- Evite passar props demais entre muitos níveis (prop drilling).</p>

                  </li>
                  <li>8. Reutilize componentes sempre que possível
                    <p>- Exemplo: um botão, um modal, um campo de entrada.</p>

                  </li>
                  <li>9. Use ESLint + Prettier
                    <p>- Garante código limpo, consistente e com menos erros.</p>

                  </li>
                  <li>10. Escreva testes
                    <p>- Use ferramentas como `Jest` e `React Testing Library`.</p>

                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="Performance" role="tabpanel">
                <ul>
                  <li>Otimizar renderizações
                    <p>- Evite re-renderizações desnecessárias usando React.memo, useMemo e useCallback.</p>
                    <p>- Garanta que props não mudem sem necessidade (objetos/arrays criados dinamicamente podem disparar renders extras).</p>
                    <p>- Quebre componentes grandes em partes menores para isolar re-renderizações.</p>
                  </li>
                  <li>2. Lazy loading e code splitting
                    <p>- Importe páginas/componentes sob demanda com React.lazy e Suspense.</p>

                  </li>
                  <li>3. Imagens otimizadas
                    <p>- Sempre usar formatos modernos (WebP, AVIF) e tamanho adequado.</p>
                    <p>- Use lazy loading (loading="lazy") para imagens fora da tela.</p>
                    <p>- Em Next.js, prefira o componente IMAGE.</p>
                  </li>
                  <li>4.  Minificar e comprimir assets
                    <p>- Configure Gzip ou Brotli no servidor.</p>
                    <p>- Garanta que o build do React está em modo produção (NODE_ENV=production).</p>

                  </li>
                  <li>5. Evitar cálculos pesados no render
                    <p>- Mova cálculos para fora do JSX usando useMemo ou pré-processamento.</p>
                    <p>- Para listas grandes, use virtualização com react-window ou react-virtualized.</p>
                    <p>- const processedData = useMemo</p>

                  </li>
                  <li>6. TCache de dados
                    <p>- Evite requisições repetidas usando React Query, SWR ou cache manual.</p>
                    <p>- Prefira SSR/SSG em vez de fazer tudo no cliente (Next.js).</p>

                  </li>
                  <li>7. Uso eficiente do CSS
                    <p>- Prefira CSS Modules ou Tailwind para evitar CSS muito grande.</p>
                    <p>- Remova CSS não utilizado com PurgeCSS.</p>

                  </li>
                  <li>8. Prefetch e pré-carregamento
                    <p>- Use rel="preload" rel="prefetch" para recursos importantes.</p>
                    <p>- Em Next.js, links internos já fazem prefetch automático.</p>

                  </li>
                  <li>9. Lighthouse e DevTools
                    <p>- Use o Lighthouse para medir performance.</p>
                    <p>- Analise o React Profiler para encontrar gargalos.</p>

                  </li>
                  <li>10. Técnicas avançadas
                    <p>- Server Components (em Next.js 13+) para reduzir JavaScript no cliente.</p>
                    <p>- Hydration parcial para evitar carregar todo o app de uma vez.</p>
                    <p>- Suspense + streaming para entregar conteúdo mais rápido.</p>

                  </li>
                </ul>
                <hr />
                <div>
                  Checklist
                </div>
                <ul>
                  <li>
                    <li>Prioridade Alta (Impacto Imediato)</li>
                    <ul>
                      <li>Build em produção (NODE_ENV=production no build final)</li>
                      <li>Ativar minificação e compressão (Gzip/Brotli) no servidor</li>
                      <li>Usar React.memo, useMemo e useCallback para evitar re-renderizações</li>
                      <li>Quebrar componentes grandes em menores para isolar renderizações</li>
                      <li>Lazy loading de rotas/páginas e componentes não essenciais</li>
                      <li>Imagens no formato WebP/AVIF e tamanho ajustado</li>
                      <li>Imagens fora da tela com loading="lazy"</li>
                      <li>Listas grandes com virtualização (react-window ou react-virtualized)</li>
                    </ul>
                  </li>
                  <li>
                    Prioridade Média (Aprimoramento Contínuo)
                    <ul>
                      Cache de dados com React Query ou SWR
                      <li>Pré-carregamento de recursos importantes ( rel="preload")</li>
                      <li>Prefetch de rotas internas</li>
                      <li>CSS Modules ou Tailwind para reduzir CSS global</li>
                      <li>Remover CSS não utilizado com PurgeCSS</li>
                      <li>Separar bibliotecas pesadas em chunks usando code splitting (import() dinâmico)</li>
                    </ul>
                  </li>
                  <li>
                    Prioridade Avançada (Para Projetos Maiores)
                    <ul>
                      <li>Migrar para Server Components (se usando Next.js 13+)</li>
                      <li>Hydration parcial para páginas com muito conteúdo estático</li>
                      <li>Suspense + streaming para renderização gradual do conteúdo</li>
                      <li>Reduzir JavaScript enviado ao cliente (tree-shaking + análise de bundle)</li>
                      <li>Usar CDN para servir imagens e arquivos estáticos</li>
                    </ul>
                  </li>
                  <li>
                    Monitoramento
                    <ul>
                      <li>Rodar Lighthouse regularmente para medir performance</li>
                      <li>Usar React Profiler para encontrar gargalos de renderização</li>
                      <li>Monitorar métricas de Core Web Vitals (CLS, LCP, FID) no Google Search Console</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="tab-pane fade" id="TecnicasProjetos" role="tabpanel">
                <p>Se fosse para resumir as técnicas que mais diferenciam um frontend React de alta qualidade, eu dividiria em 4 pilares — arquitetura, performance, UX e manutenibilidade.</p>
                <ul>
                  <li> Arquitetura bem pensada
                    <p>Organização por feature (feature-based structure)<br />Evitar um “pasta components” gigante e genérica.</p>

                    <p>Componentização inteligente<br />Reaproveitar o máximo sem exagerar em fragmentar.</p>

                    <p>Hooks personalizados<br />Para encapsular lógica de negócio/reutilizável (useAuth, useFetch, etc.).</p>

                    <p>State management bem escolhido<br />Usar useState/useReducer para coisas simples, mas Redux/Zustand/Recoil para estados complexos.</p>
                  </li>
                  <li> Performance</li>
                  <p>React.memo, useMemo, useCallback para evitar renders desnecessários.</p>
                  <p>Code splitting + lazy loading para reduzir bundle inicial.</p>
                  <p>Virtualização de listas grandes (react-window).</p>
                  <p>Pré-renderização (SSR/SSG com Next.js) para entregar conteúdo rápido.</p>
                  <p>Uso de formatos leves (imagens WebP/AVIF, SVG para ícones).</p>
                  <li>  UX (Experiência do Usuário)</li>
                  <p>Feedback rápido: loaders, skeletons e transições suaves.</p>
                  <p>Design responsivo e adaptado para mobile-first.</p>
                  <p>Acessibilidade (a11y): labels, aria-attributes, contraste de cores.</p>
                  <p>Interações fluidas usando animações leves (Framer Motion, CSS transitions).</p>
                  <p>Formulários amigáveis: validação instantânea e mensagens claras.</p>
                  <li> Manutenibilidade e Qualidade</li>
                  <p>Tipagem forte (TypeScript) para evitar bugs em tempo de desenvolvimento.</p>
                  <p>Testes unitários (Jest, React Testing Library) e testes E2E (Cypress/Playwright).</p>
                  <p>Padronização de código com ESLint + Prettier.</p>
                  <p>Documentação clara (README, Storybook para UI).</p>
                  <p>Commits semânticos (Conventional Commits).</p>
                </ul>
              </div>
              <div className="tab-pane fade" id="Questoes" role="tabpanel">
                <p>questoes</p>
                <ul>
                  <li>Como você organiza suas tarefas em um ambiente ágil? <br />
                    Quais ferramentas você costuma utilizar para controle de versão e organização do trabalho?</li>
                  <p>usando ferramentas como Jira, Trello ou GitHub Projects.<br></br>Para controle de versão, utilizo Git com repositórios no GitHub,
                    seguindo boas práticas de branching e code review</p>
                  <li>Quais práticas você adota para garantir a qualidade do código?</li>
                  <p>Adoto escrita de código limpo e legível, padronização cpm ESLint, Prettier,
                    versionamento organizado, revisões de código, cobertura de testes automatizados
                    (unitários e integração) e monitoramento contínuo via CI/CD para garantir que o
                    código chegue estável em produção.</p>
                  <li>Como você lida com prazos curtos ou mudanças de escopo em projetos?</li>
                  <p>A prioridade é alinhar com o time e o gestor o impacto das alterações.<br />
                    Costumo dividir o trabalho em entregas menores, priorizar o que gera mais valor imediato e
                    comunicar claramente riscos ou limitações. Assim, conseguimos manter qualidade sem comprometer o prazo</p>
                  <li>Você prefere trabalhar de forma independente ou em equipe? Por quê?</li>
                  <p>Em equipe porque acredito que a troca de ideias e revisão de código elevam a qualidade do produto, mas também consigo atuar de forma independente quando necessário, mantendo disciplina e autonomia para entregar resultados</p>
                  <li>Como você se organiza ao trabalhar em múltiplos projetos ou demandas simultâneas?</li>
                  <p> Priorizo tarefas de maior impacto e prazo, uso ferramentas como Jira e Trello para acompanhar o progresso e mantenho comunicação constante com o time e gestores para ajustar prioridades quando necessário</p>
                </ul>
              </div>
              <div className="tab-pane fade" id="Outras" role="tabpanel">
                <h6>1. Perguntas sobre Fundamentos e Componentes</h6>
                <ul >
                  <li>Pergunta: Qual a diferença entre componentes controlados e não controlados? Quando você usaria cada um?</li>
                  <p>Resposta: Um componente controlado tem seu estado gerenciado pelo React, geralmente usando o useState. O valor do input é sempre sincronizado com o estado do componente. Já um componente não controlado armazena seu próprio estado internamente, e você acessa o valor usando uma ref. Eu usaria um componente controlado para formulários onde preciso validar a entrada em tempo real, enquanto um componente não controlado é útil para formulários simples, como um campo de busca, ou para interagir com elementos DOM diretamente, como um campo de upload de arquivo.</p>
                  <li>Pergunta: Explique o que são props e qual a sua principal característica.</li>
                  <p>Resposta: Props (abreviação de properties) são o principal mecanismo para passar dados de um componente pai para um componente filho. A principal característica é que são imutáveis (somente leitura). Um componente filho não pode alterar as props que recebeu. Isso garante um fluxo de dados unidirecional, tornando o estado da aplicação mais previsível.</p>
                  <li>Pergunta: O que é o Virtual DOM e como ele melhora a performance em uma aplicação React?</li>
                  <p>Resposta: O Virtual DOM é uma representação leve do DOM real que o React mantém na memória. Quando o estado de um componente muda, o React cria um novo Virtual DOM e o compara com o anterior. Esse processo, chamado de "diffing", identifica as diferenças. Em seguida, o React atualiza apenas as partes do DOM real que foram alteradas, em vez de redesenhar a página inteira. Isso é muito mais rápido do que manipular o DOM diretamente.</p>
                </ul>

                <h6>2. Perguntas sobre Hooks e Gerenciamento de Estado</h6>
                <ul>
                  <li>Pergunta: Qual a diferença entre useState e useEffect? Dê um exemplo de uso para cada um.</li>
                  <p>Resposta: useState é usado para adicionar estado a um componente funcional. Ele retorna um array com a variável de estado e uma função para atualizá-la.</p>
                  <p>useEffect é um hook para gerenciar efeitos colaterais em componentes funcionais. Ele executa uma função após a renderização do componente, sendo útil para buscar dados de uma API, assinar eventos ou interagir com o DOM.</p>
                  <li>Pergunta: Explique o que é o useContext e em que cenário ele é mais útil.</li>
                  <p>Resposta: O useContext permite que você acesse dados do contexto sem a necessidade de passar props manualmente através de cada nível da árvore de componentes ("prop drilling"). Ele é ideal para compartilhar dados globais na aplicação, como temas (claro/escuro), informações do usuário autenticado ou configurações de idioma.</p>
                  <li>Pergunta: Fale sobre o useCallback e o useMemo. Quando e por que você os usaria?</li>
                  <p>Resposta: useCallback e useMemo são hooks de otimização. O useCallback memoriza uma função, retornando a mesma referência da função enquanto suas dependências não mudam. Isso é útil para evitar re-renderizações desnecessárias de componentes filhos, especialmente aqueles otimizados com React.memo. Já o useMemo memoriza o resultado de uma computação cara, evitando que ela seja executada novamente a cada renderização. Eu os usaria quando um componente está re-renderizando com frequência e essas funções ou cálculos estão afetando a performance.</p>
                </ul>
                <h6>3. Perguntas sobre Arquitetura e Padrões</h6>
                <ul>
                  <li>Pergunta: O que é o padrão de renderização condicional em React? Dê um exemplo.</li>
                  <p>Resposta: Renderização condicional é a técnica de renderizar diferentes componentes ou elementos, dependendo de uma condição. Isso pode ser feito usando operadores como if/else, operador ternário (? :), ou o operador lógico &&</p>

                  <li>Pergunta: O que são "Higher-Order Components" (HOCs) e qual a alternativa moderna para eles?</li>
                  <p>Resposta: Um HOC é uma função que recebe um componente como argumento e retorna um novo componente com funcionalidade extra. Por exemplo, você pode criar um HOC para adicionar um loader de carregamento ou gerenciar o estado de um formulário. A alternativa moderna e mais comum são os Hooks, que oferecem uma maneira mais simples e limpa de reutilizar a lógica de estado em componentes funcionais.</p>

                  <li>Pergunta: Qual a diferença entre gerenciamento de estado local e global? Quando você usaria uma ferramenta como Redux ou Zustand?</li>
                  <p>Resposta: O estado local é o estado interno de um componente, gerenciado com useState. Ele é usado para dados que não precisam ser compartilhados com outros componentes. O estado global é compartilhado por múltiplos componentes. Eu usaria uma ferramenta de gerenciamento de estado global como Redux ou Zustand quando a aplicação começa a ter muitos componentes que precisam compartilhar o mesmo estado, como informações do usuário, dados do carrinho de compras ou tema da aplicação, evitando o "prop drilling" e centralizando a lógica de estado.</p>
                </ul>
                <h6>4. Fundamentos e Conceitos Core</h6>
                <ul>
                  <li>O que é JSX e por que o React o utiliza?</li>
                  <p>R: JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript que nos permite escrever uma estrutura semelhante a HTML diretamente no código. Não é HTML, mas uma "fachada" que, quando compilada (pelo Babel, por exemplo), se transforma em chamadas de função React.createElement(). O React o utiliza porque torna a criação da UI mais declarativa e visual, facilitando a compreensão da estrutura de um componente apenas lendo o código.</p>

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
                  <li>O que é "memoization" no contexto do React? Cite exemplos.</li>
                  <p>R: Memoization é uma técnica de otimização que consiste em armazenar o resultado de uma operação cara e retorná-lo de um cache quando os mesmos inputs ocorrem novamente. No React, isso evita re-renderizações e cálculos desnecessários</p>

                  <p>React.memo: É um Higher-Order Component (HOC) que "memoiza" um componente. Ele impede que o componente seja re-renderizado se suas props não mudarem.</p>

                  <p>useMemo: É um Hook que "memoiza" o resultado de um cálculo. Ele re-executa o cálculo apenas se uma de suas dependências mudar.</p>

                  <p>useCallback: É um Hook que "memoiza" a definição de uma função, garantindo que ela mantenha a mesma referência entre renderizações.</p>
                  <li>P: O que são "keys" em listas e por que são importantes?</li>
                  <p>R: Keys são atributos especiais que você precisa incluir ao criar listas de elementos. Elas ajudam o React a identificar quais itens foram alterados, adicionados ou removidos. Sem keys, o React teria que recriar toda a lista a cada mudança, o que é ineficiente. Com keys estáveis e únicas (como um ID do banco de dados), o React pode otimizar a renderização, atualizando apenas os elementos que realmente mudaram, melhorando significativamente a performance.</p>

                </ul>
                <h6>6. Arquitetura e Padrões</h6>
                <ul>
                  <li>O que é "Prop Drilling" e quais são as principais estratégias para evitá-lo?</li>
                  <p>R: "Prop Drilling" é o processo de passar dados de um componente de alto nível para um componente aninhado profundamente, através de vários componentes intermediários que não precisam desses dados. <br />
                    As principais estratégias para evitar isso são:</p>

                  <p> Context API: A solução nativa do React para compartilhar dados considerados "globais" para uma árvore de componentes, como tema, idioma ou informações de autenticação.
                    <br />
                    Gerenciamento de Estado Global: Usar bibliotecas como Redux ou Zustand para centralizar o estado da aplicação em uma "store" externa, permitindo que qualquer componente acesse os dados diretamente, sem a necessidade de props.
                    <br />
                    Composição de Componentes: Reestruturar os componentes para que o estado seja gerenciado o mais próximo possível de onde ele é necessário, passando componentes como props (usando props.children, por exemplo).</p>


                  <li>P: O que são Hooks Customizados (Custom Hooks) e qual a principal vantagem de usá-los?</li>
                  <p>R: Hooks Customizados são funções JavaScript que começam com o prefixo use e que podem chamar outros Hooks dentro delas. A principal vantagem é a reutilização de lógica com estado entre componentes. Em vez de duplicar a mesma lógica (como buscar dados de uma API, gerenciar a inscrição em um evento ou controlar um formulário) em vários componentes, você pode extraí-la para um Hook Customizado e simplesmente chamá-lo onde for necessário. Isso segue o princípio DRY (Don't Repeat Yourself) e torna o código mais limpo e fácil de manter.</p>

                </ul>

              </div>
              <div className="tab-pane fade" id="Inicio" role="tabpanel">
                <h6>Como Começaria um projeto</h6>
                <p>A Escolha Padrão para Iniciar: Componentes Funcionais e Hooks</p>
                <p>Para a grande maioria das aplicações, de projetos pessoais a startups, o padrão mais moderno e recomendado para começar é a combinação de Componentes Funcionais com Hooks.</p>

                <p>Este padrão se tornou o padrão ouro do ecossistema React por vários motivos:</p>

                <p>Simplicidade e Clareza: Componentes funcionais são simplesmente funções JavaScript. Eles são mais fáceis de ler, escrever e testar do que os antigos componentes de classe.</p>

                <p>Reutilização de Lógica: Hooks como useState e useEffect permitem que você adicione estado e efeitos colaterais aos seus componentes de forma limpa e modular. Além disso, você pode criar Hooks Customizados para reutilizar lógicas complexas em diferentes componentes, como a busca de dados de uma API.</p>

                <p>Gerenciamento de Estado Simples: Para dados que só precisam ser acessados por um único componente, useState é perfeito. Para dados que precisam ser compartilhados entre vários componentes, você pode usar a Context API para evitar o famoso "Prop Drilling" sem a necessidade de uma biblioteca externa.</p>

                <p>Quando e Por que Escolher Outro Padrão?</p>
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
    </>
  )
}
