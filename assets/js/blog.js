// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".blog_create_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the close button
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks on the close button, close the modal
if (closeBtn) {
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Step navigation
var currentStep = 0;
showStep(currentStep);

function showStep(n) {
  var steps = document.getElementsByClassName("step");
  steps[n].classList.add("active");

  // Update the Previous button visibility
  if (n == 0) {
    document.getElementById("prevBtn").disabled = true;
  } else {
    document.getElementById("prevBtn").disabled = false;
  }

  // Update the Next button text
  if (n == steps.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  updateStepIndicators(n);
}

function nextPrev(n) {
  var steps = document.getElementsByClassName("step");

  // Check if the current step is filled before proceeding
  if (!validateStep(currentStep)) {
    return;
  }

  steps[currentStep].classList.remove("active");

  currentStep = currentStep + n;

  if (currentStep >= steps.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showStep(currentStep);
}

function validateStep(stepIndex) {
  var step = document.getElementsByClassName("step")[stepIndex];
  var inputs = step.querySelectorAll("input, textarea");
  var valid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      valid = false;
    } else {
      input.classList.remove("error");
    }
  });

  if (!valid) {
    var errorMessages = step.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => (msg.style.display = "block"));
  }

  return valid;
}

// Word count functionality for text areas
document.addEventListener("DOMContentLoaded", function () {
  const textareas = {
    title: document.querySelector("#blogTitle"),
    article: document.querySelector("#blogArticle"),
  };

  const maxWords = {
    title: 100,
    article: 1000,
  };

  Object.keys(textareas).forEach((key) => {
    const textarea = textareas[key];
    const wordCountElement = textarea.parentElement.querySelector(
      ".text_number_update"
    );
    const warningMessage =
      textarea.parentElement.querySelector(".warning-message");

    textarea.addEventListener("input", function (event) {
      const max = maxWords[key];
      const words = event.target.value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      const wordCount = words.length;

      if (wordCount > max) {
        const trimmedWords = words.slice(0, max);
        event.target.value = trimmedWords.join(" ");
        wordCountElement.textContent = max;
        warningMessage.style.display = "block";
      } else {
        wordCountElement.textContent = wordCount;
        warningMessage.style.display = "none";
      }
    });
  });
});

function updateStepIndicators(n) {
  var steps = document.getElementsByClassName("step");
  for (var i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active");
  }
  steps[n].classList.add("active");
}



document.addEventListener("DOMContentLoaded", function () {
    const dropZone = document.getElementById("dropZone");
    const fileInput = document.getElementById("uploadPictures");
    const uploadLink = document.getElementById("uploadLink");
    const plusIcons = document.querySelectorAll(".plus-icon");
    const imageFields = document.querySelectorAll(".image-field");
  
    // Handle file drop
    dropZone.addEventListener("dragover", function (event) {
      event.preventDefault();
      dropZone.classList.add("drag-over");
    });
  
    dropZone.addEventListener("dragleave", function () {
      dropZone.classList.remove("drag-over");
    });
  
    dropZone.addEventListener("drop", function (event) {
      event.preventDefault();
      dropZone.classList.remove("drag-over");
      handleFiles(event.dataTransfer.files);
    });
  
    // Handle file input click
    uploadLink.addEventListener("click", function (event) {
      event.preventDefault();
      fileInput.click();
    });
  
    fileInput.addEventListener("change", function () {
      handleFiles(this.files);
    });
  
    // Handle plus icon click
    plusIcons.forEach(icon => {
      icon.addEventListener("click", function () {
        const inputId = this.getAttribute("data-input-id");
        document.getElementById(inputId).click();
      });
    });
  
    // Handle files
    function handleFiles(files) {
      [...files].forEach((file, index) => {
        if (index < imageFields.length) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const preview = imageFields[index].querySelector(".image-preview");
            preview.style.backgroundImage = `url(${e.target.result})`;
            imageFields[index].querySelector(".plus-icon").style.display = "none";
            imageFields[index].querySelector(".remove-icon").style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      });
    }
  
    // Handle individual file input changes
    document.querySelectorAll(".upload_img_plus").forEach((input, index) => {
      input.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const preview = document.getElementById(`preview${index + 1}`);
            preview.style.backgroundImage = `url(${e.target.result})`;
            document.getElementById(`imageField${index + 1}`).querySelector(".plus-icon").style.display = "none";
            document.getElementById(`imageField${index + 1}`).querySelector(".remove-icon").style.display = "block";
          };
          reader.readAsDataURL(file);
        }
      });
    });
  
    // Handle remove icon click
    document.querySelectorAll(".remove-icon").forEach(icon => {
      icon.addEventListener("click", function () {
        const inputId = this.getAttribute("data-input-id");
        const fileInput = document.getElementById(inputId);
        fileInput.value = ""; // Clear the file input
        const preview = this.closest(".image-field").querySelector(".image-preview");
        preview.style.backgroundImage = ""; // Clear the preview
        this.style.display = "none"; // Hide the remove icon
        this.closest(".image-field").querySelector(".plus-icon").style.display = "block"; // Show the plus icon
      });
    });
  });
  