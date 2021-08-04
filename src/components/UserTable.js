import TableHeader from './TableHeader'
import TableRowContainer from './containers/TableRowContainer'

export default function UserTable({ searchTerm, usersList }) {
  
  const filteredUsers = usersList.users.filter(user =>
    user.userName.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
  
  const rows = filteredUsers.map(user =>
    <TableRowContainer key={user.id} user={user} />
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