'use strict';
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  DAD 2026  —  AULA 15  —  Exercício Principal                          ║
// ║  Criação, Inserção e Remoção de Elementos no DOM                        ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  Instituto J&F — Escola de Tecnologia                                  ║
// ║  Prof. Rodolfo Gonçalves da Silva  |  © 2026                           ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  INSTRUÇÕES:                                                            ║
// ║  1. Substitua CADA marcador PREENCHA_AQUI pelo código correto.          ║
// ║  2. Não altere nenhuma outra linha do arquivo.                          ║
// ║  3. Teste: abra index.html no navegador e abra o DevTools (F12).       ║
// ║  4. Commit: feat: aula15-catalogo-dinamico-jf                           ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// ── DADOS DO CATÁLOGO ─────────────────────────────────────────────────────
const produtos = [
  { id: 'p001', nome: 'Frango Inteiro Seara',     preco: 18.90, categoria: 'carnes'     },
  { id: 'p002', nome: 'Linguiça Toscana Seara',   preco: 12.50, categoria: 'embutidos'  },
  { id: 'p003', nome: 'Hambúrguer JBS 400g',      preco: 15.90, categoria: 'carnes'     },
  { id: 'p004', nome: 'Frango Assado Seara',      preco: 22.00, categoria: 'carnes'     },
  { id: 'p005', nome: 'Presunto Seara Fatiado',   preco:  9.80, categoria: 'embutidos'  },
  { id: 'p006', nome: 'Almôndega JBS Temperada',  preco: 11.40, categoria: 'processados'},
];


// ══════════════════════════════════════════════════════════════════════════
//  EXERCÍCIO 1 — criarCard(produto)
//  Objetivo: criar um elemento <article> configurado para representar
//  um produto. A função NÃO insere no DOM — apenas retorna o elemento.
// ══════════════════════════════════════════════════════════════════════════
function criarCard(produto) {
  // 1a. Crie um elemento <article> e armazene em 'card'
  const card = document.createElement('article'); // resposta_correta: document.createElement('article')

  // 1b. Adicione a classe CSS 'card-produto' ao card
  card.className = 'card-produto'; // resposta_correta: 'card-produto'

  // 1c. Defina o atributo data-id com o id do produto
  card.setAttribute("data-id", produto.id); // resposta_correta: 'data-id'

  // 1d. Defina o atributo data-categoria com a categoria do produto
  card.setAttribute('data-categoria', produto.categoria); // resposta_correta: produto.categoria

  // 1e. Crie um <h3> com a classe 'card-titulo' e textContent = nome do produto
  const titulo = document.createElement('h3');
  titulo.className = 'card-titulo';
  titulo.textContent = produto.nome; // resposta_correta: produto.nome

  // 1f. Crie um <span> com a classe 'card-preco'
  //     textContent deve ser "R$ XX.XX" (use toFixed(2))
  const preco = document.createElement('span'); // resposta_correta: 'span'
  preco.className = 'card-preco';
  preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  // 1g. Crie um <button> com type="button" e textContent "Ver detalhes"
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.textContent = 'Ver detalhes'; // resposta_correta: 'Ver detalhes'
  btn.className = 'btn-detalhes';

  // 1h. Adicione titulo, preco e btn ao card com UM único append()
  card.append(titulo, preco, btn); // resposta_correta: titulo, preco, btn

  // 1i. Retorne o card (NÃO inserir aqui — responsabilidade de renderProdutos)
  return card;
}


// ══════════════════════════════════════════════════════════════════════════
//  EXERCÍCIO 2 — renderProdutos(lista, container)
//  Objetivo: iterar a lista de produtos, criar um card para cada um
//  e inserir todos no container usando DocumentFragment (1 único reflow).
// ══════════════════════════════════════════════════════════════════════════
function renderProdutos(lista, container) {
  // 2a. Limpar o container antes de renderizar (evita duplicação)
  container.innerHTML = ''; // resposta_correta: ''

  // 2b. Criar um DocumentFragment
  const frag = document.createDocumentFragment(); // resposta_correta: document.createDocumentFragment()

  // 2c. Para cada produto, criar o card e adicioná-lo ao fragment
  lista.forEach(function(produto) {
    const card = criarCard(produto);
    frag.append(card); // resposta_correta: frag
  });

  // 2d. Inserir o fragment no container (1 único reflow)
  container.append(frag); // resposta_correta: frag
}


