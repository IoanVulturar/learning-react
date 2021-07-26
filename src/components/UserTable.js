import { useSelector } from 'react-redux'
import TableRow from "./TableRow"
import TableHeader from "./TableHeader"

export default function UserTable() {
  const searchTerm = useSelector(state => state.searchTerm.value)
  const usersList = useSelector(state => state.usersList.users)
  
  const filteredUsers = usersList.filter(user =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const rows = filteredUsers.map(user =>
    <TableRow key={user.id} user={user} />
  )
  
  return (
    <div>
      <table className="table table-striped">
        <TableHeader />
        <tbody id="user-list">
          {rows}
        </tbody>
      </table>
    </div>
  )
}