// Tato Padilha Team — grade de horários com filtro por modalidade.
// Para alterar os horários, edite a lista AULAS abaixo.
// dias: [seg, ter, qua, qui, sex] — 1 = tem aula, 0 = não tem.
(function () {
  'use strict';

  var AULAS = [
    { hora: '06:00', mod: 'jiu',  nome: 'Jiu-jitsu',     dias: [1, 0, 1, 0, 1] },
    { hora: '07:00', mod: 'muay', nome: 'Muaythai',      dias: [1, 0, 1, 0, 1] },
    { hora: '10:00', mod: 'kids', nome: 'Muaythai Kids', dias: [0, 1, 0, 1, 0] },
    { hora: '15:30', mod: 'mma',  nome: 'MMA',           dias: [1, 0, 1, 0, 1] },
    { hora: '17:00', mod: 'muay', nome: 'Muaythai',      dias: [1, 1, 1, 1, 1] },
    { hora: '18:30', mod: 'muay', nome: 'Muaythai',      dias: [1, 1, 1, 1, 1] },
    { hora: '19:30', mod: 'muay', nome: 'Muaythai',      dias: [1, 1, 1, 1, 1] },
    { hora: '20:30', mod: 'jiu',  nome: 'Jiu-jitsu',     dias: [1, 1, 1, 1, 0] }
  ];

  var grade = document.getElementById('grade');
  var filtros = document.querySelectorAll('.filter');
  if (!grade) return;

  AULAS.forEach(function (aula) {
    var linha = document.createElement('div');
    linha.className = 'schedule__row';
    linha.setAttribute('role', 'row');

    var hora = document.createElement('span');
    hora.className = 'schedule__time';
    hora.setAttribute('role', 'rowheader');
    hora.textContent = aula.hora;
    linha.appendChild(hora);

    aula.dias.forEach(function (tem) {
      var celula = document.createElement('span');
      celula.setAttribute('role', 'cell');
      if (tem) {
        celula.className = 'cell';
        celula.dataset.mod = aula.mod;
        celula.textContent = aula.nome;
      } else {
        celula.className = 'cell cell--empty';
      }
      linha.appendChild(celula);
    });

    grade.appendChild(linha);
  });

  function filtrar(mod) {
    grade.querySelectorAll('.cell[data-mod]').forEach(function (celula) {
      var ativo = mod === 'all' || celula.dataset.mod === mod;
      celula.classList.toggle('is-dim', !ativo);
    });
    filtros.forEach(function (botao) {
      botao.setAttribute('aria-pressed', String(botao.dataset.filter === mod));
    });
  }

  filtros.forEach(function (botao) {
    botao.addEventListener('click', function () {
      filtrar(botao.dataset.filter);
    });
  });
})();
