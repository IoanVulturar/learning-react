import { connect } from 'react-redux'
import Welcome from '../../components/Welcome'

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(Welcome)
