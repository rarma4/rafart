"use client"

const Outras = () => {


  return (
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
  )
}

export default Outras