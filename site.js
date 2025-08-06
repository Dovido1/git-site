const buger = document.querySelector('.buger');
const nav = document.querySelector('.nav-links');

buger.addEventListener('click',  ); {
    nav.classList.toggle('active');

};

document.querySelectorAll('a[href^="#"]').forEach(anchor); {
    anchor.addEventListener('click', function (e) {
        e.preventDefaut();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoview({behavior: 'smooth'});
            nav.classList.remove('active');
        }
    })
}