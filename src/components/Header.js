import nestaway_icon from '../image/nestaway_icon.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="App_Header">
            <div className="Nav_bar">
                <div className="Nestaway_header_icon">
                    <img src={nestaway_icon} />
                </div>
                <div className="Collapsed_menu">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>

    );
  }
  
  export default Header;
  