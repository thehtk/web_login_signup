
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  var loadingPage = document.getElementById('loadingPage');
  var mainContent = document.getElementById('mainContent');

  // Simulate loading delay for demonstration purposes
  setTimeout(function() {
    loader.style.display = 'none';
    loadingPage.style.display = 'none';
    mainContent.classList.remove('hidden');
    
    // Load index2.html
    window.location.href = 'index2.html';
  }, 2000);
});
