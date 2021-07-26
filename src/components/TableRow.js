import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from "../utils/requests";
import { setUsersListAction } from '../redux/actions/usersListAction'

export default function TableRow({ user }) {
  const usersList = useSelector(state => state.usersList.users)
  const dispatch = useDispatch()

  const handleRemove = async (e) => {
    e.preventDefault()

    try {
      await deleteUser(user.id)
    } catch (err) {
      console.error('DELETE user error -> ' + err);
    }

    const filteredList = usersList.filter(currentUser => currentUser.userName !== user.userName)
    dispatch(setUsersListAction(filteredList))
  }

  return (
    <tr>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <a href="/" className="btn btn-danger btn-sm" onClick={handleRemove}>X</a>
      </td>
    </tr>
  )
}