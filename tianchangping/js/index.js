;(function($){
	//移动端
	document.documentElement.style.fontSize=document.documentElement.clientWidth/6.655+"px";

	var count = 1;
	//获取宽度
	var w = $(window).width();
	//调用
	show();
function show(){
//判断,移动端，还是pc端
	if(w<=768){
	//移动端
		$(".nav ul").css("left","-100%");
		//点击按钮
		$(".btn").on("tap",function(){
			count++;
			//判断点击次数，（显示）隐藏
			if(count%2==1){
				$(".nav ul").css({
					"left":"-100%",
					"transition":"left 1.5s"
				});
			}else{
	//显示
				$(".nav ul").css({
					"left":"0",
					"transition":"left 500ms"
				});
			}
		})

	}else{
	//PC端
		$(".btn").css("display","none")
	}
}

	//轮播切换

function tabPic(){
	var times = 0;
	$("#right").click(function(){

		$(".uls").animate({"marginLeft":"-100%"},500,function(){

				$(".uls li:first").appendTo(".uls");

				$(this).css("marginLeft","0px");
				change();
		});

	});

	$("#left").click(function(){
		$(".uls").css("marginLeft","-100%");
		$(".uls li:last").prependTo(".uls");
		$(".uls").animate({"marginLeft":"0px"},500);
		change();
	})
	function change(){
		times = $(".uls li").attr("title");
		$(".ols li img").eq(times).addClass("minOne").parent().siblings().find("img").removeClass("minOne");

	}

}
//轮播
tabPic();

})(Zepto);