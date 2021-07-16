import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isUserValid } from '../utils/authentication'

export default function LoginForm() {
	const [error, setError] = useState('')
	const history = useHistory()
	const [loginDetails, setLoginDetails] = useState({
		username: '',
		password: '',
	})

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const isValid = await isUserValid(loginDetails)
            if (isValid) {
                history.push({ pathname: "/dashboard", state: { loginDetails: isValid } })
            } else {
                setError('INVALID CREDENTIALS')
            }
        } catch (err) {
            setError('INVALID CREDENTIALS')
        }
    }

	return (
		<div className='container'>
			<div className='card mt-5 form-width'>
				<div className='card-body text-center'>
					<form onSubmit={onSubmit}>
						<div className='mt-1'>
							<h2 className='h3 font-weight-light'>Sign into your account</h2>
						</div>

						{error !== '' ? (
							<div className='alert-warning p-2 mt-3'>{error}</div>
						) : (
							''
						)}

						<div className=''>
							<label htmlFor='username' className='sr-only'>
								Username:{' '}
							</label>
							<br />
							<input
								type='text'
								className='form-control'
								name='username'
								id='username'
								placeholder='username'
								required
								autoFocus
								onChange={onChangeHandler}
								value={loginDetails.username}
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
								value={loginDetails.password}
							/>
						</div>

						<div className='checkbox mt-3'>
							<label>
								<input type='checkbox' value='remember-me' />
								<span className='ml-1 h6 font-weight-normal'>Remember Me?</span>
							</label>
						</div>

						<div className='mt-2'>
							<input
								type='submit'
								value='Sign In'
								className='btn btn-lg btn-primary btn-block'
							/>
						</div>

						<div className='mt-3'>
							Don&apos;t have an account?
							<Link to='/register' className='ml-2'>
								Register here
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
