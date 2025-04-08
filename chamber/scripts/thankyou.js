document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fields = ["fname", "lname", "email", "phone", "business", "timestamp"];
  
    fields.forEach(field => {
      const el = document.querySelector(`.confirm-${field}`);
      if (el) el.textContent = urlParams.get(field) || "N/A";
    });
  });
  