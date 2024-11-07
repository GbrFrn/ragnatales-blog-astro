# RagnaTales Blog

Um blog moderno e otimizado para SEO construído com Astro, apresentando modo escuro, categorias e criação de conteúdo amigável para IA.

## 🚀 Funcionalidades

- ✨ Design moderno com efeito glassmorphism
- 🌓 Modo claro/escuro
- 📱 Totalmente responsivo
- 🔍 Otimizado para SEO
- 🏷️ Suporte a categorias
- 🤖 Estrutura amigável para conteúdo gerado por IA
- 🖼️ Imagens de destaque
- 📝 Suporte a Markdown

## 🛠️ Começando

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção
npm run preview
```

## 📝 Criando Novas Postagens

1. Crie um novo arquivo `.md` em `src/content/blog/`
2. Use o seguinte modelo de frontmatter:

```markdown
---
title: "Título da Postagem"
description: "Uma breve descrição (150-160 caracteres)"
pubDate: "2024-04-20"
updatedDate: "2024-04-20"
heroImage: "/caminho/para/imagem.jpg"
categories: ["Categoria1", "Categoria2"]
author: "Seu Nome"
ogImage: "/caminho/para/og-image.jpg"  # Opcional
canonicalURL: "https://seu-site.com/post"  # Opcional
---

Seu conteúdo aqui...
```

## 🏷️ Categorias

As categorias são geradas automaticamente a partir do campo `categories` no frontmatter da postagem. Para adicionar uma nova categoria:

1. Adicione-a ao array `categories` da sua postagem
2. A página da categoria será gerada automaticamente em `/category/sua-categoria`

Categorias disponíveis:
- Noticias
- Novidades
- Eventos
- Dicas
- Promoções
- DevLogs

## 📋 Modelo de Post para Geração por IA

Um modelo estruturado para conteúdo gerado por IA está disponível em `templates/blog-post-template.md`. Este modelo inclui:

- Frontmatter estruturado
- Hierarquia clara de seções
- Espaços reservados para áreas de conteúdo principais
- Melhores práticas de SEO
- Instruções para geração de conteúdo por IA

## 🧪 Geração de Conteúdo de Teste

Para gerar conteúdo de teste para desenvolvimento:

```bash
node scripts/generate-test-posts.js
```

⚠️ Lembre-se de remover o conteúdo de teste antes de implantar em produção!

## 🎨 Personalização

### Adicionando Novas Categorias

Basta usar um novo nome de categoria no frontmatter da sua postagem. O sistema irá automaticamente:
- Criar uma nova página de categoria
- Adicioná-la à navegação de categorias
- Incluí-la nos metadados da postagem

### Modificando o Design

- Componentes de layout: `src/layouts/`
- Templates de página: `src/pages/`
- Estilização: Classes Tailwind CSS nos componentes

## 🔍 Recursos de SEO

- Meta tags para compartilhamento social
- Suporte a OpenGraph
- Suporte a Twitter card
- URLs canônicas
- Geração automática de sitemap
- Dados estruturados
- Imagens responsivas
- URLs amigáveis para SEO

## 📱 Design Responsivo

O blog é totalmente responsivo com:
- Abordagem mobile-first
- Layouts adaptativos
- Imagens responsivas
- Navegação touch-friendly
- Tipografia legível em todos os tamanhos

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie sua branch de feature
3. Faça commit das suas alterações
4. Faça push para a branch
5. Crie um novo Pull Request

## 📄 Licença

Licença MIT - sinta-se livre para usar em seus próprios projetos!