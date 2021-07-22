import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

export default function DashboardView({ userDetails }) {

  return (
    <div>
      <Navbar username={userDetails.userName} />
      <Welcome username={userDetails.userName} />
    </div>
  )
}