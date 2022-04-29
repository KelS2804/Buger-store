window.addEventListener("scroll", function(){
    var headerMenu = this.document.querySelector(".header-menu")
    headerMenu.classList.toggle("sticky",this.window.scrollY > 0)
})

$('.book-now').on('click', function() {
    if($('#name').val() == '' || $('#email').val() =='' || $('#mobile').val() =='' || $('#date') == '' || $('#time').val() == '' || $('#guest').val() =='') {
        alert('Nhập đầy đủ các trường')
    } else {
        alert('Bạn đã đặt thành công')
    }
})

$('.open-book-modal').on('click', function() {
    $('.modal-book').show()
})

$('.close-modal-book').on('click', function() {
    $('.modal-book').hide()
})