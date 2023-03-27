function animateLink() {
    event.preventDefault();
    var target = document.getElementById(this.hash.slice(1));
    target.classList.add("fadeIn");
    setTimeout(function() {
      target.classList.remove("fadeIn");
    }, 1000);
  }