document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("fullscreenModal");
    var modalImg = document.getElementById("fullImg");
    var closeBtn = document.querySelector(".close-btn-two");
  
    // Open the modal when an image is clicked
    document.querySelectorAll(".gallery-img").forEach(img => {
      img.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        modalImg.style.transform = "scale(0.9)";
        setTimeout(() => {
          modalImg.style.transform = "scale(1)";
        }, 10);
      };
    });
  
    // Close the modal
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    // Switch images when thumbnails are clicked
    document.querySelectorAll(".thumbnail-img").forEach(thumbnail => {
      thumbnail.onclick = function() {
        modalImg.src = this.src;
        modalImg.style.transform = "scale(0.9)";
        setTimeout(() => {
          modalImg.style.transform = "scale(1)";
        }, 10);
      };
    });
  
    // Close modal when clicking outside of the image
    modal.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });
  