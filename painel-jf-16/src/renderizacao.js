'use strict';
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  DAD 2026  —  Aula 16  —  Manipulação de Classes e Estilos             ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  Instituto J&F — Escola de Tecnologia  |  © 2026                       ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  INSTRUÇÕES:                                                            ║
// ║  1. Substitua cada PREENCHA_AQUI pelo código correto.                  ║
// ║  2. Leia a dica ao lado de cada lacuna.                                ║
// ║  3. Abra index.html com Live Server para ver o resultado.              ║
// ║  4. Use o DevTools (F12 → Elements) para ver as classes mudando.       ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// ═══════════════════════════════════════════════════════════════════════════
// DADOS — catálogo de produtos Seara/JBS (mesmo da Aula 15)
// ═══════════════════════════════════════════════════════════════════════════
const produtos = [
  { id: 'p001', nome: 'Frango Inteiro Seara',    preco: 18.90, empresa: 'seara',  status: 'disponivel' },
  { id: 'p002', nome: 'Linguiça Toscana Seara',  preco: 12.50, empresa: 'seara',  status: 'disponivel' },
  { id: 'p003', nome: 'Hambúrguer JBS 400g',     preco: 15.90, empresa: 'jbs',    status: 'disponivel' },
  { id: 'p004', nome: 'Costela JBS Congelada',   preco: 32.50, empresa: 'jbs',    status: 'disponivel' },
  { id: 'p005', nome: 'Iogurte Vigor Natural',   preco:  6.90, empresa: 'vigor',  status: 'disponivel' },
  { id: 'p006', nome: 'Queijo Minas Vigor 500g', preco: 14.50, empresa: 'vigor',  status: 'disponivel' },
  { id: 'p007', nome: 'Sabonete Flora Rosas',    preco:  3.50, empresa: 'flora',  status: 'disponivel' },
  { id: 'p008', nome: 'Shampoo Flora Hidrat.',   preco: 12.90, empresa: 'flora',  status: 'disponivel' },
];

// ═══════════════════════════════════════════════════════════════════════════
// TAREFA 1 — criarCard (revisão Aula 15 + data-empresa)
// ═══════════════════════════════════════════════════════════════════════════
function criarCard(produto) {
  const card = document.createElement('article');
  card.className = 'card-produto';
  card.setAttribute('data-id',      produto.id);
  card.setAttribute('data-empresa', produto.empresa); // dica: produto.empresa

  const titulo = document.createElement('h3');
  titulo.className   = 'card-titulo';
  titulo.textContent = produto.nome;

  const empresa = document.createElement('span');
  empresa.className   = 'card-empresa';
  empresa.textContent = produto.empresa.toUpperCase();

  const preco = document.createElement('span');
  preco.className   = 'card-preco';
  preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.className   = 'btn-favorito';
  btn.textContent = '♡ Favoritar';

  card.append(titulo, empresa, preco, btn);
  return card;
}

// ═══════════════════════════════════════════════════════════════════════════
// TAREFA 2 — renderCatalogo com DocumentFragment
// ═══════════════════════════════════════════════════════════════════════════
function renderCatalogo(lista, container) {
  container.innerHTML = '';
  const frag = document.createDocumentFragment();
  lista.forEach(p => frag.append(criarCard(p)));
  container.append(frag); // dica: método que insere o fragment no container

  const status = document.querySelector('#status-catalogo');
  if (status) status.textContent = `${lista.length} produto(s) — Painel J&F`;
}

// ═══════════════════════════════════════════════════════════════════════════
// TAREFA 3 — filtrarPorEmpresa com classList.toggle
//
// Esta é a função principal da Aula 16.
// Lógica:
//   - Se empresa === 'todos': remover a classe 'oculto' de TODOS os cards
//   - Caso contrário: para cada card no container:
//       • se data-empresa === empresa → remover 'oculto' (mostrar)
//       • se data-empresa !== empresa → adicionar 'oculto' (esconder)
// ═══════════════════════════════════════════════════════════════════════════
function filtrarPorEmpresa(empresa, container) {
  const todos = container.querySelectorAll('.card-produto');

  todos.forEach(card => {
    if (empresa === 'todos') {
      card.classList.remove('oculto'); // dica: remove
    } else {
      const empresaDoCard = card.getAttribute('data-empresa'); // dica: 'data-empresa'
      if (empresaDoCard === empresa) {
        card.classList.remove('oculto'); // dica: remover a classe que esconde
      } else {
        card.classList.add('oculto'); // dica: adicionar a classe que esconde
      }
    }
  });

  // Atualizar o botão ativo
  document.querySelectorAll('.btn-filtro').forEach(btn => {
    btn.classList.remove('ativo'); // dica: remover 'ativo' de todos
  });
  const btnAtivo = document.querySelector(`[data-filtro="${empresa}"]`);
  if (btnAtivo) btnAtivo.classList.add('ativo'); // dica: adicionar 'ativo' ao clicado
}

