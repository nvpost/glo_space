import React from 'react'
import './fea.css'
import Main from '../Main/Main'
// import fal from './falcone-1.png'
import RelaxWrapper from 'react-rellax-wrapper'

const Fea = ( props ) => {
	
	

	const {name, 
		height:h, 
		diameter:d,
		mass:m,
		payload_weights:pl, 
		description} = props

	const rocketImages={
		'Falcon 1':'falcon-1',
		'Falcon 9':'falcon-9',
		'Falcon Heavy':'falcon-heavy',
		'Starship':'starship',
	}	
	
	return(
	<>
	<Main rocket={name}/> 	
	<section className="features">
		
		<h2 className="features-title">
		{name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">
							{h.meters} m / {h.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">
							{d.meters} m / {d.feet} ft
						</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">
							{m.kg} kg / {m.lbs}
						</td>
					</tr>
					{pl.map((item)=>
					<tr key={item.id}>
						<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
						<td className="table-column">{item.kg} kg / {item.lb} lb</td>
					</tr>
					)}
				</thead>
			</table>
			<RelaxWrapper speed='14'>
				<img
						src={`./img/${rocketImages[name]}.png`}
						alt="rocket"
						className="rocket"
						data-rellax-speed="14"
				/>
			</RelaxWrapper>
			<article>
					<h3 className="features-subtitle">ОПИСАНИЕ</h3>
				<p className="features-text">
					{description}
				</p>
			</article>
		</div>
	</section>
</>
)}

export default Fea