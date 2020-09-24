import React from 'react'
import RubberBand from 'react-reveal/RubberBand';
const Education = () => {
    return (
      <div style={{ height: '400px', width: '70%', margin: 'auto' }}>
        <RubberBand>
          <h1 style={{ textAlign: 'center' }}> Diplômes et Formations </h1>
        </RubberBand>
        <hr />
        <ul>
          <li>
            <h5>Licence Appliquée en Informatique de Gestion</h5>
            <p style={{ fontWeight: 'bold' }}> Institut Supérieur de Gestion Sousse 2019</p>

          </li>
          <hr />
          <li>
            <h5> Développeur web FullStack JS  </h5>

            <p style={{ fontWeight: 'bold' }}> Go My Code Sousse <big > 2020</big></p>
            <img style={{ width: '80px' }} src="https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp" alt='logo' />
          </li>
        </ul>
      </div>
    )
}

export default Education
