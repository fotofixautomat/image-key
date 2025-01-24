import React, { useState } from 'react'

const Tooltip = ({ text, children }) => {
	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<div
			className='group relative w-max'
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}>
			{children}
			{showTooltip && (
				<div className='bg-gray-800 text-white p-2 rounded-md pointer-events-none z-50 absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100'>
					{text}
				</div>
			)}
		</div>
	)
}

export default Tooltip
