import React from 'react'
import data from '../data'
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';
const Skills = () => {
    return (
		<div style={{ width: '70%', margin: 'auto' }}>
			<Wobble>
				<h1 style={{ textAlign: 'center' }}>Mes Compétences</h1>
			</Wobble>

			<hr />
			<div class="row center-align" id="stack">

				{data.skills.map(item => (<Jump>
					< div key={item.id} id="stack-icon" class="col s6 l4">
						<img style={{ height: '50px' }} src={item.ico} alt={item.title} /><p>{item.title}</p>
					</div></Jump>))}

			</div>
			<div id="modded">
				{data.skill.map(item => (<Jump> <div key={item.id} class="progress blue lighten-4 tooltipped" data-position="top" data-tooltip="Progress was at 50% when tested">
					<span>{item.title}</span>
					<div class="determinate blue" style={{ width: `${item.ico}`, animation: "grow 2s" }}> {item.pourcentage}</div>
				</div></Jump>))}
			</div>
		</div>

      
    )
}

export default Skills
