(function() {
  'use strict';

  angular
    .module('base')
    .service('apiLogin', apiLogin);

  apiLogin.$inject = ['sessaoMockUp', 'usuarioLogado', 'sessao'];

  function apiLogin(sessaoMockUp, usuarioLogado, sessao) {
    /* jshint validthis: true */
    this.logar = logar;

    function logar(data) {
      return sessaoMockUp
        .oneUrl('/usuarios')
        .one(data.senha)
        .get()
        .then(retornoLogar)
        .catch(erroAoLogar);
    }

    function retornoLogar(data) {
      usuarioLogado.criarUsuarioLogado(data.dados, data.id);
      sessao.criarSessao(data.dados);
      return true;
    }

    function erroAoLogar(erro) {
      // return erro;
    }
  }
})();
