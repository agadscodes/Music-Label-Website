import Logo from "./assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero(){
    function handleClick(e) {
        e.preventDefault();

        const targetClass = e.currentTarget.getAttribute('href'); 
        
        const targetElement = document.querySelector(targetClass);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });
        }
    }

    return (
        <div className="hero">
            <img src={Logo} alt="" className="hero__logo" />
            <a href="#roster" className="hero__cta" onClick={handleClick}>
                Explore Roster <FontAwesomeIcon icon={faArrowDown} />
            </a>
        </div>
    )
}
