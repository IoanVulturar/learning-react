import React, { useEffect, useState } from 'react'
import { getUsers } from '../utils/requests'
import UserTable from "./UserTable"

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const [userList, setUserList] = useState([])

    const initTable = async () => {
        try {
            const users = await getUsers()
            setUserList(users)
        } catch (err) {
            console.error('Show users error -> ' + err);
        }
    }

    useEffect(() => {
        initTable()
    }, [])

    const getFilteredList = () => {
        return userList.filter(user =>
            user.userName.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }

    const onChangeHandler = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
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
            <UserTable userList={userList} showUsers={getFilteredList()} removeUser={setUserList} />
        </div>
    )
}
