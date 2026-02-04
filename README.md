# 🚀 RafArt - Portfólio Pessoal

<div align="center">
  
![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

Um portfólio moderno, responsivo e multilíngue construído com Next.js 16, apresentando animações suaves, efeitos de partículas e um design profissional.


</div>

---

## 📋 Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
  - [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Internacionalização](#internacionalização)
- [Scripts](#scripts)
- [Suporte PWA](#suporte-pwa)
- [Deploy](#deploy)
- [Licença](#licença)
- [Contato](#contato)

---

## 🎯 Sobre

RafArt é um site de portfólio pessoal moderno que apresenta habilidades profissionais, projetos e serviços. Construído com as mais recentes tecnologias web, oferece uma experiência de usuário perfeita com animações suaves, suporte multilíngue e um design responsivo que fica ótimo em todos os dispositivos.

---

## ✨ Funcionalidades

- 🌍 **Suporte Multilíngue** - Inglês e Português (facilmente extensível)
- 🎨 **UI/UX Moderno** - Design limpo e profissional com Tailwind CSS
- ✨ **Animações Suaves** - Integração com a biblioteca AOS (Animate On Scroll)
- 🎆 **Fundo de Partículas** - Efeitos de partículas interativos usando tsParticles
- 📱 **Totalmente Responsivo** - Abordagem mobile-first, funciona em todos os tamanhos de tela
- ⚡ **Performance Rápida** - Construído com Next.js 16 e otimizado para velocidade
- 🎭 **Efeito de Máquina de Escrever** - Animações de texto dinâmicas
- 📧 **Formulário de Contato** - Funcionalidade de e-mail integrada com Resend
- 🔄 **Navegação Suave** - Transições de página e efeitos de scroll perfeitos
- 📦 **PWA Pronto** - Suporte para Progressive Web App
- 🎯 **Otimizado para SEO** - Sitemap e robots.txt incluídos

### Seções Principais

- **Hero** - Seção de destaque com fundo de partículas
- **Serviços** - Apresentação de habilidades e serviços oferecidos
- **Currículo** - Experiência profissional e educação
- **Projetos** - Portfólio de trabalhos concluídos com detalhes
- **Habilidades** - Competências técnicas e proficiências
- **Contato** - Formulário de contato e links de redes sociais
- **Rodapé** - Informações adicionais e links rápidos

---

## 🛠️ Tecnologias

### Core

- **[Next.js 16.1.2](https://nextjs.org/)** - Framework React para produção
- **[React 19.2.3](https://react.dev/)** - Biblioteca de interface de usuário
- **[TypeScript 5](https://www.typescriptlang.org/)** - Segurança de tipos
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first

### Bibliotecas e Ferramentas

- **[next-intl](https://next-intl-docs.vercel.app/)** - Internacionalização
- **[AOS](https://michalsnik.github.io/aos/)** - Biblioteca de animação ao scroll
- **[tsParticles](https://particles.js.org/)** - Efeitos de partículas
- **[Resend](https://resend.com/)** - API de e-mail
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **[React Hot Toast](https://react-hot-toast.com/)** - Notificações toast
- **[Typewriter Effect](https://www.npmjs.com/package/typewriter-effect)** - Animações de digitação
- **[React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)** - Efeitos de inclinação 3D

### Ferramentas de Desenvolvimento

- **ESLint** - Análise de código
- **PostCSS** - Processamento de CSS
- **Babel React Compiler** - Otimização do React

---

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- **Node.js** (v18 ou superior)
- **npm** ou **yarn** ou **pnpm**

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/rarma4/rafart
cd rafart
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` no diretório raiz e adicione suas variáveis de ambiente:

```env
# Configuração de Email (API Resend)
RESEND_API_KEY=sua_chave_api_resend_aqui

# Adicione outras variáveis de ambiente conforme necessário
```

Você pode usar o arquivo `model.env` como referência.

### Executando o Projeto

**Modo de desenvolvimento:**

```bash
npm run dev
```

A aplicação abrirá automaticamente em [http://localhost:3000](http://localhost:3000)

**Build de produção:**

```bash
npm run build
npm run start
```

**Linting:**

```bash
npm run lint
```

---

## 📁 Estrutura do Projeto

```
portifolio/
├── app/
│   ├── [locale]/              # Rotas internacionalizadas
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── page.tsx           # Página inicial
│   │   └── constants/         # Constantes e configurações
│   ├── api/
│   │   └── contact/           # Rota de API do formulário de contato
│   └── components/
│       ├── Helper/            # Componentes utilitários
│       └── Home/              # Seções da página inicial
│           ├── Contact/
│           ├── Footer/
│           ├── Hero/
│           ├── NavBar/
│           ├── Projects/
│           ├── Resume/
│           ├── Services/
│           └── Skills/
├── i18n/                      # Configuração de internacionalização
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
├── messages/                  # Arquivos de tradução
│   ├── en.json               # Traduções em inglês
│   └── pt.json               # Traduções em português
├── public/
│   ├── assets/               # Arquivos estáticos
│   │   ├── images/           # Imagens
│   │   └── manifest.json     # Manifesto PWA
│   └── files/                # Arquivos para download (CV, etc.)
├── eslint.config.mjs         # Configuração do ESLint
├── next.config.ts            # Configuração do Next.js
├── postcss.config.mjs        # Configuração do PostCSS
├── tailwind.config.ts        # Configuração do Tailwind CSS
├── tsconfig.json             # Configuração do TypeScript
└── package.json              # Dependências do projeto
```

---

## 🌍 Internacionalização

O projeto suporta múltiplos idiomas usando `next-intl`. Idiomas atualmente suportados:

- 🇺🇸 Inglês (`en`)
- 🇧🇷 Português (`pt`)

### Adicionando um Novo Idioma

1. Crie um novo arquivo JSON no diretório `messages/` (ex: `es.json`)
2. Adicione traduções seguindo a estrutura dos arquivos existentes
3. Atualize a configuração de roteamento em `i18n/routing.ts`

### Estrutura de Idiomas

As chaves de tradução são organizadas por componente/seção:

```json
{
  "NavBar": { ... },
  "HeroPage": { ... },
  "ServicesPage": { ... },
  "WorksPage": { ... },
  "SkillsPage": { ... },
  "ContactPage": { ... }
}
```

---

## 📜 Scripts

| Script | Descrição |
|--------|-------------|
| `npm run dev` | Inicia o servidor de desenvolvimento e abre o navegador |
| `npm run build` | Cria o build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint |

---

## 📱 Suporte PWA

Este portfólio inclui suporte para Progressive Web App (PWA):

- **Arquivo de manifesto**: `public/assets/manifest.json`
- **Service Worker**: `public/pwabuilder-sw.js`
- **Suporte offline**: Estratégias básicas de cache
- **Adicionar à Tela Inicial**: Usuários podem instalar o app em seus dispositivos

---

## 🌐 Deploy

### Vercel (Recomendado)

A maneira mais fácil de fazer deploy desta aplicação Next.js é usando a [Vercel](https://vercel.com):

1. Envie seu código para o GitHub
2. Importe seu repositório na Vercel
3. Configure as variáveis de ambiente
4. Faça o deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Outras Plataformas

Este projeto também pode ser implantado em:
- **Netlify**
- **AWS Amplify**
- **Google Cloud Platform**
- **Docker**

---

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

---

## 📧 Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- **Email**: rarma4@gmail.com
- **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/rarma4/)
- **GitHub**: [GitHub](https://github.com/rarma4)
- **Portfólio**: [Portfólio](https://www.rafart.com.br/)

---

<div align="center">
  
### ⭐ Se você gostou deste projeto, considere dar uma estrela!

Rafael Marinho

</div>
