# Painel Colaborador J&F — Gabarito Aula 13

**Disciplina:** DAD 2026 — Desenvolvimento de Aplicações Dinâmicas  
**Aula:** 13 — DOM e Seleção de Elementos  
**Professor:** Rodolfo Gonçalves da Silva  
**Instituição:** Germinare TECH / Instituto J&F  

---

## Estrutura de Arquivos

```
painel-jf-gabarito/
│
├── 01_index.html     ← Estrutura HTML completa (página do projeto)
├── 02_style.css      ← Folha de estilos com comentários didáticos
├── 03_script.js      ← Exercício do ALUNO (com ??? para preencher)
├── 04_gabarito.js    ← Versão do PROFESSOR (tudo resolvido e comentado)
├── 05_conceitos.js   ← Material de apoio: teoria + demonstrações avançadas
└── README.md         ← Este arquivo
```

---

## Como Usar

### Para o exercício do aluno
1. No final de `01_index.html`, descomente `03_script.js` e comente `04_gabarito.js`
2. Distribua ao aluno: `01_index.html`, `02_style.css` e `03_script.js`
3. O aluno substitui cada `???` pelo seletor correto
4. Abre no navegador → F12 → Console → verifica os resultados

### Para a correção com o professor
1. No final de `01_index.html`, certifique-se que `04_gabarito.js` está ativo
2. Abra `01_index.html` no navegador → F12 → Console
3. Todos os 10 seletores são exibidos com explicações detalhadas

### Para consulta de teoria
- Abra `05_conceitos.js` no VS Code como material de referência
- As funções podem ser executadas no Console do DevTools após carregar o `index.html`

---

## Os 10 Seletores do Exercício

| # | Método | Seletor | Retorno esperado |
|---|--------|---------|-----------------|
| 01 | `getElementById` | `"catalogo"` | `<section id="catalogo">` |
| 02 | `querySelector` | `"h2"` | Primeiro `<h2>` da página |
| 03 | `querySelectorAll` | `".item"` | NodeList com 3 elementos |
| 04 | `querySelector` | `"[data-marca='seara']"` | `<li>` do Frango Seara |
| 05 | `querySelector` | `"[data-marca='vigor']"` | `<li>` do Iogurte Vigor |
| 06 | `querySelector` | `"li:first-child"` | Primeiro `<li>` |
| 07 | `querySelector` | `"li:last-child"` | Último `<li>` |
| 08 | `querySelector` | `"section button"` | `<button class="btn-primario">` |
| 09 | `querySelector` | `".item.destaque"` | `<li>` com ambas as classes |
| 10 | `.length` | `s03.length` | `3` |

---

## Conceitos Cobertos

- O que é o DOM e como o HTML vira uma árvore de objetos
- Diferença entre `getElementById`, `querySelector`, `querySelectorAll`
- Seletores CSS: tag, `#id`, `.classe`, `[atributo]`, pseudo-classes, combinadores
- `NodeList` (estática) vs `HTMLCollection` (ao vivo)
- Iteração: `.forEach`, `for...of`, `Array.from()`
- Atributos `data-*` e acesso via `.dataset`
- Regra fundamental: `<script>` sempre no final do `<body>`
