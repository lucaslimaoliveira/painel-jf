// ⚠️  VERSÃO DO ALUNO — preencha os PREENCHA_AQUI
// Arquivo: 03_script.js
// Aula 14 — Manipulação de Conteúdo: textContent, innerText, innerHTML, dataset
// ──────────────────────────────────────────────────────────────────────────────
// REGRA DE SEGURANÇA:
//   dados do usuário → SEMPRE textContent
//   HTML gerado pelo seu código → innerHTML (com cuidado)
//   metadados data-* → dataset.nomeCamelCase
// ──────────────────────────────────────────────────────────────────────────────

'use strict';

// ── SELEÇÃO DOS ELEMENTOS (Aula 13 — revise se necessário) ────────────────────
const nomeEl    = document.getElementById("nomeColaborador");
const saldoEl   = document.getElementById("saldo");
const empresaEl = document.getElementById("empresa");
const statusEl  = document.getElementById("status");
const cargoEl   = document.getElementById("cargo");

// ── DADOS SIMULADOS (virão de uma API real na Aula 21) ───────────────────────
const colaborador = {
  nome:    "Ana Paula Ferreira",
  cargo:   "Analista Financeira Sr.",
  saldo:   "R$ 8.650,00",
  empresa: "Banco Original",
  ativo:   true,
};

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 01 — Atualize o nomeEl com o nome do colaborador usando textContent
// Por quê textContent? O nome pode conter caracteres especiais — é dado externo.
// dica: nomeEl.PREENCHA_AQUI = colaborador.nome;
// ════════════════════════════════════════════════════════════════════════════════
nomeEl.textContent = colaborador.nome;

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 02 — Atualize o saldoEl com o saldo usando textContent
// dica: saldoEl.PREENCHA_AQUI = colaborador.saldo;
// ════════════════════════════════════════════════════════════════════════════════
saldoEl.textContent = colaborador.saldo;

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 03 — Atualize o cargoEl com o cargo usando textContent
// dica: cargoEl.PREENCHA_AQUI = colaborador.cargo;
// ════════════════════════════════════════════════════════════════════════════════
cargoEl.textContent = colaborador.cargo;

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 04 — Leia o CNPJ do empresaEl com getAttribute e exiba no console
// dica: empresaEl.PREENCHA_AQUI("data-cnpj")
// ════════════════════════════════════════════════════════════════════════════════
const cnpj = empresaEl.getAttribute("data-cnpj");
console.log("CNPJ:", cnpj); // → "60.701.190/0001-04"

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 05 — Leia o data-segmento com dataset (camelCase!) e exiba no console
// dica: empresaEl.dataset.PREENCHA_AQUI
// ════════════════════════════════════════════════════════════════════════════════
const segmento = empresaEl.dataset.segmento;
console.log("Segmento:", segmento); // → "financeiro"

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 06 — Atualize data-ativo do statusEl para "false" via dataset
// dica: statusEl.dataset.PREENCHA_AQUI = "false";
// ════════════════════════════════════════════════════════════════════════════════
statusEl.dataset.ativo = "false";

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 07 — Selecione todos os .item e exiba o textContent de cada um
// dica: use querySelectorAll + forEach
// ════════════════════════════════════════════════════════════════════════════════
const itens = document.querySelectorAll(".item");
itens.forEach(item => {
  console.log("Produto:", item.textContent.trim());
});

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 08 — Para cada .item, leia dataset.empresa e exiba "Produto: X — Empresa: Y"
// dica: item.dataset.PREENCHA_AQUI
// ════════════════════════════════════════════════════════════════════════════════
itens.forEach(item => {
  const nomeProduto = item.textContent.trim();
  const nomeEmpresa = item.dataset.empresa;
  console.log(`Produto: ${nomeProduto} — Empresa: ${nomeEmpresa}`);
});

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 09 — Use innerHTML no empresaEl para inserir HTML estruturado
// O HTML é gerado pelo SEU código (seguro) — não vem do usuário
// dica: empresaEl.innerHTML = `<strong>...</strong><span class="cnpj">CNPJ: ${cnpj}</span>`
// ════════════════════════════════════════════════════════════════════════════════
empresaEl.innerHTML = `<strong>...</strong><span class="cnpj">CNPJ: ${cnpj}</span>`;

// ════════════════════════════════════════════════════════════════════════════════
// TAREFA 10 — DEMONSTRAÇÃO XSS: textContent como defesa
// Simule um input malicioso e atribua via textContent — confirme que não executa
// ════════════════════════════════════════════════════════════════════════════════
const tentativaXSS = '<img src=x onerror="alert(\'HACKEADO!\')">';
// ✅ Seguro: textContent escapa o HTML e exibe como texto literal
statusEl.PREENCHA_AQUI = tentativaXSS;
// O alert NÃO deve disparar — a tag aparece como texto na tela

// ── VERIFICAÇÃO FINAL (F12 → Console) ────────────────────────────────────────
console.log("═══ Verificação Final ═══");
console.log("Nome:",    nomeEl.textContent);
console.log("Saldo:",   saldoEl.textContent);
console.log("Cargo:",   cargoEl.textContent);
console.log("CNPJ:",    empresaEl.getAttribute("data-cnpj"));
console.log("Ativo:",   statusEl.dataset.ativo);
console.log("Status (textContent XSS):", statusEl.textContent.substring(0, 40) + "...");
