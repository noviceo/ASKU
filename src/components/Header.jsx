import logo from '../img/logo.png';

function Header() {
    return(
        <div className='header'>
            <img src={logo} alt='logo' className='logo'></img>
            <div className='myPageButton'></div>
            <input className='searchbar' placeholder='입실렌티'/>
            <div className='searchbutton'></div>
            <div className='banner'></div>
        </div>
    );
}
export default Header;