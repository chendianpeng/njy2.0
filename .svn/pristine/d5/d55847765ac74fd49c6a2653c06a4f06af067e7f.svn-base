var app = angular.module('njyApp', ["njy-directive", "njy-model", "njy-config"])
app.controller('myapp', ['$scope', 'gongying', function ($scope, gongying) {
    $scope.tabType = '-1' /*所有订单*/
    $scope.all = true
    $scope.tabclick = function (type) {

        $scope.tabType = type
        if(type=='-1'){
            order();
            $scope.all = true
        }else {
            order('','',type);
            $scope.all = false
        }

    }
    /*弹窗*/
    $scope.isqx = false;
    $scope.qxddclick = function () {
        $scope.isqx = true

    }
    /*弹窗确定按钮*/
    $scope.qdclick = function () {
        console.log('ww');

    }

    /*筛选搜索按钮*/
    $scope.titleClick = function () {
        console.log(jq("#stt option:selected").val());

    }
    $scope.sclick = function () {
        $scope.title   /*标题*/


        jq('#sDate').val()  /*下单时间*/
        jq('#eDate').val()  /*结束时间*/

    }

    /***********************************请求数据***************************/
    function order(createDateEnd,createDateStart,orderStatus,purchaserName,supplierName,titleOrOrderNo,sortName,sortOrder,pageNumber,pageSize) {
        var createDateEnd = createDateEnd||"";      /*下单时间-结束时间 ,*/
        var createDateStart = createDateStart||"";  /*下单时间-起始时间 ,*/
        var orderStatus = orderStatus||"";          /*订单状态 ,*/
        var purchaserName = purchaserName||"";      /*采购商名称 ,*/
        var supplierName = supplierName||"";        /*供应商名称 ,*/
        var titleOrOrderNo = titleOrOrderNo||"";    /*商品标题或订单号*/
        var sortName = sortName||"";                /*排序字段名称,可为空 ,*/
        var sortOrder = sortOrder||"";              /*排序方式,ASC 或 DESC*/
        var pageNumber = pageNumber||1;             /*页码,>=1的整数 ,*/
        var pageSize = pageSize||10;                /*每页记录数,>=1的整数 ,*/
        gongying.SupplierOrderPage({
            "data": {
                "createDateEnd": createDateEnd,
                "createDateStart": createDateStart,
                "orderStatus": orderStatus,
                "purchaserName": purchaserName,
                "supplierName": supplierName,
                "titleOrOrderNo": titleOrOrderNo,
            },
            "sortName": sortName,
            "sortOrder": sortOrder,
            "pageNumber": pageNumber,
            "pageSize": pageSize,

        }).then(function successCallback(response) {
            $scope.listArr = response.content.content
            $scope.currentpage = response.content.currentPage+1  /*当前页*/
            $scope.totalpage = response.content.totalPage /*总页数*/
        }, function errorCallback(response) {
            console.log('请求失败')
        });
    }
    order();

    jq('#btn').click(function () {
    })
    $scope.ck = function () {
        $scope.iMarket = jq('#sDate').val()
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

