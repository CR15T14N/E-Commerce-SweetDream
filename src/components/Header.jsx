import NavBar from "./NavBar";
import "./Header.css";
import SearchBar from "./SearchBar";

function Header() {
    return (
    <>
        <header className="header">
            <div className="nav-top">
                <h1>Sweet Dreams</h1>
                <SearchBar className="searchBar" />


                <div className="btn-content">
                
                <a className="in" href="" >Sign In</a>
                <a className="up" href="" >Sign Up</a>
                {/* <CartSummary /> */}
                </div>
            
            </div>

            <div>
                <NavBar />
            </div>
            </header>
    </>    
);
};

export default Header;