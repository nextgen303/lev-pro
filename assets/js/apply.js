document
  .getElementById("openFormButton")
  .addEventListener("click", function () {
    document.getElementById("applyPopupForm").style.display = "flex";
  });

document
  .getElementById("closeFormButton")
  .addEventListener("click", function () {
    document.getElementById("applyPopupForm").style.display = "none";
  });

document.addEventListener("click", function (event) {
  if (event.target === document.getElementById("applyPopupForm")) {
    document.getElementById("applyPopupForm").style.display = "none";
  }
});

document
  .getElementById("uploadBoxNew")
  .addEventListener("dragover", function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.add("drag_over_new");
  });

document
  .getElementById("uploadBoxNew")
  .addEventListener("dragleave", function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.remove("drag_over_new");
  });

document
  .getElementById("uploadBoxNew")
  .addEventListener("drop", function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.remove("drag_over_new");

    const files = event.dataTransfer.files;
    handleFilesNew(files);
  });

document.getElementById("uploadLinkNew").addEventListener("click", function () {
  document.getElementById("fileInputNew").click();
});

document.getElementById("fileInputNew").addEventListener("change", function () {
  const files = this.files;
  handleFilesNew(files);
});

function handleFilesNew(files) {
  console.log("Files uploaded:", files);
}



document.getElementById('applyBtn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('applyPopupForm').style.display = 'flex';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
  document.getElementById('applyPopupForm').style.display = 'none';
});

// Optional: Close the popup when clicking outside of the form
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('applyPopupForm')) {
    document.getElementById('applyPopupForm').style.display = 'none';
  }
});
