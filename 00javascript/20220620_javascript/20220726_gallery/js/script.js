$(".itemWrap>li").click(function(){
    console.log($(this).index())
    let i = $(this).index();
    $("#image>p").hide();
    $("#image>p").eq(i).show();
})

let current = 0;

$(".right").click(function(){
    current++;
    if(current == 3) {current = 2}
    console.log(current)
    let value = current * - 760;
    // $(".itemWrap").css("left":value)
    $(".itemWrap").animate({"left":value},300)
})

$(".left").click(function(){
    current--;
    if(current < 0) {current = 0}
    let value = current * - 760;
    // $(".itemWrap").css("left":value)
    $(".itemWrap").stop().animate({"left":value},300)
})

function view(current){
    let value = current * - 760;
    // $(".itemWrap").css("left":value)
    $(".itemWrap").stop().animate({"left":value},300)
}