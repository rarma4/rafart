"use client"

const Hooks = () => {

  return (
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
  )
}

export default Hooks