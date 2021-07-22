import Navbar from '../components/Navbar'
import Search from '../components/Search'

export default function SearchView({ userDetails }) {

  return (
    <div>
      <Navbar username={userDetails.userName} />
      <Search />
    </div>
  )
}