import {
    Meteor
}
from 'meteor/meteor';
import angular from 'angular'
import angularMeteor from 'angular-meteor'
import uiRouter from 'angular-ui-router'
import template from './register.html'
import '../css/material.css'
import './register.css'
import angularAnimate from 'angular-animate'
import angularAria from 'angular-aria'
import angularMaterial from 'angular-material'

class Register {
  constructor($scope, $reactive, $state, $mdSidenav) {
    'ngInject';

  }
}

const name = 'register'

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    angularAnimate,
    angularAria,
    angularMaterial
  ]).component(name, {
    templateUrl: 'imports/components/register/register.html',
    controllerAs: name,
    controller: ['$scope', '$reactive', '$state', '$mdSidenav',Register]
  })
  .config(['$locationProvider','$stateProvider', '$urlRouterProvider',config])

function config($locationProvider, $stateProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/home')
}