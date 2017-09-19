var app = angular.module('njyApp', ["njy-directive", "njy-model", "njy-config"])

app.controller('my-app', ['$scope', function ($scope) {
    $scope.tabType = 'taball'

    $scope.tabclick = function (type) {
        $scope.tabType = type
    }
    /*弹窗*/
    $scope.isqx = false;
    $scope.qxddclick = function () {
        console.log(111)
        $scope.isqx = true

    }
    /*弹窗确定按钮*/
    $scope.qdclick = function () {
        console.log('ww');
    }
    /*筛选搜索按钮*/
    $scope.sclick = function () {
        if($scope.tabType!='taball')return;
        console.log(11)
    }










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
