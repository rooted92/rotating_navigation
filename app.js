const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const container = document.querySelector('.container');

// add show nav class to container
openBtn.addEventListener('click', () => {
    container.classList.add('show-nav');
    console.log('open');
});


// remove show nav class to container
closeBtn.addEventListener('click', () => {
    container.classList.remove('show-nav')
    console.log('close');
});

