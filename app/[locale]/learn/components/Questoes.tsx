"use client"

const Questoes = () => {


  return (
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">questoes</p>
      <ol className="space-y-4 list-decimal list-inside text-zinc-700 dark:text-zinc-300">
        <li className="font-semibold">Como você organiza suas tarefas em um ambiente ágil? <br />
          Quais ferramentas você costuma utilizar para controle de versão e organização do trabalho?
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
            <li>usando ferramentas como Jira, Trello ou GitHub Projects.<br />Para controle de versão, utilizo Git com repositórios no GitHub,seguindo boas práticas de branching e code review</li>
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
  )
}

export default Questoes