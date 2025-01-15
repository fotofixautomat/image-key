import { useState } from 'react'
import KeyCard from './components/key-card.jsx'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className='m-4 border-l-4 border-cyan-500 p-2'>
				<h1>
					<span className='text-gray-500 font-black text-4xl'>IMAGE</span>
					<span className='text-cyan-500 text-4xl font-light pl-1'>KEY</span>
				</h1>
			</div>

			<KeyCard />
		</>
	)
}

export default App
