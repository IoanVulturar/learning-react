import React, { useEffect, useState } from 'react'
import { getUsers } from '../utils/requests'
import UserTable from "./UserTable"
import { useDispatch } from 'react-redux'
import { setUsersListAction } from '../redux/actions/usersListAction'
import { searchAction } from '../redux/actions/searchAction'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()

    const initTableList = async () => {
        try {
            const usersList = await getUsers()
            dispatch(setUsersListAction(usersList))
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
        dispatch(searchAction(term))
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
                    value={searchTerm}
                />
            </div>
            <UserTable />
        </div>
    )
}
