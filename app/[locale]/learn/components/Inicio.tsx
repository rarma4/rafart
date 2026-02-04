"use client"

const Inicio = () => {


  return (
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
  )
}

export default Inicio