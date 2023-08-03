function changeNavbar(selector) {
    const navbar = document.querySelector(selector);
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navbar.classList.remove('navbar-light')
            navbar.classList.remove('bg-light')
            navbar.classList.remove('p-4')
            navbar.classList.add('navbar-dark')
            navbar.classList.add('bg-dark')
            navbar.classList.add('p-2')
        } else if (window.scrollY < 56) {
            navbar.classList.remove('navbar-dark')
            navbar.classList.remove('bg-dark')
            navbar.classList.remove('p-2')
            navbar.classList.add('navbar-light')
            navbar.classList.add('bg-light')
            navbar.classList.add('p-4')
        }
    })
}

export default changeNavbar;