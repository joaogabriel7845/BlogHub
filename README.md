# BlogHub 📝

Um blog simples construído com React para consolidar os principais conceitos do ecossistema front-end moderno.

## 🚀 Sobre o projeto

O BlogHub é um projeto de aprendizado desenvolvido do zero com Vite e Tailwind CSS. O objetivo foi praticar os fundamentos do React de forma aplicada, construindo uma interface real com funcionalidades reais.

## ✨ Funcionalidades

- **Lista de posts** com título, imagem e descrição
- **Tema claro/escuro** com alternância via botão
- **Filtro por categoria** com feedback visual do filtro ativo
- **Carregamento simulado** com spinner de loading
- **Layout responsivo** com grid adaptável a qualquer tamanho de tela

## 🧠 Conceitos praticados

### React
- `useState` — gerenciamento de estado local (posts, tema, categoria ativa, loading)
- `useEffect` — simulação de carregamento assíncrono de dados
- `useContext` — estado global compartilhado entre componentes sem prop drilling
- `.map()` — renderização dinâmica de listas de componentes
- `.filter()` — filtragem de posts por categoria
- Props — comunicação entre componentes pai e filho
- Desestruturação de props e estados

### Arquitetura
- Separação de responsabilidades entre componentes
- Context API para compartilhar tema entre toda a aplicação
- Componentes reutilizáveis (`PostCard`, `FiltroCategoria`, `Header`)

### Estilização
- Tailwind CSS com classes utilitárias
- Grid responsivo com `auto-fill` e `minmax`
- Tema dinâmico via objeto de classes no contexto
- Transições e hover states

## 🗂️ Estrutura de pastas

```
src/
  components/
    Header.jsx
    PostCard.jsx
    FiltroCategoria.jsx
  context/
    ThemeContext.jsx
  App.jsx
  main.jsx
```

## 🛠️ Tecnologias

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React](https://lucide.dev) — ícones
- [React Spinners](https://www.davidhu.io/react-spinners) — loading
- [Picsum Photos](https://picsum.photos) — imagens placeholder

## ▶️ Como rodar

```bash
npm install
npm run dev
```
