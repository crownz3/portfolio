import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/feautured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';
import mobileNavBar from './utils/mobile-nav';
import darkMode from './utils/dark-mode'

mobileNavBar();
darkMode()


document.addEventListener("DOMContentLoaded", function () {
    const arrowBtn = document.querySelector('.body__arrow')
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        if (scrollPercentage > 20) {
            arrowBtn.style.display = "block";
        } else {
            arrowBtn.style.display = "none";
        }

        arrowBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    })
});

