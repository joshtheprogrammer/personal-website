import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/site/Header'
import Store from './components/store/Store'
import About from './components/general/About'
import Footer from './components/site/Footer'
import Navbar from "./components/site/Navbar"
import Home from "./components/general/Home"

function App() {
    //const loadItems
    const [quotes, setQuotes] = useState([
      {},
    ]) 

    const [items, setItems] = useState([
      {
        id: 1,
        title: "t-shirt",
        price: "5.50",
        rating: 4,
        userRating: null,
        img: "",
        link: "www.google.com",
        stock: 24,
      },
    ])

  return (
    <Router>
    <Header />
    <Navbar />
    
    <div className="container">
      <Route path="/" exact component={Home}/>
      <Route path="/store" component={() => <Store products={items}/>}/>
      <Route path="/about" component={About}/>
    </div>
    
    <Footer quotes={quotes}/>
    </Router>
  );
}

export default App;
