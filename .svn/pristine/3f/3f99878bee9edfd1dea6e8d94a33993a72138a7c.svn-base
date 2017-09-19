/*采购商信息*/
/*商品图片提示语*/
jq('#showImgGroup').change(function() {
    if (jq('#showImgGroup div').length > 0) {
        jq('#sptpSpan').hide();
    } else {
        jq('#sptpSpan').show();
    }
});
jq('#uploadTp span').html(0);
var obj = new imgChangeshow('showImgGroup', 1, '上传图片').init();

var app = angular.module('njyApp', ["njy-directive", "njy-model", "njy-config"])

app.controller('my-app', ['$scope', function ($scope) {
    $scope.province = '河北省'


}])
