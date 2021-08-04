import React from "react"
import { deleteUser } from "../utils/requests";

export default function TableRow({ user, usersList, setUsersList }) {

  const handleRemove = async (e) => {
    e.preventDefault()

    try {
      await deleteUser(user.id)
    } catch (err) {
      console.error('DELETE user error -> ' + err);
    }

    const filteredList = usersList.filter(currentUser => currentUser.userName !== user.userName)
    setUsersList(filteredList)
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