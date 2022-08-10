const Header = ({ isDayOn, handleClick }) => {

    return(
        <div className="header">
            <div className="header__logo"></div>
            <div className="header__theme-switcher" onClick={handleClick}></div>
        </div>
    )
}
export default Header;
