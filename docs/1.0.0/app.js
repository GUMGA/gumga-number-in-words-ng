angular.module('app', ['gumga.numberinwords'])
  .controller('Ctrl', function($filter) {
    ctrl = this
    ctrl.outroValor = $filter('gumgaNumberInWords')('20', true)
  })