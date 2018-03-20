 // LISTENER NA PRZYCISKI FUNKCJI
 document.querySelector('.notes-controllers').addEventListener('click', function(e){
    console.log(e.target.className);
    switch(e.target.className){
        case "notes-controllers-controller notes-controllers-controller-bold":
        textBold();
        break;
        case "notes-controllers-controller notes-controllers-controller-italic":
        italic();
        break;
        case "notes-controllers-controller notes-controllers-controller-hilite":
        hiliteColor();
        break;
        case "notes-controllers-controller notes-controllers-controller-center":
        centring();
        break;
        case "notes-controllers-controller notes-controllers-controller-underline":
        underline();
        break;
        case "notes-controllers-controller notes-controllers-controller-font-change":
        fontName();
        break;
        case "notes-controllers-controller notes-controllers-controller-font-name":
        fontSize();
        break;
        // default:
        // break;
    }
});
// document.onmouseup = document.onkeyup = document.onselectionchange = function(){
//     document.getElementById(sel.).value = getSelectionText()

// DEFINIOWANIE FUNKCJI

function textBold(){
console.log("DZIEJE");
document.execCommand('bold',false,'');
}
function fontSize(fontSize){
document.execCommand('fontSize',false,fontSize);
}
function fontName(fontName){
document.execCommand('fontName',false,fontName);
}
function italic(){
document.execCommand('italic',false,'');
}
function hiliteColor(){
document.execCommand('hiliteColor',false,'yellow');
}
function centring(){
document.execCommand('justifyCenter',false,'');
}
function underline(){
document.execCommand('underline',false,'');
}

// POBIERANIE CALEGO PLIKU

function download(){
let wholeText = document.querySelector(".notes-writting-place").textContent;

//nie chce linka, tylko odnosnik po kliknieciu diva, wiec tworze niewidoczny element
let hiddenElement = document.createElement('a');
hiddenElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(wholeText));
hiddenElement.setAttribute('download', "text");
hiddenElement.style.display = 'none';
document.body.appendChild(hiddenElement);

hiddenElement.click();  

}
document.querySelector('.notes-download-bar-download').addEventListener('click',function(){
download();
});

// ZAPISYWANIE PLIKU USERA DO LOCALSTORAGE

function saveStorage(){
let wholeText = document.querySelector(".notes-writting-place").textContent;

localStorage.setItem("saved-text",wholeText);
// box wyskakujacy i informujacy o zapisaniu kopii dokumentu
document.querySelector(".saved").classList.add("saved-big");
setTimeout(function(){
    document.querySelector(".saved").classList.remove("saved-big");
}, 1100);
}
document.querySelector('.notes-download-bar-save').addEventListener("click",function(){
saveStorage();
})

// LADOWANIE NA POCZATKU ZAPISANEJ WERSJI LOCALSTORAGE

function loadStorage(){
let savedText = localStorage.getItem("saved-text");
document.querySelector(".notes-writting-place").innerHTML = savedText;
}
document.onload = loadStorage();

// USUWANIE STORAGE

function removeStorage(){
if(confirm("Czy napewno chcesz usunąć edytowany tekst i wszystkie jego zapisane wersje?")){
    localStorage.removeItem('saved-text');
    document.querySelector(".notes-writting-place").innerHTML= "";
    }else{
        return;
    }
}
document.querySelector('.notes-download-bar-remove').addEventListener("click",function(){
removeStorage();
})