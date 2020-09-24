import React from 'react'
import data from '../data'
import Spin from 'react-reveal/Spin';
import RubberBand from 'react-reveal/RubberBand';
const Project = () => {
    return (
        <div style={{  width :'70%',margin:'auto'}}>
    <Spin>  <h1 style={{textAlign:'center'}}>Mes  projets </h1>  </Spin>
           <hr/>
<div className='car' style={{display:"flex",justifyContent:'space-around'}}>
{data.projects.map (item=>  ( <RubberBand> <div className="carde" key={item.id}>
  <div className="card hoverable  " >
    <div className="card-image waves-effect waves-block waves-light">
    <img style={{minHeight:'200px',maxHeight:'200px'}}  src={item.imageSrc} alt={item.title} />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{item.title}<i className="material-icons right">more_vert</i></span>
         <div>
           <a href={item.heroku}>  
           <button style={{width:'219px' }} className="btn waves-effect waves-light"  name="action">Demo Heroku
           
           </button> </a>
           < a href ={item.github}>
           <button style={{width:'219px' ,marginTop:'20px'}}  className="btn waves-effect waves-light"  name="action">Github
       
           </button>  </a>
       </div>
    </div>
    <div className="card-reveal">

      <span className="card-title grey-text text-darken-4">{item.title}<i className="material-icons right">close</i></span>
      <p>{item.service}</p>
    </div>
  </div>
</div></RubberBand>
))}
</div>
          </div> 
          
      
    )
}

export default Project
