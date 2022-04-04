

var buyBtns = document.querySelectorAll('.js-buy-ticket');

for(var buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function() {
        document.querySelector('.js-modal').classList.add('modal-open');
    });
}





document.querySelector('.js-modal-close').addEventListener('click', function() {
    document.querySelector('.js-modal').classList.remove('modal-open');
});

document.querySelector('.js-modal').addEventListener('click', function() {
    document.querySelector('.js-modal').classList.remove('modal-open');
});


document.querySelector('.js-modal-container').addEventListener('click', function(event) {
    event.stopPropagation();
});



