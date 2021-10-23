import React, { useState, useEffect } from 'react';

import "./Pages.css"

const About = () => {
    document.title = "About";

    return (
        <div id="about" class="page">
            <div class="story">
                <h1 class="title">About</h1>
                <div class="description">
                    <div class="chunk">
                        <h2 >Achievements:</h2>
                        <ul>
                            <li>Self-Taught programmer from a young age</li>
                            <li>Started disciplining myself to exercise at a young age</li>
                            <li>Built this website from scratch</li>
                        </ul>
                    </div>

                    <div class="chunk">
                    <h2>Q/A:</h2>
                    <ol>
                        <li>
                            <h3>Any other questions?</h3>
                        </li>
                        <p>Not yet. Ask me any questions, and your question may be featured on the website!</p>
                    </ol>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;