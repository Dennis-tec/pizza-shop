$(document).ready(function(){
  $("#delivery").click(function(){
    var name=$("#name").val();
    var postal=prompt(name +" enter your postal addres");
    alert(name +" your order will be send to your "+ postal +" address.");
  });
function Size(first, second, third, fourth,) {
  this.without=first;
  this.crispy=second;
  this.stuffEnter=third;
  this.glutenFree=fourth;
}
$("#button").click(function(event){
  event.preventDefault();
  var small=$("#s").val(500);
  var smallc=$("#sc").val();
  var smalls=$("#ss").val();
  var smallg=$("#sg").val();
  var large=$("#l").val();
  var largec=$("#lc").val();
  var larges=$("#ls").val();
  var largeg=$("#lg").val();
  var medium=$("#m").val();
  var mediumc=$("#mc").val();
  var mediums=$("#ms").val();
  var mediumg=$("#mg").val();
  var select=[small, "#sc"];

$("#story1").text(name);
$("#story2").text(select[0]);
$("#story3").text();
$(".story").show();
})
})
