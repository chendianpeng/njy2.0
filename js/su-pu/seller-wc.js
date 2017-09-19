var app = angular.module('njyApp', ["njy-directive", "njy-model", "njy-config"])
app.controller('myapp', ['$scope', function ($scope) {




















    jq('#btn').click(function () {
    })
    $scope.ck = function () {
        $scope.iMarket=jq('#sDate').val()
        jq('#eDate').val()
        console.log($scope.iMarket)
//            var stringTime = $scope.iMarket;
//            var timestamp2 = Date.parse(new Date(stringTime));
////            var timestamp2 = Date.parse(new Date(stringTime.replace(/-/g, "/")));
//            timestamp2 = timestamp2 / 1000;
//            //2014-07-10 10:21:12的时间戳为：1404958872
//            console.log(stringTime + "的时间戳为：" + timestamp2);
    }



}])
