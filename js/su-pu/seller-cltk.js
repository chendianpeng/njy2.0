/*卖家处理退款*/
/*商品图片提示语*/
jq('#showImgGroup').change(function() {
    if (jq('#showImgGroup div').length > 0) {
        jq('#sptpSpan').hide();
    } else {
        jq('#sptpSpan').show();
    }
});
jq('#uploadTp span').html(0);
var obj = new imgChangeshow('showImgGroup', 5, '上传图片').init();

var app = angular.module('njyApp', ["njy-directive", "njy-model", "njy-config"])
app.controller('myapp', ['$scope', function ($scope) {
    $scope.tkchecked = function (index) {
         if(index==1){
             $scope.tkcur = true
         }else {
             $scope.tkcur = false;
         }

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
