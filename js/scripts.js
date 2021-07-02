// IDEA: Delivery button code
$(document).ready(function(){
  $("#delivery").click(function(){
    var name=$("#name").val();
    var postal=prompt(name +" enter your postal addres");
    alert(name +" your order will be send to your "+ postal +" address.");
  });
})
/*$("#button").click(function(event){
  event.preventDefault();
  var name=$("#name").val();
  var smallc=$("#sc").val();
  var smalls=$("#ss").val();
  var smallg=$("#sg").val();
  var largec=$("#lc").val();
  var larges=$("#ls").val();
  var largeg=$("#lg").val();
  var mediumc=$("#mc").val();
  var mediums=$("#ms").val();
  var mediumg=$("#mg").val();
  var select = $("#select").val();
 if (select == "Crispy small size") {
  alert(name + ", your total bill is $2.04.");
 }if (smalls) {
  alert(name + ", your total bill is $2.40.");
 }if (smallg) {
  alert(name + ", your total bill is $2.21.");
 }if (mediumc) {
  alert(name + ", your total bill is $4.78.");
 }else if (mediums) {
  alert(name + ", your total bill is $5.67.");
 }else if (mediumg) {
   alert(name + ", your total bill is $5.73.");
}else if (largec) {
  alert(name + ", your total bill is $7.80.");
}else if (larges) {
  alert(name + ", your total bill is $7.56.");
}else if (largeg) {
  alert(name + ", your total bill is $8.41.");
}else if (!name) {
  alert("Please enter your name.");
}else {
  alert("Please enter the pizza size that you want.");
}
})*/
// IDEA: order javascript code
function order() {
  var name=document.getElementById('name').value;
  var select =document.getElementById('select').value;

  var price;
  if (select === "smallc" && name) {
      price = name + ", your total bill is $2.17.";
    }else if(select === "smalls" && name) {
      price = name + ", your total bill is $2.31."
    } else if(select === "smallg" && name) {
      price = name + ", your total bill is $2.31."
    } else if(select === "largec" && name) {
      price = name + ", your total bill is $7.41."
    } else if(select === "larges" && name) {
      price = name + ", your total bill is $7.63."
    } else if(select === "largeg" && name) {
      price = name + ", your total bill is $8.01."
    } else if(select === "mediumc" && name) {
      price = name + ", your total bill is $4.79."
    } else if(select === "mediums" && name) {
      price = name + ", your total bill is $5.31."
    } else if(select === "mediumg" && name) {
      price = name + ", your total bill is $5.37."
    }else if(!name){
      price = "Enter Your Name!"
    }
document.getElementById('button').innerHTML =alert(price);
}
