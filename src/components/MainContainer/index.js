import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import MainContainer from './MainContainer'

export default connect(mapStateToProps)(MainContainer)
