var resizesq= function(){
	$(this).height($(this).width())

	var imgheight=$("img").height();
	var imgwidth=$("img").width();

}

$(".galimg").each(resizesq);

// if($(".galimg").width<$(".galimg").height){
// 	$(this).addClass("landscape");
// }


	if (imgheight>imgwidth) {
		$("img").addClass("portrait");
	}
	else if (imgwidth> imgheight){
		$("img").addClass("landscape");
	}