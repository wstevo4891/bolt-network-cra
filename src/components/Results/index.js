import { connect } from 'react-redux'

import Results from './Results'

const mapStateToProps = (state) => ({
  slideLength: state.slideLength.value
})

export default connect(mapStateToProps)(Results)
