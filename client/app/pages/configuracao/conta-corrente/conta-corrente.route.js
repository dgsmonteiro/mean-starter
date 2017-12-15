(function() {
  'use strict';

  angular
    .module('base')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('root.configuracao.boleto', {
        breadcrumb: 'Conta corrente',
        data: {
          autenticacao: true,
          autorizacao: ['administrador', 'tomador'],
          pageTitle: 'Conta corrente - Projeto base'
        },
        menu : {
          eixo: 'Configuração',
          titulo: 'Conta Corrente',
          icone: '#configuracao-boleto'
        },
        url: '/boleto',
        views: {
          'conteudo@root': {
            templateUrl: '/app/pages/configuracao/conta-corrente/configurar-boletos/adicionar/adicionar.view.html',
            controller: 'modeloConfigurarBoletoController as contaCorrente'
          }
        }
      });
  }
})();
