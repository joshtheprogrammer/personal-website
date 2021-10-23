import React from 'react'

import './components.css'

function foot({quote, author}) {  
    return (
        <div class={quote.length <= 30 ? "footer" : "footer2"}>
            <b id="quotes"> {quote != "" ? author != "" ? author+': "'+quote.replace(/[^a-zA-Z .,?!;`:"'`-]/g, "")+'"' : 'Unknown: "'+quote.replace(/[^a-zA-Z .,?!;`:'"-]/g, "")+'"': ""}</b>
        </div>
    )
}

export default foot
