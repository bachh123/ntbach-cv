
var modal = document.getElementById("myModal");

var modalImgPor = document.getElementById("img01");
var modalImgLan = document.getElementById("img02");
var captionText = document.getElementById("caption");
function showImageModelPortrait(url, caption)
{
    modal.style.display = "block";

    modalImgPor.style.display = "block";
    modalImgLan.style.display = "none";
    
    modalImgPor.src = url;
    captionText.innerHTML = caption;

    modalImgPor.style.width = modalImgPor.offsetHeight * 0.45;
}
function showImageModelLandscape(url, caption)
{
    modal.style.display = "block";

    modalImgPor.style.display = "none";
    modalImgLan.style.display = "block";
    
    modalImgLan.src = url;
    captionText.innerHTML = caption;

    modalImgLan.style.height = modalImgLan.offsetWidth * 0.24;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function() {
    modal.style.display = "none";
}