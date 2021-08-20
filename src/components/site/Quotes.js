const Quotes = ( {quotes} ) => {    
    let quote = quotes[Math.floor(Math.random() * quotes.length)] 

    return (
        <div className="quote">
            <b>"{quote.quote}" -{quote.creator}</b>
        </div>
    )
}

export default Quotes;
