const menu = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');
const wrapper = document.querySelector('.wrapper');


menu.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    wrapper.classList.toggle('wrapper-style');
    document.querySelector('body').style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    wrapper.classList.toggle('wrapper-style');
    document.querySelector('body').style.overflow = 'unset';
   
})

wrapper.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    wrapper.classList.toggle('wrapper-style');
    document.querySelector('body').style.overflow = 'unset';
   
})


const size = window.matchMedia("(min-width: 501px)");
    size.addEventListener('change', e => {
        if (e.matches) {
            sidebar.classList.remove('sidebar-active');
            wrapper.classList.remove('wrapper-style');
        }
    }) 