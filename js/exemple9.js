function changeColor() {

    let htmlTag = document.childNodes[1];

    console.log(document.childNodes);
    console.log(htmlTag);

    let bodyTag = htmlTag.lastChild;

    console.log('--------------------');
    console.log(bodyTag.childNodes);
    console.log(bodyTag);
    console.log('--------------------');
    console.log(bodyTag.childNodes[1]);

    let pTag = bodyTag.childNodes[1];

    pTag.style.color = "#0000FF";

    


    inputTag = document.getElementById('bouton');

    console.log(inputTag);
    
    // gérer les évènements clics et focus
    
    inputTag.addEventListener('click', changeColor2(), false);
    inputTag.addEventListener('focus', message(), false);
    


}

function changeColor2() {

    document.getElementById('affichage').style.color = "#FF0000";
}

function message() {
    console.log("L'utilisateur arrive sur le bouton");
}


