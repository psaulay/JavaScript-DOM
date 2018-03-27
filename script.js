function Add10px(){
    var x = document.getElementById("rectangle");
    var taille = x.offsetHeight; 
    //si var taille < 300px
    if (taille < 300) {
        // ajouter 10px 
        x.style.height = taille + 10 + 'px';
        return}
    //sinon revenir à 100px
    x.style.height = 100 + 'px';
}

function Green() {
    var x = document.getElementById("rectangle");
    x.style.backgroundColor = "#5dff00";
}

function RestoreColor() {
    var x = document.getElementById("rectangle");
    x.style.backgroundColor = "#0000ff";
}

function Hide() {
    var x = document.getElementById("rectangle");

    x.style.display = "none";        
} 

function Reveal() {
    var x = document.getElementById("rectangle");

    x.style.display = "block";        
} 

<<<<<<< HEAD
var textNode = document.getElementById("text");

function fontSizer(){

    if (textNode.style.fontSize== "20px"){
       textNode.style.fontSize= "15px";
    } else{
        textNode.style.fontSize= "20px"
    }
}

textNode.addEventListener("click",fontSizer);
=======
document.onkeydown = checkKey;

function checkKey(e) {
    var x = document.getElementById("rectangle");
    var taille = x.offsetHeight; 
    e = e || window.event;

    if (e.keyCode == '38') {
        
        x.style.height = taille + 100 + 'px';
        sleep(1000);
        x.style.height = taille - 100 + 'px';
        
        return}
}


