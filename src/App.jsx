import { useState } from 'react'
import KeyCard from './components/key-card.jsx'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1 className='text-green-600'>IMAGE KEY</h1>
			<KeyCard />
		</>
	)
}

export default App
