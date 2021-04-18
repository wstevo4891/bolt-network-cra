import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from './mappings'

import Banner from './Banner'

export default connect(mapDispatchToProps, mapStateToProps)(Banner)
