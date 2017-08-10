
let box = document.getElementById("display");
let keys = document.querySelectorAll(".keys");
for(var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function () {
        var btnVal = this.value;
        if(btnVal == 'C') {
            box.value = '';
          } else if(btnVal == '=') {
            var equation = box.value;
            if(equation) {
                box.value = eval(equation);
            }
        } else {
            box.value += btnVal;
        }
    })
}
