document.getElementById("vehicle-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your vehicle registration application has been submitted. We will contact you shortly!");
    this.reset();
  });
  