# Castillo Reparação Automotiva — Site Institucional

Site institucional premium para a Castillo Reparação Automotiva, construído em React + TypeScript + Tailwind CSS v4, seguindo o master prompt de agência premium (design system, arquitetura de componentes, performance e SEO local).

## Stack
- React 19 + Vite + TypeScript
- Tailwind CSS v4 (tokens de design em `src/index.css`)
- React Router v7 (rotas com lazy loading)
- Framer Motion (microinterações)
- lucide-react (ícones)
- react-helmet-async (SEO por página)

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (gera pasta dist/)
npm run preview   # pré-visualiza o build de produção
```

## Estrutura

```
src/
  components/   # componentes reutilizáveis (Navbar, Footer, Hero, ServiceCard, BeforeAfterSlider, Faq, etc.)
  features/home/  # seções específicas da Home (Serviços, Antes e Depois, Contato)
  pages/        # páginas de rota (Home, Sobre, Serviços, Detalhe, Galeria, Contato, Política, 404)
  layouts/      # layout compartilhado (Navbar + conteúdo + Footer + botão WhatsApp)
  routes/       # definição de rotas (react-router)
  constants/    # dados da empresa, serviços, FAQ, diferenciais, mapa de ícones
  hooks/        # useWhatsApp, useScrollReveal
  utils/        # cn (classnames), scrollToSection
  types/        # tipos compartilhados (Service, Testimonial, FaqItem, BeforeAfterItem)
```

## Pendências conhecidas (para o cliente / equipe)

- **Fotos reais**: o comparador de Antes/Depois e a galeria estão com placeholders elegantes ("em breve"). Basta passar `beforeSrc` e `afterSrc` para `<BeforeAfterSlider />` assim que houver fotos reais.
- **Depoimentos**: os 3 cards de depoimentos são placeholder. Substituir por avaliações reais (ex: Google Meu Negócio) em `src/constants/content.ts` (`TESTIMONIALS`).
- **Marcas atendidas**: lista genérica de montadoras em `src/constants/content.ts` (`BRANDS`) — ajustar conforme preferência da Castillo.
- **Deploy**: projeto pronto para deploy na Vercel (basta importar o repositório ou rodar `vercel` na raiz).
