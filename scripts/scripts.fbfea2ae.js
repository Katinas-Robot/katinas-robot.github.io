"use strict";angular.module("katinasRobotWebApp",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(function(){}).factory("RobotFactory",["$resource","$http",function(a,b){return b.defaults.useXDomain=!0,a("http://:ipAddress/:action",{action:"@action"},{connect:{method:"GET",params:{action:"Authenticate"}},move:{method:"GET",params:{action:"Move"}}})}]),angular.module("katinasRobotWebApp").controller("MainCtrl",["$scope","RobotFactory",function(a,b){a.robotData={isConnecting:!1,isConnected:!1,lastDirection:null,ipAddress:null},a.connect=function(){a.robotData.ipAddress&&(a.robotData.isConnecting=!0,b.connect({ipAddress:a.robotData.ipAddress},function(){a.robotData.isConnecting=!1,a.robotData.isConnected=!0},function(){a.robotData.isConnecting=!1}),a.robotData.isOnline=!0)},a.move=function(c){a.lastDirection!==c&&b.move({ipAddress:a.robotData.ipAddress,direction:c},function(){a.lastDirection=c})}}]);