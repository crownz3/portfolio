const mobileNavBar = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    // State
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        isMobileNavOpen ? mobileNav.style.display = 'flex' : mobileNav.style.display = 'none';
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    })

    mobileLinks.forEach(link=>{
        link.addEventListener('click',()=>{
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'
        })
    })
}

export default mobileNavBar;