// ══════════════════════════════════════════════════════════════════════════
//  EXERCÍCIO 3 — adicionarProduto(produto, container)
//  Objetivo: adicionar um produto NO INÍCIO do catálogo (destaque).
// ══════════════════════════════════════════════════════════════════════════
function adicionarProduto(produto, container) {
  if (!produto || !produto.id || !produto.nome) return;

  const card = criarCard(produto);

  // 3a. Inserir o card no INÍCIO do container (use prepend)
  container.prepend(card); // resposta_correta: prepend
}


// ══════════════════════════════════════════════════════════════════════════
//  EXERCÍCIO 4 — removerProduto(idProduto, container)
//  Objetivo: localizar o card pelo data-id e removê-lo do DOM.
// ══════════════════════════════════════════════════════════════════════════
function removerProduto(idProduto, container) {
  // 4a. Selecione o card usando querySelector com o data-id
  //     Dica: '[data-id="p001"]' é o seletor de atributo
  const card = container.querySelector(`[data-id="${idProduto}"]`); // dica: seletor de atributo — '[data-___="valor"]' onde ___ é o atributo data-*

  if (!card) {
    console.warn(`Produto ${idProduto} não encontrado no catálogo.`);
    return;
  }

  // 4b. Remova o card do DOM (use o método moderno)
  card.remove(); // dica: método moderno que remove o elemento a si mesmo — sem precisar do pai
}


// ══════════════════════════════════════════════════════════════════════════
//  EXERCÍCIO 5 — clonarDestaque(idProduto, containerDestaque)
//  Objetivo: clonar um card existente e inserir numa área de destaque.
//  CUIDADO: após clonar, altere o id para não ter IDs duplicados.
// ══════════════════════════════════════════════════════════════════════════
function clonarDestaque(idProduto, containerDestaque) {
  const original = document.querySelector(`[data-id="${idProduto}"]`);
  if (!original) return;

  // 5a. Clonar com todos os filhos (deep = true)
  const clone = original.cloneNode(true); // dica: método de Node que cria uma ___ profunda (true = com todos os filhos)

  // 5b. Alterar o data-id do clone para evitar ID duplicado
  clone.setAttribute('data-id', idProduto + "-destaque"); // dica: concatene idProduto com uma string que indique que é um destaque

  // 5c. Inserir o clone no containerDestaque
  containerDestaque.append(clone); // dica: qual variável contém o elemento que acabou de ser copiado?
}


// ══════════════════════════════════════════════════════════════════════════
//  PONTO DE ENTRADA — executado quando a página carrega
// ══════════════════════════════════════════════════════════════════════════
const catalogo   = document.querySelector('#catalogo');
const destaques  = document.querySelector('#destaques');

// Renderizar o catálogo completo
renderProdutos(produtos, catalogo);

// Testes no console (abra o DevTools para verificar):
// adicionarProduto({ id: 'p099', nome: 'Produto Novo Seara', preco: 7.50, categoria: 'carnes' }, catalogo);
// removerProduto('p003', catalogo);
// clonarDestaque('p001', destaques);




// ══════════════════════════════════════════════════════════════════════════
//  BÔNUS — filtrarPorCategoria (Bloom L6: Criar)
//  Objetivo: criar uma função NOVA combinando filter() + renderProdutos().
//  Nível: avançado — sem PREENCHA_AQUI, sem dica. Problema aberto.
//  Forma: individual ou dupla. Não conta para nota.
// ══════════════════════════════════════════════════════════════════════════
//
//  ENUNCIADO:
//  Crie uma função filtrarPorCategoria(categoria, lista, container) que:
//    1. Filtre o array 'lista' mantendo apenas os produtos com a categoria
//       correspondente ao parâmetro 'categoria' (string).
//    2. Se a categoria for 'todos', exiba todos os produtos sem filtrar.
//    3. Chame renderProdutos() com a lista filtrada para atualizar o container.
//
//  Teste esperado no console:
//    filtrarPorCategoria('carnes',     produtos, catalogo) → 3 cards
//    filtrarPorCategoria('embutidos',  produtos, catalogo) → 2 cards
//    filtrarPorCategoria('todos',      produtos, catalogo) → 6 cards
//
//  Dica de estrutura (não é código pronto):
//    function filtrarPorCategoria(categoria, lista, container) {
//      // 1. filtrar ou usar lista completa
//      // 2. chamar renderProdutos com o resultado
//    }
//
// ══════════════════════════════════════════════════════════════════════════
//  ESPAÇO PARA SUA SOLUÇÃO:

function filtrarPorCategoria(categoria, lista, container) {
  const listaFiltrada = lista.filter( n => n.categoria == categoria || categoria == 'todos')
  renderProdutos(listaFiltrada, container)
}

