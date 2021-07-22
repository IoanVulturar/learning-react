import React from "react"
import { deleteUser } from "../utils/requests";

export default function TableRow({ user, userList, removeUser }) {

  const handleRemove = async (e) => {
    e.preventDefault()

    try {
      await deleteUser(user.id)
    } catch (err) {
      console.error('DELETE user error -> ' + err);
    }

    const filteredUsers = userList.filter(currentUser => currentUser.userName !== user.userName)
    removeUser(filteredUsers)
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