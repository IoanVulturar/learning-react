import { connect } from 'react-redux'
import Navbar from '../Navbar'

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)
