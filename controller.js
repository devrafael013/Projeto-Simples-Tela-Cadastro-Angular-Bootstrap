var formCadastro = angular.module('formApp', []);

formCadastro.controller('formCadastroCtrl', function($scope){
     $scope.form = []
     $scope.addForm = function(vm) {
          $scope.form.push(vm);
          delete $scope.vm;
     }
     $scope.limparFormulario = function(){
          $scope.vm = {};
     }
});