// Descomente e teste no console após implementar:
filtrarPorCategoria('carnes', produtos, catalogo);

// ══════════════════════════════════════════════════════════════════════════
//  VERIFICAÇÃO FINAL — cole no console do DevTools (F12) após implementar
//  Se tudo estiver correto, você verá ✓ em todos os itens.
// ══════════════════════════════════════════════════════════════════════════
/*
  Cole o bloco abaixo no console do DevTools para verificar:

  (function verificarAula15() {
    const resultados = [];
    const c = document.querySelector('#catalogo');
    const d = document.querySelector('#destaques');

    // Ex1 — criarCard gera article com data-id
    const cards = c ? c.querySelectorAll('[data-id]') : [];
    resultados.push(cards.length >= 5
      ? '✓ Ex1/Ex2: ' + cards.length + ' cards renderizados com data-id'
      : '✗ Ex1/Ex2: cards ausentes ou sem data-id (' + cards.length + ')');

    // Ex3 — adicionarProduto insere no início
    adicionarProduto({ id: 'verif-001', nome: 'Verificação', preco: 0, categoria: 'teste' }, c);
    const primeiro = c ? c.firstElementChild : null;
    resultados.push(primeiro && primeiro.getAttribute('data-id') === 'verif-001'
      ? '✓ Ex3: adicionarProduto com prepend funciona'
      : '✗ Ex3: novo produto não aparece no início');

    // Ex4 — removerProduto remove pelo data-id
    removerProduto('verif-001', c);
    const removido = c ? c.querySelector('[data-id="verif-001"]') : 'não-removido';
    resultados.push(removido === null
      ? '✓ Ex4: removerProduto funciona'
      : '✗ Ex4: produto não foi removido');

    // Ex5 — clonarDestaque insere clone em #destaques
    clonarDestaque('p001', d);
    const clone = d ? d.querySelector('[data-id="p001-destaque"]') : null;
    resultados.push(clone
      ? '✓ Ex5: clonarDestaque cria clone com data-id correto'
      : '✗ Ex5: clone não encontrado ou data-id incorreto');

    console.log('%c=== VERIFICAÇÃO AULA 15 ===', 'font-weight:bold; color:#0891B2');
    resultados.forEach(r => console.log(r));
    const ok = resultados.filter(r => r.startsWith('✓')).length;
    console.log('%c' + ok + '/4 exercícios completos', 'font-weight:bold; color:' + (ok === 4 ? '#16A34A' : '#D97706'));
  })();
*/

(function verificarAula15() {
  const resultados = [];
  const c = document.querySelector('#catalogo');
  const d = document.querySelector('#destaques');

  // Ex1 — criarCard gera article com data-id
  const cards = c ? c.querySelectorAll('[data-id]') : [];
  resultados.push(cards.length >= 5
    ? '✓ Ex1/Ex2: ' + cards.length + ' cards renderizados com data-id'
    : '✗ Ex1/Ex2: cards ausentes ou sem data-id (' + cards.length + ')');

  // Ex3 — adicionarProduto insere no início
  adicionarProduto({ id: 'verif-001', nome: 'Verificação', preco: 0, categoria: 'teste' }, c);
  const primeiro = c ? c.firstElementChild : null;
  resultados.push(primeiro && primeiro.getAttribute('data-id') === 'verif-001'
    ? '✓ Ex3: adicionarProduto com prepend funciona'
    : '✗ Ex3: novo produto não aparece no início');

  // Ex4 — removerProduto remove pelo data-id
  removerProduto('verif-001', c);
  const removido = c ? c.querySelector('[data-id="verif-001"]') : 'não-removido';
  resultados.push(removido === null
    ? '✓ Ex4: removerProduto funciona'
    : '✗ Ex4: produto não foi removido');

  // Ex5 — clonarDestaque insere clone em #destaques
  clonarDestaque('p001', d);
  const clone = d ? d.querySelector('[data-id="p001-destaque"]') : null;
  resultados.push(clone
    ? '✓ Ex5: clonarDestaque cria clone com data-id correto'
    : '✗ Ex5: clone não encontrado ou data-id incorreto');

  console.log('%c=== VERIFICAÇÃO AULA 15 ===', 'font-weight:bold; color:#0891B2');
  resultados.forEach(r => console.log(r));
  const ok = resultados.filter(r => r.startsWith('✓')).length;
  console.log('%c' + ok + '/4 exercícios completos', 'font-weight:bold; color:' + (ok === 4 ? '#16A34A' : '#D97706'));
})();
