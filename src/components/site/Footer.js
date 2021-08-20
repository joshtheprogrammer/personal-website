import Quotes from "./Quotes"

const Footer = ( {quotes} ) => {
    return (
        <footer>
            <Quotes quotes={quotes} />
            <b>Copyright &copy; 2021</b>
        </footer>
    )
}

export default Footer;
