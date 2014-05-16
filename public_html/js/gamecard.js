/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gameApp = angular.module("gameApp", []);
gameApp.controller("gameController", function($scope) {
    $scope.home = {
        name: "Home",
        color: "green",
        score: 0,
        scores: [],
        timeoutsRemaining: 0,
        timeouts: [],
        fouls: [],
        tossChoice: {choice: "", direction: ""},
        halfChoice: {choice: "", direction: ""},
        ot1Choice: "",
        ot2Choice: ""
    };
    $scope.visitor = {
        name: "Visitor",
        color: "white",
        score: 0,
        scores: [],
        timeoutsRemaining: 0,
        timeouts: [],
        fouls: [],
        tossChoice: {choice: "", direction: ""},
        halfChoice: {choice: "", direction: ""},
        ot1Choice: "",
        ot2Choice: ""
    };
    $scope.team = {};
    $scope.timeDigits = [0, 0, 0, 0];
    $scope.quarter = 0;
    $scope.firstQuarter = {down: "", distance: "", yardLine: "", direction: ""};
    $scope.thirdQuarter = {down: "", distance: "", yardLine: "", direction: ""};
    $scope.foul = "";
    $scope.number = 0;
    $scope.teamEditor = false;
    $scope.timeEditor = false;
    $scope.scoreEditor = false;
    $scope.gameEditor = false;
    $scope.timeoutEditor = false;
    $scope.foulEditor = false;
    $scope.quarterEditor = false;
    $scope.editTeam = function(selectedTeam) {
        $scope.team = selectedTeam;
        $scope.teamEditor = true;
    };
    $scope.editScore = function(selectedTeam) {
        $scope.team = selectedTeam;
        $scope.scoreEditor = true;
        $scope.timeEditor = true;
    };
    $scope.addScore = function(score) {
        $scope.team.score += score;
        $scope.team.scores.push({
            quarter: $scope.quarter,
            time: "" + $scope.timeDigits[3] + $scope.timeDigits[2] + ":" + $scope.timeDigits[1] + $scope.timeDigits[0],
            score: score
        });
        $scope.scoreEditor = false;
        $scope.timeEditor = false;
    };
    $scope.editTimeout = function(selectedTeam) {
        $scope.team = selectedTeam;
        $scope.timeoutEditor = true;
        $scope.timeEditor = true;
    };
    $scope.addTimeout = function() {
        $scope.team.timeoutsRemaining--;
        $scope.team.timeouts.push({
            quarter: $scope.quarter,
            time: "" + $scope.timeDigits[3] + $scope.timeDigits[2] + ":" + $scope.timeDigits[1] + $scope.timeDigits[0]
        });
        $scope.timeoutEditor = false;
        $scope.timeEditor = false;
    };
    $scope.editFoul = function(selectedTeam) {
        $scope.team = selectedTeam;
        $scope.foul = "";
        $scope.number = 0;
        $scope.foulEditor = true;
//        $scope.timeEditor = true;
    };
    $scope.addFoul = function() {
        $scope.team.fouls.push({
            foul: $scope.foul,
            quarter: $scope.quarter,
            time: "" + $scope.timeDigits[3] + $scope.timeDigits[2] + ":" + $scope.timeDigits[1] + $scope.timeDigits[0],
            number: $scope.number
        });
        $scope.foulEditor = false;
        $scope.timeEditor = false;
    };
    $scope.nextQuarter = function() {
        switch ($scope.quarter) {
            case 0:
            case 2:
                $scope.home.timeoutsRemaining = 3;
                $scope.visitor.timeoutsRemaining = 3;
            case 1:
            case 3:
                $scope.quarter++;
                break;
            case 4:
            case 5:
                $scope.quarter++;
                $scope.home.timeoutsRemaining = 1;
                $scope.visitor.timeoutsRemaining = 1;
                break;
            default:
                $scope.quarter = 0;
        }
        $scope.quarterEditor = false;
    };
});


