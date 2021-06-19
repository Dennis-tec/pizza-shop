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
  var name=$("#name").val();
  var delivery=$("#delivery").val();
  var smallc=$("#sc").val();
  var smalls=$("#ss").val();
  var smallg=$("#sg").val();
  var largec=$("#lc").val();
  var larges=$("#ls").val();
  var largeg=$("#lg").val();
  var mediumc=$("#mc").val();
  var mediums=$("#ms").val();
  var mediumg=$("#mg").val();
if (smallc && name) {
  alert(name + ", your total bill is $2.04.");
}
else if (smalls && name) {
  alert(name + ", your total bill is $2.40.");
}
else if (smallg && name) {
  alert(name + ", your total bill is $2.21.");
}
else if (mediumc && name) {
  alert(name + ", your total bill is $4.78.");
}
else if (mediums && name) {
  alert(name + ", your total bill is $5.67.");
}
else if (mediumg && name) {
  alert(name + ", your total bill is $5.73.");
}
else if (largec && name) {
  alert(name + ", your total bill is $7.80.");
}
else if (larges && name) {
  alert(name + ", your total bill is $7.56.");
}
else if (largeg && name) {
  alert(name + ", your total bill is $8.41.");
}
else if (!name) {
  alert("Please enter your name.");
}
else {
  alert("Please enter the pizza size that you want.")
}
})
})
