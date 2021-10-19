import React from 'react'

import joshua from "../imgs/joshua.jpg"
import "./Pages.css"

const Home = () => {
    document.title = "Home";
    return (
        <div id="home" class="page">
            <div class="story">
                <h1 class="title">Joshua's Website</h1>
                <div class="description">
                    Coming soon
                </div>
            </div>
        </div>
    )
}

export default Home
