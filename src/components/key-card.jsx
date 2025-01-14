import React, { Component } from 'react'
import data from './../assets/data'

class KeyCard extends Component {
	state = data

	render() {
		return (
			<>
				<div className='masonry sm:masonry-sm md:masonry-md lg:masonry-lg'>
					{this.state.map((item) => (
						<div className={`border-solid border-2 m-2 rounded-md ${item.style.border}`}>
							<h2 className={`font-bold p-1 ${item.style.bgcolor}`}>{item.title}</h2>
							{item.keys.map((key, index) => {
								const isLast = index === item.keys.length - 1
								return (
									<div className={`px-1 border-solid ${isLast ? '' : 'border-b-2'} ${item.style.border}`}>
										{key.name}
									</div>
								)
							})}
						</div>
					))}
				</div>
			</>
		)
	}
}

export default KeyCard
