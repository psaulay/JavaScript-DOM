var textNode = document.getElementById("text");

function fontSizer(){

    if (textNode.style.fontSize== "20px"){
       textNode.style.fontSize= "15px";
    } else{
        textNode.style.fontSize= "20px"
    }
}

textNode.addEventListener("click",fontSizer);