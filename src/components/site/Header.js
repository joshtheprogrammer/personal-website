import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    return (
        <header>
            {location.pathname === '/' && (
                <>
                <h1>joshuahonguyen.com</h1>
                <h3 className="author">by Joshua</h3>
                </>
            )}
            {location.pathname === '/store' && (
                <>
                <h1>Josh's Store</h1>
                <h3 className="author">by Joshua</h3>
                </>
            )}
            {location.pathname === '/about' && (
                <>
                <h1>About</h1>
                </>
            )}
            
        </header>
    )
}

export default Header;
