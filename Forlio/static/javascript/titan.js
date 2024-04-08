

window.addEventListener('scroll', function (){
    var chatIcon = document.querySelector('.chat-us');
    var sideBar1 = document.querySelector('#fix')
    var sideBar2 = document.querySelector('#fix2')

    if (window.scrollY > 100) {
      chatIcon.style.bottom = '20px';
      sideBar1.style.top = '0px'
      sideBar2.style.top = '0px';

    } else {
      chatIcon.style.bottom = '';
      sideBar1.style.top = '';
      sideBar2.style.top = '';
    }

})


