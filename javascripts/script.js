var app = angular.module("scroll", ["angular-scroll-complete"])

app.controller("DemoController", function ($scope) {

    $scope.scrolldone = false;
    $scope.percent=70;

    $scope.scrollComplete = function () {

        $scope.scrolldone = true;
    }

    $scope.reset = function () {
        $scope.$broadcast('scrollCompleted')
        $scope.scrolldone = false;
        $(".overflow").scrollTop(0);
    }

})