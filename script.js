function Add10px(){
    var x = document.getElementById("rectangle");
    var taille = x.offsetHeight; 
    //si var taille < 300px
    if (taille < 300) {
        // ajouter 10px de hauteur à rectangle
        x.style.height = taille + 10 + 'px';
        return}
    //sinon revenir à 100px de hauteur 
    x.style.height = 100 + 'px';
}

//met en vert rectangle 
function Green() {
    var x = document.getElementById("rectangle");
    x.style.backgroundColor = "#5dff00";
}

//met en bleu rectangle 
function RestoreColor() {
    var x = document.getElementById("rectangle");
    x.style.backgroundColor = "#0000ff";
}

//cache  rectangle 
function Hide() {
    var x = document.getElementById("rectangle");
    x.style.display = "none";        
} 

//affichie rectangle 
function Reveal() {
    var x = document.getElementById("rectangle");
    x.style.display = "block";        
} 

var textNode = document.getElementById("text");

function fontSizer(){
// si la taille de la police est de 20px 
    if (textNode.style.fontSize== "20px"){
        //appliquer une taille de police de 15px 
        textNode.style.fontSize= "15px";
        //sinon appliquer une taille de police de 20px 
    } else{
        textNode.style.fontSize= "20px"
    }
}
// attendre que l'élément clique ce produise sur la div text pour ancer la foction fontSizer
textNode.addEventListener("click",fontSizer);

//quand l'utilisateur à enfoncer une touche lancer la fonction checkKey 
document.onkeydown = checkKey;
function checkKey(e) {
    var x = document.getElementById("rectangle");
    e = e || window.event;
    // si la touche enfoncée correspond au keycode 38 
    if (e.keyCode == '38') {
        //appliquer à la marge du haut une valeur de 0px
        x.style.top = 10 + 'px';  

    }
}
