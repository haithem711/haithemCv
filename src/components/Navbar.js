import React from 'react'
import M from 'materialize-css'
import { useScrollSections} from 'react-scroll-section';
import { Link } from 'react-scroll';
//import { useTranslation } from 'react-i18next';
const Navbar = () => {
    const sections = useScrollSections();
  
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    });
    var options = {
      menuWidth: 10, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
   }
     document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
         M.Sidenav.init(elems,options);})
    /*    const hanelclick=(lang)=>{
          i18n.changeLanguage(lang);
        }*/
      //  const { i18n } = useTranslation();
       
      return (
        <>
        <div className="navbar-fixed">
          <nav >
            <div className="nav-wrapper #2962ff blue accent-4 ">
              <Link to="/" className="brand-logo " style={{marginLeft:'10px'}} >Haithem Hajri  </Link>
   


  
              <Link to ="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
              <ul className="right hide-on-med-and-down"style={{marginRight:"15px"}}>
          <li className="nav-links" style={{marginRight:'10px'}} >    
          <img  style={{width:'25px',marginTop:'20px',marginRight:'5px',cursor:'pointer'}} src='https://www.iconfinder.com/data/icons/european-country-flags/83/france-512.png' alt='fr'/>
          <img  style={{width:'25px',cursor:'pointer'}} src ='https://cdn.countryflags.com/thumbs/united-states-of-america/flag-3d-round-250.png' alt ='eng'/>
         
           </li>
              {sections.map(({ id, onClick, selected }) => (
      <li className="nav-links">
          <a href className= { (selected) ? 'bla':'whi' }  key={id} onClick={onClick} selected={selected}>
            {id.toUpperCase()}
          </a>
          </li>
        
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

  
   
