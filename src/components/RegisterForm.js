import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from "../utils/requests";

export default function RegisterForm() {
	const [info, setInfo] = useState('')
	const [details, setDetails] = useState({
		userName: '',
		email: '',
		password: '',
		phoneNumber: '',
		role: '',
	})

	const onSubmit = async (e) => {
		e.preventDefault()

		try {
			const isRegistered = await registerUser(details)
			if (isRegistered) {
				setInfo(isRegistered)
				setDetails({
					userName: '',
					email: '',
					password: '',
					phoneNumber: '',
					role: ''
				})
				setTimeout(() => { setInfo('') }, 3000)
			} else {
				setInfo('Invalid credentials')
			}
		} catch (err) {
			setInfo('Invalid credentials')
		}
	}

	const onChangeHandler = (e) => {
		const { id, value } = e.target
		setDetails({ ...details, [id]: value })
	}

	return (
		<div className="container">
			<div className="card mt-5 form-width">
				<div className="card-body text-center">
					<form onSubmit={onSubmit} >
						<div className="mt-1">
							<h2 className="h3 font-weight-light">Create account</h2>
						</div>

						{info !== '' ? <div className='alert-primary p-2 mt-3'>{info}</div> : ''}

						<div className=''>
							<label htmlFor='userName' className='sr-only'>
								userName:{' '}
							</label>
							<br />
							<input
								type='text'
								className='form-control'
								name='userName'
								id='userName'
								placeholder='userName'
								required
								autoFocus
								onChange={onChangeHandler}
								value={details.userName}
							/>
						</div>
						<div className=''>
							<label htmlFor='email' className='sr-only'>
								Email:{' '}
							</label>
							<br />
							<input
								type='email'
								className='form-control'
								name='email'
								id='email'
								placeholder='email'
								required
								onChange={onChangeHandler}
								value={details.email}
							/>
						</div>
						<div className=''>
							<label htmlFor='phoneNumber' className='sr-only'>
								Email:{' '}
							</label>
							<br />
							<input
								type='text'
								className='form-control'
								name='phoneNumber'
								id='phoneNumber'
								placeholder='phone number'
								required
								onChange={onChangeHandler}
								value={details.phoneNumber}
							/>
						</div>
						<div className=''>
							<label htmlFor='password' className='sr-only'>
								Password:{' '}
							</label>
							<br />
							<input
								type='password'
								className='form-control'
								name='password'
								id='password'
								placeholder='password'
								required
								onChange={onChangeHandler}
								value={details.password}
							/>
						</div>

						<div className=''>
							<label htmlFor='role' className='sr-only'>
								Role:{' '}
							</label>
							<br />
							<input
								type='text'
								className='form-control'
								name='role'
								id='role'
								placeholder='role'
								required
								onChange={onChangeHandler}
								value={details.role}
							/>
						</div>

						<div className='mt-3'>
							<input
								type='submit'
								value='Register'
								className='btn btn-lg btn-primary btn-block'
							/>
						</div>
						<div className='mt-3'>
							Already have an account?
							<Link to='/' className='ml-2'>
								Login here
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
