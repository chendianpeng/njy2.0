/*jq(document).ready(function () {
	<!--图片上传位置,图片数量,待上传时图片框的名字-->
	var obj = new imgChangeshow('showImgGroup',3,'上传图片');
	//console.log(obj.getImgSrcList());
});*/
function imgChangeshow(wrap, num, text, imgList, seq) { //最外层元素id input父元素  img的class input的id 设置name值 上传图片的上限  上传文字
	this.imgUploadTpl = "";
	this.wrap = jq("#" + wrap);
	this.fileId = "";
	this.imgList = !!imgList ? imgList : [];
	this.imgSeq = !!seq ? parseInt(seq) : 0;
	this.imgAddressList = [];
	this.delImgId = "";
	this.max = num;
	var that = this;
	this.init = function() {
		var length = this.imgList.length;
		var that = this;
		if (length == 0) {
			this.createNew();
			return this;
		}
		for (var i = 0; i < length; i++) {
			this.createNew(this.imgList[i]);
		}
		if (num > length) {
			this.createNew();
		}
		return this;
	}
	this.createNew = function(_imgItem) {
		var imgItem = _imgItem ? _imgItem : "";
		var fileIndex = Math.round(Math.random(100) * 1000);
		fileIndex = document.getElementById('file_' + fileIndex) ? Math.round(Math.random(100) * 1000) : fileIndex;
		this.imgUploadTpl = '<div class="showImg"><span>' + text + '</span><img class="image" src="" alt="" /><form id="fileForm_' + fileIndex + '" enctype="multipart/form-data" method="post"><input type="file" name="file" id="file_' + fileIndex + '" /></form></div>';
		this.imgUploadTplInit = '<div class="showImg"><span>' + text + '</span><img class="image" src="' + imgItem.img + '" data-id="' + imgItem.id + '" alt="" /><form id="fileForm_' + fileIndex + '" enctype="multipart/form-data" method="post"><input type="file" name="file" id="file_' + fileIndex + '" value="' + imgItem.img + '" /><a class="delImg" data-id="' + imgItem.id + '" style="display:none;">&times;</a></form></div>';
		this.fileId = "file_" + fileIndex;
		if (imgItem != "") {
			this.wrap.append(this.imgUploadTplInit);
		} else {
			this.wrap.append(this.imgUploadTpl);
		}
	};
	this.afterChange = function() {
		if (this.wrap.find('div').length == this.max) {
			//alert('已经达到上传上限')
			return;
		} else if (this.max > 1) { //change后 继续新增
			this.createNew();
		}
	};
	this.wrap.on('change', "input", function(e) {
		var _this = jq(this);
		//ie
		var file = document.getElementById(that.fileId);
		var isIE = navigator.userAgent.indexOf("MSIE") > -1;

		// var uploadImgUrl = hostUrl + "api/sys/fileUpload";
		// jq(this).parent().ajaxSubmit({
		// 	type: 'post',
		// 	data: {
		// 		subPath: "front",
		// 		"isImage": 1
		// 	},
		// 	url: uploadImgUrl,
		// 	headers: {
		// 		sessionId: getCookie("token"),
		// 		Accept: "application/json; charset=utf-8"
		// 	},
		// 	xhrFields: {
		// 		withCredentials: true
		// 	},
		// 	success: function(result) {
		// 		if (!result.success) {
		// 			_this.val('');
		// 			if (result.errorMessage == -1) {
		// 				njyAlert.tips("您上传的图片过大，请上传1M内的图片");
		// 				return;
		// 			}
		// 			njyAlert.tips("您上传的图片文件名不合法，不能包含特殊字符！");
		// 		} else {
		// 			var data_img = result.content.imageUrl;
		// 			var imgSrc = result.content.smallImageUrl;
		// 			if (isIE) {
		// 				file.select();
		// 				//_this.parents('.showImg').find('img').css({'filter':"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + imgSrc,'z-index':100} );
		// 				_this.parents('.showImg').find('img').attr('src', data_img); //保存图片路径
		// 				_this.parents('.showImg').find('img').attr('data-img', data_img); //保存图片路径
		// 				_this.parents('.showImg').find('img').attr('data-id', ''); //创建图片id
		// 				jq('<a class="delImg" style="display:none;">&times;</a>').insertAfter(_this); //添加删除
		// 				if (jq('#uploadTp span')) {
		// 					var leng = jq('#infoImgGroup div a').length;
		// 					jq('#uploadTp span').html(leng);
		// 				}
		// 				that.afterChange();
		// 			} else { //非ie
		// 				_this.parents('.showImg').find('img').attr('src', imgSrc).css('z-index', 100); //写入图片路径
		// 				_this.parents('.showImg').find('img').attr('data-img', data_img).css('z-index', 100); //保存图片路径
		// 				_this.parents('.showImg').find('img').attr('data-id', ''); //创建图片id
		// 				jq('<a class="delImg" style="display:none;">&times;</a>').insertAfter(_this); //添加删除
		// 				if (jq('#uploadTp span')) {
		// 					var leng = jq('#infoImgGroup div a').length;
		// 					jq('#uploadTp span').html(leng);
		// 				}
		// 				that.afterChange();
		// 			}
		// 		}
		// 	},
		// 	error: function(result) {
        //
		// 	}
		// })
	});
	this.wrap.on('mouseenter', '.showImg', function() {
		jq(this).find('.delImg').show();
	}).on('mouseleave', 'img', function() {
		jq(this).find('.delImg').hide();
	});
	this.wrap.on('click', '.delImg', function() {
		if (jq(this).attr('data-id') != "" && jq(this).attr('data-id')) {
			that.delImgId += jq(this).attr('data-id') + ",";
		}
		var addFlag = true;
		that.wrap.find('img').each(function() {
			if (jq(this).attr('src') == '') { //判断是否有值为空的type为file的input
				addFlag = false;
			}
		});
		if (that.max == 1) {
			jq(this).parents('.showImg').remove();
			that.createNew();
		} else {
			jq(this).parents('.showImg').remove();
			if (addFlag) { //删除最后一个后新增一个
				that.createNew();
			}
		}
		//图片描述获取长度
		var leng = jq('#infoImgGroup div a').length;
		if (jq('#uploadTp span')) {
			jq('#uploadTp span').html(leng);
		}
	});
	this.getImgSrcList = function() {
		var length = this.wrap.children('.showImg').length;
		this.imgAddressList = [];
		for (var i = 0; i < length; i++) {
			if (this.wrap.children('.showImg').eq(i).children('img').attr('data-id') == "") {
				var obj = {};
				obj.originImagePath = this.wrap.children('.showImg').eq(i).children('img').attr('data-img');
				this.imgSeq++;
				obj.seq = this.imgSeq;
				obj.compressImagePath = this.wrap.children('.showImg').eq(i).children('img').attr('src');
				this.imgAddressList.push(obj);
			}
		};
		return this.imgAddressList;
	};
	this.getImgAll = function() {
		var length = this.wrap.children('.showImg').length;
		var imgSrcList = [];
		for (var i = 0; i < length; i++) {
			var obj = {};
			obj.originImagePath = this.wrap.children('.showImg').eq(i).children('img').attr('data-img');
			obj.compressImagePath = this.wrap.children('.showImg').eq(i).children('img').attr('src');
			imgSrcList.push(obj);
		};
		return imgSrcList;
	};
	this.getDelImgId = function() {
		return (that.delImgId.length > 0 ? that.delImgId.substring(0, that.delImgId.length - 1) : "");
	}
}