import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AiFillCaretDown } from 'react-icons/ai'

import './App.css';
import './AppMobile.css';

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  return (
      <Router>
        <div class="header">
          <h1>joshuahonguyen.com</h1>
        </div>
        <div class="navbar">
            <ul className='nav-menu'>
                <li className='nav-item'>
                  <Link to='/' className='nav-links'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-links'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/blog' className='nav-links'>
                    Blog
                  </Link>
                </li>
                <li className='navdrop-item'>
                  <Link to='/services' className='navdrop-links'>
                    Services <AiFillCaretDown className="droparrow"/>
                  </Link>
                  <ul class='dropdown-menu'>
                    <li className='dropdown-item'>
                      <a href='https://www.trash2things.com' target="_blank" className='dropdown-links' rel="noreferrer">
                        Trash2Things (coming soon)
                      </a>
                    </li>
                  </ul>
                </li>

                <li className='navdrop-item'>
                  <Link to='/contact' className='navdrop-links'>
                    Contact <AiFillCaretDown className="droparrow"/>
                  </Link>
                  <ul class='dropdown-menu'>
                    <li className='dropdown-item'>
                      <Link to='/contact' className='dropdown-links'>
                        Social Media <AiFillCaretDown className="subdroparrow"/>
                      </Link>
                      <ul class='subdropdown-menu'>
                        <li className='subdropdown-item'>
                          <a href='https://www.instagram.com/joshuahonguyen' target="_blank" class='subdropdown-links' rel="noreferrer">
                            Instagram
                          </a>
                        </li>
                        <li className='subdropdown-item'>
                          <a href='https://www.linkedin.com/in/joshuahonguyen/' target="_blank" class='subdropdown-links' rel="noreferrer">
                            LinkedIn
                          </a>
                        </li>
                        <li className='subdropdown-item'>
                          <a href='https://www.twitter.com/joshuahonguyen' target="_blank" class='subdropdown-links' rel="noreferrer">
                            Twitter
                          </a>
                        </li>
                        <li className='subdropdown-item'>
                          <a href='https://www.tiktok.com/@joshuahonguyen' target="_blank" class='subdropdown-links' rel="noreferrer">
                            TikTok
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
            </ul>
        </div>
        
        <div class="main">
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/services" component={Services}/>
          <Route path="/contact" component={Contact}/>
        </div>
        
        <div class="footer">
        <b>2021</b>
        </div>
      </Router>
  );
}

export default App;
