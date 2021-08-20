import { Link } from "react-router-dom"

const Links = () => {
    return (
        <nav>
            <ol className="navleft">
                <li><Link to="/" exact className="navlink">Home</Link></li>
                <li><Link to="/store" className="navlink">Store</Link></li>
                <li><Link to="/about" className="navlink">About</Link></li>
            </ol>
        </nav>
    )
}

export default Links
