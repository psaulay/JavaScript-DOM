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



var cadre = document.querySelector('#cadre');
// variables objet v
var r = document.querySelector('#rectangle'); 
var x; var y ; 
var move = 10;
// programmation des touches de direction 
document.onkeydown = function(event) { 
if (event.keyCode == 37) gauche(r.offsetLeft); 
if (event.keyCode == 39) droite(r.offsetLeft) ; 
if (event.keyCode == 38) haut(r.offsetTop); 
if (event.keyCode == 40) bas(r.offsetTop); 
} // fin fonction

// quatre fonctions de déplacement 
function gauche(left) { 

    if (left > 10){
    return  r.style.left = left - move + "px";
    }
return r.style.left = "0px";
} 

function droite(left) {

    if(left > (cadre.offsetWidth - move))
        return r.style.left = cadre.offsetWidth + "px";

    if((left + r.offsetWidth) < cadre.offsetWidth)
        return r.style.left = left + move + "px";
}

function haut(top) { 

    if (top > 10){
    return  r.style.top = top - move + "px";
    }
return r.style.top = "0px";
} 

function bas(top) {

    if(top > (cadre.offsetHeight - move))
        return r.style.top = cadre.offsetHeight + "px";

    if((top + r.offsetHeight) < cadre.offsetHeight)
        return r.style.top = top + move + "px";
} 