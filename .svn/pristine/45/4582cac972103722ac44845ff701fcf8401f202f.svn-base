angular.module("njy-model", ["njy-config"])
//公共请求方法
    .service("fetch", ["$http", "$q", "NJYCON", function ($http, $q, NJYCON) {
        var _ajax = function (type, url, data) {
            var dtd = $q.defer();

            $http({
                method: type,
                url: NJYCON.loginUrl + url,
                withCredentials: true,
                headers: {
                    "sessionId": getCookie("token")
                },
                data: data || ""
            }).then(function (_data) {
                _data = _data.data;
                if (_data.success) {
                    dtd.resolve(_data);
                } else {
                    dtd.reject(_data.sessionStatus, _data.errorMessage);
                }
            }, function (err) {
                dtd.reject(-1, "ajax请求出错");
            });
            // console.log($http)
            return dtd.promise;
        };
        var get = function (url, data) {
            return _ajax("GET", url, data);
        };
        var post = function (url, data) {
            return _ajax("POST", url, data);
        };
        return {
            get: get,
            post: post
        };
    }])
    .factory("buyCar", ["fetch", function(fetch) {
        //删除购物车中的商品
        var deleteByIds = function(_data) {
            /*
             CarDelVo {
             carNo (string, optional): 购物车编码 ,
             goodsIds (Array[integer], optional): 商品主键集合
             }*/
            return fetch.post("api/car/carInfo/edit/deleteByIds", _data);
        };
        //保存/编辑购物车（当返回操作失败时：判断auithStatus=0：采购商未通过审核，auithStatus=2：没有该账号的采购商信息）
        var save = function(_data) {
            /*{
             "amount": 0,
             "goodsId": 0,
             "supplierId": 0
             }*/
            return fetch.post("api/car/carInfo/edit/save",_data);
        };
        //获取购物车信息
        var listAllGroup=function(_data) {
            /*{
             "goodsIds": [
             0
             ],
             "isClose": 0,
             "supplierIds": [
             0
             ]
             }*/
            return fetch.post("api/car/carInfo/find/listAllGroup",_data);
        };

        //用来改变列表数量做发送
        var updateCarAmount = function(_data) {
            /*{
             "amount": 0,
             "goodsId": 0,
             "supplierId": 0
             }*/
            return fetch.post("api/car/carInfo/edit/updateCarAmount",_data);
        };
        //用来保存提交的订单
        var saveOrder=function(_data) {
            /*{
             "carNo": "string",
             "rAddrId": 0,
             "supplyInfos": [
             {
             "goodsIds": [
             0
             ],
             "message": "string",
             "supplyId": 0
             }
             ]
             }*/
            return fetch.post("api/car/carInfo/edit/saveOrder",_data);
        };

        return {
            deleteByIds: deleteByIds,
            save: save,
            listAllGroup:listAllGroup,
            updateCarAmount:updateCarAmount,
            saveOrder:saveOrder
        };
    }]).factory("recAddr",["fetch",function (fetch) {
    //获取临时订单显示的首选收货地址
    var firstAddr=function () {
        return fetch.get("api/address/receiveAddress/find/first");
    };

    //查询所有的收货地址
    var allAddr=function () {
        return fetch.get("api/address/receiveAddress/find/listall");
    };

    //设置默认收货地址
    var defaultAddr=function (_data) {
        return fetch.get("api/address/receiveAddress/edit/setDefault/"+_data);
    };
    //删除收货地址
    var delAddr=function (_data) {
        return fetch.get("api/address/receiveAddress/edit/delete/"+_data);
    };
    //保存添加的收货地址
    var saveAddr=function (_data) {
        return fetch.post("api/address/receiveAddress/edit/save",_data);
    };

    return {
        firstAddr:firstAddr,
        allAddr:allAddr,
        delAddr:delAddr,
        defaultAddr:defaultAddr,
        saveAddr:saveAddr
    };
}])
    .factory('productInf',['fetch',function (fetch) {
        //获取商品信息
        var productDet=function (_data) {
            return fetch.get("api/goods/goodsInfo/find/{id}?id="+_data);
        };
        return {
            productDet:productDet
        };
    }])
    .factory("addrArea", ["fetch", function (fetch) {
        //根据区域id得到该地区下的所有子地区集.为“0”则是顶级父集，即得到所有省份
        var findByParentId = function (parentId) {
            return fetch.get("api/area/area/find/findByParentId/" + parentId);
        };

        return {
            findByParentId: findByParentId
        };
    }])

    .factory("supplier",["fetch",function(fetch){
        //查找供应商根据ID
        var findById=function(id){
            return fetch.get("api/supplier/supplierInfo/find/findById/"+id);
        };

        return {
            findById:findById
        };
    }])

    .factory('gongying', ['fetch', function (fetch) {
        /*供应订单*/
        var SupplierOrderPage = function (_data) {
            return fetch.post("api/order/orderInfo/find/listSupplierOrderPage/", _data)
        }
        return{
            SupplierOrderPage:SupplierOrderPage
        }
    }])

    .factory('management',["fetch",function (fetch) {
        /*订单分配*/
        var Allocation = function (_data) {
            return fetch.post("api/assign/order/find/allOrder/", _data)

        }
        return{
            Allocation:Allocation
        }
}])