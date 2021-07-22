import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

export default function ProfileView({ userDetails }) {

  return (
    <div>
      <Navbar username={userDetails.userName} />
      <Profile userDetails={userDetails} />
    </div>
  )
}