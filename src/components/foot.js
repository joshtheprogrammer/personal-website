import React from 'react'

import './components.css'

function foot({quote, author}) {  
    return (
        <div class="footer">
            <b id="quotes"> {quote != "" ? author != "" ? author+': "'+quote.replace(/[^a-zA-Z .,?!;"'-]/g, "")+'"' : 'Unknown: "'+quote.replace(/[^a-zA-Z .,?!;'"-]/g, "")+'"': ""}</b>
        </div>
    )
}

export default foot
