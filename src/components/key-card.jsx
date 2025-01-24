import React, { Component } from 'react'
import data from './../assets/data'
import Tooltip from './tooltip.jsx'

class KeyCard extends Component {
	state = data

	render() {
		return (
			<>
				<div className='masonry lg:masonry-sm 2xl:masonry-md'>
					{this.state.map((item) => {
						const sortedKeys = item.keys.sort((a, b) => a.name.localeCompare(b.name))
						return (
							<div className={`border-solid border-2 m-2 rounded-md ${item.style.border}`}>
								<h2 className={`font-bold p-1 ${item.style.bgcolor}`}>{item.title}</h2>
								{sortedKeys.map((key, index) => {
									const isLast = index === sortedKeys.length - 1

									return key.description ? (
										<div
											className={`px-1 border-solid ${isLast ? '' : 'border-b-2'} ${item.style.border} flex flex-row`}>
											<div className='basis-1/3'>{key.name}</div>
											<div className='basis-2/3'>{key.description}</div>
										</div>
									) : (
										<div
											className={`px-1 border-solid ${isLast ? '' : 'border-b-2'} ${item.style.border} flex flex-row`}>
											<div>{key.name}</div>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
			</>
		)
	}
}

export default KeyCard
