const fulImgBox = document.getElementById("fulimgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display="flex";
    fulImg.src = reference

}

function closeImg(){
    fulImgBox.style.display="none";

}