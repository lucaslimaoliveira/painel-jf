# painel-jf-gabarito — Aula 14

Gabarito do projeto incremental **painel-jf/** para a Aula 14 — Manipulação de Conteúdo no DOM.

## Estrutura de Arquivos

| Arquivo | Para quem | Descrição |
|---|---|---|
| `01_index.html` | Aluno + Professor | HTML com `data-*` attributes e comentários pedagógicos |
| `02_style.css` | Aluno + Professor | CSS com variáveis, `[data-ativo]` selectors |
| `03_script.js` | **Aluno** | Versão com `PREENCHA_AQUI` — 10 tarefas guiadas |
| `04_gabarito.js` | **Professor** | Versão resolvida com comentários de por que cada escolha |
| `05_conceitos.js` | **Professor** | Material de apoio teórico — não carregado no HTML |

## Como Usar

### Para o aluno
1. Copie `01_index.html`, `02_style.css` e `03_script.js` para o seu `painel-jf/`
2. Renomeie `03_script.js` para `script.js`
3. Abra `index.html` com Live Server
4. Preencha os `PREENCHA_AQUI` no `script.js`
5. Verifique: F12 → Console → zero erros vermelhos

### Para o professor
- Ative `04_gabarito.js` no `<script src>` do `01_index.html`
- Use `05_conceitos.js` como referência no VS Code
- O gabarito demonstra todos os conceitos com comentários detalhados

## As 10 Tarefas

| # | Conceito | Propriedade usada |
|---|---|---|
| 01 | Atualizar nome do colaborador | `textContent` |
| 02 | Atualizar saldo | `textContent` |
| 03 | Atualizar cargo | `textContent` |
| 04 | Ler CNPJ da empresa | `getAttribute` |
| 05 | Ler segmento via dataset | `dataset.segmento` |
| 06 | Atualizar status ativo/inativo | `dataset.ativo` |
| 07 | Listar todos os produtos | `querySelectorAll` + `forEach` + `textContent` |
| 08 | Ler empresa de cada produto | `dataset.empresa` |
| 09 | Inserir HTML estruturado | `innerHTML` (seguro — HTML do script) |
| 10 | Demonstrar defesa XSS | `textContent` vs `innerHTML` |

## Conceitos Cobertos

- **textContent** — texto puro, seguro, rápido, inclui `display:none`
- **innerText** — respeita CSS, mais lento (reflow)
- **innerHTML** — interpreta HTML; seguro apenas com dados internos
- **XSS** — Cross-Site Scripting: como ocorre e como `textContent` neutraliza
- **getAttribute / setAttribute** — leitura e escrita de qualquer atributo
- **dataset** — API HTML5 para `data-*` com conversão camelCase automática
