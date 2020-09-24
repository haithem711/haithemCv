import React from 'react'
import M from 'materialize-css'
import { useScrollSections} from 'react-scroll-section';
import { Link } from 'react-scroll';
const Navbar = () => {
    const sections = useScrollSections();

    var options = {
      menuWidth: 10, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
   }
     document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
         M.Sidenav.init(elems,options);})
  
      return (
        <>
        <div className="navbar-fixed">
          <nav >
            <div className="nav-wrapper #2962ff blue accent-4 ">
              <Link to="/" className="brand-logo " style={{marginLeft:'10px'}} >Haithem Hajri  </Link>
              <Link to ="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
              <ul className="right hide-on-med-and-down"style={{marginRight:"15px"}}>
              {sections.map(({ id, onClick, selected }) => (
      <li className="nav-links">
          <Link className= { (selected) ? 'bla':'whi' }  key={id} onClick={onClick} selected={selected}>
            {id.toUpperCase()}
          </Link></li>
        ))}
  
               
              </ul>
            </div>
            </nav>
            </div>
          <ul className="sidenav" id="slide-out">
          {sections.map(({ id, onClick, selected }) => (
      <li className="nav-links">
          <Link className= { (selected) ? 'bla':'whi' }  key={id} onClick={onClick} selected={selected}>
            {id.toUpperCase()}
          </Link></li>
        ))}
          </ul>
         </>
          
         
       
      
         
  
   
         
      )
  }

export default Navbar
