document.addEventListener('DOMContentLoaded', function () {
    // Set timestamp hidden field
    const timestampField = document.querySelector('#timestamp');
    timestampField.value = new Date().toLocaleString();
  
    // Handle modal display for membership level benefits
    const npModal = document.querySelector('#npModal');
    const bronzeModal = document.querySelector('#bronzeModal');
    const silverModal = document.querySelector('#silverModal');
    const goldModal = document.querySelector('#goldModal');
    
    // Open modals when clicking links
    document.querySelector('#npLink').addEventListener('click', function (e) {
      e.preventDefault();
      npModal.showModal();
    });
  
    document.querySelector('#bronzeLink').addEventListener('click', function (e) {
      e.preventDefault();
      bronzeModal.showModal();
    });
  
    document.querySelector('#silverLink').addEventListener('click', function (e) {
      e.preventDefault();
      silverModal.showModal();
    });
  
    document.querySelector('#goldLink').addEventListener('click', function (e) {
      e.preventDefault();
      goldModal.showModal();
    });
  
    // Close modals when clicking close button
    document.querySelectorAll('.modal-close').forEach(button => {
      button.addEventListener('click', function () {
        this.closest('dialog').close();
      });
    });
  });
  