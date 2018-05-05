import React,{Component} from 'react';
import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props){
       super();
       
      }

      

   render(){
     return(
      <header>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a className="navbar-brand" href="#">Restaurant-App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li class="nav-item active">
      <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
       </li>
      
    
    </ul>

  </div>
  
      <Link class="btn btn-outline-light my-2 my-sm-0" to="/signin">Add Restaurant</Link>
</nav>




  
      
    </header>
     )
   }
  }

export default Header;
