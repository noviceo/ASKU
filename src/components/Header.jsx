import logo from '../img/logo.png';

function Header() {
    return(
        <div className='header'>
            <div className='logoContainer'>
                <img src={logo} alt='logo' className='logo'></img>
                <div className='myPageButton'></div>
            </div>
            <div className='searchBarContainer'>
                <input className='searchBar' placeholder='입실렌티'/>
                <div className='searchButton'></div>
            </div>
            <div className='banner'></div>
        </div>
    );
}
export default Header;