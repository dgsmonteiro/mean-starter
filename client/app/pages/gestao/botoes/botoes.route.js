(function() {
  'use strict';

  angular
    .module('base')
    .config(config);


  function config($stateProvider) {
    $stateProvider
      .state('root.gestao.botoes', {
        breadcrumb: 'Botões',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Botões - Projeto base'
        },
        menu : {
          eixo: 'Gestão',
          titulo: 'Botoes',
          icone: '#configuracao-boleto'
        },
        url: '/botoes',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/gestao/botoes/botoes.view.html',
            controller: 'botoesController as botoes'
          }
        }
      });
  }
})();
