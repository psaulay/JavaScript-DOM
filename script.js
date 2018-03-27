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
