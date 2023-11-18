const hamburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#menu');
    const hamLink = document.querySelector('#hamLink');
    const faSolid = document.querySelector('.fa-solid');

    hamburger.addEventListener("click", () => {
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark');
    })
    hamLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            faSolid.classList.toggle('fa-xmark');
        })
        
    })