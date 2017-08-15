$(document).ready(function(){
//全屏
	if($.support.fullscreen){
		$(".itemstylea .inr .cnt i.fsbtn").each(function(){
			$(this).click(function(e){
				$(this).parent().fullScreen();
				e.preventDefault();
				
			});
		})
	}
//选项卡
	// $(".item .inr .cnt").width(function(){
	// 	var $width = $(this).parent().width();
	// 	$(this).width(($width-512)*0.896);
	// });
	$(".item .inr .sel").each(function(){
		var $this = $(this);
		$this.find("ul li").eq(0).addClass("active");
		$this.next().find("ul li").eq(0).show();
		$this.find("ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$this.next().find("ul li").eq($(this).index()).show().siblings().hide()
		})
	})
})