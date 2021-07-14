import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Welcome() {
	const location = useLocation()
	const username = location.state.username

	return (
		<div>
			<div className='container'>
				<div className='card mt-5 form-width'>
					<div className='card-body text-center'>
						<h2>
							Welcome, <span>{username}!</span>
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
