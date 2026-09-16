import Logo from "./assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function Hero(){
    return (
        <div className="hero">
            <img src={Logo} alt="" className="hero__logo" />
            <button className="hero__cta">Explore Roster <FontAwesomeIcon icon={faArrowDown} /></button>
        </div>
    )
}