var btnOpen = document.getElementById('btn-open'),
modal = document.getElementById('wrapper-modal'),
overlay = document.getElementById('overlay'),
btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', function() {
    modal.classList.add('active');
});

function closeModal() {
    modal.classList.remove('active');
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);