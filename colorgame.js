var colors = colorarray(6);
var squares = document.querySelectorAll(".square");
var selected = pickcolor();
var picked = document.getElementById("picked");
var message = document.getElementById("message");
var body = document.getElementsByTagName("body");
var head = document.getElementById("headcontain");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
picked.textContent = selected;
var reset = document.getElementById("new");
easy.addEventListener("click",function(){
    easy.classList.add("selectedd");
    hard.classList.remove("selectedd");
    message.textContent = "";
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = "#232323";
    }
    colors = colorarray(3);
    selected = pickcolor();
    picked.textContent = selected;
    head.style.background = "steelblue";
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clicked = this.style.backgroundColor;
            if(clicked==selected){
                message.textContent = "correct!";
                reset.textContent = "Play again?";
                for(var i=0;i<colors.length;i++){
                    squares[i].style.backgroundColor = selected;
                }
                head.style.background = selected;
            }
            else{
                this.style.backgroundColor = "#232323";
                message.textContent = "try again!";
            }
        })
    }

})
hard.addEventListener("click",function(){
    easy.classList.remove("selectedd");
    hard.classList.add("selectedd");
    message.textContent = "";
    colors = colorarray(6);
    selected = pickcolor();
    picked.textContent = selected;
    head.style.background = "steelblue";
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clicked = this.style.backgroundColor;
            if(clicked==selected){
                message.textContent = "correct!";
                reset.textContent = "Play again?";
                for(var i=0;i<colors.length;i++){
                    squares[i].style.backgroundColor = selected;
                }
                head.style.background = selected;
            }
            else{
                this.style.backgroundColor = "#232323";
                message.textContent = "try again!";
            }
        })
    }

})
reset.addEventListener("click",function(){
    easy.classList.remove("selectedd");
    hard.classList.add("selectedd");
    colors = colorarray(6);
    message.textContent = "";
    selected = pickcolor();
    reset.textContent = "new color";
    picked.textContent = selected;
    head.style.background = "steelblue";
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clicked = this.style.backgroundColor;
            if(clicked==selected){
                message.textContent = "correct!";
                reset.textContent = "Play again?";
                for(var i=0;i<colors.length;i++){
                    squares[i].style.backgroundColor = selected;
                }
                head.style.background = selected;
            }
            else{
                this.style.backgroundColor = "#232323";
                message.textContent = "try again!";
            }
        })
    }
    

})
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        var clicked = this.style.backgroundColor;
        if(clicked==selected){
            message.textContent = "correct!";
            for(var i=0;i<colors.length;i++){
                squares[i].style.backgroundColor = selected;
            }
            head.style.background = selected;
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "try again!";
        }
    })
}
function colorarray(x){
    var arr=[];
    for(var i=0;i<x;i++){
        arr.push(gencolor());
    }
    return arr;
}
function gencolor(){
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickcolor(){
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}