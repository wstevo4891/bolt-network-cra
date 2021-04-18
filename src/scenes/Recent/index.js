import { connect } from 'react-redux'

import { mapDispatchToProps, mapStateToProps } from './mappings'

import Recent from './Recent'

export default connect(mapDispatchToProps, mapStateToProps)(Recent)
