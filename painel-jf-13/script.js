/*
  ============================================================
  ARQUIVO 03 — 03_script.js
  Projeto: Painel Colaborador J&F
  Disciplina: DAD 2026 — Desenvolvimento de Aplicações Dinâmicas
  Aula 13: DOM e Seleção de Elementos
  ============================================================

  EXERCÍCIO PRÁTICO — 10 Seletores no Painel J&F
  ────────────────────────────────────────────────
  Instruções:
  1. Abra o 01_index.html no navegador.
  2. Substitua cada ??? pelo seletor correto.
  3. Após preencher cada variável, abra o DevTools (F12 → Console).
  4. Critério de aprovação: NENHUMA variável pode retornar null
     ou undefined — todas devem mostrar um elemento real.

  Dica de depuração:
  ──────────────────
  Se uma variável retornar null, verifique:
  ① O id/classe está digitado EXATAMENTE igual ao HTML? (case-sensitive!)
  ② O <script> está DEPOIS do <section> no body?
  ③ Você salvou o arquivo antes de recarregar o navegador?
  ============================================================
*/

// ────────────────────────────────────────────────────────────
// TAREFA 01
// Selecione a <section> com id="catalogo" usando getElementById.
// Dica: getElementById recebe apenas o nome do id, SEM o símbolo #
// ────────────────────────────────────────────────────────────
const s01 = document.getElementById("catalogo");


// ────────────────────────────────────────────────────────────
// TAREFA 02
// Selecione a primeira tag <h2> da página usando querySelector.
// Dica: querySelector recebe um seletor CSS → a tag é simplesmente "h2"
// ────────────────────────────────────────────────────────────
const s02 = document.querySelector('h2');


// ────────────────────────────────────────────────────────────
// TAREFA 03
// Selecione TODOS os <li> com class="item" usando querySelectorAll.
// Dica: classe em CSS usa ponto → ".item"
// ────────────────────────────────────────────────────────────
const s03 = document.querySelectorAll('li.item');


// ────────────────────────────────────────────────────────────
// TAREFA 04
// Selecione o <li> com atributo data-marca="seara".
// Dica: seletor de atributo CSS → [data-marca='seara']
// ────────────────────────────────────────────────────────────
const s04 = document.querySelector('li[data-marca="seara"]');


// ────────────────────────────────────────────────────────────
// TAREFA 05
// Selecione o <li> com atributo data-marca="vigor".
// Dica: mesmo padrão da tarefa anterior, mude o valor
// ────────────────────────────────────────────────────────────
const s05 = document.querySelector('li[data-marca="vigor"]');


// ────────────────────────────────────────────────────────────
// TAREFA 06
// Selecione o PRIMEIRO <li> da lista usando a pseudo-classe :first-child.
// Dica: "li:first-child" → o primeiro filho <li> do seu pai
// ────────────────────────────────────────────────────────────
const s06 = document.querySelector('li:first-child');


// ────────────────────────────────────────────────────────────
// TAREFA 07
// Selecione o ÚLTIMO <li> da lista usando a pseudo-classe :last-child.
// Dica: mesmo padrão do anterior, mas com :last-child
// ────────────────────────────────────────────────────────────
const s07 = document.querySelector('li:last-child');


// ────────────────────────────────────────────────────────────
// TAREFA 08
// Selecione o <button> que é filho de <section> usando combinador descendente.
// Dica: "section button" → qualquer <button> dentro de um <section>
// ────────────────────────────────────────────────────────────
const s08 = document.querySelector('section button');


// ────────────────────────────────────────────────────────────
// TAREFA 09
// Selecione o <li> que tem AMBAS as classes: "item" E "destaque".
// Dica: .classe1.classe2 (sem espaço) → elemento com as duas classes
// ────────────────────────────────────────────────────────────
const s09 = document.querySelector('li.item.destaque');


// ────────────────────────────────────────────────────────────
// TAREFA 10
// Use console.log para exibir o .length (tamanho) da NodeList da tarefa 03.
// O resultado esperado é 3 (há 3 itens com class="item" no HTML).
// ────────────────────────────────────────────────────────────
// Dica: a NodeList s03 tem uma propriedade que indica quantos elementos ela contém.
// Substitua "PREENCHA_AQUI" pela expressão correta:
console.log("Total .item:", s03.length); // esperado: 3


// ──────────────────────────────────────────────────────────────────────────
// VERIFICAÇÃO AUTOMÁTICA
// Após preencher as tarefas, este bloco exibe todos os resultados de uma vez.
// Se aparecer "null" em alguma linha → volte à tarefa correspondente.
// ──────────────────────────────────────────────────────────────────────────
const resultados = [s01, s02, s03, s04, s05, s06, s07, s08, s09];

resultados.forEach((el, i) => {
  const numero = String(i + 1).padStart(2, '0');
  console.log(`s${numero}:`, el);
});
