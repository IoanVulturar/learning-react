import TableRow from "./TableRow"
import TableHeader from "./TableHeader"

export default function UserTable({ userList, showUsers, removeUser }) {
  const rows = showUsers.map(user =>
    <TableRow key={user.id} user={user} userList={userList} removeUser={removeUser} />
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