"use client"

const BoasPraticas = () => {


    return (
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
    )
}

export default BoasPraticas