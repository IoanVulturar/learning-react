import React, { useEffect } from 'react'
import { getUsers } from '../utils/requests'
import UserTableContainer from './containers/UserTableContainer'

export default function Search({searchTerm, setSearchTerm, setUsersList}) {

    const initTableList = async () => {
        try {
            const usersListDB = await getUsers()
            setUsersList(usersListDB)
        } catch (err) {
            console.error('Show users error -> ' + err);
        }
    }
    
    useEffect(() => {
        initTableList()
    }, [])

    const onChangeHandler = (e) => {
        const term = e.target.value
        e.preventDefault()
        setSearchTerm(term)
    }

    return (
        <div className="container" >
            <div className="mt-4 mb-5 form-width">
                <input
                    type='text'
                    className='form-control'
                    name='search'
                    id='search'
                    placeholder='search...'
                    autoFocus
                    onChange={onChangeHandler}
                    value={searchTerm.value}
                />
            </div>
            <UserTableContainer />
        </div>
    )
}
