import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import Suggestions from './Suggestions'

export default connect(mapStateToProps)(Suggestions)