// ═══════════════════════════════════════════════════════════════════════════
// TAREFA 4 — toggleFavorito
//
// Ao clicar em um botão de favoritar:
//   - Alternar a classe 'favorito' no card pai
//   - Alterar o textContent do botão: '♡ Favoritar' ↔ '♥ Favoritado'
//   - Dica: classList.toggle retorna true se adicionou, false se removeu
// ═══════════════════════════════════════════════════════════════════════════
function toggleFavorito(btn) {
  const card = btn.closest('.card-produto');
  const foiFavoritado = card.classList.toggle('favorito'); // dica: toggle retorna boolean
  btn.textContent = foiFavoritado ? '♥ Favoritado' : '♡ Favoritar' // dica: ternário — se foiFavoritado: '♥ Favoritado' senão '♡ Favoritar'
}

// ═══════════════════════════════════════════════════════════════════════════
// TAREFA 5 — marcarStatus
//
// Altera visualmente o status de um card:
//   - Remover quaisquer classes de status existentes ('disponivel', 'indisponivel', 'promocao')
//   - Adicionar a nova classe de status
// ═══════════════════════════════════════════════════════════════════════════
function marcarStatus(idProduto, novoStatus, container) {
  const card = container.querySelector(`[data-id="${idProduto}"]`);
  if (!card) return;

  // Remover classes de status anteriores
  ['disponivel', 'indisponivel', 'promocao'].forEach(cls => {
    card.classList.remove(cls); // dica: remover cada classe de status
  });

  // Adicionar o novo status
  card.classList.add(novoStatus); // dica: adicionar a nova classe
}

// ═══════════════════════════════════════════════════════════════════════════
// TAREFA 6 — verificarFavoritos (sem dica — Bloom L5/L6)
//
// Retorna um array com os ids dos cards que têm a classe 'favorito'.
// Dica: querySelectorAll + spread/Array.from + map
// ═══════════════════════════════════════════════════════════════════════════
function verificarFavoritos(container) {
  return [...container.querySelectorAll('.card-produto.favorito')]
  .map(card => card.getAttribute('data-id'));
}

// ═══════════════════════════════════════════════════════════════════════════
// PONTO DE ENTRADA
// ═══════════════════════════════════════════════════════════════════════════
const catalogo = document.querySelector('#catalogo');
renderCatalogo(produtos, catalogo);

// Event listeners dos botões de filtro
document.querySelectorAll('.btn-filtro').forEach(btn => {
  btn.addEventListener('click', () => {
    const empresa = btn.getAttribute('data-filtro');
    filtrarPorEmpresa(empresa, catalogo);
  });
});

// Event listener dos botões de favoritar (delegação)
catalogo.addEventListener('click', e => {
  if (e.target.classList.contains('btn-favorito')) {
    toggleFavorito(e.target);
  }
});

// // Expor funções para testes no Console
// window.filtrarPorEmpresa = (emp) => filtrarPorEmpresa(emp, catalogo);
// window.marcarStatus      = (id, st) => marcarStatus(id, st, catalogo);
// window.verificarFavoritos = () => verificarFavoritos(catalogo);

document.querySelectorAll('btn-filtro').forEach((btn) => {
  btn.addEventListener('click', () => {
    const empresa = btn.dataset.filtro
    filtrarPorEmpresa(empresa, catalogo)
  })
})

// ═══════════════════════════════════════════════════════════════════════════
// VERIFICAÇÃO FINAL — cole no Console (F12) após implementar:
/*
(function verificarAula16() {
  const erros = [];
  const cards = document.querySelectorAll('.card-produto');
  if (cards.length === 0) { erros.push('✗ Nenhum card renderizado'); }
  else console.log(`✓ ${cards.length} cards no catálogo`);

  filtrarPorEmpresa('jbs', document.querySelector('#catalogo'));
  const visiveis  = [...cards].filter(c => !c.classList.contains('oculto'));
  const jbsCards  = [...cards].filter(c => c.getAttribute('data-empresa') === 'jbs');
  if (visiveis.length !== jbsCards.length) erros.push('✗ filtrarPorEmpresa("jbs") não está correto');
  else console.log('✓ filtrarPorEmpresa() funcionando');

  filtrarPorEmpresa('todos', document.querySelector('#catalogo'));
  const todosVisiveis = [...cards].filter(c => !c.classList.contains('oculto'));
  if (todosVisiveis.length !== cards.length) erros.push('✗ filtrar "todos" não restaura todos os cards');
  else console.log('✓ filtrar "todos" funcionando');

  const btnFav = document.querySelector('.btn-favorito');
  if (btnFav) { toggleFavorito(btnFav); }
  const cardFav = btnFav ? btnFav.closest('.card-produto') : null;
  if (cardFav && !cardFav.classList.contains('favorito'))
    erros.push('✗ toggleFavorito não adicionou classe "favorito"');
  else if (cardFav) console.log('✓ toggleFavorito() funcionando');

  marcarStatus('p001', 'promocao', document.querySelector('#catalogo'));
  const p001 = document.querySelector('[data-id="p001"]');
  if (p001 && !p001.classList.contains('promocao'))
    erros.push('✗ marcarStatus não adicionou classe "promocao"');
  else if (p001) console.log('✓ marcarStatus() funcionando');

  console.log(erros.length === 0
    ? '✅ Todas as verificações passaram! Commit: feat: aula16-classlist-filtro-jf'
    : `🔴 ${erros.length} erro(s):\n` + erros.join('\n'));
})();
*/