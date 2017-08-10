// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

var box = document.getElementById("display");

function toScreen(x){
  box.value += x;
  if(x==="c"){
    box.value = "";
  }
}

function equal(x){
  x=box.value;
  x=eval(x);
  box.value = x;
}

function power(x){
  x=box.value;
  x=eval(x*x);
  box.value = x;
}

function backspace(){
  var num = box.value;
  var len = num.length - 1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}
