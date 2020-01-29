// Get the modal
var modal = document.getElementById("modal");
var span = document.getElementById("close");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");

function displayModal(imgElement){
  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}