var jq = jQuery.noConflict(); // jQuery $ 符号改写
jQuery.support.cors = true;
var cookieDomain, //保存cookie的domian，不同二级域名共用cookie
	hostUrl, //农加易后端
	loginUrl, //农加网后端
	serverFrontHost, //农加易前端
	frontHost, //农加易前端首页
	nongjiawangHost; //农加网前端

var envConfig = "dev"; //dev-开发;test-测试;yfbTest-预发布;fb-发布生产

switch (envConfig) {
	case "dev":
		// 开发测试环境配置
		cookieDomain = "192.168.1.125";
		hostUrl = "http://192.168.1.96:8081/";
		loginUrl = "http://192.168.1.96:8081/";
		serverFrontHost = "http://192.168.1.125:8080/";
		frontHost = serverFrontHost + "src/html/";
		nongjiawangHost = "http://192.168.1.102:8091/";
		break;
	case "test":
		// 测试环境配置
		cookieDomain = "192.168.1.102";
		hostUrl = "http://192.168.1.102:9096/nonjiayi/";
		loginUrl = "http://192.168.1.102:801/nonjia/";
		serverFrontHost = "http://192.168.1.102:8094/";
		frontHost = serverFrontHost + "src/html/";
		nongjiawangHost = "http://192.168.1.102:8091/";
		break;
	case "yfbTest":
		// 预发布环境配置
		cookieDomain = ".nongj.com";
		hostUrl = "http://120.25.12.114:8093/";
		loginUrl = "http://yfb-vip-vip.nongj.com/nonjia/";
		serverFrontHost = "http://yfb-nonjiayi.nongj.com/";
		frontHost = serverFrontHost + "src/html/";
		nongjiawangHost = "http://yfb-www.nongj.com/";
		break;
	case "fb":
		//发布生产环境配置
		cookieDomain = ".nongj.com";
		hostUrl = "http://119.23.140.93:8093/";
		loginUrl = "http://vip.nongj.com/nonjia/";
		serverFrontHost = "http://nonjiayi.nongj.com/";
		frontHost = serverFrontHost + "src/html/";
		nongjiawangHost = "http://www.nongj.com/";
}
//得到token
if (!getCookie("token")) {
	//setCookie("token", "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE1MDQxNjQwODksInN1YiI6IntcImxvZ29cIjpcImpvYW5wZG10OWFcIn0ifQ.lmINmvb_-YneZmPprxyy5DfU_OO7dFjcG3YwNZtnWog", cookieDomain);

	jq.ajax({
		type: "POST",
		url: loginUrl + "news/fetchTheCurrentArea.action",
		data: JSON.stringify({
			areaId: ""
		}),
		cache: false,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader('Content-Type', "application/json");
			// xhr.setContentType("application/json;charset=UTF-8");
		},
		success: function(_data) {
			console.log("token success=====", _data.data);
			setCookie("token", _data.data.token, cookieDomain);
			document.location.reload();
		},
		error: function(err) {
			console.log("token error=====", err);
		}
	});
}

angular.module("njy-config",[])
	.constant("NJYCON", {
		cookieDomain: cookieDomain,
		hostUrl: hostUrl,
        loginUrl:loginUrl,
		serverFrontHost: serverFrontHost,
		frontHost: frontHost,
		nongjiawangHost: nongjiawangHost
	})
