import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
//import Page from'./Page';
import Home from './Home';
import Contact from './Contact'
import Shop from './Shop'
import Nopage from './Nopage';
function Main() {
return (
<div class="main-route">
<Router>
<div className='main-route'>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/shop">Shop</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
</div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="Contact" element={<Contact/>}/>
<Route path="Shop" element={<Shop/>}/>
<Route path="*" element={<Nopage/>}/>
</Routes>
</Router>
</div>
);
}
export default Main