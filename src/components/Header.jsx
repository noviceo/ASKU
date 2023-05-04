import logo from '../img/logo.png';
import { BsSearch } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';


function Header() {
    return(
        <div className='header'>
            <div className='logoContainer'>
                <img src={logo} alt='logo' className='logo'></img>
                <div className='myPageButton'>
                    <FaUserAlt className='myPage' />
                </div>
            </div>
            <div className='searchBarContainer'>
                <input className='searchBar' placeholder='입실렌티'/>
                <div className='searchButton'>
                    <BsSearch className='search'/>
                </div>
            </div>
            <div className='banner'></div>
        </div>
    );
}
export default Header;