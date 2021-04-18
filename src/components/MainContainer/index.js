import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from './mappings'

import MainContainer from './MainContainer'

export default connect(mapDispatchToProps, mapStateToProps)(MainContainer)
