import React from 'react'
import data from '../data'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
const About = () => {
    return (
        <div style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg ')" }} >
            <Fade >  <h1 style={{ textAlign: 'center', color: 'white' }}>Haithem Hajri</h1></Fade>
            <Rotate bottom left>      <img className="haithem" style={{ height: '220px', width: '220px', borderRadius: '110px', marginLeft: 'auto', marginRight: 'auto', display: ' block' }} src="https://res.cloudinary.com/dw9j1appv/image/upload/v1600876058/mfbrjq8gx9sapj91hhsz.jpg"alt='haithem' /> </Rotate>
            <Zoom top> <h1 className='titles' >Développeur web Junior </h1> </Zoom>
            <a style={{color:'white'}} href="/files/Haithem_Hajri.pdf" target="_blank" download>
            <button style={{marginLeft:'auto',marginRight:'auto',display:'block'}} class="btn waves-effect waves-light" type="submit" name="action">
           telecharger mon cv 
    <i class="material-icons right">send</i>
  </button></a>
           
            <h2 style={{ textAlign: 'center' }}><a style={{ color: 'white', fontWeight: 'bold' }} href="tel: +216 92939457"><img style={{ width: '35px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-phone.svg/1024px-Circle-icons-phone.svg.png' alt='phone' /> 92939457 </a> </h2>
            <div class="hover-effect1">
                <ul>  <Zoom top>
                    {data.social.map(item => (< li key={item.id}><a href={item.url} title={item.name}><i class={`${item.icon}`}></i></a></li>))}

                    <li><a href={`mailto:${data.contactEmail}`} title="Google Plus"><i class="fas fa-at"></i></a></li>
                </Zoom>
                </ul>
            </div>
        </div>
    )
}

export default About
