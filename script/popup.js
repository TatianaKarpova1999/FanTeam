
window.onload = function() {
    if (!localStorage.getItem('visited')) {
      document.getElementById('popup').style.display = 'flex';
      
      localStorage.setItem('visited', 'true');
    }
  };
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
      closePopup();
    }
  }
  