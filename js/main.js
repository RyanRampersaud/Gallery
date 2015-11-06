var resizesq= function(){
	$(this).height($(this).width())
}

$(".galimg").each(resizesq);

if($(".galimg").width<$(".galimg").height){
	$(this).addClass("landscape");
}
