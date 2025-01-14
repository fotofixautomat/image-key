import React, { Component } from 'react'

class KeyCard extends Component {
	state = [
		{
			title: 'Überschrift 1',
			keys: ['Key1.1', 'Key1.2', 'Key1.3'],
		},
		{
			title: 'Überschrift 2',
			keys: ['Key2.1', 'Key2.2', 'Key2.3'],
		},
		{
			title: 'Überschrift 3',
			keys: ['Key3.1', 'Key3.2', 'Key3.3'],
		},
	]

	render() {
		return (
			<div className='bg-green-200'>
				<h2>{this.props.title}</h2>
				{this.state.map((item) => (
					<div>
						<h2>{item.title}</h2>
						{item.keys.map((key) => (
							<div>{key}</div>
						))}
					</div>
				))}
			</div>
		)
	}
}

export default KeyCard
