const Footer = ({length})=>{
    
    return  (
        <footer>
            <p>{length} Grocery {length === 1? "item" : "items"}</p>
        </footer>
    )
}

export default Footer;