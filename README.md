# 🚀 Raf'Art - Site Institucional

[![Next.js](https://img.shields.io/badge/Next.js-13.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Sass](https://img.shields.io/badge/Sass-1.69.3-pink?style=for-the-badge&logo=sass)](https://sass-lang.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

> **Site institucional profissional para Rafael Marinho - Desenvolvedor Frontend Senior**

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração](#configuração)
- [Testes](#testes)
- [Build e Deploy](#build-e-deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## 🎯 Sobre o Projeto

O **Raf'Art** é um site institucional moderno e responsivo desenvolvido para apresentar o portfólio profissional de **Rafael Marinho**, desenvolvedor frontend senior. O projeto utiliza as mais recentes tecnologias web para criar uma experiência de usuário excepcional.

### ✨ Características Principais

- **Design Responsivo**: Adaptável a todos os dispositivos
- **Performance Otimizada**: Construído com Next.js 13 para máxima velocidade
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação
- **Acessibilidade**: Interface intuitiva e navegável
- **Componentes Reutilizáveis**: Arquitetura modular e escalável

## 🚀 Funcionalidades

- **Header**: Apresentação profissional com navegação intuitiva
- **Skills**: Exibição das habilidades técnicas
- **Conhecimentos**: Áreas de especialização e tecnologias dominadas
- **Sobre**: Informações pessoais e profissionais
- **Experiências**: Histórico profissional e projetos realizados
- **Footer**: Informações de contato e redes sociais

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **Next.js 13.5.4** - Framework React para produção
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Sass 1.69.3** - Pré-processador CSS avançado

### **UI/UX**
- **Bootstrap 5.3.2** - Framework CSS responsivo
- **Bootswatch Slate** - Tema personalizado
- **FontAwesome 6.4.2** - Ícones vetoriais
- **React Slick** - Carrossel de imagens

### **Desenvolvimento**
- **ESLint** - Linter para qualidade de código
- **Jest** - Framework de testes
- **Testing Library** - Utilitários para testes React

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.0.0 ou superior)
- **npm** (gerenciador de pacotes Node.js)
- **Git** (controle de versão)

### Verificação das Versões

```bash
node --version
npm --version
git --version
```

## 🚀 Instalação

Siga estes passos para configurar o projeto em sua máquina:

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/rafart.git
cd rafart
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SITE_URL=https://www.rafart.com.br
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=seu-id-aqui
```

### 4. Execute o Projeto

```bash
npm run dev
```

O site estará disponível em: **http://localhost:3000**

## 💻 Como Usar

### Desenvolvimento Local

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000 no seu navegador
```

### Build de Produção

```bash
# Cria build otimizado para produção
npm run build

# Inicia o servidor de produção
npm start
```

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Executa verificação de código |
| `npm test` | Executa testes automatizados |

## 📁 Estrutura do Projeto

```
rafart/
├── public/                 # Arquivos estáticos
│   ├── assets/            # CSS, JS e imagens
│   └── img/               # Imagens do projeto
├── src/
│   ├── app/               # App Router do Next.js 13
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── sections/      # Seções da página principal
│   │   ├── styles/        # Arquivos SCSS
│   │   └── utils/         # Utilitários
│   └── types/             # Definições de tipos TypeScript
├── jest.config.ts         # Configuração do Jest
├── next.config.js         # Configuração do Next.js
├── tsconfig.json          # Configuração do TypeScript
└── package.json           # Dependências e scripts
```

## ⚙️ Configuração

### Next.js
- **App Router**: Utiliza a nova arquitetura do Next.js 13
- **TypeScript**: Configurado com strict mode
- **Sass**: Suporte completo para pré-processamento CSS

### Jest (Testes)
- **Environment**: jsdom para testes de componentes React
- **Coverage**: Relatórios de cobertura de código
- **Setup**: Configuração automática para React Testing Library

### ESLint
- **Configuração**: Baseada no padrão Next.js
- **Regras**: Foco em qualidade e consistência de código

## 🧪 Testes

### Executar Todos os Testes

```bash
npm test
```

### Executar Testes em Modo Watch

```bash
npm test -- --watch
```

### Executar Testes com Coverage

```bash
npm test -- --coverage
```

### Estrutura de Testes

- **Componentes**: Testes unitários para cada componente
- **Integração**: Testes de interação entre componentes
- **Acessibilidade**: Verificação de padrões WCAG

## 🚀 Build e Deploy

### Build de Produção

```bash
npm run build
```

### Deploy na Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Deploy Manual

```bash
npm run build
npm start
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Padrões de Código

- Siga as convenções do ESLint configurado
- Use TypeScript para todas as funcionalidades
- Mantenha a cobertura de testes acima de 80%
- Documente funções complexas

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Rafael Marinho** - Desenvolvedor Frontend Pleno

- **Website**: [https://www.rafart.com.br](https://www.rafart.com.br)
- **Email**: [contato@rafart.com.br](mailto:contato@rafart.com.br)
- **LinkedIn**: [Rafael Marinho](https://linkedin.com/in/rafael-marinho)
- **GitHub**: [@rafael-marinho](https://github.com/rafael-marinho)

---

## 🙏 Agradecimentos

- **Next.js Team** pelo framework incrível
- **React Team** pela biblioteca de UI
- **Bootstrap Team** pelo framework CSS
- **Comunidade Open Source** por todas as contribuições

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela! ⭐**

</div>
