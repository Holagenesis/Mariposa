
let text = document.getElementById('text');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + 'px';
    text.style.marginBottom = value * 1.5 + 'px';
});

