import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './login.html';
import {
    Meteor
}
from 'meteor/meteor';
import {
    Usercollection
}
from '../../api/usercollection.js';
class Login {

    constructor($scope, $reactive, $state, $rootScope,) {
        'ngInject';
var dataSet;
var allUsers=[];
var allPassword=[];
var index;
var school;
       this.self = this
    this.$state = $state
    this.$scope = $scope
    this.loginAttempt = 0;

Meteor.subscribe('testpublish');

        Meteor.autorun(() => {
            dataSet = Usercollection.find({}).fetch()
            console.log(dataSet)
        });
    $reactive(this).attach($scope);
    $scope.loginUser=function()
    {

      for(var i=0;i<dataSet.length;i++)
    {
        if(dataSet[i].user_name=$scope.username)
        {
          school=dataSet[i].school_name;
          break;
        }

    }

      console.log($scope.username)
      
      for(var i=0;i<dataSet.length;i++)
    {
        allUsers.push(dataSet[i].user_name);

    }console.log(allUsers)
    for(var i=0;i<dataSet.length;i++)
    {
      allPassword.push(dataSet[i].password);
    }console.log(allPassword)
    if ($scope.username === "" ||
      $scope.username === null ||
      $scope.username === undefined) {

      toastr.error("Please Enter the  Username")
  }

else if($scope.password === "" ||
       $scope.password === null ||
      $scope.password === undefined) {
     toastr.error("Please Enter the  password")
 }
else{
    for(var i=0;i<dataSet.length;i++)

          {
            if($scope.username===allUsers[i])
                {
            //console.log("present")
                  index=i;
                  if($scope.password===allPassword[index])
                    {
                      toastr.success("login successfull !!!")
                      var admin=$scope.username;
                      $state.go('homepage',{name:admin});
                      break;
                    }

                  
                }
          }
          if(i==dataSet.length){
            toastr.error("Create account")
          }
        }

}

   }

 }

const name = 'login';

// create a module
export default angular.module(name, [
        angularMeteor,
        uiRouter
    ])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: Login
    })
    .config(['$stateProvider', config]);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('login', {
        url: '/login',
        template: '<login></login>'
    });
 }