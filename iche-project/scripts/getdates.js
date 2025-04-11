document.addEventListener("DOMContentLoaded", function () {
    // Set current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modified date
    let lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = lastModified.toLocaleString();
});