document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const prewrittenPassword = 'PriyoLovesPriya';
    const password = document.getElementById('password').value;
    if (password === prewrittenPassword) {
      window.location.href = 'gallery.html';
    } else {
      alert('Incorrect password!');
    }
  });
  