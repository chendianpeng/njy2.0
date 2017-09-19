jq.support.cors = true;
if(typeof(window.console)=='undefined'){
	var console={
		log:function(){}
	}
}
(function() {
	if (!getCookie("token")) {
		jq.ajax({
			type: 'POST',
			url: loginUrl + 'news/fetchTheCurrentArea.action',
			data: JSON.stringify({
				areaId: ""
			}),
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Content-Type', "application/json");
			},
			success: function(_data) {
				console.log('app=====', _data.data);
				setCookie('token', _data.data.token, cookieDomain);
				document.location.reload()
			},
			error: function(err) {
				console.log('app=====', err);
			}
		});
		// .done(function(_data) {
		// 	console.log(_data.data, 'app=====');
		// 	setCookie('token', _data.data.token, cookieDomain);
		// 	document.location.reload()
		// });
	}

})();

jq(document).ready(function() {
	jq('.header .header_menu').html(
		'<div class="njy">' + '<a id="njy" href="' + frontHost + 'manager/m_commodity.html">农加易管理<span class="down"></span></a>' + '<div class="njyList">' + '<strong>我是供应商</strong>' + '<a href="' + frontHost + 'releaseGoods/fbsp.html">发布商品</a>' + '<a href="' + frontHost + 'manager/info_supplier.html">供应商信息</a>' + '</div>' + '</div>' + '<form id="loginForm" method="post" action="' + loginUrl + 'new/inLogin.action">' + '<input type="hidden" name="token" value="' + getCookie("token") + '">' + '<input type="hidden" name="backUrl" value="' + location.href + '">' + '<a class="loginBtn">登录</a>' + '</form>' + '<span>|</span>' + '<a href="' + loginUrl + 'new/account/reg.action">注册</a>' + '<a href="' + nongjiawangHost + 'help">帮助中心</a>' + '<div class="qrBox">' + '<img class="icon" src=' + serverFrontHost + 'res/img/wechat_icon.png />' + '<span class="qrcode">' + '<img src=' + serverFrontHost + 'res/img/qrcode.png width="94" height="102" />' + '</span>' + '</div>'
	);

	jq.ajax({
		type: "GET",
		url: hostUrl + "api/user/user/find/getCurrentUser?" + Math.random(),
		data: "",
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		beforeSend: function(result) {
			result.setRequestHeader('sessionId', getCookie('token'));
		},
		success: function(result) {
			var data = JSON.parse(result);
			if (data.content.userType == 10) {
				jq('#audit_supplier').css({
					"display": "block"
				});
				if (location.href.indexOf("m_commodity.html") > -1 || location.href.indexOf("info_supplier.html") > -1) {
					location.replace("audit_supplier.html");
				}
			} else {
				jq('#m_commodity').css({
					"display": "block"
				});
				jq('#info_supplier').css({
					"display": "block"
				});
			}
			if (data.sessionStatus == -1) {
				//未登录
				jq('.header .header_menu').html(
					'<div class="njy">' + '<a id="njy" href="' + frontHost + 'manager/m_commodity.html">农加易管理<span class="down"></span></a>' + '<div class="njyList">' + '<strong>我是供应商</strong>' + '<a href="javascript:postToLogin(\'' + frontHost + 'releaseGoods/fbsp.html\');">发布商品</a>' + '<a href="javascript:postToLogin(\'' + frontHost + 'manager/info_supplier.html\');">供应商信息</a>' + '</div>' + '</div>' + '<form id="loginForm" method="post" action="' + loginUrl + 'new/inLogin.action">' + '<input type="hidden" name="token" value="' + getCookie("token") + '">' + '<input type="hidden" name="backUrl" value="' + location.href + '">' + '<a class="loginBtn">登录</a>' + '</form>' + '<span>|</span>' + '<a href="' + loginUrl + 'new/account/reg.action">注册</a>' + '<a href="' + nongjiawangHost + 'help">帮助中心</a>' + '<div class="qrBox">' + '<img class="icon" src=' + serverFrontHost + 'res/img/wechat_icon.png />' + '<span class="qrcode">' + '<img src=' + serverFrontHost + 'res/img/qrcode.png width="94" height="102" />' + '</span>' + '</div>'
				);
			} else {
				//已登录。请求农加网带token 农加易带sessionId
				!!jq('#userId') && jq('#userId').val(data.content.userName);
				jq('.header .header_menu').html(
					'<div class="njy">' + '<a id="njy" href="' + frontHost + 'manager/m_commodity.html">农加易管理<span class="down"></span></a>' + '<div class="njyList">' + '<strong>我是供应商</strong>' + '<a href="' + frontHost + 'releaseGoods/fbsp.html">发布商品</a>' + '<a href="' + frontHost + 'manager/info_supplier.html">供应商信息</a>' + '</div>' + '</div>' + '<form id="loginForm" method="post" action="' + loginUrl + 'new/inLogin.action">' + '<input type="hidden" name="token" value="' + getCookie("token") + '">' + '<input type="hidden" name="backUrl" value="' + location.href + '">' + '<a class="loginBtn" style="display:none;">登录</a>' + '</form>' + '<span style="color:#2c99cd;">欢迎您，' + data.content.userName + '&nbsp;</span>' + '<form id="quitForm" method="post" action="' + loginUrl + 'new/logOut.action">' + '<input type="hidden" name="token" value="' + getCookie("token") + '">' + '<a id="logOut">退出</a>' + '</form>' + '<span>|</span>' + '<a href="' + loginUrl + 'new/account/reg.action">注册</a>' + '<a href="' + nongjiawangHost + 'help">帮助中心</a>' + '<div class="qrBox">' + '<img class="icon" src=' + serverFrontHost + 'res/img/wechat_icon.png />' + '<span class="qrcode">' + '<img src=' + serverFrontHost + 'res/img/qrcode.png width="94" height="102" />' + '</span>' + '</div>'
				);
			}
		},
		error: function(result) {

		},
	});
	jq('.header').on('click', '.loginBtn', function() {
		postToLogin();
	});
	jq('.header').on('mouseenter', '#njy', function() {
		//jq(this).css({'background':'#fff','border':'1px solid #eee','border-bottom':'none'});
		jq(this).addClass('hoverNjy');
		jq('.njyList').show();
	})
	jq('.header').on('mouseleave', '#njy', function() {
		//jq(this).css({'background':'#eee','border':'none'});
		jq(this).removeClass('hoverNjy');
		jq('.njyList').hide();
	});
	jq('.header').on('mouseenter', '.njyList', function() {
		jq('#njy').addClass('hoverNjy');
		//jq('#njy').css({'background':'#fff','border':'1px solid #eee','border-bottom':'none'});
		jq('.njyList').show();
	})
	jq('.header').on('mouseleave', '.njyList', function() {
		//jq('#njy').css({'background':'#eee','border':'none'});
		jq('#njy').removeClass('hoverNjy');
		jq('.njyList').hide();
	});

	jq('.header').on('click', '#logOut', function() {
		jq.ajax({
			type: "POST",
			url: hostUrl + "/api/sys/login/logout",
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			data: JSON.stringify({
				cookie: getCookie('token')
			}),
			beforeSend: function(result) {
				result.setRequestHeader('sessionId', getCookie('token'));
			},
			success: function(result) {
				document.getElementById('quitForm').submit();
			},
			error: function(result) {

			},
		});
	});
});

function postToLogin(backUrl) {
	//todo
	if (!getCookie("token")) {
		location.href = nongjiawangHost;
	} else {
		backUrl && jq('input[name = "backUrl"]').val(backUrl);
		jq('#loginForm').submit();
	}
}