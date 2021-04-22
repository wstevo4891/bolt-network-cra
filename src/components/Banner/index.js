import { connect } from 'react-redux'

import { mapStateToProps } from './mappings'

import Banner from './Banner'

export default connect(mapStateToProps)(Banner)
