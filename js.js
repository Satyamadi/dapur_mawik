// ini fungsi untuk menampilkan modal ketika memencet tombol about us
$('.aboutUs').click(function () {
    $('.modals').css('display', 'flex')
})

// ini adalah fungsi untuk menghilangkan tampilan about us
$('.closes').click(function () {
    $('.modals').css('display', 'none')
})