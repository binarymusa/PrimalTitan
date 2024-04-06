

window.addEventListener('scroll', function (){
    var chatIcon = document.querySelector('.chat-us');

    if (window.scrollY > 100) {
      chatIcon.style.bottom = '20px';
    } else {
      chatIcon.style.bottom = '';
    }
})

