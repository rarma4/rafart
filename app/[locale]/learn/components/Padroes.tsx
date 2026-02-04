"use client"

const Padroes = () => {


  return (
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
  )
}

export default Padroes