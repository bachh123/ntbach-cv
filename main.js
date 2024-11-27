
var modal = document.getElementById("myModal");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function showImageModel(url, caption)
{
    modal.style.display = "block";
    modalImg.src = url;
    captionText.innerHTML = caption;

    var width = modalImg.offsetHeight * 0.45;
    modalImg.style.width = width;     
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function() {
    modal.style.display = "none";
}